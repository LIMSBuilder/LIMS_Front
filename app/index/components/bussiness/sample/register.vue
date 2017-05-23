<template>
    <div>
        <h1 class="page-title"> 自送样信息登记
            <small>／Register</small>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">样品列表</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-3 col-sm-3">
                                        <div class="todo-tasklist" id="task_list">
                                            <template v-for="item in taskList">
                                                <div @click="viewDetails(item.id)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-controls pull-right">
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="flow(item.id)">流 转
                                                        </button>
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
                                                            @click="dispatchRegister(item)">
                                                            <h4 class="">
                                                                <!--<span class="label label-info"-->
                                                                <!--v-if="item.process==1"> 已登记 </span>-->
                                                                <!--<span class="label label-success"-->
                                                                <!--v-if="item.process==2"> 已完成 </span>{{item.company}}-->
                                                                {{item.company}}
                                                            </h4>
                                                            <div class="todo-project-item-foot">
                                                                <p class="todo-red todo-inline">
                                                                    <a href="javascript:;" class="font-green"
                                                                       @click="viewDispatchDetail(item.items)">查看详情</a>
                                                                </p>
                                                            </div>
                                                            <div class="todo-project-item-foot" style="float: right; ">
                                                                <span class="label label-danger"

                                                                      v-if="item.process==0"> 待登记 </span>
                                                                <span class="label label-success"
                                                                      @click="dispatchRegister(item)"
                                                                      v-if="item.process==2"> 已完成 </span>

                                                            </div>
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

                                    <div class="col-md-6 col-sm-6" v-show="!homeworks.id">
                                        <h1 class="text-center">暂无任务信息</h1>
                                    </div>
                                    <div class="col-md-6 col-sm-6" v-show="homeworks.id">
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
                                                            <span class="todo-username pull-left">{{homeworks.company}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4">
                                                        <div class="todo-taskbody-date pull-right">
                                                            <span class="todo-username pull-left"
                                                                  style="font-size: 14px;">编号：{{task.identify}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-scrollable table-scrollable-borderless">
                                                    <h3>检测项目</h3>
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

                                                <form class="form-horizontal" role="form" v-if="homeworks.process!=2">
                                                    <div class="form-body">
                                                        <h3>添加样品信息</h3>
                                                        <div class="row">
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
                                                                                    <option :value="project.item_project_id">
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
                                                        <!--<button type="button" class="btn  green" @click="create"-->
                                                        <!--v-show="!sample.id">-->
                                                        <!--<i class="fa fa-pencil"></i> 新增-->
                                                        <!--</button>-->
                                                        <button type="button" class="btn yellow " v-if="flagchange==1"
                                                                @click="change">
                                                            <i class="fa fa-trash-o">修改</i>
                                                        </button>
                                                        <button type="button" class="btn  green" @click="create"
                                                                v-if="flagchange==0">
                                                            <i class="fa fa-pencil"></i> 新增
                                                        </button>
                                                        <button type="button" class="btn default" @click="removeSample">
                                                            取 消
                                                        </button>

                                                    </div>
                                                </form>
                                                <hr>
                                                <div class="form-group col-md-12 form-md-line-input ">
                                                    <h3>自送样登记表</h3>
                                                    <span v-if="sampleList.length==0">暂无样品信息</span>
                                                    <div class="table-scrollable table-scrollable-borderless"
                                                         v-if="sampleList.length!=0">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 序号</th>
                                                                <th> 样品名称/编号</th>
                                                                <th> 实验室编号</th>
                                                                <th> 测试项目</th>
                                                                <th> 样品状态/颜色</th>
                                                                <th> 是否完好</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <template v-for="(item,index) in sampleList">
                                                                <tr :class="sample.item_id==item.id?'active':''">
                                                                    <td class="text-center">{{index+1}}</td>
                                                                    <td class="text-center">{{item.name}}
                                                                    </td>
                                                                    <td class="text-center">{{item.identify}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <template v-for="item in item.project">
                                                                            {{item.name}}&nbsp;
                                                                        </template>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        {{item.character}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        {{item.condition==1?'是':'否'}}
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:;"
                                                                           @click="changeSampleItem(item)">
                                                                            <i class="fa fa-edit"></i>
                                                                        </a>
                                                                        <a href="javascript:;"
                                                                           @click="deleteSampleItem(item.id)">
                                                                            <i class="fa fa-trash-o"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="form-actions right todo-form-actions">
                                                    <button type="button" class="btn default"
                                                            style="float: right;" @click="exportSample">
                                                        导 出
                                                    </button>
                                                    <button type="button" class="btn  green "
                                                            style="float: right;" @click="finishBtn()"
                                                            v-if="homeworks.process!=2">
                                                        完 成
                                                    </button>
                                                </div>
                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <!--<li>-->
                                                        <!--<a href="#page_4" data-toggle="tab"> 打印表格 </a>-->
                                                        <!--</li>-->
                                                        <li class="active">
                                                            <a href="#page_2" data-toggle="tab"> 监测项目 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_1" data-toggle="tab"> 任务详情 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane " id="page_1">
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
                                                        <div class="tab-pane active" id="page_2">
                                                            <div class="table-scrollable table-scrollable-borderless">
                                                                <table class="table table-hover table-light">
                                                                    <tbody>
                                                                    <div class="table-scrollable table-scrollable-borderless">
                                                                        <table class="table table-hover table-light">
                                                                            <thead>
                                                                            <tr class="uppercase">
                                                                                <th> 序号</th>
                                                                                <th> 公司名称</th>
                                                                                <th> 环境要素</th>
                                                                                <th> 监测点（个）</th>
                                                                                <th> 监测项目</th>
                                                                                <th> 监测频次</th>
                                                                                <th> 备注</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <template v-for="itemList in itemLists">
                                                                                <template
                                                                                        v-for="(item,index) in itemList.items">
                                                                                    <tr>
                                                                                        <td class="text-center">
                                                                                            {{index+1}}
                                                                                        </td>
                                                                                        <td class="text-center">
                                                                                            {{itemList.flag==0?taskList.client_unit:itemList.company}}
                                                                                        </td>
                                                                                        <td class="text-center">
                                                                                            {{item.element.name}}
                                                                                        </td>
                                                                                        <td class="text-center">
                                                                                            {{item.point}}
                                                                                        </td>
                                                                                        <td class="text-center">
                                                                                            <template
                                                                                                    v-for="(project,index) in item.project">
                                                                                                {{project.name}}
                                                                                                <template
                                                                                                        v-if="project.isPackage==true">
                                                                                                    <span style="color: red;">[分包]</span>
                                                                                                </template>
                                                                                                <template
                                                                                                        v-if="index+1!=item.project.length">
                                                                                                    ,
                                                                                                </template>
                                                                                            </template>
                                                                                        </td>
                                                                                        <td class="text-center">
                                                                                            {{item.frequency.total}}
                                                                                        </td>
                                                                                        <td class="text-center">
                                                                                            {{item.other}}
                                                                                        </td>
                                                                                    </tr>
                                                                                </template>
                                                                            </template>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
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
                    <!-- END TODO CONTENT -->
                </div>
            </div>
            <!-- END PAGE CONTENT-->
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
                condition: "process=apply_sample",
                taskList: [],
                task: {
                    type: {}
                },
                itemLists: [],
//                log: [],
                total_count: {},
                projectName: [],
                project: [],
                countProcess: 0,
                sample: {
                    id: "",
                    task_id: "",
                    company_id: "",
//                    prefix: 0,
//                    prefix_text: "",
                    condition: 1,
                    character: "",
                    name: "",
                    project: []
                },
                sampleList: [],
                projectList: [],
                user: {
                    role: {
                        department: {}
                    }
                },
                dispatchElement: {},
                homeworks: "",
                homeworksID: "",//点击完成是=时获取的以公司为单位的id
                flagchange: 0 //点击修改操作时，记录一个字段，来显示修改，隐藏创建

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
                    me.taskList = data.results;
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
                }, response => {
                    serverErrorInfo(response);
                });
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
                me.homeworks = "";
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
            deleteSampleItem(id){
                var me = this;
                me.$http.get("/api/sample/deleteSample", {
                    params: {
                        sample_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("样品删除成功！");
                            me.getData();
                            me.fetchsampleList(me.homeworksID);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            changeSampleItem(item){
                var me = this;
                me.flagchange = 1;
//                debugger
//                console.log(item);
                for (var i in item) {
//                    console.log(i);
                    if (me.sample[i] != undefined) {
                        me.sample[i] = item[i];
                    }
                }
//                debugger
                me.sample.project = [];//将刚刚传的project清空
                var project = item.project;
                for (var i = 0; i < project.length; i++) {
                    me.sample.project.push(project[i].item_project_id);
                }
//                debugger
                $('#sample_project').selectpicker("val", me.sample.project);
            },
            change(){
                var me = this;
//                debugger
                me.$http.post("/api/sample/changeSample", me.sample).then(
                    response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("样品信息修改成功！");
                                me.fetchsampleList(me.homeworks.id);
                                me.removeSample();
                                me.sample.id = "";
                                me.flagchange = 0;
                                router.push("/sample/register");
                            }
                        })
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
            },
            //清空
            removeSample(){
                var me = this;
//                alert(123);
                me.sample.character = "";
                me.sample.condition = 1;
                me.sample.project = [];
                $("#sample_project").selectpicker("val", me.sample.project);
                me.sample.name = "";
            },
            exportSample(){
                var me = this;
                window.open("http://" + window.location.hostname + ":8080/api/sample/createSample?id=" + me.task.id);
            },
            //点击中间的查看详情，查看当前任务对应的公司的检测项目详情，点击->弹出弹窗->显示检测项目详细情况
            viewDispatchDetail(item){
                var me = this;
                me.dispatchElement = item;
                jQuery("#showsample").modal("show");
            },
            //点击中间红色查找检测项目
            fetchProjectByCategory(item){
                var me = this;
//                debugger
                me.projectList = item.items;
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
            },
            //点击中间的红色带登记，最右侧就显示了样品登记
            dispatchRegister(item){
//                alert("点击带登记，右侧就可以进行样品的登记");
//                console.log(item);
                var me = this;
                me.dispatchElement = item.items;
                me.fetchProjectByCategory(item);
                me.fetchsampleList(item.id);
                me.homeworks = item;
            },
            //新增自送样项目
            create(){
                var me = this;
//                debugger
                me.sample.task_id = me.task.id;
                me.sample.company_id = me.homeworks.id;
//                debugger
//                me.sample.sample_type = 0;//自送样默认为0
                me.$http.post("/api/sample/selfCreate", me.sample).then(
                    response => {
                        var data = response.data;
                        console.log(me.sample);
                        codeState(data.code, {
                            200: function () {
                                alert("样品信息添加成功！");
                                me.fetchsampleList(me.homeworks.id);
                                me.removeSample();
                                router.push("/sample/register");
                            }
                        })
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
            },
            //获取自送样列表
            fetchsampleList(id){
                var me = this;
//                debugger
                me.$http.get('/api/sample/getSelfSampleList', {
                    params: {
                        company_id: id
                    }
                }).then(
                    response => {
                        var data = response.data;
//                        debugger
                        me.sampleList = data.results;
                        me.homeworksID = id;
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
            },
            //以一个公司为单位的作业，这个作业的样品全部完成登记，就点击完成
            success(){
                var me = this;
                me.$http.get('/api/sample/register', {
                    params: {
                        task_id: me.task.id
                    }
                }).then(
                    response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("该自送样完成登记！");
                            }
                        })
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            finishBtn(){
                var me = this;
//                debugger
                me.$http.get("/api/delivery/finishItem", {
                    params: {
                        id: me.homeworksID
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("自送样登记完成完成！");
                            me.getData();
                            me.viewDetails(me.task.id);

                        },
                        505: "存在尚未提交的样品信息！",
                        504: "存在尚未处理的分析项目！"

                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            flow(id){
                var me = this;
                confirm({
                    content: "是否确认已完成所有作业的样品登记并流转该任务？",
                    success: function () {
                        me.$http.get("/api/dispatch/checkFlowLab、", {
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
            },

        }
    }

</script>
