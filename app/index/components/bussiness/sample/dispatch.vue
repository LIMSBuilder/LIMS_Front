<template>
    <div>
        <h1 class="page-title"> 样品采样任务派遣
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
                                    <div class="col-md-4 col-sm-4 todo-container">
                                        <div class="todo-projects-item">
                                            <ul class="todo-projects-container ">
                                                <template v-for="item in elementMonitor">
                                                    <li class="todo-projects-item ">
                                                        <h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">
                                                            <span class="label label-danger"
                                                                  v-if="item.process==0&&item.isActive!=1"> 待派遣 </span>
                                                            <span class="label label-warning"
                                                                  v-if="item.process==0&&item.isActive==1"> 已选择 </span>
                                                            <span class="label label-info"
                                                                  v-if="item.process==1"> 已派遣 </span>
                                                            <span class="label label-success"
                                                                  v-if="item.process==2"> 已完成 </span>{{item.company}}
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
                                                                <a href="javascript:;" class="font-grey-salsa"
                                                                   v-if="item.process!=0"
                                                                   @click="showMember(item.joiner)">{{item.joiner.length}}
                                                                    Members</a>
                                                                <a class="todo-add-button" href="javascript:;"
                                                                   @click="addProject(item)"
                                                                   v-if="item.isActive!=1&&item.process==0">+</a>
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
                                    <div class="col-md-4 col-sm-4 bg-after-green">
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#page_1" data-toggle="tab"> 任务派遣 </a>
                                                </li>
                                                <!--<li>-->
                                                    <!--<a href="#page_2" data-toggle="tab"> 执行中派遣 </a>-->
                                                <!--</li>-->
                                                <!--<li>-->
                                                    <!--<a href="#page_3" data-toggle="tab"> 历史派遣 </a>-->
                                                <!--</li>-->
                                            </ul>
                                            <div class="tab-content" id="dispatchWizard">
                                                <div class="tab-pane active" id="page_1">
                                                    <form class="form-horizontal" action="#"
                                                          method="POST" id="deliveryForm">
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
                                                                        data-live-search="true"
                                                                        v-model="dispatch.charge_id"
                                                                        required>
                                                                    <option></option>
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
                                                                <span class="required"> </span>
                                                            </label>
                                                            <div class="col-md-9">
                                                                <select class="bs-select form-control"
                                                                        name="join"
                                                                        id="join"
                                                                        data-live-search="true"
                                                                        v-model="dispatch.join_id"
                                                                        multiple>
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
                                                    <div class="form-group todo-container" style="padding: 10px 0px ">
                                                        <h4>负责项目</h4>
                                                        <hr>

                                                        <div class="todo-projects-item">
                                                            <ul class="todo-projects-container" style="padding: 0px;">
                                                                <template v-for="item in addProjectList">
                                                                    <!--<li class="todo-tasks-item"-->
                                                                    <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                    <!--<h4 class="todo-inline font-grey">-->
                                                                    <!--<a data-toggle="modal" href="#todo-task-modal"-->
                                                                    <!--@click="">-->
                                                                    <!--{{item.company}}-->
                                                                    <!--</a>-->
                                                                    <!--</h4>-->
                                                                    <!--<div class="todo-inline todo-float-r">-->
                                                                    <!--<a class="todo-add-button" href="javascript:;"-->
                                                                    <!--@click="deleteItem(item)">-</a>-->
                                                                    <!--</div>-->
                                                                    <!--</li>-->
                                                                    <li class="todo-projects-item ">
                                                                        <h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">
                                                                            {{item.company}} /
                                                                            {{item.task.identify}}</h4>
                                                                        <ul class="receiver_tag">
                                                                            <template v-for="result in item.results">
                                                                                <li class="uppercase ">
                                                                                    <a href="javascript:;"
                                                                                       style="line-height: 30px">
                                                                                        {{result.name}}
                                                                                    </a>
                                                                                </li>
                                                                            </template>
                                                                        </ul>
                                                                        <div class="todo-project-item-foot">
                                                                            <p class="todo-red todo-inline">
                                                                                <a href="javascript:;"
                                                                                   class="font-green"
                                                                                   @click="showProject(item.id)">查看详情</a>
                                                                            </p>
                                                                            <p class="todo-inline todo-float-r">
                                                                                <a href="javascript:;"
                                                                                   class="font-grey-salsa"
                                                                                   v-if="item.process!=0"
                                                                                   @click="showMember(item.joiner)">{{item.joiner.length}}
                                                                                    Members</a>
                                                                                <a class="todo-add-button"
                                                                                   href="javascript:;"
                                                                                   @click="deleteItem(item)">-</a>
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    <div class="todo-projects-divider"></div>

                                                                </template>
                                                                <li v-if="addProjectList.length==0">尚未选择任务。</li>
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
                                                <!--<div class="tab-pane" id="page_2">-->
                                                    <!--<div class="todo-container">-->
                                                        <!--<div class="row">-->
                                                            <!--<div class="todo-tasks-container"-->
                                                                 <!--style="margin-bottom: 10px">-->
                                                                <!--<div class="todo-head">-->
                                                                    <!--<h3>-->
                                                                        <!--<span class="todo-grey">Task:</span>任务编号-->
                                                                    <!--</h3>-->
                                                                    <!--<p>2017-04-16</p>-->
                                                                <!--</div>-->
                                                                <!--<div class="todo-tasks-content">-->
                                                                    <!--<h4>参与人员:</h4>-->
                                                                    <!--<ul style="padding: 0px 0px 0px 20px">-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--张三-->
                                                                            <!--<span v-show="1"-->
                                                                                  <!--style="color: red; font-size: 0.3em">[负责]</span>、-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--李四、-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--王五、-->
                                                                        <!--</li>-->
                                                                    <!--</ul>-->
                                                                    <!--<hr>-->
                                                                    <!--<h4>负责项目:</h4>-->
                                                                    <!--<ul class="todo-tasks-content" style="padding: 0px">-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州金吉彩色电镀公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州市金霸王电源有限公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州市金霸王电源有限公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                    <!--</ul>-->

                                                                <!--</div>-->
                                                            <!--</div>-->
                                                            <!--<div class="todo-tasks-container"-->
                                                                 <!--style="margin-bottom: 10px">-->
                                                                <!--<div class="todo-head">-->
                                                                    <!--<h3>-->
                                                                        <!--<span class="todo-grey">Task:</span>任务编号-->
                                                                    <!--</h3>-->
                                                                    <!--<p>2017-04-16</p>-->
                                                                <!--</div>-->
                                                                <!--<div class="todo-tasks-content">-->
                                                                    <!--<h4>参与人员:</h4>-->
                                                                    <!--<ul style="padding: 0px 0px 0px 20px">-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--张三-->
                                                                            <!--<span v-show="1"-->
                                                                                  <!--style="color: red; font-size: 0.3em">[负责]</span>、-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--李四、-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--王五、-->
                                                                        <!--</li>-->
                                                                    <!--</ul>-->
                                                                    <!--<hr>-->
                                                                    <!--<h4>负责项目:</h4>-->
                                                                    <!--<ul class="todo-tasks-content" style="padding: 0px">-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州金吉彩色电镀公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州市金霸王电源有限公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州市金霸王电源有限公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                    <!--</ul>-->

                                                                <!--</div>-->
                                                            <!--</div>-->
                                                            <!--<div class="todo-tasks-container"-->
                                                                 <!--style="margin-bottom: 10px;">-->
                                                                <!--<div class="todo-head">-->
                                                                    <!--<h3>-->
                                                                        <!--<span class="todo-grey">Task:</span>任务编号-->
                                                                    <!--</h3>-->
                                                                    <!--<p>2017-04-16</p>-->
                                                                <!--</div>-->
                                                                <!--<div class="todo-tasks-content">-->
                                                                    <!--<h4>参与人员:</h4>-->
                                                                    <!--<ul style="padding: 0px 0px 0px 20px">-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--张三-->
                                                                            <!--<span v-show="1"-->
                                                                                  <!--style="color: red; font-size: 0.3em">[负责]</span>、-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--李四、-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-inline">-->
                                                                            <!--王五、-->
                                                                        <!--</li>-->
                                                                    <!--</ul>-->
                                                                    <!--<hr>-->
                                                                    <!--<h4>负责项目:</h4>-->
                                                                    <!--<ul class="todo-tasks-content" style="padding: 0px">-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州金吉彩色电镀公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州市金霸王电源有限公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                        <!--<li class="todo-tasks-item"-->
                                                                            <!--style="list-style: none; padding: 10px 0 20px 0;">-->
                                                                            <!--<h4 class="todo-inline">-->
                                                                                <!--<a data-toggle="modal">-->
                                                                                    <!--常州市金霸王电源有限公司-->
                                                                                <!--</a>-->
                                                                            <!--</h4>-->
                                                                        <!--</li>-->
                                                                    <!--</ul>-->

                                                                <!--</div>-->
                                                            <!--</div>-->

                                                        <!--</div>-->
                                                    <!--</div>-->
                                                <!--</div>-->
                                                <!--<div class="tab-pane" id="page_3">-->
                                                    <!--和执行中派遣一样，不过想着是先折叠，点击再打开显示这一个任务的详细-->
                                                <!--</div>-->
                                            </div>
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
        <div class="modal fade bs-modal-sm" id="smallIcon" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">样品二维码</h4>
                    </div>
                    <div class="modal-body">
                        <div id="showIcon" style="text-align: center">
                            <img src="../../../images/icon_demo.png" style="width: 200px;"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
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
                                    <th> 打印</th>
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
                                        <td class="text-center">
                                            <button type="button"
                                                    class="btn btn-sm green btn-outline"
                                                    @click="print(sample)">
                                                打印
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                        <hr>
                        <h4>团队成员</h4>
                        <ul class="receiver_tag">
                            <template v-for="join in joiner">
                                <li class="uppercase ">
                                    <a href="javascript:;"
                                       style="line-height: 30px" :class="join.type==1?'font-red':''">
                                        {{join.name}}
                                    </a>
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="modal-footer">
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
                    join_id: [],
                    project: []
                },
                sampleList: [],
                joiner: [],
                executingJobs: []
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
            me.fetchExecuting();

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
                        me.joiner = data.joiner;
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
            addProject(item){
                var me = this;
                item.isActive = 1;
                me.addProjectList.push(item);
            },
            deleteItem(item){
                var me = this;
                me.addProjectList.splice(me.addProjectList.find(function (t) {
                    return t.task_id === item.task_id && t.company == item.company;
                }), 1);

                //me.viewElementMonitor(item.task_id);
                var obj = me.elementMonitor.find(function (t) {
                    return t.task_id == item.task_id && t.company == item.company;
                });
                if (obj) obj.isActive = 0;
            },
            lightBtn(item){
                var me = this;
                if (item) {
                    BlogUtils.pulsate(item.identify);
                }
            },
            print(item){
                var me = this;
                var identify = item.identify;
//                window.print();
                jQuery("#smallIcon").modal("show");
//                jQuery("#showIcon").qrcode(BlogUtils.utf16to8("aa"));
                jQuery("#showIcon").jqprint();
            },
            createDispatch(){
                var me = this;
                if (!jQuery("#deliveryForm").valid()) {
                    return;
                }

                var items = me.addProjectList;
                var arrayList = [];
                for (var i = 0; i < items.length; i++) {
                    arrayList.push(items[i].id);
                }
                me.dispatch.company = arrayList;
                if (arrayList.length == 0) {
                    error("至少需要分配一个作业给团队成员！");
                } else {
                    App.startPageLoading({animate: true});
                    me.$http.post("/api/dispatch/create", me.dispatch).then(
                        response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("任务派遣成功！");
                                    me.addProjectList = [];
                                    App.stopPageLoading();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        }
                    )
                }
            },
            showMember(joiner){
                console.log(joiner);
            },
            flow(id){
                var me = this;
                confirm({
                    content: "是否确认已完成所有作业的样品登记并流转该任务？",
                    success: function () {
                        me.$http.get("/api/dispatch/checkFlow", {
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
            fetchExecuting(){
                var me = this;
                me.$http.get("/api/dispatch/executingJobs").then(response => {
                    var data = response.data;
                    me.executingJobs = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            }

        }
    }

</script>
