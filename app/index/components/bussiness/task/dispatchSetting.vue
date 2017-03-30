<template>
    <div>
        <h1 class="page-title"> 设置任务派遣人员
            <small>／Dispath</small>
        </h1>
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body" id="dispath_body">
                <form action="#" class="form-horizontal">
                    <div class="form-body">
                        <h3 class="form-section">任务派遣</h3>
                        <table class="table table-hover table-light">
                            <thead>
                            <tr class="uppercase">
                                <th> 序号</th>
                                <th> 公司、道路名称</th>
                                <th> 环境要素</th>
                                <th> 监测点（个）</th>
                                <th> 监测项目</th>
                                <th> 监测频次</th>
                                <th> 是否分包</th>
                                <th> 备注</th>
                                <tH> 负责人</tH>
                                <th> 参与者</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="(item,index) in items">
                                <!--<template v-for="(project,projectIndex) in item.project">-->
                                <tr>
                                    <td class="text-center">
                                        {{index+1}}
                                    </td>
                                    <td class="text-center">
                                        {{item.company}}
                                    </td>
                                    <td class="text-center">
                                        {{item.element.name}}
                                    </td>
                                    <td class="text-center">
                                        {{item.point}}
                                    </td>
                                    <td class="text-center">
                                        <!--{{project.project.name}}-->
                                        <button type="button" class="btn green btn-outline"
                                                @click="showProjectName(item.id)">
                                            查看详情
                                        </button>
                                    </td>
                                    <td class="text-center">
                                        {{item.frequency?item.frequency.total:''}}
                                    </td>
                                    <td class="text-center"
                                        v-if="item.is_package==1">是
                                    </td>
                                    <td class="text-center"
                                        v-if="item.is_package==0">否
                                    </td>
                                    <td class="text-center">
                                        {{item.other}}
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <select class="bs-select form-control" data-live-search="true"
                                                        v-model="item.master">
                                                    <option></option>
                                                    <template v-for="department in userList">
                                                        <optgroup :label="department.name">
                                                            <template v-for="user in department.user.results">
                                                                <option :value="user.id">{{user.name}}</option>
                                                            </template>
                                                        </optgroup>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <select class="bs-select form-control" multiple
                                                        data-actions-box="true"
                                                        data-live-search="true" v-model="item.slave">
                                                    <template v-for="department in userList">
                                                        debugger
                                                        <optgroup :label="department.name">
                                                            <template v-for="user in department.user.results">
                                                                <option :value="user.id">{{user.name}}</option>
                                                            </template>
                                                        </optgroup>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <!--</template>-->
                            </template>
                            </tbody>
                        </table>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button type="button" class="btn blue" @click="back">返回列表</button>
                                <button type="button" class="btn green" @click="create">保 存</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <!-- END PAGE CONTENT-->
        </div>

        <div class="modal fade draggable-modal" id="showProject" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title" id="modal_title">检测项目详情列表</h4>
                    </div>
                    <div class="modal-body" id="modal_body">
                        <!--<template v-for="(project,projectIndex) in item.project">-->
                        <!--{{project.project.name}}-->
                        <!--</template>-->
                        <ul class="receiver_tag">
                            <template v-for="names in projectName">
                                <li class="uppercase"><a href="javascript:;"
                                                         style="line-height: 30px">{{names.name}}</a></li>
                            </template>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {
                id: "",
                items: [],
                userList: [],
                projectName: []
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要进行派遣的任务信息！",
                    success: function () {
                        router.push("/task/disPatch");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.fetchItems(me.id);
            }
//            me.$nextTick(function () {
//                App.unblockUI("#dispath_body");
//                $('.bs-select').selectpicker('destroy');
//                $('.bs-select').selectpicker({
//                    iconBase: 'fa',
//                    tickIcon: 'fa-check',
//                    countSelectedText: "count",
//                    deselectAllText: "取消选择",
//                    selectAllText: "选择全部",
//                    noneSelectedText: "请选择人员"
//                });
//            })

        },
        methods: {
            fetchItems(id){
                var me = this;
                App.blockUI({
                    target: '#dispath_body',
                    animate: true
                });//为了防止页面刷新慢，在用户等待的时候出现一些等待动画效果
                me.$http.get("/api/task/getItems", {
                    params: {
                        task_id: id
                    }
                }).then(response => {;
                    var data = response.data;
                    me.items = data.items;
                    for (var i = 0; i < me.items.length; i++) {
                        var item = me.items[i];
                        item.master = "";
                        item.slave = [];
                    }
                    me.$nextTick(function () {
                        me.fetchUser();
                    });
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchUser(){
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(response => {
                    var data = response.data;
                    me.userList = data.results;
                    //console.log(JSON.parse(JSON.stringify(me.userList)));在console里面输出me.userList
                    me.$nextTick(function () {
                        App.unblockUI("#dispath_body")//去除这个等待动画效果
                        $('.bs-select').selectpicker('destroy');
                        $('.bs-select').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            countSelectedText: "count",
                            deselectAllText: "取消选择",
                            selectAllText: "选择全部",
                            noneSelectedText: "请选择人员"
                        });
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            /*分发任务给指定的人员*/
            create(){
                var me = this;
                var results = {};
                var temp = [];
                var items = me.items;
                for (var i = 0; i < items.length; i++) {
                    temp.push({
                        id: items[i].id,
                        charge: items[i].master,
                        belongs: items[i].slave
                    });
                }
                results.result = JSON.stringify(temp);//将数据以字符串的形式存储
                results.id = me.id;
                console.log(JSON.stringify(results))
                me.$http.get("/api/task/delivery", {
                    params: results
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("任务派遣成功！");
                            router.push("/task/dispatch");

                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
                console.log(results);

            },
            back(){
                router.push("/task/disPatch");
            },
            showProjectName(id){
                var me = this;
                me.$http.get("/api/task/monitorItem", {
                    params: {
                        id: id
                    }
                }).then(
                    response => {
                        var data = response.data;
                        me.projectName = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
                jQuery("#showProject").modal("show");

            }
        }
    }

</script>
