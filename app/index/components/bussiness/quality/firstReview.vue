<template>
    <div>
        <h1 class="page-title"> 质控列表
            <small>／Quality</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN TODO SIDEBAR -->
                <div class="todo-ui">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                <h4 class="modal-title">审核合同：名字</h4>
                            </div>
                            <div class="modal-body form">
                                <form class="form-horizontal" action="#" id="submit_form"
                                      method="POST">
                                    <div class="form-body">
                                        <div class="form-group form-md-radios">
                                            <label class="col-md-8 control-label"
                                                   style="text-align: left">客户要求与合同内容相符</label>
                                            <div class="md-radio-inline">
                                                <div class="md-radio">
                                                    <input type="radio" id="same1"
                                                           name="same"
                                                           value="1" class="md-radiobtn">
                                                    <label for="same1">
                                                        <span class="inc"></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 是 </label>
                                                </div>
                                                <div class="md-radio has-error">
                                                    <input type="radio" id="same2"
                                                           name="same"
                                                           value="0" class="md-radiobtn">
                                                    <label for="same2">
                                                        <span class="inc"></span>
                                                        <span class="check"></span>
                                                        <span class="box"></span> 否 </label>
                                                </div>
                                            </div>
                                        </div>

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
                                                          name="content" style="height: 100px;"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">

                                <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                            </div>
                        </div>
                        <!-- /.modal-content -->
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
            return {

            }
        },
        mounted(){

        },
        methods: {

        }
    }

</script>
