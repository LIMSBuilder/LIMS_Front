<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建新监测项目
            <small>／Project</small>
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
                            <label class="col-md-3 control-label" for="name">项目名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="name" v-model="project.name" placeholder=""
                                       name="name">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入项目名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="desp">项目描述
                                <span class="required"></span>
                            </label>
                            <div class="col-md-7">
                                <textarea class="form-control" rows="3" id="desp" v-model="project.desp"
                                          name="desp"></textarea>
                                <div class="form-control-focus"></div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="elementId">所属要素
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="elementId" id="elementId"
                                        v-model="project.element_id">
                                    <option value></option>
                                    <template v-for="item in elementList">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                                <div class="form-control-focus"></div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="department_id">承接部门
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="departmentId" id="department_id"
                                        v-model="project.department_id">
                                    <option value></option>
                                    <template v-for="item in department_list">
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
                project: {
                    desp:""
                },
                department_list: [],
                elementList: []
            }
        },
        mounted(){
            var me = this;
            me.fetchDepartment();
            me.fetchElement();
            handleValidation1();

        },
        methods: {
            fetchDepartment(){
                var me = this;
                me.$http.get("/api/department/total").then(function (response) {
                        var data = response.data;
                        me.department_list = data.results;
                    }, function (response) {
                        serverErrorInfo();
                    }
                );
            },
            fetchElement(){
                var me = this;
                me.$http.get("/api/element/total").then(function (response) {
                        var data = response.data;
                        me.elementList = data.results;
                    }, function (response) {
                        serverErrorInfo();
                    }
                );
            },
            create(){
                var me = this;
                if (jQuery("#user_add").valid()) {
                    me.$http.post("/api/project/create", me.project).then(function (response) {
                            var data = response.data;
                            codeState(data.code, {
                                200: "新监测项目创建成功"
                            });
                        }, function (response) {
                            serverErrorInfo();
                        }
                    )
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