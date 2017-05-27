<template>
    <div>
        <h1 class="page-title"> 质控列表
            <small>／Quality</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="todo-ui">
                    <div class="todo-content">
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="icon-bar-chart font-green-sharp hide"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">质控列表</span>
                                </div>
                                <div class="actions">
                                    <div class="btn-group"><a href="javascript:;" data-toggle="dropdown"
                                                              data-hover="dropdown" data-close-others="true"
                                                              class="btn green btn-circle btn-sm"> 操 作
                                        <i class="fa fa-angle-down"></i></a>
                                        <ul class="dropdown-menu pull-right">
                                            <li><a href="javascript:;" @click="exportDelivery"> 导出交接联单 </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-3 col-sm-2">
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

                                                    <div class="todo-tasklist-controls ">
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="exportQuality(item.id)">质控单
                                                        </button>
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="exportDelivery">交联单
                                                        </button>
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="exportInspect(item.id)">送检单
                                                        </button>
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="flow(item.id)" v-if="item.flag==1">流 转
                                                        </button>
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

                                    <div class="col-md-9 col-sm-10" v-show="qualityTab==0">
                                        <h1 class="text-center">暂无任务信息</h1>
                                    </div>

                                    <div class="col-md-9 col-sm-10" v-show="qualityTab==1">
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
                                                            <span class="todo-username pull-left">{{qualityDetail.client_unit}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4">
                                                        <div class="todo-taskbody-date pull-right">
                                                            <span class="todo-username pull-left"
                                                                  style="font-size: 14px;">编号：{{qualityDetail.identify}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#page_1" data-toggle="tab"> 质控单 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 样品交接表 </a>
                                                        </li>
                                                    </ul>

                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="page_1">
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
                                                                                <th> 个数（实）</th>
                                                                                <th> 编号（实）</th>
                                                                                <th> 选择（实）</th>
                                                                                <th> 个数（加）</th>
                                                                                <th> 编号（加）</th>
                                                                                <th> 选择（加）</th>
                                                                                <th> 盲样(个)</th>
                                                                                <th v-if="qualityDetail.flag==null">
                                                                                    操作
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <template
                                                                                    v-for="(item,index) in qualityDetail.items">
                                                                                <tr class="uppercase">
                                                                                    <td class="text-center">
                                                                                        {{index+1}}
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        {{item.name}}
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        {{item.sample.length}}
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        <span v-if="item.sceneCount==0">无</span>
                                                                                        <span v-if="item.sceneCount!=0">{{item.sceneCount}}</span>
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        {{item.lab.length}}
                                                                                    </td>
                                                                                    <td class="text-center"
                                                                                        style="width: 40px; color: red;">
                                                                                        <template
                                                                                                v-for="idf in item.lab">
                                                                                            {{idf.identify}},
                                                                                        </template>
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        <a href="javascript:;"
                                                                                           class="btn btn-icon-only blue"
                                                                                           @click="chooseLaboratorys(item)">
                                                                                            <i class="fa fa-gear"></i>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        {{item.tag.length}}
                                                                                    </td>
                                                                                    <td class="text-center"
                                                                                        style="width: 40px ; color: red;">
                                                                                        <template
                                                                                                v-for="idf in item.tag">
                                                                                            {{idf.identify}},
                                                                                        </template>
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        <a href="javascript:;"
                                                                                           class="btn btn-icon-only blue"
                                                                                           @click="chooseJB(item)">
                                                                                            <i class="fa fa-gear"></i>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td class="text-center">
                                                                                        <input type="text"
                                                                                               style="width: 40px;"
                                                                                               v-model="item.blind">
                                                                                    </td>
                                                                                    <td v-if="qualityDetail.flag==null">
                                                                                        <button type="button"
                                                                                                class="btn btn-sm blue btn-outline"
                                                                                                @click="savequality(item)"
                                                                                                v-if="item.process==null">
                                                                                            保存
                                                                                        </button>
                                                                                        <button type="button"
                                                                                                class="btn btn-sm blue btn-outline"
                                                                                                @click="changequality(item)"
                                                                                                v-if="item.process==1">
                                                                                            修改
                                                                                        </button>
                                                                                        <button type="button"
                                                                                                class="btn btn-sm red btn-outline"
                                                                                                @click="deletequality(item)"
                                                                                                v-if="item.process==1">
                                                                                            删除
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
                                                            <div class="form-actions right todo-form-actions">
                                                                <button type="button"
                                                                        class="btn btn-sm blue btn-outline"
                                                                        @click="savaAll()"
                                                                        v-if="qualityDetail.flag==null">
                                                                    保存全部
                                                                </button>
                                                            </div>
                                                            <div class="form-actions right todo-form-actions">
                                                                <button type="button" class="btn default"
                                                                        style="float: right;" @click="">
                                                                    导 出
                                                                </button>
                                                                <button type="button" class="btn  green "
                                                                        style="float: right;" @click="finishBtn()">
                                                                    完 成
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane " id="page_2">
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">委托单位名称
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.client_unit}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">任务单编号
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.task_identify}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">任务来源
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{typename}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">样品起止编号
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.firstIdentify}}-{{trandfer.lastIdentify}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">送样时间
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.time}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">送样件数
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.count}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">样品包装状况
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.package}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">样品标识
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <div class="input-icon right">
                                                                            <p class="form-control-static">
                                                                                {{trandfer.receive_type}}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">固定剂添加情况
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{trandfer.additive}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="table-scrollable table-scrollable-borderless">
                                                                <table class="table table-hover table-light">
                                                                    <thead>
                                                                    <tr class="uppercase">
                                                                        <th> 序号</th>
                                                                        <th> 样品类别</th>
                                                                        <th> 分析项目</th>
                                                                        <th> 件数</th>
                                                                        <th> 样品描述</th>
                                                                        <th> 保存条件（低温/高温）</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <template v-for="(item,index) in trandfer.items">
                                                                        <tr>
                                                                            <td class="text-center"> {{index+1}}</td>
                                                                            <td class="text-center">
                                                                                {{item.projects[0].elementName}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <template
                                                                                        v-for="(p,i) in item.projects">
                                                                                    {{p.name}}
                                                                                    <template
                                                                                            v-if="i<item.projects.length-1">
                                                                                        ,
                                                                                    </template>
                                                                                </template>

                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{item.samples.length}}
                                                                            </td>
                                                                            <td class="text-center"
                                                                                v-if="item.item[0].saveCharacter==null">
                                                                                {{item.samples[0].character}}
                                                                            </td>
                                                                            <td class="text-center"
                                                                                v-if="item.item[0].saveCharacter!=null">
                                                                                {{item.item[0].saveCharacter}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{item.item[0].saveState}}
                                                                            </td>
                                                                        </tr>
                                                                    </template>
                                                                    </tbody>
                                                                </table>
                                                            </div>
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
                </div>
            </div>
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
                                                                       name="laboratoryitem"
                                                                       v-model="laboratoryitem"
                                                                       :value="item">
                                                                <span></span>
                                                            </label>
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
                        <button type="button" class="btn green" @click="addlaboratory">确定</button>
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
                                                            <label class="mt-checkbox mt-checkbox-outline">
                                                                <input type="checkbox"
                                                                       name="jbitem" v-model="jbitem"
                                                                       :value="item">
                                                                <span></span>
                                                            </label>
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
                        <button type="button" class="btn green" @click="addjb">确定</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>


    </div>
