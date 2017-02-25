<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建监测频次
            <small>／Frequency</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="frequency_add">
                    <div class="form-body">
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="count">监测频次名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <input type="number" class="form-control" min="0" placeholder="周期监测次数"
                                               id="count"
                                               name="count"
                                               v-model="frequency.count">
                                        <div class="form-control-focus"></div>
                                        <span class="help-block">每周期内进行监测的次数。</span>
                                        <span class="input-group-addon">次</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <span class="input-group-addon">每</span>
                                        <input type="number" class="form-control" min="0" placeholder="周期单位长度"
                                               id="times"
                                               name="times"
                                               v-model="frequency.times">
                                        <div class="form-control-focus"></div>
                                        <span class="help-block">每周期包含的周期单位个数。</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control" id="unit" name="unit" v-model="frequency.unit">
                                        <option value="">选择周期单位</option>
                                        <option value="one">仅一次</option>
                                        <option value="minute">分钟</option>
                                        <option value="hour">小时</option>
                                        <option value="day">天数</option>
                                        <option value="week">星期</option>
                                        <option value="mouth">月份</option>
                                        <option value="quarter">季度</option>
                                        <option value="year">年度</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="open">循环提示
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <div class="md-radio-inline">
                                    <div class="md-radio">
                                        <input type="radio" id="open" name="notice" v-model="frequency.notice"
                                               value="1" class="md-radiobtn">
                                        <label for="open">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 开 启 </label>
                                    </div>
                                    <div class="md-radio">
                                        <input type="radio" id="close" name="notice" v-model="frequency.notice"
                                               value="0" class="md-radiobtn">
                                        <label for="close">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 关 闭 </label>
                                    </div>
                                </div>
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
                frequency: {
                    unit: "",
                    notice: 1
                }
            }
        },
        mounted(){
            var me = this;
            handleValidation1();
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#frequency_add").valid()) {
                    me.$http.post("/api/frequency/create", me.frequency).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "监测频次创建成功！"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            }
        }
    }

    var handleValidation1 = function () {
        var form1 = $('#frequency_add');
        var error3 = $('.alert-danger', form1);
        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {

                times: {
                    required: true,
                    min: 0
                },
                count: {
                    required: true,
                    min: 0
                }
            },
            errorPlacement: function (error, element) { // render error placement for each input type
                if (element.parents('.mt-radio-list') || element.parents('.mt-checkbox-list')) {
                    if (element.parents('.mt-radio-list')[0]) {
                        error.appendTo(element.parents('.mt-radio-list')[0]);
                    }
                    if (element.parents('.mt-checkbox-list')[0]) {
                        error.appendTo(element.parents('.mt-checkbox-list')[0]);
                    }
                } else if (element.parents('.mt-radio-inline') || element.parents('.mt-checkbox-inline')) {
                    if (element.parents('.mt-radio-inline')[0]) {
                        error.appendTo(element.parents('.mt-radio-inline')[0]);
                    }
                    if (element.parents('.mt-checkbox-inline')[0]) {
                        error.appendTo(element.parents('.mt-checkbox-inline')[0]);
                    }
                } else if (element.parent(".input-group").size() > 0) {
                    error.insertAfter(element.parent(".input-group"));
                } else if (element.attr("data-error-container")) {
                    error.appendTo(element.attr("data-error-container"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                error3.show();
                App.scrollTo(error3, -200);
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
                error3.hide();
                form[0].submit(); // submit the form
            }

        });

    };
</script>