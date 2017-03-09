<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建新岗位
            <small>／Role</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="role_add">
                    <div class="form-body">
                        <h3 class="form-section">岗位信息</h3>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="title">岗位名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="title" v-model="name" placeholder=""
                                       name="title" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入岗位名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="departmentId">部门类型
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="departmentId" id="departmentId"
                                        v-model="departmentId" required>
                                    <option value></option>
                                    <template v-for="item in department_list">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                                <div class="form-control-focus"></div>
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
                name: "",
                department_list: [],
                departmentId: ""
            }
        },
        mounted(){
            var me = this;
            me.fetchDepartment();
            BlogUtils.formValid(jQuery("#role_add"));
        },
        methods: {
            fetchDepartment(){
                var me = this;
                me.$http.get("/api/department/total").then(response => {
                    var data = response.data;
                    me.department_list = data.results;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            create(){
                var me = this;
                if (jQuery("#role_add").valid()) {
                    me.$http.post("/api/role/create", {
                        name: me.name,
                        department_id: me.departmentId
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("新岗位创建成功");
                                me.name = "";
                                me.departmentId = "";
                            }
                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            }
        }
    }
</script>