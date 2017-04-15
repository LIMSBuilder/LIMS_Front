<template>
    <div>
        <h1 class="page-title"> 任务派遣
            <small>／Dispath</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="todo-ui">
                    <!-- BEGIN TODO CONTENT -->
                    <div class="todo-content">
                        <div class="portlet light ">
                            <!-- PROJECT HEAD -->
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="icon-bar-chart font-green-sharp hide"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">任务列表</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4">
                                        <div class="todo-tasklist" id="task_list">
                                            <template v-for="item in taskList">
                                                <div @click="viewDetails(item)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title">
                                                        {{item.identify}}
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
                                    <div class="col-md-4 col-sm-4 todo-container">
                                        <!--<div class="" v-show="!task.id">-->
                                        <!--<h4 class="text-center">监测项目分组信息</h4>-->
                                        <!--<h4 class="text-center">点击左侧显示</h4>-->
                                        <!--</div>-->
                                        <!--<div class="todo-tasklist " v-show="task.id">-->
                                        <!--<template v-for="item in items">-->
                                        <!--<div class="col-md-12 " style="background-color:#f6fbfc; margin-bottom: 10px; padding: 10px;">-->
                                        <!--<div class="todo-tasklist-item-title">-->
                                        <!--{{item.other}}-->
                                        <!--</div>-->
                                        <!--<div class="todo-tasklist-item-text">-->
                                        <!--<i class="fa fa-gg" style="margin-right: 10px"></i>-->
                                        <!--{{item.element.name}}:-->
                                        <!--<span>-->
                                        <!--21 12 121 31 3131331-->
                                        <!--</span>-->
                                        <!--</div>-->
                                        <!--<div class="todo-tasklist-item-text">-->
                                        <!--<i class="fa fa-gg" style="margin-right: 10px"></i>-->
                                        <!--{{item.element.name}}:-->
                                        <!--<span>-->
                                        <!--21 12 121 31 3131331-->
                                        <!--</span>-->
                                        <!--</div>-->
                                        <!--<div class="todo-tasklist-item-text">-->
                                        <!--<i class="fa fa-gg" style="margin-right: 10px"></i>-->
                                        <!--{{item.element.name}}:-->
                                        <!--<span>-->
                                        <!--21 12 121 31 3131331-->
                                        <!--</span>-->
                                        <!--</div>-->
                                        <!--<div class="right">-->
                                        <!--<button type="button" class="btn green " style="float: right;">-->
                                        <!--选 择-->
                                        <!--</button>-->
                                        <!--</div>-->
                                        <!--</div>-->
                                        <!--</template>-->

                                        <!--</div>-->
                                        <!-- Pagination -->
                                        <!--<div class="pagination pull-right">-->
                                        <!--<div class="M-box front pull-right" style="margin-top:10px; "></div>-->
                                        <!--</div>-->
                                        <!-- End Pagination -->


                                        <ul class="todo-projects-container">

                                            <li class="todo-projects-item ">
                                                <h3 class="font-grey-salsa">邦达诚科技有限公司【未选中，默认】</h3>
                                                <!--<p>Lorem dolor sit amet ipsum dolor sit consectetuer dolore. Lorem dolor-->
                                                <!--sit amet ipsum dolor sit consectetuer dolore.</p>-->
                                                <ul class="receiver_tag">
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目一</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目二</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目三</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目四</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目五</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目六</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目七</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目八</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目九</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目十</a>
                                                    </li>
                                                </ul>
                                                <div class="todo-project-item-foot">
                                                    <p class="todo-red todo-inline">
                                                        <a href="javascript:;" class="font-green">查看详情</a>
                                                    </p>
                                                    <p class="todo-inline todo-float-r">
                                                        <a href="javascript:;" class="font-grey-salsa">6 Members</a>
                                                        <a class="todo-add-button" href="javascript:;">+</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <div class="todo-projects-divider"></div>
                                            <li class="todo-projects-item todo-active">
                                                <h3 class="font-blue">邦达诚科技有限公司【已选中，蓝色】</h3>
                                                <!--<p>Lorem dolor sit amet ipsum dolor sit consectetuer dolore. Lorem dolor-->
                                                <!--sit amet ipsum dolor sit consectetuer dolore.</p>-->
                                                <ul class="receiver_tag">
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目一</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目二</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目三</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目四</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目五</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目六</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目七</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目八</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目九</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目十</a>
                                                    </li>
                                                </ul>
                                                <div class="todo-project-item-foot">
                                                    <p class="todo-red todo-inline">
                                                        <a href="javascript:;" class="font-green">查看详情</a>
                                                    </p>
                                                    <p class="todo-inline todo-float-r">
                                                        <a href="javascript:;" class="font-grey-salsa">6 Members</a>
                                                        <a class="todo-add-button" href="javascript:;">+</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <div class="todo-projects-divider"></div>
                                            <li class="todo-projects-item ">
                                                <h3 class="font-green">邦达诚科技有限公司【已成功，绿色】</h3>
                                                <!--<p>Lorem dolor sit amet ipsum dolor sit consectetuer dolore. Lorem dolor-->
                                                <!--sit amet ipsum dolor sit consectetuer dolore.</p>-->
                                                <ul class="receiver_tag">
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目一</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目二</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目三</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目四</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目五</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目六</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目七</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目八</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目九</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目十</a>
                                                    </li>
                                                </ul>
                                                <div class="todo-project-item-foot">
                                                    <p class="todo-red todo-inline">
                                                        <a href="javascript:;" class="font-green">查看详情</a>
                                                    </p>
                                                    <p class="todo-inline todo-float-r">
                                                        <a href="javascript:;" class="font-grey-salsa">6 Members</a>
                                                        <a class="todo-add-button" href="javascript:;">+</a>
                                                    </p>
                                                </div>
                                            </li>
                                            <div class="todo-projects-divider"></div>
                                            <li class="todo-projects-item ">
                                                <h3 class="font-red">邦达诚科技有限公司【未完成，红色】</h3>
                                                <!--<p>Lorem dolor sit amet ipsum dolor sit consectetuer dolore. Lorem dolor-->
                                                <!--sit amet ipsum dolor sit consectetuer dolore.</p>-->
                                                <ul class="receiver_tag">
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目一</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目二</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目三</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目四</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目五</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目六</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目七</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目八</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目九</a>
                                                    </li>
                                                    <li class="uppercase ">
                                                        <a href="javascript:;" style="line-height: 30px">项目十</a>
                                                    </li>
                                                </ul>
                                                <div class="todo-project-item-foot">
                                                    <p class="todo-red todo-inline">
                                                        <a href="javascript:;" class="font-green">查看详情</a>
                                                    </p>
                                                    <p class="todo-inline todo-float-r">
                                                        <a href="javascript:;" class="font-grey-salsa">6 Members</a>
                                                        <a class="todo-add-button" href="javascript:;">+</a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- Pagination -->
                                        <div class="pagination pull-right">
                                            <div class="M-box front pull-right" style="margin-top:10px; "></div>
                                        </div>
                                        <!-- End Pagination -->
                                    </div>
                                    <div class="col-md-4 col-sm-4 bg-after-green">
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#page_1" data-toggle="tab"> 任务派遣 </a>
                                                </li>
                                                <li>
                                                    <a href="#page_2" data-toggle="tab"> 执行中派遣 </a>
                                                </li>
                                                <li>
                                                    <a href="#page_3" data-toggle="tab"> 历史派遣 </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="page_1">
                                                    <form class="form-horizontal" action="#"
                                                          method="POST">
                                                        <h4>团队设置</h4>
                                                        <hr>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3" for="charge">负责人
                                                                <span class="required"> * </span>
                                                            </label>
                                                            <div class="col-md-9">
                                                                <select class="bs-select form-control"
                                                                        name="charge"
                                                                        id="charge"
                                                                        data-live-search="true" required>
                                                                    <template v-for="item in userList">
                                                                        <optgroup :label="item.name">
                                                                            <template v-for="user in item.user.results">
                                                                                <option :value="user.id">
                                                                                    {{user.name}}
                                                                                </option>
                                                                            </template>
                                                                        </optgroup>

                                                                    </template>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-md-3" for="join">参与人员
                                                                <span class="required">  </span>
                                                            </label>
                                                            <div class="col-md-9">
                                                                <select class="bs-select form-control"
                                                                        name="charge"
                                                                        id="join"
                                                                        data-live-search="true" multiple>
                                                                    <template v-for="item in userList">
                                                                        <optgroup :label="item.name">
                                                                            <template v-for="user in item.user.results">
                                                                                <option :value="user.id">
                                                                                    {{user.name}}
                                                                                </option>
                                                                            </template>
                                                                        </optgroup>

                                                                    </template>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="tab-pane" id="page_2">
                                                    bb
                                                </div>
                                                <div class="tab-pane" id="page_3">
                                                    cc
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group col-md-12 col-sm-12">
                                            <h4>负责项目</h4>
                                            <hr>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END TODO CONTENT -->
                </div>
            </div>
            <!-- END PAGE CONTENT-->
        </div>
        <div class="modal fade" id="dispatch" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-full">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">设置派遣人员</h4>
                    </div>
                    <div class="modal-body">
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 序号</th>
                                    <!--<th> 公司、道路名称</th>-->
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
                                            <!--<td class="text-center"-->
                                            <!--v-if="projectIndex==0"-->
                                            <!--:rowspan="item.project.length">-->
                                            <!--{{item.company}}-->
                                            <!--</td>-->
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
                                                        <select class="bs-select form-control" data-live-search="true">
                                                            <template v-for="department in userList">
                                                                <optgroup :label="department.name">
                                                                    <template v-for="user in department.user.results">
                                                                        <option>{{user.name}}</option>
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
                                                                data-actions-box="true" data-live-search="true">
                                                            <template v-for="department in userList">
                                                                <optgroup :label="department.name">
                                                                    <template v-for="user in department.user.results">
                                                                        <option>{{user.name}}</option>
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
                    </div>
                    <div class="modal-footer" id="dispath_body">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                        <button type="button" class="btn green">保存方案</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </div>
