<template id="template-home">
    <div>
        <div>
            <h1 class="page-title"> 任务派遣
                <small>／Labdispatch</small>
            </h1>
            <div class="row">
                <div class="col-md-12">
                    <div class="todo-ui">
                        <div class="todo-content">
                            <div class="portlet light ">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-bar-chart font-green-sharp hide"></i>
                                        <span class="caption-subject font-green-sharp bold uppercase">任务派遣</span>
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-4">
                                            <div class="todo-tasklist" id="task_list">
                                                <template v-for="item in qualityList">
                                                    <div @click="viewDetails(item.id)"
                                                         :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                        <div class="todo-userpic pull-left" style="margin-right: 10px;">
                                                            <i
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
                                            <div class="todo-projects-item" v-if="labdetail.length!=0">
                                                <template v-for="(item,index) in labdetail.items">
                                                    <ul class="todo-projects-container ">
                                                        <li class="todo-projects-item ">
                                                            <span class="label label-info"
                                                                  v-if="item.flag==null"> 未分配 </span>
                                                            <span class="label label-danger"
                                                                  v-if="item.flag==1"> 已分配 </span>
                                                            <span class="label label-success"
                                                                  v-if="item.flag==2"> 已完成 </span>
                                                            {{labdetail.task_identify}}--{{item.name}}
                                                            <a class="todo-add-button" href="javascript:;"
                                                               @click="addlabdispatch(item,labdetail.task_identify,index)"
                                                               v-if="item.flag==null && item.active==0">+</a>
                                                        </li>
                                                    </ul>
                                                </template>
                                            </div>
                                            <div class="todo-projects-item" v-if="labdetail.length==0">
                                                <ul class="todo-projects-container"
                                                    style="padding: 0px;">
                                                    <li>尚未选择任务。</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="todo-tasklist-devider"></div>


                                        <div class="col-md-4 col-sm-4 bg-after-green" v-if="flagdispatch==0">
                                            <div class="tabbable-line">
                                                <h4>尚未选择分派任务</h4>
                                            </div>
                                        </div>

                                        <div class="col-md-4 col-sm-4 bg-after-green" v-if="flagdispatch==1">
                                            <div class="tabbable-line">
                                                <ul class="nav nav-tabs ">
                                                    <li class="active">
                                                        <a href="#page_1" data-toggle="tab"> 任务派遣 </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content" id="dispatclab">
                                                    <div class="tab-pane active" id="page_1">
                                                        <div class="form-group todo-container"
                                                             style="padding: 10px 0px ">
                                                            <form class="form-horizontal" action="#"
                                                                  method="POST" id="deliveryForm">
                                                                <div class="form-group">
                                                                    <label class="control-label col-md-3" for="charge">分析者
                                                                        <span class="required"> * </span>
                                                                    </label>
                                                                    <div class="col-md-9">
                                                                        <select class="bs-select form-control"
                                                                                name="charge"
                                                                                id="charge"
                                                                                data-live-search="true"
                                                                                required v-model="useralabdispatch">
                                                                            <option></option>
                                                                            <template v-for="item in userList">
                                                                                <option :value="item.lab">
                                                                                    {{item.name}}
                                                                                </option>
                                                                            </template>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <h4>负责项目</h4>
                                                            <hr>
                                                            <div class="todo-projects-item">
                                                                <ul class="todo-projects-container"
                                                                    style="padding: 0px;">
                                                                    <li class="todo-projects-item "
                                                                        v-if="chooseLabproject.length!=0">
                                                                        <h4 class="font-grey-salsa">
                                                                            {{taskIdentify}}/{{chooseLabproject.name}}
                                                                        </h4>
                                                                    </li>
                                                                    <li v-if="chooseLabproject.length==0">尚未选择任务。</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <hr>
                                                        <button type="button" class="btn green"
                                                                @click="createDispatch"
                                                                style="float: right; ">
                                                            保存
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script type="es6">
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "process=6",
                qualityList: [],
                userList: [],
                labdetail: [],
                chooseLabproject: [],
                taskIdentify: "",
                useralabdispatch: "",//分配人员
                disproject: "",//分配任务,
                flagdispatch: 0//标记分配任务

            }
        },
        mounted(){
            var me = this;
            //me._initComponents();
            //me._handleProjectListMenu();
            me.getData();
            App.addResizeHandler(function () {
                me._handleProjectListMenu();
            });
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
        },
        methods: {
            fetchData(pageNum, rowCount){
                var me = this;
                App.startPageLoading({animate: true});//用户等待时，提示的loading条
                this.$http.get('/api/task/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.qualityList = data.results;
                    me.$nextTick(function () {
                        App.stopPageLoading();//获取数据后，去掉loading条
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
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            fetchUser(id){
                var me = this;
                App.startPageLoading({animate: true});//用户等待时，提示的loading条
                me.$http.get("/api/lab/labUserList", {
                    params: {
                        item_project_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.userList = data.results;
                    me.$nextTick(function () {
                        $('#charge').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择负责人",
                            dropupAuto: false
                        });
                        me.$nextTick(function () {
                            App.stopPageLoading();//获取数据后，去掉loading条
                        })
                    });
                }, response => {
                    serverErrorInfo(response);
                })
            },
            viewDetails(id){
                var me = this;
                me.flagdispatch = 0;
                //销毁监测项目选择框
                $('#charge').selectpicker('destroy');
                App.startPageLoading({animate: true});//用户等待时，提示的loading条
                me.$http.get("/api/lab/delivery", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.labdetail = data;
                    for (var i = 0; i < data.items.length; i++) {
                        if (data.items[i].flag == 1) {
                            me.labdetail.items[i].active = "1";
                        }
                        else {
                            me.labdetail.items[i].active = "0";
                        }
                    }
                    me.$nextTick(function () {
                        App.stopPageLoading();//获取数据后，去掉loading条
                    })
                }, response => {
                    serverErrorInfo(response);
                })

            },
            addlabdispatch(item, task_identify, index){
                var me = this;
                me.flagdispatch = 1;
                me.userList = [];
                for (var i = 0; i < me.labdetail.items.length; i++) {
                    if (me.labdetail.items[i].flag == 1) {
                        me.labdetail.items[i].active = "1";
                    }
                    else {
                        me.labdetail.items[i].active = "0";
                    }
                }
                //销毁监测项目选择框
                $('#charge').selectpicker('destroy');
                me.labdetail.items[index].active = "1";
                me.chooseLabproject = item;
                me.taskIdentify = task_identify;
                me.disproject = item.project_id;
                me.fetchUser(item.item_project_id);
            },
            createDispatch(){
                var me = this;
                var disitem = {
                    task_id: "",
                    project_id: "",
                    user_id: ""
                };
                disitem.task_id = me.labdetail.id;
                disitem.project_id = me.disproject;
                disitem.user_id = me.useralabdispatch;
                me.$http.post("/api/lab/saveAnalysis", disitem).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("任务分配成功！");
                            me.viewDetails(me.labdetail.id);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })

            }
        }
    }
</script>