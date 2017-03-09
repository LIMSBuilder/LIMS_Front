<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 更新用户信息
            <small>／User</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="user_add">
                    <div class="form-body">
                        <h3 class="form-section">用户信息</h3>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="nick">用户昵称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="nick" v-model="user.nick" placeholder=""
                                       name="nick" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入用户昵称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="name">真实姓名
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="name" v-model="user.name" placeholder=""
                                       name="name" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入真实姓名，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="cardId">证件号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="cardId" v-model="user.cardId" placeholder=""
                                       name="cardId" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入证件号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="departmentId">所属部门
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="departmentId" id="departmentId"
                                        v-model="user.departmentId" @change="fetchRole($event)" required>
                                    <option value></option>
                                    <template v-for="item in department_list">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                                <div class="form-control-focus"></div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="roleId">所属岗位
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="roleId" id="roleId"
                                        v-model="user.roleId" required>
                                    <option value></option>
                                    <template v-for="item in role_list">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                                <div class="form-control-focus"></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn green" @click="create">保 存</button>
                                <button type="reset" class="btn default">重 置</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- END FORM-->
            </div>
        </div>
    </div>
    <!-- END CONTENT BODY -->
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {
                user: {},
                department_list: [],
                role_list: []
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要维护的用户信息！",
                    success: function () {
                        router.push("/user/list");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/user/findById", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.user = data;
                    me.user.id = query.id;
                    me.getRole(data.departmentId, data.roleId);
                }, response => {
                    serverErrorInfo();
                });
            }
            me.fetchDepartment();
            BlogUtils.formValid(jQuery("#user_add"));
        },
        methods: {
            fetchDepartment(){
                var me = this;
                me.$http.get("/api/department/total").then(response => {
                    var data = response.data;
                    me.department_list = data.results;
                }, response => {
                    serverErrorInfo();
                });
            },
            create(){
                var me = this;
                if (jQuery("#user_add").valid()) {
                    me.$http.post("/api/user/change", me.user).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "用户信息修改成功"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            },
            fetchRole(e){
                var me = this;
                var value = e.target.value;
                if (value) {
                    me.$http.get("/api/role/findByDepartment", {
                        params: {
                            department_id: value
                        }
                    }).then(response => {
                        var data = response.data;
                        me.role_list = data.results;
                    }, response => {
                        serverErrorInfo();
                    })
                } else {
                    me.role_list = [];
                }
            },
            getRole(departmentId, roleId){
                var me = this;
                if (departmentId) {
                    me.$http.get("/api/role/findByDepartment", {
                        params: {
                            department_id: departmentId
                        }
                    }).then(response => {
                        var data = response.data;
                        me.role_list = data.results;
                        me.user.roleId = roleId;
                    }, response => {
                        serverErrorInfo();
                    })
                } else {
                    me.role_list = [];
                }
            }
        }
    };
</script>