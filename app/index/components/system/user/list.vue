<template>
    <div>
        <h1 class="page-title"> 用户信息维护
            <small>／User</small>
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
                        <div class="actions" style="min-width: 200px;margin-right: 10px;">
                            <select class="form-control" @click="findByRole($event)">
                                <option value>请选择岗位</option>
                                <template v-for="item in roleList">
                                    <option :value="item.id">{{item.name}}</option>
                                </template>
                            </select>
                        </div>
                        <div class="actions" style="min-width: 200px;margin-right: 10px;">
                            <select class="form-control" @click="findByDepartment($event)">
                                <option value>请选择部门</option>
                                <template v-for="item in departmentList">
                                    <option :value="item.id">{{item.name}}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 选择</th>
                                    <th> 编号</th>
                                    <th> 用户昵称</th>
                                    <th> 真实姓名</th>
                                    <th> 证件号码</th>
                                    <th> 所属部门</th>
                                    <th> 担任岗位</th>
                                    <th> 操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item,index) in userList">
                                    <tr>
                                        <td class="text-center">
                                            <label class="mt-checkbox mt-checkbox-outline">
                                                <input type="checkbox" :value="item.id" name="select"
                                                       v-model="selected">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td class="text-center"> {{index+1}}</td>
                                        <td class="text-center">{{item.nick}}</td>
                                        <td class="text-center">{{item.name}}</td>
                                        <td class="text-center">{{item.cardId}}</td>
                                        <td class="text-center">{{item.department.name}}</td>
                                        <td class="text-center">{{item.role.name}}</td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-sm blue btn-outline"
                                                    @click="edit(item)">编 辑
                                            </button>
                                            <button type="button" class="btn btn-sm red btn-outline"
                                                    @click="remove(item.id)">删 除
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Pagination -->
                    <div class="pagination pull-right">
                        <div class="M-box front pull-right" style="margin-top:10px; "></div>
                    </div>
                    <!-- End Pagination -->
                </div>
                <!-- END BORDERED TABLE PORTLET-->
            </div>

        </div>
</template>

<script>
    module.exports = {
        data(){
            return {
                departmentList: [],
                roleList: [],
                currentPage: 1,
                condition: "",
                selected: [],
                userList: []
            }
        },
        mounted(){
            var me = this;
            me.getData();
            me.fetchDepartment();
        },
        methods: {
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/user/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.userList = data.results;
                }, (response) => {
                    serverErrorInfo();
                });
            },
            fetchDepartment(){
                var me = this;
                this.$http.get('/api/department/total').then((response) => {
                    var data = response.data;
                    me.departmentList = data.results;
                }, (response) => {
                    serverErrorInfo();
                });
            },
            findByDepartment(e){
                var me = this;
                var id = e.target.value;
                if (id) {
                    me.fetchRole(id);
                    me.currentPag = 1;
                    me.condition = "departmentId=" + id;
                    me.getData();
                } else {
                    me.roleList = [];
                    me.total();
                }
            },
            findByRole(e){
                var me = this;
                var id = e.target.value;
                if (id) {
                    me.currentPag = 1;
                    me.condition = "roleId=" + id;
                    me.getData();
                } else {
                    me.total();
                }
            },
            fetchRole(department_id){
                var me = this;
                me.$http.get("/api/role/findByDepartment", {
                    params: {
                        department_id: department_id
                    }
                }).then(response => {
                    var data = response.data;
                    me.roleList = data.results;
                }, response => {
                    serverErrorInfo();
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/user/list', {
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
                    serverErrorInfo();
                });
            },
            search(e){
                var me = this;
                var value = e.target.value;
                me.currentPag = 1;
                me.condition = value ? "keyword=" + encodeURI(value) : "";
                me.getData();
            },
            create(){
                router.push("/role/create");
            },
            remove(id){
                var me = this;
                confirm({
                    content: "是否删除当前用户信息？",
                    success: function () {
                        me.$http.get("/api/user/delete", {
                            params: {
                                id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("用户信息删除成功！");
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo();
                        });
                    }
                })
            },
            edit(item){
                var me = this;
                router.push("/user/change?id=" + item.id);
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            removeAll(){
                var me = this;
                if (me.selected.length == 0) {
                    error("至少需要选择一个用户信息");
                    return;
                }
                confirm({
                    content: "是否删除当前选中用户信息？",
                    success: function () {
                        me.$http.get("/api/user/deleteAll", {
                            params: {
                                selected: me.selected
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("用户信息删除成功！");
                                    me.getData();
                                    closeConfirm();
                                }
                            });
                        }, response => {
                            serverErrorInfo();
                        });
                    }
                });
            },
            selectAll(){
                var me = this;
                me.selected = [];
                me.userList.forEach(function (item, index) {
                    me.selected.push(item.id);
                })
            },

            total(){
                var me = this;
                me.condition = "";
                me.currentPage = 1;
                me.getData();
            }
        }
    }
</script>
