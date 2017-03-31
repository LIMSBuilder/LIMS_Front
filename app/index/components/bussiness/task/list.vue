<template>
    <div>
        <h1 class="page-title"> 任务列表
            <small>／Task</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN TODO SIDEBAR -->
                <div class="todo-ui">
                    <div class="todo-sidebar">
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span class="caption-subject font-green-sharp bold uppercase">任务进展 </span>
                                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看任务进展</span>
                                </div>

                            </div>
                            <div class="portlet-body todo-project-list-content">
                                <div class="todo-project-list">
                                    <ul class="nav nav-stacked">
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('total')">全部 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('before_dispath')">待派遣 </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span class="caption-subject font-red bold uppercase">监测类别 </span>
                                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看</span>
                                </div>
                                <div class="actions">
                                    <div class="actions">
                                        <a class="btn btn-circle grey-salsa btn-outline btn-sm" href="/type/create">
                                            <i class="fa fa-plus"></i> 新增 </a>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                                <div class="todo-project-list">
                                    <ul class="nav nav-pills nav-stacked">
                                        <template v-for="item in typeList">
                                            <li>
                                                <a href="javascript:;" @click="searchByType(item.id)">
                                                    {{item.name}} </a>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span class="caption-subject font-yellow bold uppercase">采样类型 </span>
                                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看</span>
                                </div>
                            </div>
                            <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                                <div class="todo-project-list">
                                    <ul class="nav nav-pills nav-stacked">
                                        <li>
                                            <a href="javascript:;" @click="searchBySampleType(0)">
                                                自送样 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchBySampleType(1)">
                                                现场送样 </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span class="caption-subject font-blue bold uppercase">搜索 </span>
                                </div>
                            </div>
                            <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                                <div class="form-group form-md-line-input form-md-floating-label"
                                     style="padding-top: 0;">
                                    <div class="input-icon right">
                                        <input type="text" class="form-control" @keyup.enter="searchKey($event)">
                                        <span class="help-block">支持委托单位、合同编号和项目名称查询。</span>
                                        <i class="fa fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END TODO SIDEBAR -->
                    <!-- BEGIN TODO CONTENT -->
                    <div class="todo-content">
                        <div class="portlet light ">
                            <!-- PROJECT HEAD -->
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="icon-bar-chart font-green-sharp hide"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">任务列表</span>
                                </div>
                                <div class="actions">
                                    <div class="btn-group">
                                        <a class="btn green btn-circle btn-sm" href="javascript:;"
                                           data-toggle="dropdown"
                                           data-hover="dropdown" data-close-others="true"> 操 作
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu pull-right">
                                            <li>
                                                <a href="javascript:;"> 创建新任务 </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;"> 作为模板任务创建 </a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="javascript:;"> 导出任务
                                                    <span class="badge badge-success"> 12 </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" @click="stopTask"> 中止任务</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="javascript:;"> 删除任务 </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-5 col-sm-4">
                                        <div class="todo-tasklist" id="task_list">
                                            <template v-for="item in taskList">
                                                <div @click="viewDetails(item)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title">
                                                        {{item.identify}} /
                                                        <span class="label label-sm label-default"
                                                              v-if="item.sample_type==0">自送样</span>
                                                        <span class="label label-sm label-default"
                                                              v-if="item.sample_type==1">现场采样</span>
                                                    </div>
                                                    <div class="todo-tasklist-item-text"> {{item.name}}
                                                    </div>
                                                    <div class="todo-tasklist-controls pull-left">
                                                                    <span class="todo-tasklist-date">
                                                                        <i class="fa fa-calendar"></i> {{item.create_time}} </span>
                                                        <!--<span class="todo-tasklist-badge badge badge-roundless">Urgent</span>-->
                                                    </div>
                                                    <div class="todo-tasklist-controls pull-left">
                                                                    <span class="todo-tasklist-date">
                                                                        <i class="fa fa-home"></i> {{item.client_unit}} </span>
                                                        <!--<span class="todo-tasklist-badge badge badge-roundless">Urgent</span>-->
                                                    </div>
                                                    <div class="todo-tasklist-controls pull-right">
                                                        <span class="label label-sm label-danger"
                                                              v-if="item.process==-2">已中止</span>
                                                        <span class="label label-sm label-info"
                                                              v-if="item.process==1">未派遣</span>
                                                        <span class="label label-sm label-primary"
                                                              v-if="item.process==2">待执行</span>



                                                    </div>
                                                </div>
                                            </template>

                                        </div>
                                        <!-- Pagination -->
                                        <div class="pagination pull-right">
                                            <div class="M-box front pull-right" style="margin-top:10px; "></div>
                                        </div>
                                        <!-- End Pagination -->
                                    </div>
                                    <div class="todo-tasklist-devider"></div>
                                    <div class="col-md-7 col-sm-8" v-show="!task.id">
                                        <h1 class="text-center">暂无任务信息</h1>
                                    </div>
                                    <div class="col-md-7 col-sm-8" v-show="task.id">
                                        <form action="#" class="form-horizontal form-bordered form-row-stripped">
                                            <!-- TASK HEAD -->
                                            <div class="form" style="margin-bottom: 40px;">
                                                <div class="form-group">
                                                    <div class="col-md-8 col-sm-8">
                                                        <div class="todo-taskbody-user">
                                                            <div class="todo-userpic pull-left"
                                                                 style="margin-right: 10px;">
                                                                <i class="socicon-btn socicon-btn-circle socicon-vimeo tooltips"></i>
                                                            </div>
                                                            <span class="todo-username pull-left">{{task.name}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4">
                                                        <div class="todo-taskbody-date pull-right">
                                                            <!--<button type="button"-->
                                                            <!--class="todo-username-btn btn btn-circle btn-default btn-sm">-->
                                                            <!--&nbsp; 导 出 &nbsp;</button>-->

                                                            <span class="todo-username pull-left"
                                                                  style="font-size: 14px;">编号：{{task.identify}}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#page_1" data-toggle="tab"> 任务详情 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 监测项目 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_3" data-toggle="tab"> 相关文件 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_4" data-toggle="tab"> 操作日志 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="page_1">
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">委托单位
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.client_unit}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">邮政编码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.client_code}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系地址
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.client_address}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系电话
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.client_tel}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系人
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.client}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">传真号码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.client_fax}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">项目名称
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.name}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">监测目的
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.aim}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">监测类别
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{task.type.name}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">检测方式
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static"
                                                                           v-if="task.way==1">
                                                                            以我单位通过计量认证、国家实验室认可的方法进行检测。</p>
                                                                        <p class="form-control-static"
                                                                           v-if="task.way==2">
                                                                            客户指定的方法：{{task.wayDesp}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="page_2">
                                                            <div class="table-scrollable table-scrollable-borderless">
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
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <template v-for="(item,index) in items">
                                                                        <tr>
                                                                            <td class="text-center">{{index+1}}</td>
                                                                            <td class="text-center">{{item.company}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{item.element.name}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{item.point}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <button type="button"
                                                                                        class="btn green btn-outline"
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
                                                                            <td class="text-center">{{item.other}}</td>
                                                                        </tr>
                                                                    </template>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="page_3">
                                                            <table class="table table-hover">
                                                                <tr>
                                                                    <td>
                                                                        导出该任务

                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <button type="button"
                                                                                class="btn green btn-outline"
                                                                                style="margin: 5px;">导 出
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div class="tab-pane" id="page_4">
                                                            <ul class="todo-task-history">
                                                                <template v-for="item in log">
                                                                    <li>
                                                                        <div class="todo-task-history-date">
                                                                            {{item.log_time}}
                                                                        </div>
                                                                        <div class="todo-task-history-desc">
                                                                            {{item.log_msg}}
                                                                        </div>
                                                                    </li>
                                                                </template>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END TODO CONTENT -->
                </div>
            </div>
            <!-- END PAGE CONTENT-->
            <div class="modal fade draggable-modal" id="showProject" tabindex="-1" role="basic" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h4 class="modal-title">检测项目详情列表</h4>
                        </div>
                        <div class="modal-body">
                            <ul class="receiver_tag">
                                <template v-for="names in projectName">
                                    <li class="uppercase"><a href="javascript:;">{{names.name}}</a></li>
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
    </div>
</template>
<script type="es6">
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                typeList: [],
                currentPage: 1,
                condition: "",
                taskList: [],
                task: {
                    type: {}
                },
                items: [],
                log: [],
                total_count: {},
                projectName: [],
                countProcess: ""
            }
        },
        mounted(){
            var me = this;
            //me._initComponents();
            //me._handleProjectListMenu();
            me.init();
            me.getData();
            App.addResizeHandler(function () {
                me._handleProjectListMenu();
            });
            me.fetchCount();

            jQuery(".todo-tasklist").off("click").on("click", function (e) {
                var dom = jQuery(e.target);
                while (!dom.hasClass("todo-tasklist-item") && dom[0] && dom[0].tagName != "body") {
                    dom = dom.parents(".todo-tasklist-item");
                }
                if (dom.hasClass("todo-tasklist-item")) {
                    jQuery(".todo-tasklist-item").removeClass("active");
                    dom.addClass('active');
                }
            })
        },
        methods: {
            init: function () {
                var me = this;
                me.$http.get("/api/type/task_total").then(function (response) {
                    var data = response.data;
                    me.typeList = data.results;
                }, function (response) {
                    serverErrorInfo(response);
                })
            },
//            _handleProjectListMenu: function () {
//                if (App.getViewPort().width <= 992) {
//                    $('.todo-project-list-content').addClass("collapse");
//                } else {
//                    $('.todo-project-list-content').removeClass("collapse").css("height", "auto");
//                }
//            },
            fetchData(pageNum, rowCount){
                var me = this;
                App.startPageLoading({animate: true});
                this.$http.get('/api/task/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.taskList = data.results;
                    me.$nextTick(function () {
                        App.stopPageLoading();
                    })
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            fetchPages(rowCount){
                var me = this;
                this.$http.get('/api/task/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: me.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    jQuery(".M-box").pagination({
                        pageCount: data.totalPage || 1,
                        coping: true,
                        homePage: '首页',
                        endPage: '末页',
                        prevContent: '上页',
                        nextContent: '下页',
                        callback: function (data) {
                            me.fetchData(data.getCurrent(), rowCount, me.condition);
                            me.currentPage = data.getCurrent();
                        }
                    });
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            fetchItems(id){
                var me = this;
                me.$http.get("/api/task/getItems", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.items = data.items;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchLog(id){
                var me = this;
                me.$http.get("/api/log/taskLog", {
                    params: {
                        id: id
                    }
                }).then(response => {
                        var data = response.data;
                        me.log = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            viewDetails(item){
                var me = this;
                me.$http.get("/api/task/taskDetails", {
                    params: {
                        id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    debugger
                    me.task = data;
                }, response => {
                    serverErrorInfo(response);
                });
                me.fetchItems(item.id);
                me.fetchLog(item.id);
            },
            search(){
                var me = this;
                me.currentPage = 1;
                me.condition = "";
                me.getData();
            },
            searchByType(id){
                var me = this;
                me.currentPage = 1;
                me.condition = "type=" + id;
                me.getData();
            },
            searchBySampleType(id){
                var me = this;
                me.currentPage = 1;
                me.condition = "sample_type=" + id;
                me.getData();
            },
            searchByProcess(step){
                var me = this;
                me.currentPage = 1;
                if (step != "total") {
                    me.condition = "process=" + step;
                } else {
                    me.condition = "";
                }
                me.getData();

            },
            searchKey(e){
                var me = this;
                me.condition = "keyWords=" + encodeURI(e.target.value);
                me.currentPage = 1;
                me.getData();
            },
            //task/list检测项目查看详情
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

            },
            //获取task/list合同进展个数
            fetchCount(){
                var me = this;
                me.$http.get("/api/task/countTotal").then(
                    response => {
                        var data = response.data;
                        me.countProcess = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            stopTask(){
                var me = this;
                confirm({
                    title: "<span><i class='font-red font-lg fa fa-warning'></i> 警告！危险操作</span>",
                    content: "您正在中止任务【" + me.task.name + "】，该操作将同时中止当前任务流程与对应的合同（若有）且无法撤销，是否继续？",
                    success(){
                        me.$http.get("/api/task/stopTask", {
                            params: {
                                id: me.task.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("任务中止成功！");
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            }
        }
    }

</script>
