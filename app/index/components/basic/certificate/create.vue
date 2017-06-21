<template>
    <div>
        <h1 class="page-title"> 创建证书
            <small>／Instrument</small>
        </h1>
        <div class="portlet light portlet-fit portlet-form">
            <div class="portlet-body">
                <!--BEGIN FROM -->
                <form action="#" class="form-horizontal" id="">
                    <div class="form-body">
                        <h3 class="form-section">新建证书</h3>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="person">持证人员
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" data-live-search="true"
                                        name="person"
                                        id="person" v-model="certificate.person">
                                    <option></option>
                                    <template v-for="item in userList">
                                        <option :value="item.id">{{item.name}}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label class="col-md-3 control-label" for="name">证书名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control"
                                        v-model="certificate.name" name="name"
                                        id="name" multiple
                                        data-actions-box="true" data-live-search="true">
                                    <template v-for="item in project">
                                        <option :value="item.id">{{item.name}}
                                        </option>
                                    </template>
                                </select>
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
                <!--END FROM-->
            </div>
        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {
                userList: [],
                project: [],
                certificate: {
                    name: [],
                    person: ""
                }
            }
        },
        mounted(){
            var me = this;
            me.fetchUser();
            me.fetchProject();
            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: true
            });
            $('#name').selectpicker({
                iconBase: 'fa',
                tickIcon: 'fa-check',
                countSelectedText: "count",
                deselectAllText: "取消选择",
                selectAllText: "选择全部",
                noneSelectedText: "请选择监测项目"

            });

        },
        methods: {
            fetchUser(){
                var me = this;
                me.$http.get("/api/certificate/userlist").then(response => {
                    var data = response.data;
                    me.userList = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchProject(){
                var me = this;
                me.$http.get("/api/certificate/projectList").then(response => {
                    var data = response.data;
                    me.project = data.results;
                    me.$nextTick(function () {
                        //销毁监测项目选择框
                        $('#name').selectpicker('destroy');
                        //初始化监测项目选择框
                        $('#name').selectpicker({
                            iconBase: 'fa',//图标库
                            tickIcon: 'fa-check',
                            countSelectedText: "count",
                            deselectAllText: "取消选择",
                            selectAllText: "选择全部",
                            noneSelectedText: "请选择监测项目"
                        });
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            create(){
                var me = this;
                me.$http.post("/api/certificate/create", me.certificate).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("证书添加成功！");
                            router.push("/certificate/list");
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            }
        }
    }

</script>
