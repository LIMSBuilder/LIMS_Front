<template>
    <div class="page-content">
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>系统消息</span>
                </li>
            </ul>
        </div>
        <h1 class="page-title"> 系统消息
            <small> / 新增权限</small>
        </h1>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div class="row">
            <div class="col-lg-6">
                <div class="col-lg-12">
                    <label class="col-md-3 control-label">权限名称
                    </label>
                    <div class="col-md-7">
                        <input type="text" class="form-control"
                               id="name" placeholder="请输入权限名称"
                               name="name" required v-model="power.name">
                    </div>
                    {{power.name}}
                </div>
                <div class="col-lg-12" style="margin: 15px 0; ">
                    <label class="col-md-3 control-label">路径地址
                    </label>
                    <div class="col-md-7">
                        <input type="text" class="form-control"
                               id="path" placeholder="请输入接口名称"
                               name="path" required v-model="power.path">
                    </div>
                    {{power.path}}
                </div>
                <div class="col-lg-12" style="margin-bottom: 15px">
                    <label class="col-md-3 control-label">层级
                    </label>
                    <div class="col-md-7">

                        <select class="bs-select form-control" name="parent"
                                v-model="power.parent" id="parent">
                            <option value="0">无</option>
                            <template v-for="item in parentList">
                                <option :value="item.id">{{item.name}}</option>
                            </template>
                        </select>
                    </div>
                    {{power.parent}}
                    <!--select v-model中显示的是value的值-->
                </div>
                <div class="col-lg-12" style="margin-bottom: 15px">
                    <label class="col-md-3 control-label">类别
                    </label>
                    <div class="col-md-7">
                        <input type="radio"
                               name="first" value="0" v-model="power.type"> 前端
                        <input type="radio"
                               name="second" value="1" v-model="power.type"> 接口
                    </div>
                    {{power.type}}
                </div>
                <div class="col-lg-10">
                    <button type="button"
                            class="btn green "
                            @click="createPower" style="float: right;">
                        新 增
                    </button>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="table-scrollable table-scrollable-borderless">
                    <table class="table table-hover table-light">
                        <thead>
                        <tr class="uppercase">
                            <th>权限名称</th>
                            <th>路径地址</th>
                            <th>父级名称</th>
                            <th>前端/接口</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="item in powerList">
                            <tr>
                                <td class="text-center">{{item.name}}</td>
                                <td class="text-center">{{item.path}}</td>
                                <td class="text-center" v-if="item.parent==0">无</td>
                                <td class="text-center" v-if="item.parent!=0">{{item.parent}}</td>
                                <td class="text-center" v-if="item.type==0">前端</td>
                                <td class="text-center" v-if="item.type==1">接口</td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="es6">
    export default{
        data(){
            return {
                power: {
                    name: "",
                    path: "",
                    parent: "0",
                    type: 1
                },
                parentList: [],
                powerList: []
            }
        },
        mounted(){
            var me = this;
            me.fetchParent();
            me.fetchPowerList();
        },
        methods: {
            createPower(){
                var me = this;
                me.$http.post("/api/power/powerCreate", me.power).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("新增权限接口成功！");
                            me.fetchParent();
                            me.fetchPowerList();
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchParent(){
                var me = this;
                me.$http.get("/api/power/list").then(response => {
                    var data = response.data;
                    me.parentList = data;
                    console.log(me.parentList);
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchPowerList(){
                var me = this;
                me.$http.get("/api/power/getIetems").then(response => {
                    var data = response.data;
                    me.powerList = data;
                }, response => {
                    serverErrorInfo(response);
                })
            }
        }
    }

</script>