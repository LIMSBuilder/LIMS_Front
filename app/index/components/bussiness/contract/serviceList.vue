<template>
    <div>
        <h1 class="page-title"> 服务合同列表
            <small>／Contract</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN TODO SIDEBAR -->
                <div class="todo-ui">
                    <div class="todo-sidebar">
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span class="caption-subject font-green-sharp bold uppercase">合同流程 </span>
                                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看合同进展</span>
                                </div>

                            </div>
                            <div class="portlet-body todo-project-list-content">
                                <div class="todo-project-list">

                                    <ul class="nav nav-stacked">
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('total')">
                                                全部 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(-1)">
                                                <!--<span class="badge badge-warning">{{countProcess.change}} </span>-->
                                                待修改
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(1)">
                                                <!--<span class="badge badge-info"> {{countProcess.create}} </span>-->
                                                待审核 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(2)">
                                                <!--<span class="badge badge-primary"> {{countProcess.review}}</span>-->
                                                待执行</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(3)">
                                                已执行
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(-2)">
                                                已中止 </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <!--<div class="portlet light ">-->
                        <!--<div class="portlet-title">-->
                        <!--<div class="caption">-->
                        <!--<span class="caption-subject font-red bold uppercase">监测类别 </span>-->
                        <!--<span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看</span>-->
                        <!--</div>-->
                        <!--<div class="actions">-->
                        <!--<div class="actions">-->
                        <!--<a class="btn btn-circle green btn-outline btn-sm" href="/type/create">-->
                        <!--<i class="fa fa-plus"></i> 新增 </a>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--<div class="portlet-body todo-project-list-content todo-project-list-content-tags">-->
                        <!--<div class="todo-project-list">-->
                        <!--<ul class="nav nav-pills nav-stacked">-->
                        <!--<template v-for="item in typeList">-->
                        <!--<li>-->
                        <!--<a href="javascript:;" @click="searchByType(item.id)">{{item.name}} </a>-->
                        <!--</li>-->
                        <!--</template>-->
                        <!--</ul>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption" data-toggle="collapse"
                                     data-target=".todo-project-list-content-tags">
                                    <span class="caption-subject font-blue bold uppercase">搜索 </span>
                                </div>
                            </div>
                            <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                                <div class="form-group form-md-line-input form-md-floating-label"
                                     style="padding-top: 0;">
                                    <div class="input-icon right">
                                        <input type="text" class="form-control" @keyup.enter="searchKey($event)">
                                        <span class="help-block">支持合同编号和项目名称查询。</span>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">合同列表</span>
                                </div>
                                <div class="actions" v-if="contract.id">
                                    <div class="btn-group">
                                        <a class="btn green btn-circle btn-sm" href="javascript:;"
                                           data-toggle="dropdown"
                                           data-hover="dropdown" data-close-others="true"> 操 作
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu pull-right">
                                            <li>
                                                <!--<a href="javascript:;" > 创建新合同 </a>-->
                                                <router-link to="/contract/create"> 创建新合同</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:;" @click="changeContract"> 编辑修改 </a>
                                            </li>
                                            <li class="divider"></li>
                                            <li v-if="contract.process==2">
                                                <a href="javascript:;" @click="finishConstract">完成合同</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" @click="exportContract"> 导出合同</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" @click="stopContract"> 中止合同</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="javascript:;" @click="deleteContract"> 删除合同 </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-5 col-sm-4">
                                        <div class="todo-tasklist" id="contract_list">
                                            <span v-if="contractList.length==0">暂无合同。</span>
                                            <template v-for="item in contractList">
                                                <div @click="viewDetails(item)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <span class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </span>
                                                    <span class="todo-tasklist-item-title"> {{item.identify}}
                                                    </span>
                                                    <span class="todo-tasklist-item-text" style="margin-left: 10px "> {{item.name}}
                                                    </span>
                                                    <div class="todo-tasklist-controls" style="margin-left: 10px ">
                                                                    <span class="todo-tasklist-date">
                                                                        <i class="fa fa-calendar"></i> {{item.create_time}} </span>
                                                        <!--<span class="todo-tasklist-badge badge badge-roundless">Urgent</span>-->
                                                    </div>
                                                    <div class="todo-tasklist-controls pull-right">
                                                        <span class="label label-sm label-danger"
                                                              v-if="item.state==-2">已中止</span>
                                                        <span class="label label-sm label-warning"
                                                              v-if="item.state==-1">待修改</span>
                                                        <span class="label label-sm label-info"
                                                              v-if="item.state==1">待审核</span>
                                                        <span class="label label-sm label-primary"
                                                              v-if="item.state==2">待执行</span>
                                                        <span class="label label-sm label-success"
                                                              v-if="item.state==3">已执行</span>
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
                                    <div class="col-md-7 col-sm-8" v-show="!contract.id">
                                        <h1 class="text-center">暂无合同信息</h1>
                                    </div>
                                    <div class="col-md-7 col-sm-8" v-show="contract.id">
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
                                                            <span class="todo-username pull-left">{{contract.name}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4">
                                                        <div class="todo-taskbody-date pull-right">
                                                            <span class="todo-username pull-left"
                                                                  style="font-size: 14px;">合同编号：{{contract.identify}}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#page_1" data-toggle="tab"> 合同详情 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_3" data-toggle="tab"> 相关文档 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_4" data-toggle="tab"> 操作日志 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="page_1">
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">创建者
                                                                    </label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">
                                                                            <!--{{contract.creater.name}}-->
                                                                            {{createName}}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">创建时间
                                                                    </label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static">
                                                                            {{contract.create_time}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">当前状态
                                                                    </label>
                                                                    <div class="col-md-9">
                                                                        <p class="form-control-static"
                                                                           v-if="contract.state==1">
                                                                            待审核
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.state==2">
                                                                            待执行
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.state==3">
                                                                            已执行
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.state==-1">
                                                                            待修改
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.state==-2">
                                                                            已中止
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">查看合同
                                                                    </label>
                                                                    <div class="col-md-9">
                                                                        <a :href="'http://192.168.0.105:8080/api/service/online?id='+contract.id"
                                                                           target="_blank"
                                                                           class="btn green btn-outline"
                                                                           style="margin: 5px;">查看
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">下载合同
                                                                    </label>
                                                                    <div class="col-md-9">
                                                                        <a href="/upload\2016-上海市房屋租赁合同-通用自行成交版.doc"
                                                                           class="btn green btn-outline"
                                                                           style="margin: 5px;">下载
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="page_3">
                                                            <table class="table table-hover">
                                                                <tr>
                                                                    <td>
                                                                        导出该合同

                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <button @click="exportContract" type="button"
                                                                                class="btn green btn-outline"
                                                                                style="margin: 5px;">导 出
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        合同历史审核记录
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
                                                                    <li style="list-style: none">
                                                                        <span>{{item.user.name}}</span>
                                                                        <span>{{item.create_time}}</span>
                                                                        <span>{{item.msg}}</span>
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
        </div>
    </div>
</template>
<style>
    a {
        text-decoration: none !important;
    }
</style>
<script type="es6">
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                typeList: [],
                currentPage: 1,
                condition: "",
                contractList: [],
                contract: {
                    trustee: {},
                    type: {}
                },
                itemLists: [],
                log: {},
                total_count: {},
                countProcess: [],
                project: [],
                createName: ""
            }
        },
        mounted(){
            var me = this;
            me._initComponents();
            me._handleProjectListMenu();
            me.init();
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
            me.fetchCount();
        },
        methods: {
            init: function () {
                var me = this;
                me.$http.get("/api/type/contract_total").then(function (response) {
                    var data = response.data;
                    me.typeList = data.results;
                }, function (response) {
                    serverErrorInfo(response);
                })
            },
            _initComponents: function () {
                $('.todo-taskbody-due').datepicker({
                    rtl: App.isRTL(),
                    orientation: "left",
                    autoclose: true
                });
                $(".todo-taskbody-tags").select2({
                    placeholder: 'Status'
                });
            },
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
                this.$http.get('/api/service/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
//                    debugger
                    me.contractList = data.results;
                    me.$nextTick(function () {
                        App.stopPageLoading();
                    })
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            fetchPages(rowCount){
                var me = this;
                this.$http.get('/api/service/list', {
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
                me.fetchCount();
                me.contract = {
                    trustee: {},
                    type: {}
                }
            },

            search(){
                var me = this;
                me.currentPage = 1;
                me.condition = "";
                me.getData();
            },
            //检测类别
//            searchByType(id){
//                var me = this;
//                me.currentPage = 1;
//                me.condition = "type=" + id;
//                me.getData();
//            },
            searchByProcess(step){
                var me = this;
                me.currentPage = 1;
                if (step != "total") {
                    me.condition = "state=" + step;
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
            fetchCount(){
                var me = this;
                me.$http.get("/api/contract/countProcess").then(
                    response => {
                        var data = response.data;
                        me.countProcess = data;
                    }, response => {
                        serverErrorInfo(response);
                    });
            },
            finishConstract(){
                var me = this;
                confirm({
                    content: "您是否已经完成合同【" + me.contract.name + "】的所有任务的创建,该操作将同时中止当前任务流程且无法撤销，是否继续？",
                    success(){
                        console.log(me.contract.id);
                        me.$http.get("/api/service/finishContract", {
                            params: {
                                id: me.contract.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("成功！");
//                                    debugger
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            stopContract(){
                var me = this;
                confirm({
                    title: "<span><i class='font-red font-lg fa fa-warning'></i> 警告！危险操作</span>",
                    content: "您正在中止合同【" + me.contract.name + "】，该操作将同时中止当前任务流程且无法撤销，是否继续？",
                    success(){
                        console.log(me.contract.id);
                        me.$http.get("/api/service/stopContract", {
                            params: {
                                id: me.contract.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("合同中止成功！");
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            deleteContract(){
                var me = this;
                confirm({
                    title: "<span><i class='font-red font-lg fa fa-warning'></i> 警告！危险操作</span>",
                    content: "<span class='font-red'>【不推荐】</span>您正在删除合同【" + me.contract.name + "】，该操作将同时删除当前任务流程且无法撤销，是否继续？",
                    success(){
                        console.log(me.contract.id);
                        me.$http.get("/api/service/deleteserviceContract", {
                            params: {
                                id: me.contract.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("合同删除成功！");
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            changeContract(){
                var me = this;
//                debugger
                router.push("/contract/service?id=" + me.contract.id);
            },
            exportContract(){
                var me = this;
                window.open("http://" + window.location.hostname + ":8080/api/contract/online?id=" + me.contract.id);
            },
            //下载服务合同
            upload(id){
                var me = this;
                console.log(id);
            },
            viewDetails(item){
                var me = this;
                me.$http.get("/api/service/serviceContractDetails", {
                    params: {
                        id: item.id
                    }
                }).then(response => {
                    var data = response.data;
//                    debugger
                    me.contract = data;
                    me.createName = data.creater.name;
                    me.fetchLog(item.id);
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchLog(id){
                var me = this;
                me.$http.get("/api/log/serviceContractLog", {
                    params: {
                        id: id
                    }
                }).then(response => {
                        var data = response.data;
                        me.log = data.results;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },


        }
    }

</script>
