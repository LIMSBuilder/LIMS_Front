<template>
    <div>
        <h1 class="page-title"> 自送样信息登记
            <small>／Sample</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN TODO SIDEBAR -->
                <div class="todo-ui">
                    <div class="todo-sidebar">
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content">
                                    <span class="caption-subject font-green-sharp bold uppercase">样品进展 </span>
                                </div>

                            </div>
                            <div class="portlet-body todo-project-list-content">
                                <div class="todo-project-list">
                                    <ul class="nav nav-stacked">
                                        <li class="active">
                                            <a href="javascript:;" @click="searchByProcess('apply_sample')"> 全部</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('before_apply_sample')">
                                                <span class="badge badge-info"
                                                      v-if="countProcess!=0"> {{countProcess}} </span> 待登记 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"
                                               @click="searchByProcess('after_apply_sample')">已登记 </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">样品列表</span>
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
                                                <form class="form-horizontal" role="form">
                                                    <div class="form-body">
                                                        <h3 class="form-section" style="margin-top: 0">样品信息登记</h3>
                                                        <div class="row">
                                                            <!--<div class="form-group col-md-12 form-md-radios">-->
                                                            <!--<label class="control-label col-md-3">编号前缀</label>-->
                                                            <!--<div class="md-radio-inline col-md-9">-->
                                                            <!--<div class="md-radio">-->
                                                            <!--<input type="radio" id="default"-->
                                                            <!--name="prefix"-->
                                                            <!--class="md-radiobtn"-->
                                                            <!--v-model="sample.prefix" value="0">-->
                                                            <!--<label for="default">-->
                                                            <!--<span class="inc"></span>-->
                                                            <!--<span class="check"></span>-->
                                                            <!--<span class="box"></span>-->
                                                            <!--默认：{{task.type.name}}({{task.type.identifier}})-->
                                                            <!--</label>-->
                                                            <!--</div>-->
                                                            <!--<div class="md-radio">-->
                                                            <!--<input type="radio" id="customer"-->
                                                            <!--name="prefix"-->
                                                            <!--class="md-radiobtn"-->
                                                            <!--v-model="sample.prefix" value="1">-->
                                                            <!--<label for="customer">-->
                                                            <!--<span class="inc"></span>-->
                                                            <!--<span class="check"></span>-->
                                                            <!--<span class="box"></span> 自定义-->
                                                            <!--</label>-->
                                                            <!--</div>-->
                                                            <!--</div>-->
                                                            <!--</div>-->
                                                            <!--<div class="form-group col-md-12 form-md-line-input "-->
                                                            <!--v-if="sample.prefix==1">-->
                                                            <!--<label class="control-label col-md-3"-->
                                                            <!--for="customer_prefix">自定义前缀</label>-->
                                                            <!--<div class="col-md-9">-->
                                                            <!--<input type="text" min="0" class="form-control"-->
                                                            <!--id="customer_prefix"-->
                                                            <!--placeholder="请输入样品前缀"-->
                                                            <!--v-model="sample.prefix_text">-->
                                                            <!--<span class="help-block">自定义前缀仅对本次申请有效。</span>-->
                                                            <!--</div>-->
                                                            <!--</div>-->
                                                            <div class="form-group col-md-12 form-md-line-input ">
                                                                <label class="control-label col-md-3"
                                                                       for="sample_name">样品名称/编号</label>
                                                                <div class="col-md-9">
                                                                    <input type="text"
                                                                           class="form-control" id="sample_name"
                                                                           placeholder="请输入样品名称或编号"
                                                                           v-model="sample.name">
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-12 form-md-line-input ">
                                                                <label class="control-label col-md-3"
                                                                       for="sample_project">测试项目</label>
                                                                <div class="col-md-9">
                                                                    <select class="form-control"
                                                                            v-model="sample.project"
                                                                            name="sample.project"
                                                                            id="sample_project" multiple
                                                                            data-actions-box="true"
                                                                            data-live-search="true">
                                                                        <template v-for="items in projectList">
                                                                            <optgroup :label="items.name">
                                                                                <template
                                                                                        v-for="project in items.project">
                                                                                    <option :value="project.id">
                                                                                        {{project.name}}
                                                                                    </option>
                                                                                </template>
                                                                            </optgroup>
                                                                        </template>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-12 form-md-line-input ">
                                                                <label class="control-label col-md-3"
                                                                       for="sample_character">样品性状/颜色</label>
                                                                <div class="col-md-9">
                                                                    <input type="text"
                                                                           class="form-control" id="sample_character"
                                                                           placeholder="请描述样品性状与颜色"
                                                                           v-model="sample.character">
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-12 form-md-line-input ">
                                                                <label class="control-label col-md-3">是否完好</label>
                                                                <div class="col-md-9">
                                                                    <div class="md-radio-inline">
                                                                        <div class="md-radio">
                                                                            <input type="radio" id="sample_condition1"
                                                                                   v-model="sample.condition"
                                                                                   name="sample_condition"
                                                                                   class="md-radiobtn" value="1">
                                                                            <label for="sample_condition1">
                                                                                <span></span>
                                                                                <span class="check"></span>
                                                                                <span class="box"></span> 是 </label>
                                                                        </div>
                                                                        <div class="md-radio">
                                                                            <input type="radio" id="sample_condition2"
                                                                                   v-model="sample.condition"
                                                                                   name="sample_condition"
                                                                                   class="md-radiobtn" value="0">
                                                                            <label for="sample_condition2">
                                                                                <span></span>
                                                                                <span class="check"></span>
                                                                                <span class="box"></span> 否 </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-actions right todo-form-actions">
                                                        <button type="button" class="btn  green" @click="create">
                                                            <i class="fa fa-pencil"></i> 保 存
                                                        </button>
                                                        <button type="button" class="btn default">
                                                            取 消
                                                        </button>
                                                    </div>
                                                </form>
                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#page_3" data-toggle="tab"> 样品信息 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 监测项目 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_1" data-toggle="tab"> 任务详情 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane" id="page_1">
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
                                                                        <!--<th> 公司、道路名称</th>-->
                                                                        <th> 环境要素</th>
                                                                        <th> 监测点（个）</th>
                                                                        <th> 监测项目</th>
                                                                        <th> 监测频次</th>
                                                                        <th> 备注</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <template v-for="(item,index) in items">
                                                                        <tr :class="sample.item_id==item.id?'active':''">
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
                                                                                        class="btn btn-sm green btn-outline"
                                                                                        @click="showProjectName(item.id)">
                                                                                    查 看
                                                                                </button>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{item.frequency?item.frequency.total:''}}
                                                                            </td>
                                                                            <td class="text-center">{{item.other}}</td>
                                                                        </tr>
                                                                    </template>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane active" id="page_3">
                                                            <span v-if="sampleList.length==0">暂无样品信息</span>
                                                            <template v-for="item in sampleList">

                                                            </template>
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
        <div class="modal fade draggable-modal" id="showsample" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">检测项目详情列表</h4>
                    </div>
                    <div class="modal-body">
                        <!--<template v-for="(project,projectIndex) in item.project">-->
                        <!--{{project.project.name}}-->
                        <!--</template>-->
                        <ul class="receiver_tag">
                            <!--<template v-for="names in projectName">-->
                            <!--<li class="uppercase"><a href="javascript:;">{{names.name}}</a></li>-->
                            <!--</template>-->
                            样品详情。。。。。。。。
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
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                typeList: [],
                currentPage: 1,
                condition: "process=apply_sample",
                taskList: [],
                task: {
                    type: {}
                },
                items: [],
                log: [],
                total_count: {},
                projectName: [],
                countProcess: 0,
                sample: {
                    task_id: "",
//                    prefix: 0,
//                    prefix_text: "",
                    condition: 1,
                    character: "",
                    name: "",
                    project: []
                },
                sampleList: [],
                projectList: []
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
                        me.log = data.results;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            fetchProjectByCategory(id){
                var me = this;
                me.$http.get('/api/sample/getProjectByCategory', {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.projectList = data.results;
                    me.$nextTick(function () {
                        //销毁监测项目选择框
                        $('#sample_project').selectpicker('destroy');
                        //初始化监测项目选择框
                        $('#sample_project').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            countSelectedText: "count",
                            deselectAllText: "取消选择",
                            selectAllText: "选择全部",
                            noneSelectedText: "请选择监测项目",
                            dropupAuto: false
                        });
                    })
                }, response => {
                    serverErrorInfo(response);
                })
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
//                    debugger
                    me.task = data;
                }, response => {
                    serverErrorInfo(response);
                });
                me.fetchItems(item.id);
                me.fetchLog(item.id);
                me.fetchProjectByCategory(item.id);

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

            },
            showSample(){
                jQuery("#showsample").modal("show");
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
            create(){
                var me = this;
                me.sample.task_id = me.task.id;
                me.$http.post("/api/sample/selfCreate", me.sample).then(
                    response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("自送样创建成功！");
                                router.push("/sample/register");
                            }
                        })
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
            }
        }
    }

</script>
