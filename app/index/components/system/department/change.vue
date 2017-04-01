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
                <form action="#" class="form-horizontal" id="department_change">
                    <div class="form-body">
                        <h3 class="form-section">部门信息</h3>
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
                                       name="title" required>
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
                    serverErrorInfo(response);
                })
            }
            BlogUtils.formValid(jQuery("#department_change"));
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#department_change").valid()) {
                    me.$http.post("/api/department/change", {
                        name: me.name,
                        id: me.id
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "部门信息修改成功！",
                            503: "当前部门已存在，请更换新的部门名称！"
                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            },
            back(){
                router.push("/department/list");
            }
        }
    }
</script>