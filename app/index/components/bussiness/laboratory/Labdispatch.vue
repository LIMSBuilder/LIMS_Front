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
                                            <div class="todo-projects-item">
                                                <ul class="todo-projects-container ">

                                                    <li class="todo-projects-item ">
                                                        <!--<h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">-->
                                                        <span class="label label-success"> 已完成 </span>任务号码——分析项目
                                                    </li>
                                                </ul>
                                                <ul class="todo-projects-container">
                                                    <li class="todo-projects-item ">
                                                        <!--<h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">-->
                                                        <span class="label label-danger"> 已完成 </span>任务号码——分析项目
                                                    </li>
                                                </ul>
                                                <ul class="todo-projects-container">
                                                    <li class="todo-projects-item ">
                                                        <!--<h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">-->
                                                        <span class="label label-info"> 已完成 </span>任务号码——分析项目
                                                    </li>
                                                </ul>
                                                <ul class="todo-projects-container">
                                                    <li class="todo-projects-item ">
                                                        <!--<h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">-->
                                                        <span class="label label-success"> 已完成 </span>任务号码——分析项目
                                                        <a class="todo-add-button" href="javascript:;"
                                                           @click="addProject()">+</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="todo-tasklist-devider"></div>


                                        <div class="col-md-4 col-sm-4 bg-after-green">
                                            <div class="tabbable-line">
                                                <ul class="nav nav-tabs ">
                                                    <li class="active">
                                                        <a href="#page_1" data-toggle="tab"> 任务派遣 </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content" id="dispatclab">
                                                    <div class="tab-pane active" id="page_1">
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
                                                                            required>
                                                                        <option></option>
                                                                        <template v-for="item in userList">
                                                                            <optgroup :label="item.name">
                                                                                <template
                                                                                        v-for="user in item.user.results">
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
                                                        <div class="form-group todo-container"
                                                             style="padding: 10px 0px ">
                                                            <h4>负责项目</h4>
                                                            <hr>

                                                            <div class="todo-projects-item">
                                                                <ul class="todo-projects-container"
                                                                    style="padding: 0px;">
                                                                    <li class="todo-projects-item ">
                                                                        <h4 class="font-grey-salsa">
                                                                            任务编号/分析项目
                                                                        </h4>
                                                                    </li>
                                                                    <li>尚未选择任务。</li>
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
                condition: "process=5",
                qualityList: [],
                userList: [],

            }
        },
        mounted(){
            var me = this;
            //me._initComponents();
            //me._handleProjectListMenu();
            me.getData();
            me.fetchUser();
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
            },
            viewDetails(){

            },
            addProject(){

            },
            createDispatch(){

            }
        }
    }
</script>