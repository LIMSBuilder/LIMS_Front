<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 创建新监测项目
            <small>／Project</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="project_add">
                    <div class="form-body">
                        <h3 class="form-section">监测项目</h3>
                        <div class="alert alert-success">
                            <strong>小技巧：</strong> 指定承接科室，让流程能自动流转至对应负责科室。
                        </div>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="name">项目名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="name" v-model="project.name" placeholder=""
                                       name="name" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入项目名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="desp">项目描述
                                <span class="required"></span>
                            </label>
                            <div class="col-md-7">
                                <textarea class="form-control" rows="3" id="desp" v-model="project.desp"
                                          name="desp"></textarea>
                                <div class="form-control-focus"></div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="elementId">所属要素
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="elementId" id="elementId"
                                        v-model="project.element_id" required>
                                    <option value></option>
                                    <template v-for="item in elementList">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                                <div class="form-control-focus"></div>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="department_id">承接部门
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" name="departmentId" id="department_id"
                                        v-model="project.department_id" required>
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
<script>
    module.exports = {
        data: function () {
            return {
                project: {
                    desp: ""
                },
                department_list: [],
                elementList: []
            }
        },
        mounted(){
            var me = this;
            me.fetchDepartment();
            me.fetchElement();
            BlogUtils.formValid(jQuery("#project_add"));
        },
        methods: {
            fetchDepartment(){
                var me = this;
                me.$http.get("/api/department/total").then(function (response) {
                        var data = response.data;
                        me.department_list = data.results;
                    }, function (response) {
                        serverErrorInfo(response);
                    }
                );
            },
            fetchElement(){
                var me = this;
                me.$http.get("/api/element/total").then(function (response) {
                        var data = response.data;
                        me.elementList = data.results;
                    }, function (response) {
                        serverErrorInfo(response);
                    }
                );
            },
            create(){
                var me = this;
                if (jQuery("#project_add").valid()) {
                    me.$http.post("/api/project/create", me.project).then(function (response) {
                            var data = response.data;
                            codeState(data.code, {
                                200: "新监测项目创建成功"
                            });
                        }, function (response) {
                            serverErrorInfo(response);
                        }
                    )
                }
            }
        }
    };
</script>