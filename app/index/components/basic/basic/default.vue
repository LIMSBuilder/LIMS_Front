<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 合同预设信息
            <small>／Contract Default Info</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="department_add">
                    <div class="form-body">
                        <h3 class="form-section">合同预设信息</h3>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_unit">受托单位

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_unit" v-model="client.trustee_unit"
                                       placeholder=""
                                       name="client_unit">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入受托单位。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_tel">联系方式
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_tel" v-model="client.trustee_tel"
                                       placeholder=""
                                       name="client_tel">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入联系方式。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_code">邮政编码

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_code" v-model="client.trustee_code"
                                       placeholder=""
                                       name="client_code">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入邮政编码。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_address">联系地址

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_address"
                                       v-model="client.trustee_address" placeholder=""
                                       name="client_address">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入联系地址。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_fax">传真号码
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_fax" v-model="client.trustee_fax"
                                       placeholder=""
                                       name="client_fax">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入传真号码。</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn green" @click="create">保 存</button>
                                <button type="reset" class="btn default" @click="resetAll">重 置</button>
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
            var me = this;
            me.fetchDefault();
        },
        methods: {
            create(){
                var me = this;
                me.$http.post("/api/contract/defaultInfo", me.client).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: "合同预设信息保存成功！"
                    });
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchDefault(){
                var me = this;
                me.$http.get("/api/contract/fetchDefault").then(response => {
                    var data = response.data;
                    me.client = data;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            resetAll(){
                var me = this;
                me.client = {};
            }
        }
    }
</script>