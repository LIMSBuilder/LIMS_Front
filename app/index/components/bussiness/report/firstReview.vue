<template>
    <div>
        <h1 class="page-title"> 报告一审
            <small>／Report Review</small>
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
                                    <div class="col-md-3 col-sm-3">
                                        <div class="todo-tasklist" id="task_list">
                                            <!--<div class="todo-tasklist-item todo-tasklist-item-border-warning">-->
                                            <!--<h4 class="text-center">显示全部</h4>-->
                                            <!--</div>-->
                                            <template v-for="item in taskList">
                                                <div @click="viewElementMonitor(item.id)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title">
                                                        任务编号：{{item.identify}}
                                                        <div class="pull-right">
                                                            <button type="button" class="btn blue btn-sm btn-outline"
                                                                    @click="flow(item.id)">流 转
                                                            </button>
                                                        </div>
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
                                    <div class="col-md-3 col-sm-3 todo-container">
                                        <div class="todo-projects-item">
                                            <ul class="todo-projects-container ">
                                                <template v-for="item in elementMonitor">
                                                    <li class="todo-projects-item ">
                                                        <h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">
                                                            {{item.company}}
                                                        </h4>
                                                        <ul class="receiver_tag">
                                                            <template v-for="result in item.results">
                                                                <li class="uppercase ">
                                                                    <a href="javascript:;" style="line-height: 30px">
                                                                        {{result.name}}
                                                                    </a>
                                                                </li>
                                                            </template>
                                                        </ul>
                                                        <div class="todo-project-item-foot">
                                                            <p class="todo-red todo-inline">
                                                                <a href="javascript:;" class="font-green"
                                                                   @click="showProject(item.id)">查看详情</a>
                                                            </p>
                                                            <p class="todo-inline todo-float-r">
                                                                <button type="button"
                                                                        class="btn btn-sm green btn-outline">完 成
                                                                </button>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <div class="todo-projects-divider"></div>
                                                </template>
                                                <li class="todo-projects-item " v-if="elementMonitor.length==0"
                                                    style="height: 100px;">
                                                    <h4>尚未选择任务，或不存在待派遣任务</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 bg-after-green">
                                        <div class="tab-pane active" id="page_1">
                                            <div class="form-group todo-container" style="padding: 10px 0px ">
                                                <h4>报告列表</h4>
                                                <hr>
                                                <div class="table-scrollable table-scrollable-borderless">
                                                    <table class="table table-hover table-light">
                                                        <thead>
                                                        <tr class="uppercase">
                                                            <th> 序号</th>
                                                            <th> 报告类别</th>
                                                            <th> 创建者</th>
                                                            <th> 创建时间</th>
                                                            <th> 来源</th>
                                                            <th> 查看</th>
                                                            <th> 操作</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td class="text-center">1</td>
                                                            <td class="text-center">水质</td>
                                                            <td class="text-center">张三</td>
                                                            <td class="text-center"> 2017-03-21</td>
                                                            <td class="text-center"> 上传</td>
                                                            <td class="text-center">
                                                                <button type="button"
                                                                        class="btn btn-sm green btn-outline">查 看
                                                                </button>
                                                            </td>
                                                            <td class="text-center">
                                                                <button type="button"
                                                                        class="btn btn-sm btn-outline  blue"
                                                                        @click="reviewReport">审 核
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <hr>
                                            <button type="button" class="btn green"
                                                    style="float: right; ">
                                                完 成
                                            </button>
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
        <div class="modal fade bs-modal-lg draggable-modal" id="showProject" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看详情</h4>
                    </div>
                    <div class="modal-body">
                        <h4>监测项目</h4>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 序号</th>
                                    <th> 环境要素</th>
                                    <th> 监测点（个）</th>
                                    <th> 监测项目</th>
                                    <th> 监测频次</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item,index) in element">
                                    <tr>
                                        <td class="text-center">{{index+1}}</td>
                                        <td class="text-center">
                                            {{item.element.name}}
                                        </td>
                                        <td class="text-center">
                                            {{item.point}}
                                        </td>
                                        <td class="text-center">
                                            <template v-for="p in item.project">
                                                {{p.name}}
                                                <span class="font-red" v-if="p.isPackage==1">[分包]</span>
                                            </template>
                                        </td>
                                        <td class="text-center">
                                            {{item.frequency?item.frequency.total:''}}
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                        <hr>
                        <h4>样品信息</h4>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 序号</th>
                                    <th> 样品编号</th>
                                    <th> 样品名称</th>
                                    <th> 监测项目</th>
                                    <th> 点位名称</th>
                                    <th> 备注</th>
                                    <th> 平行</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(sample,index) in sampleList">
                                    <tr :id="sample.identify">
                                        <td class="text-center">{{index+1}}</td>
                                        <td class="text-center">{{sample.identify}}
                                        </td>
                                        <td class="text-center">
                                            <span>{{sample.name}}</span>
                                        </td>
                                        <td>
                                            <template
                                                    v-for="item in sample.projectList">
                                                {{item.name}}
                                            </template>
                                        </td>
                                        <td class="text-center">
                                            <span>{{sample.point}}</span>
                                        </td>
                                        <td>
                                            <span>{{sample.other}}</span>
                                        </td>
                                        <td class="text-center">
                                            <a href="javascript:;"
                                               @click="lightBtn(sample.isbalance)">{{sample.isbalance?sample.isbalance.identify:'否'}}</a>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                        <hr>
                        <h4>编制人员：张三</h4>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>


        <div class="modal fade bs-modal-lg" id="reviewReport" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">报告审核</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">报告报表及各种记录是否齐全？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio11" v-model="result.condition1" value="1"
                                               name="radio1"
                                               class="md-radiobtn">
                                        <label for="radio11">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio12" v-model="result.condition1" value="0"
                                               name="radio1"
                                               class="md-radiobtn">
                                        <label for="radio12">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">监测内容与任务书是否一致？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio21" v-model="result.condition2" value="1"
                                               name="radio2"
                                               class="md-radiobtn">
                                        <label for="radio21">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio22" v-model="result.condition2" value="0"
                                               name="radio2"
                                               class="md-radiobtn">
                                        <label for="radio22">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">监测数据与原始记录是否一致？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio31" v-model="result.condition3" value="1"
                                               name="radio3"
                                               class="md-radiobtn">
                                        <label for="radio31">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio32" v-model="result.condition3" value="0"
                                               name="radio3"
                                               class="md-radiobtn">
                                        <label for="radio32">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">数据处理和填报是否满足要求？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio41" v-model="result.condition4" value="1"
                                               name="radio4"
                                               class="md-radiobtn">
                                        <label for="radio41">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio42" v-model="result.condition4" value="0"
                                               name="radio4"
                                               class="md-radiobtn">
                                        <label for="radio42">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">监测分析方法是否现行有效？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio51" v-model="result.condition5" value="1"
                                               name="radio5"
                                               class="md-radiobtn">
                                        <label for="radio51">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio52" v-model="result.condition5" value="0"
                                               name="radio5"
                                               class="md-radiobtn">
                                        <label for="radio52">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">极端数据是否符合逻辑？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio61" v-model="result.condition6" value="1"
                                               name="radio6"
                                               class="md-radiobtn">
                                        <label for="radio61">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio62" v-model="result.condition6" value="0"
                                               name="radio6"
                                               class="md-radiobtn">
                                        <label for="radio62">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">标准引用和结论是否准确？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio71" v-model="result.condition7" value="1"
                                               name="radio7"
                                               class="md-radiobtn">
                                        <label for="radio71">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio72" v-model="result.condition7" value="0"
                                               name="radio7"
                                               class="md-radiobtn">
                                        <label for="radio72">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <textarea class="form-control" rows="5" v-model="result.other"
                                  placeholder="备注信息"></textarea>
                        <hr>
                        <div class="row margin-bottom-20">
                            <div class="col-md-12">
                                <p>审核结果：<span class="label label-success"
                                              v-if="result.condition1==1&&result.condition2==1&&result.condition3==1&&result.condition4==1&&result.condition5==1&&result.condition6==1&&result.condition7==1"> 通过 </span>
                                    <span v-else class="label label-danger">拒绝</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                        <button type="button" class="btn green btn-outline" @click="review">保存审核
                        </button>
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
                condition: "process=delivery",
                taskList: [],
                task: {
                    type: {}
                },
                items: [],
                userList: [],
                element: [],
                project: [],
                elementMonitor: [],
                addProjectList: [],
                dispatch: {
                    charge_id: "",
                    project: []
                },
                sampleList: [],
                result: {
                    condition1: 1,
                    condition2: 1,
                    condition3: 1,
                    condition4: 1,
                    condition5: 1,
                    condition6: 1,
                    condition7: 1,
                    other: ""
                }
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
            });

            jQuery(".todo-projects-item").off("click").on("click", function (e) {
                var dom = jQuery(e.target);
                while (!dom.hasClass("todo-projects-item") && dom[0] && dom[0].tagName != "body") {
                    dom = dom.parents(".todo-projects-item");
                }
                if (dom.hasClass("todo-projects-item")) {
                    jQuery(".todo-projects-item").removeClass("todo-active");
                    dom.addClass('todo-active ');
                }
            });
            BlogUtils.formValid(jQuery("#deliveryForm"));
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
//                    debugger
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
                            noneSelectedText: "请选择报告类型",
                            dropupAuto: false
                        });
                    });
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //点击获取任务书中的环境要素和监测项目
            viewElementMonitor(id){
                var me = this;
                me.$http.get("/api/task/taskGetItems", {
                    params: {
                        task_id: id
                    }
                }).then(
                    response => {
                        var data = response.data;
                        //me.elementMonitor = data;
                        var projectList = me.addProjectList;
                        for (var i = 0; i < data.length; i++) {
                            for (var j = 0; j < projectList.length; j++) {
                                if (data[i].task_id == projectList[j].task_id && data[i].company == projectList[j].company) {
                                    data[i].isActive = 1;
                                    break;
                                } else {
                                    data[i].isActive = 0;
                                }
                            }
                        }
                        me.elementMonitor = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
            },
            //查看详细的环境要素
            showProject(company){
                var me = this;
                me.$http.get("/api/task/getByCompanyId", {
                    params: {
                        company_id: company
                    }

                }).then(
                    response => {
                        var data = response.data;
                        me.element = data.items;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
                me.fetchSamples(company);
                jQuery("#showProject").modal("show");

            },
            fetchSamples(id){
                var me = this;
                me.$http.get("/api/sample/list", {
                    params: {
                        company_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    $('.select-project').selectpicker('destroy');
                    me.sampleList = data.results;
                }, response => {
                    serverErrorInfo(response)
                })
            },
            lightBtn(item){
                var me = this;
                if (item) {
                    BlogUtils.pulsate(item.identify);
                }
            },
            reviewReport(){
                var me = this;
                jQuery("#reviewReport").modal("show");
            },
            review(){
                var me = this;
                var obj = me.result;
                obj.task_id = me.task.id;
                confirm({
                    content: "是否完成当前报告审核?",
                    success(){
                        me.$http.post("/api/inspect/firstReview", obj).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("审核成功！");
                                    me.chooseProject(me.chooseItem);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        });
                    }
                })
            },
            flow(id){
                var me = this;
                confirm({
                    content: "是否确认已完成所有作业的样品登记并流转该任务？",
                    success: function () {
                        me.$http.get("/api/dispatch/checkFlowLab", {
                            params: {
                                task_id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("任务书流转成功！");
                                    me.getData();
                                },
                                501: "当前存在未完成作业，无法流转！"
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
