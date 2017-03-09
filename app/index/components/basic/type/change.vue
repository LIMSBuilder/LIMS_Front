<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 更新监测类别
            <small>／Type</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="type_add">
                    <div class="form-body">
                        <h3 class="form-section">类别信息</h3>
                        <div class="alert alert-success">
                            <strong>小技巧：</strong> 样品标识符可以用来区分不同类别的样品信息。
                        </div>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="title">类别名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="title" v-model="name" placeholder=""
                                       name="name" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入类别名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="title">样品标识符
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="identifier" v-model="identifier"
                                       placeholder=""
                                       name="identifier" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入样品标识符，必需字段。</span>
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
                id: "",
                name: "",
                identifier: ""
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要维护的监测类别！",
                    success: function () {
                        router.push("/type/list");
//                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/type/findById", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.id = data.id;
                    me.name = data.name;
                    me.identifier = data.identifier;
                }, response => {
                    serverErrorInfo();
                })
            }

            BlogUtils.formValid(jQuery("#type_add"));
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#type_add").valid()) {
                    me.$http.post("/api/type/change", {
                        id: me.id,
                        name: me.name,
                        identifier: me.identifier
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "环境监测类别更新成功！"
                        });
                    }, response => {
                        serverErrorInfo();
                    });
                }
            },
            back(){
                router.push("/type/list");
            }
        }
    };
</script>