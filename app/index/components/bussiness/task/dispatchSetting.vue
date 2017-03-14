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
                                <template
                                        v-for="(project,projectIndex) in item.project">
                                    <tr>
                                        <td class="text-center"
                                            v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            {{index+1}}
                                        </td>
                                        <td class="text-center"
                                            v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            {{item.company}}
                                        </td>
                                        <td class="text-center"
                                            v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            {{item.element.name}}
                                        </td>
                                        <td class="text-center"
                                            v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            {{item.point}}
                                        </td>
                                        <td class="text-center">
                                            {{project.project.name}}
                                        </td>
                                        <td class="text-center"
                                            v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            {{item.frequency?item.frequency.total:''}}
                                        </td>
                                        <td class="text-center"
                                            v-if="item.is_package==1&&projectIndex==0"
                                            :rowspan="item.project.length">是
                                        </td>
                                        <td class="text-center"
                                            v-if="item.is_package==0&&projectIndex==0"
                                            :rowspan="item.project.length">否
                                        </td>
                                        <td class="text-center"
                                            v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            {{item.other}}
                                        </td>
                                        <td v-if="projectIndex==0"
                                            :rowspan="item.project.length">
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
                                        <td v-if="projectIndex==0"
                                            :rowspan="item.project.length">
                                            <div class="form-group">
                                                <div class="col-md-12">
                                                    <select class="bs-select form-control" multiple
                                                            data-actions-box="true"
                                                            data-live-search="true" v-model="item.slave">
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
                                    </tr>
                                </template>
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
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                id: "",
                items: [],
                userList: []
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
                me.fetchUser();
            }
        },
        methods: {
            fetchItems(id){
                var me = this;
                App.blockUI({
                    target: '#dispath_body',
                    animate: true
                });
                me.$http.get("/api/task/getItems", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.items = data.items;
                    me.$nextTick(function () {
                        App.unblockUI("#dispath_body");
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
                });
            },
            fetchUser(){
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(response => {
                    var data = response.data;
                    me.userList = data.results;
                    console.log(JSON.parse(JSON.stringify(me.userList)));
                }, response => {
                    serverErrorInfo(response);
                })
            },
            create(){
                var me = this;
                var results = [];
                var items = me.items;
                for (var i = 0; i < items.length; i++) {
                    results.push({
                        id:items[i].id,
                        charge: items[i].master,
                        belongs: items[i].slave
                    });
                }
                console.log(results);
            },
            back(){
                router.push("/task/disPatch");
                //router.push("/task/disPatch");
            }
        }
    }

</script>
