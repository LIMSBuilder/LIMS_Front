<template>
    <div>
        <h1 class="page-title"> 查看任务下达人员
            <small>／Dispath</small>
        </h1>
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body" id="dispath_body">
                <form action="#" class="form-horizontal">
                    <div class="form-body">
                        <h3 class="form-section">任务下达人员表</h3>
                        <table class="table table-hover table-light">
                            <thead>
                            <tr class="uppercase">
                                <th> 序号</th>
                                <th> 环境要素</th>
                                <th> 监测点（个）</th>
                                <th> 监测项目</th>
                                <th> 监测频次</th>
                                <th> 备注</th>
                                <tH> 参与者</tH>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="(item,index) in items">
                                <tr>
                                    <td class="text-center">
                                        {{index+1}}
                                    </td>
                                    <td class="text-center">
                                        {{item.element.name}}
                                    </td>
                                    <td class="text-center">
                                        {{item.point}}
                                    </td>
                                    <td class="text-center">
                                        <button type="button" class="btn green btn-outline"
                                                @click="showProjectName(item.id)">
                                            详情
                                        </button>
                                    </td>
                                    <td class="text-center">
                                        {{item.frequency?item.frequency.total:''}}
                                    </td>
                                    <td class="text-center">
                                        {{item.other}}
                                    </td>
                                    <td class="text-center">
                                        <template v-for="join in item.join">
                                            {{join.name}}
                                        </template>
                                    </td>
                                </tr>
                            </template>
                            </tbody>
                        </table>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button type="button" class="btn blue" @click="back">返回列表</button>
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
                            <template v-for="item in project">
                                <li class="uppercase ">
                                    <a href="javascript:;" style="line-height: 30px">
                                        {{item.name}}
                                        <template
                                                v-if="item.isPackage==true">
                                            <span style="color: red;">[分包]</span>
                                        </template>
                                    </a>
                                </li>
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
                project: []
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            me.id = query.id;
            me.fetchItems(me.id);
        },
        methods: {
            fetchItems(id){
                var me = this;
                App.startPageLoading({animate: true});//为了防止页面刷新慢，在用户等待的时候出现一些等待动画效果
                me.$http.get("/api/task/check", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
//                    debugger
                    me.items = data.items;
                    App.stopPageLoading();
                }, response => {
                    serverErrorInfo(response);
                });
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
                        me.project = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
                jQuery("#showProject").modal("show");

            }
        }
    }

</script>
