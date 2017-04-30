<template>
    <div>
        <h1 class="page-title"> 业务合同列表
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
                                                <span class="badge badge-warning">{{countProcess.change}} </span>
                                                待修改
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(1)">
                                                <span class="badge badge-info"> {{countProcess.create}} </span>
                                                待审核 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess(2)">
                                                <span class="badge badge-primary"> {{countProcess.review}}</span>
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
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption">
                                    <span class="caption-subject font-red bold uppercase">监测类别 </span>
                                    <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看</span>
                                </div>
                                <div class="actions">
                                    <div class="actions">
                                        <a class="btn btn-circle green btn-outline btn-sm" href="/type/create">
                                            <i class="fa fa-plus"></i> 新增 </a>
                                    </div>
                                </div>
                            </div>
                            <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                                <div class="todo-project-list">
                                    <ul class="nav nav-pills nav-stacked">
                                        <template v-for="item in typeList">
                                            <li>
                                                <a href="javascript:;" @click="searchByType(item.id)">{{item.name}} </a>
                                            </li>
                                        </template>
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
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title"> {{item.identify}}
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
                                                        <span class="label label-sm label-warning"
                                                              v-if="item.process==-1">待修改</span>
                                                        <span class="label label-sm label-info"
                                                              v-if="item.process==1">待审核</span>
                                                        <span class="label label-sm label-primary"
                                                              v-if="item.process==2">待执行</span>
                                                        <span class="label label-sm label-success"
                                                              v-if="item.process==3">已执行</span>
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
                                                            <a href="#page_2" data-toggle="tab"> 监测项目 </a>
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
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">委托单位
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_unit}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">邮政编码
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_code}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">联系地址
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_address}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">联系电话
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_tel}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">联系人
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">传真号码
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_fax}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">受托单位
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_unit}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">邮政编码
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_code}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">联系地址
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_address}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">联系电话
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_tel}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">联系人
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee.name}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-5">传真号码
                                                                    </label>
                                                                    <div class="col-md-7">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_fax}}
                                                                        </p>
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
                                                                            {{contract.name}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">监测目的
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.aim}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">监测类别
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.type.name}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">检测方式
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static"
                                                                           v-if="contract.way==1">
                                                                            以我单位通过计量认证、国家实验室认可的方法进行检测。
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.way==2">
                                                                            客户指定的方法：{{contract.wayDesp}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">客户要求
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static"
                                                                           v-if="contract.in_room==1">
                                                                            客户需要进入实验室监视与本次委托有关的检测活动。
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.secret==1">
                                                                            客户需要本实验室对本次委托有关资料保密。
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">分包单位
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.package_unit}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">交付方式
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.paymentWay}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">完成时间
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.finish_time}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">监测费用
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            ￥{{contract.payment}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-2">其他约定
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.other}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane" id="page_2">
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
                                                        <div class="tab-pane" id="page_3">
                                                            <table class="table table-hover">
                                                                <tr>
                                                                    <td>
                                                                        导出该合同

                                                                    </td>
                                                                    <td style="text-align: right">
                                                                        <button type="button"
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

            <div class="modal fade draggable-modal" id="showProject" tabindex="-1" role="basic" aria-hidden="true">
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
                project: []
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
                this.$http.get('/api/contract/list', {
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
                this.$http.get('/api/contract/list', {
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
            fetchLog(id){
                var me = this;
                me.$http.get("/api/log/contractLog", {
                    params: {
                        id: id
                    }
                }).then(response => {
                        var data = response.data;
//                        debugger
                        me.log = data.results;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
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
            viewDetails(item){
                var me = this;
                me.$http.get("/api/contract/contractDetails", {
                    params: {
                        id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.contract = data;
                }, response => {
                    serverErrorInfo(response);
                })
                me.fetchItems(item.id);
                me.fetchLog(item.id);
            },
            search(){
                var me = this;
                me.currentPage = 1;
                me.condition = "";
                me.getData();
            },
            searchByType(id){
                var me = this;
                me.currentPage = 1;
                me.condition = "type=" + id;
                me.getData();
            },
            searchByProcess(step){
                var me = this;
                me.currentPage = 1;
                if (step != "total") {
                    me.condition = "process=" + step;
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
            finishConstract(){
                var me = this;
                confirm({
                    content: "您是否已经完成合同【" + me.contract.name + "】的所有任务的创建,该操作将同时中止当前任务流程且无法撤销，是否继续？",
                    success(){
                        console.log(me.contract.id);
                        me.$http.get("/api/contract/finishContract", {
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
                        me.$http.get("/api/contract/stopContract", {
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
                        me.$http.get("/api/contract/deleteContract", {
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
                router.push("/contract/change?id=" + me.contract.id);
            },
            exportContract(){
                var me = this;
                window.open("http://" + window.location.hostname + ":8080/api/contract/createContract?id="+me.contract.id);
            }
        }
    }

</script>
