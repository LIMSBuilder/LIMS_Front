<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建新部门
            <small>／New Department</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="department_add">
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
<script type="es6">
    module.exports = {
        data: function () {
            return {
                name: ""
            }
        },
        mounted(){
            BlogUtils.formValid(jQuery("#department_add"));
            handleSidebarAndContentHeight();
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#department_add").valid()) {
                    confirm({
                        content: "是否创建新部门【" + me.name + "】？",
                        success: function () {
                            me.$http.post("/api/department/create", {
                                name: me.name
                            }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200: function () {
                                        alert("新部门创建成功！");
                                        me.name = ""
                                    }
                                });
                            }, response => {
                                serverErrorInfo();
                            });
                        }
                    })
                }
            }
        }
    };
</script>