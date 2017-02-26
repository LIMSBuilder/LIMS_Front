<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建新客户
            <small>／Customer</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="department_add">
                    <div class="form-body">
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_unit">客户单位
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_unit" v-model="client.client_unit"
                                       placeholder=""
                                       name="client_unit">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户单位，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client">联系人
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client" v-model="client.client"
                                       placeholder=""
                                       name="client">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户联系人，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_tel">联系方式
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_tel" v-model="client.client_tel"
                                       placeholder=""
                                       name="client_tel">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户联系方式，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_code">邮政编码
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_code" v-model="client.client_code"
                                       placeholder=""
                                       name="client_code">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户邮政编码，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_address">客户地址
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_address"
                                       v-model="client.client_address" placeholder=""
                                       name="client_address">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户联系地址，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_fax">客户传真
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_fax" v-model="client.client_fax"
                                       placeholder=""
                                       name="client_fax">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户传真，必需字段。</span>
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
                client: {}
            }
        },
        mounted(){
            handleValidation1();
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#department_add").valid()) {
                    me.$http.post("/api/customer/create", me.client).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "客户信息创建成功！"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            }
        }
    }

    var handleValidation1 = function () {
        var form1 = $('#department_add');
        var error1 = $('.alert-danger', form1);
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: {
                client: {
                    required: "客户联系人不能为空"
                },
                client_unit: {
                    required: "客户单位不能为空"
                },
                client_address: {
                    required: "客户地址不能为空"
                },
                client_tel: {
                    required: "联系方式不能为空"
                },
                client_code: {
                    required: "邮政编码不能为空"
                },
                client_fax: {
                    required: "客户传真不能为空"
                }
            },
            rules: {
                client: {
                    required: true
                },
                client_unit: {
                    required: true
                },
                client_address: {
                    required: true
                },
                client_tel: {
                    required: true
                },
                client_code: {
                    required: true
                },
                client_fax: {
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