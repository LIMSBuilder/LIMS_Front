<template>
    <div>
        <h1 class="page-title"> 任务派遣
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
                                            <div class="todo-tasklist-item todo-tasklist-item-border-warning">
                                                <h4 class="text-center">显示全部</h4>
                                            </div>
                                            <template v-for="item in taskList">
                                                <div @click="viewElementMonitor(item.id)"
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
                                                            {{item.company}}</h4>
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
                                                                   @click="showProject(item.task_id,item.company)">查看详情</a>
                                                            </p>
                                                            <p class="todo-inline todo-float-r">
                                                                <a href="javascript:;" class="font-grey-salsa">6
                                                                    Members</a>
                                                                <a class="todo-add-button" href="javascript:;"
                                                                   @click="addProject(item)"
                                                                   v-if="item.isActive!=1">+</a>
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <div class="todo-projects-divider"></div>
                                                </template>
                                                <li class="todo-projects-item " v-if="elementMonitor.length==0"
                                                    style="height: 100px;">
                                                    <h4>尚未选择任务，点击左侧任务列表！</h4>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- Pagination -->
                                        <div class="pagination pull-right">
                                            <div class="M-box front pull-right" style="margin-top:10px; "></div>
                                        </div>
                                        <!-- End Pagination -->
                                    </div>
                                    <div class="col-md-4 col-sm-4 bg-after-green">
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#page_1" data-toggle="tab"> 任务派遣 </a>
                                                </li>
                                                <li>
                                                    <a href="#page_2" data-toggle="tab"> 执行中派遣 </a>
                                                </li>
                                                <li>
                                                    <a href="#page_3" data-toggle="tab"> 历史派遣 </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="dispatchWizard">
                                                <div class="tab-pane active" id="page_1">
                                                    <form class="form-horizontal" action="#"
                                                          method="POST">
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
                                                        <ul class="todo-tasks-content" style="padding: 0px;">
                                                            <template v-for="item in addProjectList">
                                                                <li class="todo-tasks-item"
                                                                    style="list-style: none; padding: 10px 0 20px 0;">
                                                                    <h4 class="todo-inline">
                                                                        <a data-toggle="modal" href="#todo-task-modal"
                                                                           @click="">
                                                                            {{item.company}}
                                                                        </a>
                                                                    </h4>
                                                                    <div class="todo-inline todo-float-r">
                                                                        <button type="button" class="btn default"
                                                                                @click="deleteItem(item)"
                                                                                style="float: right; ">
                                                                            取 消
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </template>
                                                            <li class="todo-tasks-item"
                                                                style="list-style: none; padding: 10px 0 20px 0;"
                                                                v-if="addProjectList.length==0">
                                                                <h4 class="todo-inline">
                                                                    <a data-toggle="modal" href="#todo-task-modal">
                                                                        暂无任务,请选择任务！
                                                                    </a>
                                                                </h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <hr>
                                                    <button type="button" class="btn green"
                                                            @click="createDispatch"
                                                            style="float: right; ">
                                                        保存
                                                    </button>
                                                </div>
                                                <div class="tab-pane" id="page_2">
                                                    <div class="todo-container">
                                                        <div class="row">
                                                            <div class="todo-tasks-container" style="margin-bottom: 10px">
                                                                <div class="todo-head">
                                                                    <h3>
                                                                        <span class="todo-grey">Task:</span>任务编号
                                                                    </h3>
                                                                    <p>2017-04-16</p>
                                                                </div>
                                                                <div class="todo-tasks-content">
                                                                    <h4>参与人员:</h4>
                                                                    <ul style="padding: 0px 0px 0px 20px">
                                                                        <li class="todo-inline">
                                                                            张三
                                                                            <span v-show="1"
                                                                                  style="color: red; font-size: 0.3em">[负责]</span>、
                                                                        </li>
                                                                        <li class="todo-inline">
                                                                            李四、
                                                                        </li>
                                                                        <li class="todo-inline">
                                                                            王五、
                                                                        </li>
                                                                    </ul>
                                                                    <hr>
                                                                    <h4>负责项目:</h4>
                                                                    <ul class="todo-tasks-content" style="padding: 0px">
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;" @click="ddddd">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州金吉彩色电镀公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州市金霸王电源有限公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州市金霸王电源有限公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div class="todo-tasks-container" style="margin-bottom: 10px">
                                                                <div class="todo-head">
                                                                    <h3>
                                                                        <span class="todo-grey">Task:</span>任务编号
                                                                    </h3>
                                                                    <p>2017-04-16</p>
                                                                </div>
                                                                <div class="todo-tasks-content">
                                                                    <h4>参与人员:</h4>
                                                                    <ul style="padding: 0px 0px 0px 20px">
                                                                        <li class="todo-inline">
                                                                            张三
                                                                            <span v-show="1"
                                                                                  style="color: red; font-size: 0.3em">[负责]</span>、
                                                                        </li>
                                                                        <li class="todo-inline">
                                                                            李四、
                                                                        </li>
                                                                        <li class="todo-inline">
                                                                            王五、
                                                                        </li>
                                                                    </ul>
                                                                    <hr>
                                                                    <h4>负责项目:</h4>
                                                                    <ul class="todo-tasks-content" style="padding: 0px">
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州金吉彩色电镀公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州市金霸王电源有限公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州市金霸王电源有限公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                            <div class="todo-tasks-container" style="margin-bottom: 10px;">
                                                                <div class="todo-head">
                                                                    <h3>
                                                                        <span class="todo-grey">Task:</span>任务编号
                                                                    </h3>
                                                                    <p>2017-04-16</p>
                                                                </div>
                                                                <div class="todo-tasks-content">
                                                                    <h4>参与人员:</h4>
                                                                    <ul style="padding: 0px 0px 0px 20px">
                                                                        <li class="todo-inline">
                                                                            张三
                                                                            <span v-show="1"
                                                                                  style="color: red; font-size: 0.3em">[负责]</span>、
                                                                        </li>
                                                                        <li class="todo-inline">
                                                                            李四、
                                                                        </li>
                                                                        <li class="todo-inline">
                                                                            王五、
                                                                        </li>
                                                                    </ul>
                                                                    <hr>
                                                                    <h4>负责项目:</h4>
                                                                    <ul class="todo-tasks-content" style="padding: 0px">
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州金吉彩色电镀公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州市金霸王电源有限公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                        <li class="todo-tasks-item"
                                                                            style="list-style: none; padding: 10px 0 20px 0;">
                                                                            <h4 class="todo-inline">
                                                                                <a data-toggle="modal">
                                                                                    常州市金霸王电源有限公司
                                                                                </a>
                                                                            </h4>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="page_3">
                                                   和执行中派遣一样，不过想着是先折叠，点击再打开显示这一个任务的详细
                                                </div>
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
        <div class="modal fade draggable-modal" id="showProject" tabindex="-1" role="basic" aria-hidden="true">
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
                                    <th> 公司、道路名称</th>
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
                                        <td class="text-center">{{item.other}}</td>
                                        <td class="text-center">
                                            {{item.element.name}}
                                        </td>
                                        <td class="text-center">
                                            {{item.point}}
                                        </td>
                                        <td class="text-center">
                                            <button type="button"
                                                    class="btn green btn-outline"
                                                    @click="showProjectName(item.id)">
                                                详情
                                            </button>
                                        </td>
                                        <td class="text-center">
                                            {{item.frequency?item.frequency.total:''}}
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade draggable-modal" id="showProjectName" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">检测项目详情列表</h4>
                    </div>
                    <div class="modal-body">
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
                condition: "",
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
            showProject(id, company){
                var me = this;
                me.$http.get("/api/sample/DetailList", {
                    params: {
                        task_id: id,
                        company: company
                    }

                }).then(
                    response => {
                        var data = response.data;
                        me.element = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
                jQuery("#showProject").modal("show");

            },
            //查看详细的检测项目
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
                jQuery("#showProjectName").modal("show");
            },
            addProject(item){
                var me = this;
                item.isActive = 1;
                me.addProjectList.push(item);
                console.log(me.addProjectList);
                console.log(me.addProjectList.length);
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
            createDispatch(){
                var me = this;
//                if (jQuery("#dispatchWizard").valid()) {
                var items = me.addProjectList;
                console.log(me.addProjectList);
                var obj = {};
                //先创一个对象，就你需要的task_id和company发到对象里；
                // 再将对象push到一个数组里；
                // 将数组用JSON.stringify()转换为字符串，传给project
                var arrayList = [];
                for (var i = 0; i < items.length; i++) {
//                    console.log(items[i].task_id);
//                    console.log(items[i].company);
                    obj.task_id = items[i].task_id;
                    obj.company = items[i].company;
                    arrayList.push(obj);
                }
                me.dispatch.project = JSON.stringify(arrayList);
//                alert(arrayList.length);
                if (arrayList.length < 1) {
                    alert("您还没有选择任务，请选择派遣任务！")
                } else {
                    console.log(me.dispatch);
                    App.startPageLoading({animate: true});
                    me.$http.post("/api/dispatch/create", me.dispatch).then(
                        response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("任务派遣成功！");
                                    App.stopPageLoading();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        }
                    )
                }
//                }
//
            },
            ddddd(){
                alert("详细信息！");
            }
//            wizard(){
//                //wizard插件和表单验证序列化
//                var form = $('#dispatchWizard');
//                var error = $('.alert-danger', form);
//                var success = $('.alert-success', form);
//                jQuery("#dispatchWizard").validate({
//                    doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
//                    errorElement: 'span', //default input error message container
//                    errorClass: 'help-block help-block-error', // default input error message class
//                    focusInvalid: false, // do not focus the last invalid input
//                    rules: {
//                        charge: {
//                            required: true
//                        }
//                    },
//
//                    errorPlacement: function (error, element) { // render error placement for each input type
//                        if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
//                            error.insertAfter("#form_gender_error");
//                        } else if (element.attr("name") == "payment[]") { // for uniform checkboxes, insert the after the given container
//                            error.insertAfter("#form_payment_error");
//                        } else {
//                            error.insertAfter(element); // for other inputs, just perform default behavior
//                        }
//                    },
//
//                    invalidHandler: function (event, validator) { //display error alert on form submit
//                        success.hide();
//                        error.show();
//                        App.scrollTo(error, -200);
//                    },
//
//                    highlight: function (element) { // hightlight error inputs
//                        $(element)
//                            .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
//                    },
//
//                    unhighlight: function (element) { // revert the change done by hightlight
//                        $(element)
//                            .closest('.form-group').removeClass('has-error'); // set error class to the control group
//                    },
//
//                    success: function (label) {
//                        if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
//                            label
//                                .closest('.form-group').removeClass('has-error').addClass('has-success');
//                            label.remove(); // remove error label here
//                        } else { // display success icon for other inputs
//                            label
//                                .addClass('valid') // mark the current input as valid and display OK icon
//                                .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
//                        }
//                    },
//
//                    submitHandler: function (form) {
//                        success.show();
//                        error.hide();
//                        form[0].submit();
//                        //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
//                    }
//
//                });
//                var displayConfirm = function () {
//                    $('#tab4 .form-control-static', form).each(function () {
//                        var input = $('[name="' + $(this).attr("data-display") + '"]', form);
//                        if (input.is(":radio")) {
//                            input = $('[name="' + $(this).attr("data-display") + '"]:checked', form);
//                        }
//                        if (input.is(":text") || input.is("textarea")) {
//                            $(this).html(input.val());
//                        } else if (input.is("select")) {
//                            $(this).html(input.find('option:selected').text());
//                        } else if (input.is(":radio") && input.is(":checked")) {
//                            $(this).html(input.attr("data-title"));
//                        } else if ($(this).attr("data-display") == 'payment[]') {
//                            var payment = [];
//                            $('[name="payment[]"]:checked', form).each(function () {
//                                payment.push($(this).attr('data-title'));
//                            });
//                            $(this).html(payment.join("<br>"));
//                        }
//                    });
//                }
//                var handleTitle = function (tab, navigation, index) {
//                    var total = navigation.find('li').length;
//                    var current = index + 1;
//                    // set wizard title
//                    $('.step-title', $('#contract_wizard')).text('Step ' + (index + 1) + ' of ' + total);
//                    // set done steps
//                    jQuery('li', $('#contract_wizard')).removeClass("done");
//                    var li_list = navigation.find('li');
//                    for (var i = 0; i < index; i++) {
//                        jQuery(li_list[i]).addClass("done");
//                    }
//
//                    if (current == 1) {
//                        $('#contract_wizard').find('.button-previous').hide();
//                    } else {
//                        $('#contract_wizard').find('.button-previous').show();
//                    }
//
//                    if (current >= total) {
//                        $('#contract_wizard').find('.button-next').hide();
//                        $('#contract_wizard').find('.button-submit').show();
//                        displayConfirm();
//                    } else {
//                        $('#contract_wizard').find('.button-next').show();
//                        $('#contract_wizard').find('.button-submit').hide();
//                    }
//                    App.scrollTo($('.page-title'));
//                }
//                $('#contract_wizard').bootstrapWizard({
//                    'nextSelector': '.button-next',
//                    'previousSelector': '.button-previous',
//                    onTabClick: function (tab, navigation, index, clickedIndex) {
//                        return false;
//
//                        success.hide();
//                        error.hide();
//                        if (form.valid() == false) {
//                            return false;
//                        }
//
//                        handleTitle(tab, navigation, clickedIndex);
//                    },
//                    onNext: function (tab, navigation, index) {
//                        success.hide();
//                        error.hide();
//
//                        if (form.valid() == false) {
//                            return false;
//                        }
//                        handleTitle(tab, navigation, index);
//                    },
//                    onPrevious: function (tab, navigation, index) {
//                        success.hide();
//                        error.hide();
//
//                        handleTitle(tab, navigation, index);
//                    },
//                    onTabShow: function (tab, navigation, index) {
//                        var total = navigation.find('li').length;
//                        var current = index + 1;
//                        var $percent = (current / total) * 100;
//                        $('#contract_wizard').find('.progress-bar').css({
//                            width: $percent + '%'
//                        });
//                    }
//                });
//                $('#contract_wizard').find('.button-previous').hide();
//                $('#contract_wizard').find('.button-submit').hide();
//                $('#country_list', form).change(function () {
//                    form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
//                });
//            },

        }
    }

</script>
