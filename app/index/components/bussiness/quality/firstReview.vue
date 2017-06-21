<template>
    <div>
        <h1 class="page-title"> 质控列表
            <small>／quality</small>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">质控列表</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-3 col-sm-3">
                                        <div class="todo-tasklist" id="task_list">
                                            <template v-for="item in qualityList">
                                                <div @click="viewDetails(item.id)"
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

                                                    <!--<div class="todo-tasklist-controls pull-right">-->
                                                    <!--<span class="label label-sm label-danger"-->
                                                    <!--v-if="item.process==1">待登记</span>-->
                                                    <!--<span class="label label-sm label-info"-->
                                                    <!--v-if="item.process==2">已登记</span>-->
                                                    <!--</div>-->
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
                                            <div class="todo-projects-item">
                                                <ul class="todo-projects-container ">
                                                    <template v-for="item in itemLists">
                                                        <li class="todo-projects-item " style="padding-bottom: 30px"
                                                            @click="qualityview(item)">
                                                            <h4 class="">
                                                                {{item.company}}
                                                            </h4>
                                                            <div class="todo-project-item-foot">
                                                                <p class="todo-red todo-inline">
                                                                    <a href="javascript:;" class="font-green"
                                                                       @click="viewDispatchDetail(item.items)">查看详情</a>
                                                                </p>
                                                            </div>
                                                            <div>质控单</div>
                                                        </li>
                                                        <div class="todo-projects-divider"></div>
                                                    </template>
                                                    <li class="todo-projects-item "
                                                        style="height: 100px;">
                                                        <h4>尚未选择任务，或不存在待派遣任务</h4>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-sm-6">

                                        <form action="#" class="form-horizontal form-bordered form-row-stripped">
                                            <div class="tabbable-line">
                                                <ul class="nav nav-tabs ">
                                                    <li>
                                                        <a href="#page_1" data-toggle="tab"> 交接单 </a>
                                                    </li>
                                                    <li class="active">
                                                        <a href="#page_2" data-toggle="tab"> 质控单 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#page_3" data-toggle="tab"> 送检单 </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div class="tab-pane " id="page_1">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-5">委托单位
                                                                </label>
                                                                <div class="col-md-7">
                                                                    <p class="form-control-static">
                                                                        <!--{{contract.client_unit}}-->
                                                                        常州滨海经济开发区环保局
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-5">任务编号
                                                                </label>
                                                                <div class="col-md-7">
                                                                    <p class="form-control-static">
                                                                        <!--{{contract.client_code}}-->
                                                                        2017-083
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-5">任务来源
                                                                </label>
                                                                <div class="col-md-7">
                                                                    <p class="form-control-static">
                                                                        <!--{{contract.client_address}}-->
                                                                        委托
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-5">样品起止编号
                                                                </label>
                                                                <div class="col-md-7">
                                                                    <p class="form-control-static">
                                                                        <!--{{contract.client_tel}}-->
                                                                        wt2000-委托2200
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-5">送样时间
                                                                </label>
                                                                <div class="col-md-7">
                                                                    <p class="form-control-static">
                                                                        <!--{{contract.client}}-->
                                                                        2017年2月2日
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-5">送样件数
                                                                </label>
                                                                <div class="col-md-7">
                                                                    <p class="form-control-static">
                                                                        <!--<!8-{{contract.client_fax}}&ndash;&gt;-->
                                                                        8
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="table-scrollable table-scrollable-borderless">
                                                                <table class="table table-hover table-light">
                                                                    <tbody>
                                                                    <div class="table-scrollable table-scrollable-borderless">
                                                                        <table class="table table-hover table-light">
                                                                            <thead>
                                                                            <tr class="uppercase">
                                                                                <th> 样品序号</th>
                                                                                <th> 样品类别</th>
                                                                                <th> 分析项目</th>
                                                                                <th> 件数</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr class="uppercase">
                                                                                <td class="text-center"> 1</td>
                                                                                <td class="text-center"> 有组织废气</td>
                                                                                <td class="text-center"> 臭氧浓度</td>
                                                                                <td class="text-center"> 4</td>
                                                                            </tr>
                                                                            <tr class="uppercase">
                                                                                <td class="text-center"> 1</td>
                                                                                <td class="text-center"> 有组织废气</td>
                                                                                <td class="text-center"> 臭氧浓度</td>
                                                                                <td class="text-center"> 4</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <hr>
                                                    </div>
                                                    <div class="tab-pane active" id="page_2">
                                                        <div class="table-scrollable table-scrollable-borderless">
                                                            <table class="table table-hover table-light">
                                                                <tbody>
                                                                <div class="table-scrollable table-scrollable-borderless">
                                                                    <table class="table table-hover table-light">
                                                                        <thead>
                                                                        <tr class="uppercase">
                                                                            <th> 序号</th>
                                                                            <th> 分析项目</th>
                                                                            <th> 样品数</th>
                                                                            <th> 现场平行</th>
                                                                            <th>
                                                                                <table>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td colspan="2"
                                                                                            style="padding: 0px 20px;">
                                                                                            实验室平行样
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="text-center">个数</td>
                                                                                        <td class="text-center">样品编号
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </th>
                                                                            <th>
                                                                                <table>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td colspan="2"
                                                                                            style="padding: 0px 20px;">
                                                                                            加标回收样
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="text-center">个数</td>
                                                                                        <td class="text-center">样品编号
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </th>
                                                                            <th> 盲样(个)</th>
                                                                            <th>操作</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <template v-for="(item,index) in quality">
                                                                            <tr class="uppercase">
                                                                                <td class="text-center"> {{index+1}}
                                                                                </td>
                                                                                <td class="text-center"> {{item.name}}
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    {{item.sample.length}}
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <span v-if="item.sceneCount==0">/</span>
                                                                                    <span v-if="item.sceneCount!=0">{{item.sceneCount}}</span>
                                                                                </td>
                                                                                <td>
                                                                                    <table class="table table-hover">
                                                                                        <tr>
                                                                                            <td class="text-center"
                                                                                                style="padding-top: 20px;">
                                                                                                个数
                                                                                            </td>
                                                                                            <td style="padding-top: 20px">
                                                                                                <button type="button"
                                                                                                        class="btn green"
                                                                                                        @click="chooseLaboratorys(item)">
                                                                                                    选择
                                                                                                </button>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <table class="table table-hover">
                                                                                        <tr>
                                                                                            <td class="text-center"
                                                                                                style="padding-top: 20px;">
                                                                                                个数
                                                                                            </td>
                                                                                            <td style="padding-top: 20px">
                                                                                                <button type="button"
                                                                                                        class="btn green"
                                                                                                        @click="chooseJB(item)">
                                                                                                    选择
                                                                                                </button>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <input type="text" value="123"
                                                                                           style="width: 40px;">
                                                                                </td>
                                                                                <td>
                                                                                    <button type="button"
                                                                                            class="btn btn-sm blue btn-outline"
                                                                                            @click="savequality">
                                                                                        保存
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                        </template>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="page_3">
                                                        送检单
                                                    </div>
                                                    <!--<div class="tab-pane" id="page_4">-->
                                                    <!--<ul class="todo-task-history">-->
                                                    <!--<template v-for="item in log">-->
                                                    <!--<li style="list-style: none">-->
                                                    <!--<span>{{item.user.name}}</span>-->
                                                    <!--<span>{{item.create_time}}</span>-->
                                                    <!--<span>{{item.msg}}</span>-->
                                                    <!--</li>-->
                                                    <!--</template>-->
                                                    <!--</ul>-->
                                                    <!--</div>-->
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <!--<div class="col-md-6 col-sm-6" v-show="!homeworks.id">-->
                                    <!--<h1 class="text-center">暂无任务信息</h1>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END TODO CONTENT -->
                </div>
            </div>
            <!-- END PAGE CONTENT-->
        </div>

        <div class="modal fade bs-modal-lg" id="chooseLaboratory" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">实验室平行样</h4>
                    </div>
                    <div class="modal-body">
                        <div class="portlet light portlet-fit portlet-form ">
                            <div class="portlet-body">
                                <!-- BEGIN FORM-->
                                <div class="table-scrollable table-scrollable-borderless">
                                    <table class="table table-hover table-light">
                                        <tbody>
                                        <div class="table-scrollable table-scrollable-borderless">
                                            <table class="table table-hover table-light">
                                                <thead>
                                                <tr class="uppercase">
                                                    <th> 序号</th>
                                                    <th> 监测项目编号</th>
                                                    <th> 操作</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <template v-for="(item,index) in chooselaboratorys">
                                                    <tr class="uppercase">
                                                        <td class="text-center"> {{index+1}}</td>
                                                        <td class="text-center">{{item.identify}}</td>
                                                        <td class="text-center">
                                                            <label class="mt-checkbox mt-checkbox-outline">
                                                                <input type="checkbox"
                                                                       name="">
                                                                <span></span>
                                                            </label>
                                                            <!--<label class="mt-checkbox mt-checkbox-outline">-->
                                                            <!--<input type="checkbox"-->
                                                            <!--v-model="packageitems"-->
                                                            <!--name="packageitems"-->
                                                            <!--:value="project">-->
                                                            <!--<span></span>-->
                                                            <!--</label>-->
                                                        </td>
                                                    </tr>
                                                </template>
                                                </tbody>
                                            </table>
                                        </div>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- END FORM-->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" @click="">确定</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade bs-modal-lg" id="chooseJB" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">加标回收样</h4>
                    </div>
                    <div class="modal-body">
                        <div class="portlet light portlet-fit portlet-form ">
                            <div class="portlet-body">
                                <!-- BEGIN FORM-->
                                <div class="table-scrollable table-scrollable-borderless">
                                    <table class="table table-hover table-light">
                                        <tbody>
                                        <div class="table-scrollable table-scrollable-borderless">
                                            <table class="table table-hover table-light">
                                                <thead>
                                                <tr class="uppercase">
                                                    <th> 序号</th>
                                                    <th> 监测项目编号</th>
                                                    <th> 操作</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <template v-for="(item,index) in choosejbs">
                                                    <tr class="uppercase">
                                                        <td class="text-center"> {{index+1}}</td>
                                                        <td class="text-center">{{item.identify}}</td>
                                                        <td class="text-center">
                                                            <input type="checkbox" id="" class="">
                                                        </td>
                                                    </tr>
                                                </template>
                                                </tbody>
                                            </table>
                                        </div>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- END FORM-->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" @click="">确定</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade draggable-modal" id="showsample" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">检测项目详情列表</h4>
                    </div>
                    <div class="modal-body">
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
                                <template v-for="(item,index) in dispatchElement">
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
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                typeList: [],
                currentPage: 1,
                condition: "process=4",
                qualityList: [],
                quality: {},
                itemLists: [],
