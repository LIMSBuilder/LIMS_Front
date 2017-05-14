<template>
    <div>
        <h1 class="page-title"> 质控列表
            <small>／Quality</small>
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
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-4 col-sm-2">
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
                                                                @click="exportQuality(item.id)">质控单
                                                        </button>
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="exportDelivery">交联单
                                                        </button>
                                                        <button type="button" class="btn blue btn-sm btn-outline"
                                                                @click="exportInspect(item.id)">送检单
                                                        </button>
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

                                    <div class="col-md-4 col-sm-2 todo-container">
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
                                                            <div class="todo-project-item-foot" style="float: right; ">
                                                                <span class="label label-danger"
                                                                      v-if="item.process==2"> 待质控 </span>
                                                                <span class="label label-success"
                                                                      v-if="item.process==3"> 已完成 </span>

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

                                    <div class="col-md-4 col-sm-8" v-show="!homeworks.id">
                                        <h1 class="text-center">暂无任务信息</h1>
                                    </div>
                                    <div class="col-md-4 col-sm-8" v-show="homeworks.id">
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
                                                <form action="#"
                                                      class="form-horizontal form-bordered form-row-stripped">
                                                    <div class="tabbable-line">
                                                        <ul class="nav nav-tabs ">
                                                            <li class="active">
                                                                <a href="#page_5" data-toggle="tab"> 质控单 </a>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content">
                                                            <div class="tab-pane active" id="page_5">
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
                                                                                                <td colspan="2">
                                                                                                    实验室平行样
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="text-center">
                                                                                                    个数
                                                                                                </td>
                                                                                                <td class="text-center"
                                                                                                    style="width: 50px">
                                                                                                    样品编号
                                                                                                </td>
                                                                                                <td class="text-center">
                                                                                                    选择
                                                                                                </td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </th>
                                                                                    <th>
                                                                                        <table>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td colspan="2">
                                                                                                    加标回收样
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="text-center">
                                                                                                    个数
                                                                                                </td>
                                                                                                <td class="text-center"
                                                                                                    style="width: 50px">
                                                                                                    样品编号
                                                                                                </td>
                                                                                                <td class="text-center">
                                                                                                    选择
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
                                                                                <template
                                                                                        v-for="(item,index) in qualitylist">
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
                                                                                        <td>
                                                                                            <table class="table table-hover">
                                                                                                <tr>
                                                                                                    <td class="text-center"
                                                                                                        style="padding-top: 20px;">
                                                                                                        {{item.lab.length}}
                                                                                                    </td>
                                                                                                    <td class="text-center"
                                                                                                        style="width: 40px">
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
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td>
                                                                                            <table class="table table-hover">
                                                                                                <tr>
                                                                                                    <td class="text-center"
                                                                                                        style="padding-top: 20px;">
                                                                                                        {{item.tag.length}}
                                                                                                    </td>
                                                                                                    <td class="text-center"
                                                                                                        style="width: 40px">
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
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                        <!--<td class="text-center">-->
                                                                                        <!--<span v-if="item.tag.length!=0">-->
                                                                                        <!--{{item.tag.length}}-->
                                                                                        <!--</span>-->
                                                                                        <!--<button type="button"-->
                                                                                        <!--class="btn green"-->
                                                                                        <!--@click="chooseJB(item)"-->
                                                                                        <!--v-if="item.tag.length==0">-->
                                                                                        <!--选择-->
                                                                                        <!--</button>-->
                                                                                        <!--</td>-->
                                                                                        <td class="text-center">
                                                                                            <input type="text"
                                                                                                   style="width: 40px;"
                                                                                                   v-model="item.blind">
                                                                                        </td>
                                                                                        <td>
                                                                                            <button type="button"
                                                                                                    class="btn btn-sm blue btn-outline"
                                                                                                    @click="savequality(item)"
                                                                                                    v-if="item.process==0">
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
                                                                            @click="savaAll">
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
                                                        </div>
                                                    </div>
                                                </form>
                                                <hr>
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

        <div class="modal fade bs-modal-lg" id="exportInspect" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">选择需要导出的送检单</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table table-hover table-light">
                            <tbody>
                            <div class="">
                                <table class="table table-hover table-light">
                                    <thead>
                                    <tr class="uppercase">
                                        <th> 序号</th>
                                        <th> 样品类别</th>
                                        <th> 分析项目</th>
                                        <th> 送检类别</th>
                                        <th> 操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="(item,index) in inspectList">
                                        <tr>
                                            <td class="text-center">{{index+1}}</td>
                                            <td class="text-center">{{item.element.name}}</td>
                                            <td class="text-center">{{item.name}}</td>
                                            <td class="text-center">
                                                <select class="form-control chooseInspect" data-live-search="true"
                                                        v-model="item.inspectType">
                                                    <option value="water"> 水质样品送检单</option>
                                                    <option value="soil"> 土壤、底质样品送检单</option>
                                                    <option value="solid"> 固定污染源有组织废气样品送检单</option>
                                                    <option value="air"> 环境空气和无组织废气样品送检单</option>
                                                    <option value="dysodia">臭气样品送检单</option>
                                                </select>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" class="btn blue btn-outline"
                                                        @click="createInspect(item)" v-if="item.inspect==null">
                                                    生 成
                                                </button>
                                                <button type="button" class="btn green btn-outline"
                                                        @click="exportInspectDetails(item)" v-if="item.inspect!=null">
                                                    导 出
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
                    <div class="modal-footer">
                        <button type="button" class="btn green" @click="createInspectAll">一键生成</button>
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
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
                taskList: [],
                task: {
                    type: {}
                },
                itemLists: [],
                total_count: {},
                projectName: [],
                project: [],
                countProcess: 0,
                sample: {
                    id: "",
                    task_id: "",
                    company_id: "",
                    condition: 1,
                    character: "",
                    name: "",
                    project: []
                },
                user: {
                    role: {
                        department: {}
                    }
                },
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
                inspectList: []

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
                    me.taskID = id;
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
            showSample(){
                jQuery("#showsample").modal("show");
            },

            //点击中间的查看详情，查看当前任务对应的公司的检测项目详情，点击->弹出弹窗->显示检测项目详细情况
            viewDispatchDetail(item){
                var me = this;
                me.dispatchElement = item;
                jQuery("#showsample").modal("show");
            },
            //点击中间的，显示最右边的质控单
            qualityview(item){
                var me = this;
                me.dispatchElement = item.items;
                me.homeworks = item;
                var me = this;
                me.$http.get("/api/quality/list", {
                    params: {
                        company_id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.qualitylist = data;
                    me.homeworksID = item.id;
                }, response => {
                    serverErrorInfo(response);
                })
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
                var item = me.qualitylist.find(function (data) {
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
                var item = me.qualitylist.find(function (data) {
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
                            me.qualityview(me.homeworks);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            changequality(item){
                item.process = 0;
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
                                    me.qualityview(me.homeworks);
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
                var list = me.qualitylist;
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
                            me.qualityview(me.homeworks);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            finishBtn(){
                var me = this;
                me.$http.get("/api/quality/finishQuality", {
                    params: {
                        id: me.homeworksID
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("质控登记完成完成！");
                            me.getData();
                            console.log()
                            me.viewDetails(me.taskID);
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
                        me.$http.get("/api/dispatch/checkFlowLab", {
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
                                501: "当前存在未完成作业，无法流转！"
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
            exportInspect(id){
                var me = this;
                me.$http.get("/api/task/getInspectList", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    for (var i = 0; i < data.length; i++) {
                        data[i].inspectType = "water";
                    }
                    me.inspectList = data;
                    me.$nextTick(function () {
                        $('.chooseInspect').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择送检单类型"
                        });
                    })
                }, response => {
                    serverErrorInfo(response);
                });
                jQuery("#exportInspect").modal("show");
            },
            exportInspectDetails(item){
                var me = this;
                window.open("http://" + window.location.hostname + ":8080/api/task/exportInspect?id=" + item.inspect.id);
            },
            createInspect(item){
                var me = this;
                me.$http.get("/api/task/createInspect", {
                    params: {
                        item_project_id: item.item_project_id,
                        type: item.inspectType
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("送检单生成成功！");
                            me.exportInspect(me.task.id);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
            },
            createInspectAll(){

                alert("aa");
            },
            exportQuality(id){
                var me = this;
                // console.log(me.homeworksID);
                window.open("http://" + window.location.hostname + ":8080/api/company/exportQuality?id=" +id);
                alert("aa");
            }
        }
    }

</script>
