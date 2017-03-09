<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 更新客户信息
            <small>／Customer</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="customer_add">
                    <div class="form-body">
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_unit">客户单位

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_unit" v-model="client.client_unit"
                                       placeholder=""
                                       name="client_unit">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户单位</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client">联系人

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client" v-model="client.client"
                                       placeholder=""
                                       name="client">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户联系人</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_tel">联系方式

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_tel" v-model="client.client_tel"
                                       placeholder=""
                                       name="client_tel">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户联系方式</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_code">邮政编码

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_code" v-model="client.client_code"
                                       placeholder=""
                                       name="client_code">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户邮政编码</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_address">客户地址

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_address"
                                       v-model="client.client_address" placeholder=""
                                       name="client_address">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户联系地址</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="client_fax">客户传真

                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="client_fax" v-model="client.client_fax"
                                       placeholder=""
                                       name="client_fax">
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入客户传真</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn blue" @click="back">返回列表</button>
                                <button type="button" class="btn green" @click="create">保 存</button>
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
                client: {}
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要维护的客户信息！",
                    success: function () {
                        router.push("/customer/list");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/customer/findById", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.client = data;
                }, response => {
                    serverErrorInfo(response);
                })
            }
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#customer_add").valid()) {
                    me.$http.post("/api/customer/change", me.client).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "客户信息修改成功！"
                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            },
            back(){
                router.push("/customer/list");
            }
        }
    }
</script>