//                log: [],
                countProcess: 0,
                user: {
                    role: {
                        department: {}
                    }
                },
                dispatchElement: {},
                chooselaboratorys: [],//选择实验室平行
                choosejbs: []
            }
        },
        mounted(){
            var me = this;
            //me._initComponents();
            //me._handleProjectListMenu();
            me.init();
            me.getData();
            me.fetchCount();
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
            })
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
//                    debugger
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
            //点击左侧的任务书，以公司为单位，获取到作业
            fetchItems(id){
                var me = this;
                me.$http.get("/api/task/taskGetItems", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.itemLists = data;
//                    debugger
                }, response => {
                    serverErrorInfo(response);
                });
            },
            viewDispatchDetail(item){
                var me = this;
                me.dispatchElement = item;
                jQuery("#showsample").modal("show");
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            //查看详细详信息
            viewDetails(id){
                var me = this;
//                debugger
                me.$http.get("/api/task/taskDetails", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
//                    debugger
                    me.task = data;
                }, response => {
                    serverErrorInfo(response);
                });
                me.fetchItems(id);
            },
            search(){
                var me = this;
                me.currentPage = 1;
                me.condition = "process=apply_sample";
                me.getData();
            },
            searchByProcess(step){
                var me = this;
                me.currentPage = 1;
                me.condition = "process=" + step;
                me.getData();
            },
            searchKey(e){
                var me = this;
                me.condition = "process=apply_sample&&keyWords=" + encodeURI(e.target.value);
                me.currentPage = 1;
                me.getData();
            },
            fetchCount(){
                var me = this;
                me.$http.get("/api/task/countProcess").then(
                    response => {
                        var data = response.data;
                        me.countProcess = data.create;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            //点击中间的质检，最右侧就显示了质检单
            qualityview(item){
//                debugger
                var me = this;
                me.$http.get("/api/quality/list", {
                    params: {
                        company_id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.quality = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            chooseLaboratorys(item){
                var me = this;
                jQuery("#chooseLaboratory").modal("show");
                debugger
                me.chooselaboratorys = item.sample;

            },
            chooseJB(item){
                var me = this;
                jQuery("#chooseJB").modal("show");
                me.choosejbs = item.sample;
            },
            savequality(item){
                var me = this;
                alert(123);
            }
        }
    }

</script>