</template>


<script type="">
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "process=5",
                qualityList: [],
                qualityDetail: [],
                qualityTab: 0,//标记有没有选择任务
                dispatchElement: {},
                homeworks: "",
                qualitylist: [],
                chooselaboratorys: [],//选择实验室平行
                laboratoryitem: [],
                labId: "",
                choosejbs: [],//加标回收
                jbitem: [],
                jbId: "",
                homeworksID: "",//点击完成是=时获取的以公司为单位的id
                taskID: "",//点击获取task的id；
                inspectList: [],
                qualityID: "",
                trandfer: {},//获取样品基本信息
                typename: ""
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
            viewDetails(id){
                var me = this;
                me.$http.get("/api/quality/list", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.qualityDetail = data;
                    me.qualityTab = 1;
                    me.qualityID = id;
                    me.fetchTransfer(id);
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchTransfer(id){
                var me = this;
                me.$http.get("/api/lab/selfList", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.trandfer = data;
                    me.typename = data.type.name;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            chooseLaboratorys(item){
                var me = this;
                jQuery("#chooseLaboratory").modal("show");
                me.chooselaboratorys = item.sample;
                me.labId = item.id;
            },
            addlaboratory(){
                var me = this;
                var id = me.labId;
                var item = me.qualityDetail.items.find(function (data) {
                    return data.id == id;
                });
                for (var i = 0; i < me.laboratoryitem.length; i++) {
                    item.lab.push(me.laboratoryitem[i]);
                }
                me.laboratoryitem = [];
                jQuery("#chooseLaboratory").modal("hide");
            },
            chooseJB(item){
                var me = this;
                jQuery("#chooseJB").modal("show");
                me.choosejbs = item.sample;
                me.jbId = item.id;

            },
            addjb(){
                var me = this;
                var id = me.jbId;
                var item = me.qualityDetail.items.find(function (data) {
                    return data.id == id;
                });
                for (var i = 0; i < me.jbitem.length; i++) {
                    item.tag.push(me.jbitem[i]);
                }
                me.jbitem = [];
                jQuery("#chooseJB").modal("hide");
            },
            savequality(item){
                var me = this;
                var saveItem = {
                    lab: [],
                    tag: [],
                    blind: 0
                };
                for (var i = 0; i < item.lab.length; i++) {
                    saveItem.lab.push(item.lab[i].id);
                }
                for (var i = 0; i < item.tag.length; i++) {
                    saveItem.tag.push(item.tag[i].id);
                }
                saveItem.blind = item.blind;
                saveItem.id = item.item_project_id;
                me.$http.post("/api/quality/change", saveItem).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("添加质检成功！");
                            me.viewDetails(me.qualityID);

                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            changequality(item){
                item.process = null;
                item.lab = [];
                item.tag = [];
                item.blind = 0;
            },
            deletequality(item){
                var me = this;
                confirm({
                    content: "是否删除当前质控",
                    success: function () {
                        me.$http.get("/api/quality/clear", {
                            params: {
                                id: item.item_project_id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("质控删除成功！");
                                    me.viewDetails(me.qualityID);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            //保存全部
            savaAll(){
                var me = this;
                var list = me.qualityDetail.items;
                console.log(list);
                var items = [];
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    item.labs = [];
                    item.tags = [];
                    for (var j = 0; j < item.lab.length; j++) {
                        item.labs.push(item.lab[j].id);
                    }
                    for (var z = 0; z < item.tag.length; z++) {
                        item.tags.push(item.tag[z].id);
                    }
                    items.push(JSON.stringify(item));
                }
                var temp = {
                    items: items
                };
                me.$http.post("/api/quality/allSave", temp).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("添加质检成功！");
                            me.viewDetails(me.qualityID);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            finishBtn(){
                var me = this;
                debugger
                me.$http.get("/api/quality/finishQuality", {
                    params: {
                        task_id: me.qualityID
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("质控登记完成完成！");
                            me.viewDetails(me.qualityID);
                            me.getData();
                        },
                        505: "存在尚未处理的质控项目！"
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            flow(id){
                var me = this;
                confirm({
                    content: "是否确认已完成所有作业的质控？",
                    success: function () {
                        me.$http.get("/api/dispatch/checkFlowLabtorary", {
                            params: {
                                task_id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("质控流转成功！");
                                    me.getData();
                                },
                                501: "当前存在完成质控，无法流转！"
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            exportDelivery(id){
                var me = this;
                // console.log(me.homeworksID);
                window.open("http://" + window.location.hostname + ":8080/api/company/exportDelivery?id=" + me.task.id);
            },
        }
    }
</script>