</template>

<script type="es6">
    import 'style/contract_list'
    import 'style/socicon'
    import '../../../style/todo.css'
    import '../../../script/todo'
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "",
                taskList: [],
                task: {
                    type: {}
                },
                items: [],
                userList: [],
                project: []
            }
        },
        mounted(){
            var me = this;
            me.getData();
            me._handleProjectListMenu();
            App.addResizeHandler(function () {
                me._handleProjectListMenu();
            });

            me.fetchUser();

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
            _handleProjectListMenu: function () {
                if (App.getViewPort().width <= 992) {
                    $('.todo-project-list-content').addClass("collapse");
                } else {
                    $('.todo-project-list-content').removeClass("collapse").css("height", "auto");
                }
            },
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
            /*抓取数据*/
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
                    me.task = data;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchUser(){
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(response => {
                    var data = response.data;
                    me.userList = data.results;
                    me.$nextTick(function () {
                        $('#charge').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择负责人",
                            dropupAuto: false
                        });

                        $('#join').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            countSelectedText: "count",
                            deselectAllText: "取消选择",
                            selectAllText: "选择全部",
                            noneSelectedText: "请选择参与人员",
                            dropupAuto: false
                        });
                    });
                }, response => {
                    serverErrorInfo(response);
                })
            }
        }
    }

</script>
