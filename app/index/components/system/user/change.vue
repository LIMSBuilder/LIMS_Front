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
                                       name="nick">
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
                                       name="name">
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
                                       name="cardId">
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
                                        v-model="user.departmentId" @change="fetchRole($event)">
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
                                        v-model="user.roleId">
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
<script>
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
                })
            }
            me.fetchDepartment();
            handleValidation1();

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
    }

    var handleValidation1 = function () {
        var form1 = $('#user_add');
        var error1 = $('.alert-danger', form1);
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: {
                nick: {
                    required: "用户昵称不能为空"
                },
                name: {
                    required: "真实姓名不能为空"
                },
                cardId: {
                    required: "证件号不能为空"
                },
                departmentId: {
                    required: "所属部门不能为空"
                },
                roleId: {
                    required: "所属岗位不能为空"
                }
            },
            rules: {
                nick: {
                    required: true
                },
                name: {
                    required: true
                },
                cardId: {
                    required: true
                },
                departmentId: {
                    required: true
                },
                roleId: {
                    required: true
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                //success1.hide();
                error1.show();
                App.scrollTo(error1, -200);
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                error1.hide();
            }
        });
    };
</script>