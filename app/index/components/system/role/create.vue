<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建新岗位
            <small>／Role</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="role_add">
                    <div class="form-body">
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="title">岗位名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="title" v-model="name" placeholder=""
                                       name="title">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入岗位名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="departmentId">部门类型
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="departmentId" id="departmentId"
                                        v-model="departmentId">
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
                name: "",
                department_list: [],
                departmentId: ""
            }
        },
        mounted(){
            var me = this;
            me.fetchDepartment();
            handleValidation1();
            handleSidebarAndContentHeight();
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
                if (jQuery("#role_add").valid()) {
                    me.$http.post("/api/role/create", {
                        name: me.name,
                        department_id: me.departmentId
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "新岗位创建成功"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            }
        }
    }

    var handleValidation1 = function () {
        var form1 = $('#role_add');
        var error1 = $('.alert-danger', form1);
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: {
                title: {
                    required: "岗位名称不能为空"
                },
                departmentId: {
                    required: "部门类型不能为空"
                }
            },
            rules: {
                title: {
                    required: true
                },
                departmentId: {
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