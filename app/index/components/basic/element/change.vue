<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 更新部门信息
            <small>／Department</small>
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
                            <label class="col-md-3 control-label" for="title">部门名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="title" v-model="name" placeholder=""
                                       name="title">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入部门名称，必需字段。</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn blue" @click="back">返回列表</button>
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
                id: ""
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要维护的部门信息！",
                    success: function () {
                        router.push("/department/list");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/department/findById", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.name = data.name;
                }, response => {
                    serverErrorInfo();
                })
            }

            handleValidation1();
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#department_add").valid()) {
                    me.$http.post("/api/department/change", {
                        name: me.name,
                        id: me.id
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "部门信息更新成功！"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            },
            back(){
                router.push("/department/list");
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
                title: {
                    required: "部门名称不能为空"
                }
            },
            rules: {
                title: {
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