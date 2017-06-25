<template>
    <div>
        <h1 class="page-title"> 我的报告任务
            <small>／My Report Task</small>
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
                                    <div class="col-md-3 col-sm-3">
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
                                    <div class="col-md-3 col-sm-3 todo-container">
                                        <div class="todo-projects-item">
                                            <ul class="todo-projects-container ">
                                                <template v-for="item in elementMonitor">
                                                    <li class="todo-projects-item " @click="viewCompany(item)">
                                                        <h4 :class="item.isActive==1?'font-green':'font-grey-salsa'">
                                                            {{item.company}}
                                                        </h4>
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
                                    <div class="col-md-6 col-sm-6 bg-after-green" v-show="company_id">
                                        <div class="tab-pane active" id="page_1">
                                            <div class="form-group todo-container" style="padding: 10px 0px ">
                                                <h4>相关文档</h4>
                                                <hr>
                                                <p>
                                                    <button type="button" class="btn green btn-outline"
                                                            @click="fetchTask">合同
                                                    </button>
                                                    <button type="button" class="btn blue btn-outline"
                                                            @click="fetchTask">任务书
                                                    </button>
                                                    <button type="button" class="btn yellow btn-outline"
                                                            @click="fetchSamples">样品信息
                                                    </button>
                                                    <button type="button" class="btn purple btn-outline"
                                                            @click="fetchQuery">质量控制
                                                    </button>
                                                    <button type="button" class="btn dark btn-outline">实验结果
                                                    </button>
                                                </p>
                                            </div>
                                            <div class="clearfix"></div>
                                            <form class="form-horizontal" action="#"
                                                  method="POST" id="deliveryForm">
                                                <h4>报告编制</h4>
                                                <hr>
                                                <div class="form-group">
                                                    <label class="control-label col-md-3" for="charge">报告类型
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-7">
                                                        <select class="bs-select form-control"
                                                                name="charge"
                                                                id="charge"
                                                                data-live-search="true"
                                                                v-model="dispatch.charge_id"
                                                                required>
                                                            <option></option>
                                                            <template v-for="item in userList">
                                                                <option :value="item.id">{{item.name}}</option>
                                                            </template>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-2" style="padding-left: 0px;">
                                                        <button type="button"
                                                                class="btn blue btn-outline">创 建
                                                        </button>
                                                    </div>

                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-md-3" for="charge">上传报告
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-9">
                                                        <div id="myId" class="dropzone">
                                                            <div class="dz-message">
                                                                将文件拖至此处或点击上传.<br>
                                                                <span class="note">上传已完成的报告。</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <button type="button" id="createReport"
                                                    class="btn green btn-outline pull-right">保 存
                                            </button>
                                            <div class="clearfix"></div>
                                            <div class="form-group todo-container" style="padding: 10px 0px ">
                                                <h4>报告列表</h4>
                                                <hr>
                                                <div class="table-scrollable table-scrollable-borderless">
                                                    <table class="table table-hover table-light">
                                                        <thead>
                                                        <tr class="uppercase">
                                                            <th> 序号</th>
                                                            <th> 报告类别</th>
                                                            <th> 创建者</th>
                                                            <th> 创建时间</th>
                                                            <th> 来源</th>
                                                            <th> 状态</th>
                                                            <th> 操作</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <template v-for="(it,index) in reportList">
                                                            <tr>
                                                                <td class="text-center">{{index+1}}</td>
                                                                <td class="text-center">{{it.type.name}}</td>
                                                                <td class="text-center">{{it.creater.name}}</td>
                                                                <td class="text-center"> {{it.create_time}}</td>
                                                                <td class="text-center" v-if="it.flag==0">
                                                                    上传
                                                                </td>
                                                                <td class="text-center" v-if="it.flag==1">
                                                                    创建
                                                                </td>
                                                                <td class="text-center">
                                                                    <span class="label label-info" v-if="it.process==0"> 编制 </span>
                                                                    <span class="label label-danger"
                                                                          v-if="it.process==-1"> 一审拒绝 </span>
                                                                    <span class="label label-success"
                                                                          v-if="it.process==2"> 一审通过 </span>
                                                                    <span class="label label-danger"
                                                                          v-if="it.process==-2"> 二审拒绝 </span>
                                                                    <span class="label label-success"
                                                                          v-if="it.process==3"> 二审通过 </span>
                                                                </td>
                                                                <td class="text-center">
                                                                    <button type="button"
                                                                            class="btn btn-sm green btn-outline">查 看
                                                                    </button>
                                                                    <button type="button"
                                                                            class="btn btn-sm btn-outline  blue"
                                                                            v-if="it.process==1||it.process==-1||it.process==-2">
                                                                        编 辑
                                                                    </button>
                                                                    <button type="button"
                                                                            class="btn btn-sm btn-outline  red"
                                                                            @click="deleteReport(it.id)"
                                                                            v-if="it.process==1||it.process==-1||it.process==-2">
                                                                        删 除
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 bg-after-green" v-show="!company_id">
                                        <h4>尚未选择任务，或不存在待派遣任务</h4>
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

        <div class="modal fade bs-modal-lg" id="contract" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看合同详情</h4>
                    </div>
                    <div class="modal-body">


                        <h4 class="form-section">甲方信息</h4>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">委托单位
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.client_unit}}</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">邮政编码
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.client_code}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">联系地址
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label">
                                        {{contract.client_address}}</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">联系电话
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.client_tel}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">联系人
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.client}}</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">传真号码
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.client_fax}}</label>
                                </div>
                            </div>
                        </div>
                        <h4 class="form-section">乙方信息</h4>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">受托单位
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.trustee_unit}}</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">邮政编码
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.trustee_code}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">联系地址
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label">
                                        {{contract.client_address}}</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">联系电话
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.trustee_tel}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">联系人
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.trustee.name}}</label>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="control-label col-md-4">传真号码
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.trustee_fax}}</label>
                                </div>
                            </div>
                        </div>
                        <h4 class="form-section">合同详情</h4>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">项目名称
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.name}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">监测目的
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.aim}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">监测类别
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label"> {{contract.type.name}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">检测方式
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label" v-if="contract.way==1">
                                        以我单位通过计量认证、国家实验室认可的方法进行检测 </label>
                                    <label class="control-label" v-if="contract.way==2">
                                        客户指定的方法：{{contract.wayDesp}} </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">检测项目
                                </label>
                                <div class="col-md-10">
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
                                                                    {{itemList.flag==0?contract.client_unit:itemList.company}}
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
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">是否分包
                                </label>
                                <div class="col-md-8">
                                    <!--<label class="control-label"> {{contract.package_unit}}</label>-->

                                    <label v-if="contract.isPackage==1"> 是</label>
                                    <label v-if="contract.isPackage==0">否</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">客户要求
                                    <span class="required">  </span>
                                </label>
                                <div class="col-md-10">
                                    <div class="mt-checkbox-list">
                                        <label class="control-label"
                                               v-if="contract.in_room==1">客户需要进入实验室监视与本次委托有关的检测活动。</label>
                                        <label class="control-label"
                                               v-if="contract.secret==1">客户需要本实验室对本次委托有关资料保密。</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="form-section">其他约定</h4>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">交付方式
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label">{{contract.paymentWay}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">完成时间
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label">{{contract.finish_time}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">监测费用
                                </label>
                                <div class="col-md-8">
                                    <div class="col-md-4">
                                        <label class="control-label">￥{{contract.payment}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="control-label col-md-2">其他约定
                                </label>
                                <div class="col-md-8">
                                    <label class="control-label">{{contract.other}}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">Close</button>
                        <button type="button" class="btn green">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

        <div class="modal fade bs-modal-lg" id="task" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看任务书详情</h4>
                    </div>
                    <div class="modal-body">
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
                        <div class="row">
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
                                            <template v-for="itemList in taskitemLists">
                                                <template
                                                        v-for="(item,index) in itemList.items">
                                                    <tr>
                                                        <td class="text-center">
                                                            {{index+1}}
                                                        </td>
                                                        <td class="text-center">
                                                            <!--{{itemList.flag==0?contract.client_unit:itemList.company}}-->
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
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">Close</button>
                        <button type="button" class="btn green">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade bs-modal-lg" id="sample" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看样品详情</h4>
                    </div>
                    <div class="modal-body">
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
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">Close</button>
                        <button type="button" class="btn green">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade bs-modal-lg" id="quality" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看质量控制</h4>
                    </div>
                    <div class="modal-body">
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
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <template v-for="(item,index) in qualityList">
                                            <tr class="uppercase">
                                                <td class="text-center"> {{index+1}}
                                                </td>
                                                <td class="text-center"> {{item.project.name}}
                                                </td>
                                                <td class="text-center">
                                                    {{item.sampleList.length}}
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
                                                                {{item.libList.length}}个
                                                            </td>
                                                            <td style="padding-top: 20px">
                                                                <template v-for="sa in item.libList">
                                                                    {{sa.identify}}
                                                                </template>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="text-center">
                                                    <table class="table table-hover">
                                                        <tr>
                                                            <td class="text-center"
                                                                style="padding-top: 20px;">
                                                                {{item.tagList.length}}个
                                                            </td>
                                                            <td style="padding-top: 20px">
                                                                <template v-for="sa in item.tagList">
                                                                    {{sa.identify}}
                                                                </template>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="text-center">
                                                    {{item.blind}}
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
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">Close</button>
                        <button type="button" class="btn green">Save changes</button>
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
    import Dropzone from 'mod/dropzone'
    import 'style/dropzone'
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "process=9",
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
                    project: []
                },
                sampleList: [],
                company_id: "",
                reportList: [],
                contract: {
                    client: "",
                    client_code: "",
                    client_address: "",
                    client_tel: "",
                    client_unit: "",
                    client_fax: "",
                    trustee: "",
                    trustee_code: "",
                    trustee_address: "",
                    trustee_tel: "",
                    trustee_unit: "",
                    trustee_fax: "",
                    way: 1,
                    wayDesp: "",
                    finish_time: "",
                    payment: "",
                    paymentWay: "挂号邮寄",
                    in_room: false,
                    secret: true,
                    item: [],
                    project_items: [],
                    other: "",
                    type: "",
                    isPackage: 0,
                    importWrite: 0,
                },
                itemLists: [],
                taskitemLists: [],
                qualityList: []
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

            var elementDropzone = me.elementDropzone = new Dropzone("div#myId", {
                url: "/api/file/upload",
                paramName: "file", // The name that will be used to transfer the file
                maxFilesize: 2, // MB
                uploadMultiple: false,
                addRemoveLinks: true,
                previewsContainer: null,
                acceptedFiles: ".doc,.docx,.xls,.xlsx",
                dictInvalidFileType: "文件类型不匹配",
                dictRemoveFile: "取消上传",
                dictRemoveLinks: "x",
                dictCancelUpload: "x"
            });
            elementDropzone.on("success", function (file, finished) {
                codeState(finished.code, {
                    200: function () {
                        //me.path = finished.path;
                        jQuery("#createReport").off("click").on("click", function () {
                            me.$http.post("/api/report/create", {
                                type: me.dispatch.charge_id,
                                flag: 0,
                                report_path: finished.path,
                                company_id: me.company_id
                            }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200: function () {
                                        alert("合同保存成功！");
                                        me.fetchRepor();
                                    }
                                })
                            }, response => {
                                serverErrorInfo(response);
                            })
                        });
                    }
                })
            });
            BlogUtils.formValid(jQuery("#deliveryForm"));
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
                me.$http.get("/api/element/total").then(response => {
                    var data = response.data;
                    me.userList = data.results;
                    me.$nextTick(function () {
                        $('#charge').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择报告类型",
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
                        me.task.id = id;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
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
            fetchRepor(){
                var me = this;
                me.$http.get("/api/report/list", {
                    params: {
                        id: me.company_id
                    }
                }).then(response => {
                    var data = response.data;
                    me.reportList = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            deleteReport(id){
                var me = this;
                confirm({
                    content: "是否删除当前报告？",
                    success(){
                        me.$http.get("/api/report/deleteReport", {
                            params: {
                                report_id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("删除成功！");
                                    me.fetchRepor();
                                }
                            })
                        })
                    }
                })
            },
            flow(id){
                var me = this;
                confirm({
                    content: "是否确认已完成所有作业的报告编制并流转该任务？",
                    success: function () {
                        me.$http.get("/api/report/editFlow", {
                            params: {
                                task_id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("任务流转成功！");
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
            viewCompany(item){
                var me = this;
                me.company_id = item.id;
                me.fetchRepor();
            },
            fetchTask(){
                var me = this;
                me.$http.get("/api/contract/findByTaskId", {
                    params: {
                        id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200(){
                            me.contract = data;
                            me.fetchItems(data.id);
                        },
                        201(){
                            window.open(data.path);
                        },
                        504(){
                            alert("当前任务书暂无合同！");
                        }
                    })

                    jQuery('#contract').modal("show");
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchItems(id){
                var me = this;
                me.$http.get("/api/contract/getItems", {
                    params: {
                        contract_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.itemLists = data;
//                    console.log(me.itemLists);
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchTask(){
                var me = this;
                me.$http.get("/api/task/taskDetails", {
                    params: {
                        id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.task = data;
                    me.fetchTaskItems(data.id);
                    jQuery('#task').modal("show");
                }, response => {
                    serverErrorInfo(response);
                })

            },
            fetchTaskItems(id){
                var me = this;
                me.$http.get("/api/task/taskGetItems", {
                    params: {
                        task_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.taskitemLists = data;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchSamples(){
                var me = this;
                me.$http.get("/api/sample/list", {
                    params: {
                        company_id: me.company_id
                    }
                }).then(response => {
                    var data = response.data;
                    me.sampleList = data.results;
                    jQuery("#sample").modal("show");
                }, response => {
                    serverErrorInfo(response)
                })
            },
            fetchQuery(){
                var me = this;
                me.$http.get("/api/quality/list", {
                    params: {
                        task_id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.qualityList = data;
                    jQuery("#quality").modal("show");
                }, response => {
                    serverErrorInfo(response);
                })
            },

        }
    }

</script>
