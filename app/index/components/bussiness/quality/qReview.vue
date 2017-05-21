<template>
    <div>
        <h1 class="page-title"> 质控列表
            <small>／Quality</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light bordered" id="contract_wizard">
                    <div class="portlet-title">
                        一审人意见
                    </div>
                    <div class="portlet-body form ">
                        <form class="form-horizontal" action="#" id="submit_form"
                              method="POST">
                            <div class="form-body ">
                                <div class="form-group form-md-radios">
                                    <label class="col-lg-3"></label>
                                    <label class="col-md-4 control-label"
                                           style="text-align: left">原始记录是否填写完整</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="1" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="0" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-4 control-label"
                                           style="text-align: left">监测数据有效位数是否规范</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="1" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="0" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-4 control-label"
                                           style="text-align: left">原始记录修改是否符合规范</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="1" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="0" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-4 control-label"
                                           style="text-align: left">送检单结果与记录是否一致</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="1" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="0" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-4 control-label"
                                           style="text-align: left">原始记录审核是否完整</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="1" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="0" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-4 control-label"
                                           style="text-align: left">标准曲线是否符合规范</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="1" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id=""
                                                   name=""
                                                   value="0" class="md-radiobtn">
                                            <label for="">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="form-group form-md-radios">-->
                                <!--<label class="col-md-8 control-label"-->
                                <!--style="text-align: left">人力、物力、信息资源等条-->
                                <!--件均可以满足合同中的要求 </label>-->
                                <!--<div class="md-radio-inline">-->
                                <!--<div class="md-radio">-->
                                <!--<input type="radio" id="contract1"-->
                                <!--name="contract"-->
                                <!--v-model="review_info.contract"-->
                                <!--value="1"-->
                                <!--class="md-radiobtn">-->
                                <!--<label for="contract1">-->
                                <!--<span class="inc"></span>-->
                                <!--<span class="check"></span>-->
                                <!--<span class="box"></span> 是 </label>-->
                                <!--</div>-->
                                <!--<div class="md-radio has-error">-->
                                <!--<input type="radio" id="contract2"-->
                                <!--name="contract"-->
                                <!--v-model="review_info.contract"-->
                                <!--value="0" class="md-radiobtn"-->
                                <!--&gt;-->
                                <!--<label for="contract2">-->
                                <!--<span class="inc"></span>-->
                                <!--<span class="check"></span>-->
                                <!--<span class="box"></span> 否 </label>-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--</div>-->

                                <hr/>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="alert alert-success alert-dismissable">
                                            <button type="button" class="close"
                                                    data-dismiss="alert"
                                                    aria-hidden="true"></button>
                                            <strong>小技巧：</strong>
                                            您可以在文本框内详细描述您的审核意见及观点，内容将会被显示给合同修改人员查看。
                                        </div>
                                        <textarea class="inbox-editor  form-control"
                                                  name="content" style="height: 100px;"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END PAGE CONTENT-->

        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {}
        },
        mounted(){

        },
        methods: {}
    }

</script>
