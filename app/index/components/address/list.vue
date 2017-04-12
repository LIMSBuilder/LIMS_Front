<template>
    <div>
        <h1 class="page-title"> 通讯录
            <small>／Address List</small>
        </h1>
        <div class="portlet light portlet-fit bordered">
            <div class="portlet-title">
                <div class="caption">
                    <div class="clearfix">
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
                    <select class="form-control" @change="findByRole($event)">
                        <option value>请选择岗位</option>
                        <template v-for="item in roleList">
                            <option :value="item.id">{{item.name}}</option>
                        </template>
                    </select>
                </div>
                <div class="actions" style="min-width: 200px;margin-right: 10px;">
                    <select class="form-control" @change="findByDepartment($event)">
                        <option value>请选择部门</option>
                        <template v-for="item in departmentList">
                            <option :value="item.id">{{item.name}}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="portlet-body">
                <div class="mt-element-card mt-card-round mt-element-overlay">
                    <div class="row">
                        <template v-for="item in userList">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div class="mt-card-item">
                                    <div class="mt-card-avatar mt-overlay-1" style="width: 240px;height: 240px;">
                                        <img :src="item.portrait"/>
                                        <div class="mt-overlay">
                                            <ul class="mt-info">
                                                <li>
                                                    <a class="btn default btn-outline" href="javascript:;"
                                                       @click="viewDetails(item)">
                                                        <i class="icon-magnifier"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="btn default btn-outline" href="javascript:;">
                                                        <i class="fa fa-wechat"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mt-card-content">
                                        <h3 class="mt-card-name">{{item.name}}</h3>
                                        <p class="mt-card-desc font-grey-mint">{{item.role.name}} /
                                            {{item.department.name}}</p>
                                        <div class="mt-card-social">
                                            <ul>
                                                <li>
                                                    <a :href="'mailto:'+item.mail">
                                                        <i class="font-blue-oleo  fa fa-envelope-o"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a :href="'tel:'+item.tel">
                                                        <i class="font-blue-oleo  fa fa-phone"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <i class="font-blue-oleo fa fa-location-arrow"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="pagination pull-right">
                        <div class="M-box front pull-right" style="margin-top:10px; "></div>
                    </div>
                    <!-- End Pagination -->
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="modal fade draggable-modal" id="showUserInfo" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">用户详情</h4>
                    </div>
                    <div class="modal-body form">
                        <form class="form-horizontal" role="form">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">用户姓名:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.name}} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">担任职责:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.role.name}} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">所属部门:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.department.name}} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">电话号码:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.tel}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">联系地址:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.address}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">电子邮箱:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.mail}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label col-md-3">个性签名:</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static"> {{user.desp}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
</template>

<script>
    module.exports = {
        data(){
            return {
                currentPage: 1,
                condition: "",
                userList: [],
                departmentList: [],
                roleList: [],
                user: {
                    role: {},
                    department: {}
                }
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
                        rowCount: 12,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.userList = data.results;
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/user/list', {
                    params: {
                        rowCount: 12,
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
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            search(e){
                var me = this;
                var value = e.target.value;
                me.currentPag = 1;
                me.condition = value ? "keyword=" + encodeURI(value) : "";
                me.getData();
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
                    serverErrorInfo(response);
                });
            },
            total(){
                var me = this;
                me.condition = "";
                me.currentPage = 1;
                me.getData();
            },
            viewDetails(item){
                var me = this;
                me.user = item;
                jQuery("#showUserInfo").modal("show");
            }
        }
    }
</script>