<template>
    <div>
        <h1 class="page-title"> 证书管理
            <small>／Certificate</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN BORDERED TABLE PORTLET-->
                <div class="portlet light portlet-fit bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <div class="clearfix">
                                <a href="javascript:;" @click="create" class="btn btn-sm green"> 创 建
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a href="javascript:;" class="btn btn-sm btn-info" @click="selectAll"> 全 选
                                    <i class="fa fa-check-square-o"></i>
                                </a>
                                <a href="javascript:;" @click="removeAll" class="btn btn-sm red"> 删 除
                                    <i class="fa fa-trash-o"></i>
                                </a>
                                <a href="javascript:;" @click="total" class="btn btn-sm default"> 全 部
                                    <i class="fa fa-list"></i>
                                </a>
                            </div>
                        </div>
                        <div class="actions">
                            <div class="input-icon right">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" placeholder="搜索..."
                                       @keyup.enter="search($event)">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 选择</th>
                                    <th> 编号</th>
                                    <th> 持证人员</th>
                                    <th> 证书名</th>
                                    <th> 操作</th>
                                </tr>
                                </thead>
                                <tbody>

                                <template v-for="(item,index) in certificateList">
                                    <tr>
                                        <td class="text-center">
                                            <label class="mt-checkbox mt-checkbox-outline">
                                                <input type="checkbox" :value="item.id" name="select"
                                                       v-model="selected">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td class="text-center"> {{index+1}}</td>
                                        <td class="text-center">{{item.name}}</td>
                                        <td class="text-center">{{item.monitor}}</td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-sm blue btn-outline"
                                                    @click="edit(item)">修 改
                                            </button>
                                            <button type="button" class="btn btn-sm red btn-outline"
                                                    @click="remove(item.id)">删 除
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                            <!-- Pagination -->
                            <div class="pagination pull-right">
                                <div class="M-box front pull-right" style="margin-top:10px; "></div>
                            </div>
                            <!-- End Pagination -->
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!-- END BORDERED TABLE PORTLET-->
            </div>
        </div>
    </div>
</template>

<script type="es6">
    module.exports = {
        data: function () {
            return {
                certificateList: [],
                currentPage: 1,
                condition: "",
                selected: []
            }
        },
        mounted(){
            var me = this;
            me.getData();

        },
        methods: {
            create(){
                router.push("/certificate/create");
            },
            fetchCertificateList(pageNum, rowCount){
                var me = this;
                me.$http.get("/api/certificate/list", {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then(response => {
                    var data = response.data;
                    me.certificateList = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/certificate/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: me.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    jQuery(".M-box").pagination({
                        pageCount: data.totalPage || 1,
                        coping: true,
                        homePage: '首页',
                        endPage: '末页',
                        prevContent: '上页',
                        nextContent: '下页',
                        callback: function (data) {
                            me.fetchData(data.getCurrent(), rowCount, me.condition);
                            me.currentPage = data.getCurrent();
                        }
                    });
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            getData(){
                var me = this;
                me.fetchCertificateList(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            //全选
            selectAll(){
                var me = this;
                if (me.selected.length == 0) {
                    me.selected = [];
                    me.certificateList.forEach(function (item, index) {
                        me.selected.push(item.id);
                    })
                } else {
                    me.selected = [];
                }

            },
            total(){
                var me = this;
                me.getData();
            },
            //删除全部
            removeAll(){
                var me = this;
                if (me.selected.length == 0) {
                    error("至少需要选择一个仪器设备");
                    return;
                }
                confirm({
                    content: "是否删除当前选中人员所持证书？",
                    success: function () {
                        me.$http.get("/api/certificate/deleteAll", {
                            params: {
                                selected: me.selected
                            }
                        }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200: function () {
                                        alert("当前人员所持该证删除成功！");
                                        me.getData();
                                        closeConfirm();
                                    }
                                });
                            },
                            response => {
                                serverErrorInfo(response);
                            }
                        );
                    }
                });
            },
            //删除选中的一个
            remove(id){
                var me = this;
                confirm({
                    content: "是否删除当前人员所持证书？",
                    success: function () {
                        me.$http.get("/api/certificate/delete", {
                            params: {
                                id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("当前人员所持该证删除成功！");
                                    me.getData();
                                }
                            }, response => {
                                serverErrorInfo(response);
                            })
                        })
                    }
                })
            },
            edit(item){
                var me = this;
                router.push("/certificate/change?id=" + item.id);
            },
        }
    }

</script>
