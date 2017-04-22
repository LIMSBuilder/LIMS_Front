<template>
    <div>
        <h1 class="page-title"> 岗位信息维护
            <small>／Role</small>
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
                                <a href="javascript:;" class="btn btn-sm btn-info" id="selectChange"> 选 择
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
                            <select class="form-control" @change="findByDepartment($event)">
                                <option value>未选择</option>
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
                                    <th> 岗位名称</th>
                                    <th> 所属部门</th>
                                    <th> 操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item,index) in roleList">
                                    <tr>
                                        <td class="text-center">
                                            <label class="mt-checkbox mt-checkbox-outline">
                                                <input type="checkbox" :value="item.id" name="select"
                                                       v-model="selected">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td class="text-center"> {{index+1}}</td>
                                        <td class="text-center"> {{item.name}}</td>
                                        <td class="text-center"><a href="javascript:;"
                                                                   @click="showSameDepartment(item.department.id)">{{item.department.name}}</a>
                                        </td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-sm blue btn-outline"
                                                    @click="edit(item)">修 改
                                            </button>
                                            <button type="button" class="btn btn-sm green btn-outline"
                                                    @click="power(item)">权限管理
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


        <div class="modal fade bs-modal-lg" id="powerSetting" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">权限设置</h4>
                    </div>
                    <div class="modal-body">
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr>
                                    <td class="text-center">一级</td>
                                    <td class="text-center">二级</td>
                                    <td class="text-center">权限配置细则</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-center">
                                        <label class="mt-checkbox mt-checkbox-outline">
                                            <input type="checkbox" name="">
                                            <span></span>
                                        </label>
                                        合同管理
                                    </td>
                                    <td class="text-center">
                                        <table class="table table-light table-hover">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    合同创建
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    合同列表
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    业务审核
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    技术审核
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td class="text-center">
                                        <table class="table table-light table-hover">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    创建
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    修改
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    删除
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    中止
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    创建
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    修改
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    删除
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    中止
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    查看
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    创建
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    修改
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    删除
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    中止
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    创建
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    修改
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    删除
                                                </td>
                                                <td>
                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                        <input type="checkbox" name="">
                                                        <span></span>
                                                    </label>
                                                    中止
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green">保存设置</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
</template>

<script type="es6">
    import 'mod/jstree'
    import 'style/jstree'
    module.exports = {
        data(){
            return {
                departmentList: [],
                roleList: [],
                currentPage: 1,
                condition: "",
                selected: [],
                powerList:[]
            }
        },
        mounted(){
            var me = this;
            me.getData();
            me.fetchDepartment();
            BlogUtils.selectAll("select", jQuery("#selectChange"));
            $("#powerSetting").draggable({
                handle: ".modal-header"
            });
        },
        methods: {
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/role/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.roleList = data.results;
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            fetchDepartment(){
                var me = this;
                this.$http.get('/api/department/total').then((response) => {
                    var data = response.data;
                    me.departmentList = data.results;
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/role/list', {
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
            search(e){
                var me = this;
                var value = e.target.value;
                me.currentPag = 1;
                me.condition = value ? "name=" + encodeURI(value) : "";
                me.getData();
            },
            create(){
                router.push("/role/create");
            },
            remove(id){
                var me = this;
                confirm({
                    content: "是否删除当前岗位信息？",
                    success: function () {
                        me.$http.get("/api/role/delete", {
                            params: {
                                id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("岗位信息删除成功！");
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        });
                    }
                })
            },
            edit(item){
                var me = this;
                router.push("/role/change?id=" + item.id);
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            removeAll(){
                var me = this;
                if (BlogUtils.getSelect("select").length == 0) {
                    error("至少需要选择一个岗位信息");
                    return;
                }
                confirm({
                    content: "是否删除当前选中岗位信息？",
                    success: function () {
                        me.$http.get("/api/role/deleteAll", {
                            params: {
                                selected: me.selected
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("岗位信息删除成功！");
                                    me.getData();
                                    closeConfirm();
                                }
                            });
                        }, response => {
                            serverErrorInfo(response);
                        });
                    }
                });
            },
            findByDepartment(e){
                var me = this;
                var id = e.target.value;
                if (id) {
                    me.condition = "department_id=" + id;
                    me.currentPage = 1;
                    me.getData();
                } else {
                    me.total();
                }
            },
            showSameDepartment(id){
                var me = this;
                if (id) {
                    me.condition = "department_id=" + id;
                    me.currentPage = 1;
                    me.getData();
                } else {
                    me.total();
                }
            },
            total(){
                var me = this;
                me.condition = "";
                me.currentPage = 1;
                me.getData();
            },
            power(item){
                var me = this;
                console.log(item);
                jQuery("#powerSetting").modal("show");
                me.$http.get("/api/power/findByRoleId", {
                    params: {
                        role_id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.departmentPowerList = data.results;
                    console.log(me.departmentPowerList);
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchPowerList(){
                var me = this;
                me.$http.get("/api/power/getIetems").then(response => {
                    var data = response.data;
                    me.powerList = data;
                }, response => {
                    serverErrorInfo(response);
                })
            }
        }
    }
</script>
