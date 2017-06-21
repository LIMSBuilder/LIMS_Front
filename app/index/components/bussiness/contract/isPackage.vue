<template>
    <div>
        <h1 class="page-title"> 项目分包
            <small>／IsPackage</small>
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
                                            <a href="javascript:;" @click="searchByProcess('totalPackage')">
                                                全部 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('waitPackage')">
                                                待分包
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('afterPackage')">
                                                已分包 </a>
                                        </li>
                                    </ul>

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
                                    <span class="caption-subject font-green-sharp bold uppercase">分包列表</span>
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
                                                              v-if="item.package_id==null">待分包</span>
                                                        <span class="label label-sm label-warning"
                                                              v-if="item.package_id!=null">已分包</span>
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
                                                            <a href="#page_5" data-toggle="tab"> 项目分包 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 监测项目 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_1" data-toggle="tab"> 合同详情 </a>
                                                        </li>

                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="page_5">
                                                            <div class="row" v-if="contract.package_unit==null">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="name">分包单位
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <input type="text" class="form-control"
                                                                               name="name"
                                                                               v-model="packages.name"
                                                                               id="name"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">项目
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <ul class="receiver_tag">
                                                                            <template v-for="item in packageitems">
                                                                                <li class="uppercase">
                                                                                    <a href="javascript:;">{{item.name}}</a>
                                                                                </li>
                                                                            </template>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <a href="#isPackage" data-toggle="modal"
                                                                           class="btn blue btn-outline form-control">选择分包</a>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="payment">金额
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <input type="text" class="form-control"
                                                                               name="payment"
                                                                               v-model="packages.payment"
                                                                               id="payment"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="contact">联系方式
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <input type="text" class="form-control"
                                                                               name="contact"
                                                                               v-model="packages.contact"
                                                                               id="contact"/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="remark">其他
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <textarea id="remark" name="remark"
                                                                                  v-model="packages.remark" rows="3"
                                                                                  class="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <button type="button" class="btn green "
                                                                            @click="createPackage"
                                                                            style="float: right;">添 加
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div class="row" v-if="contract.package_unit!=null">
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="name">分包单位
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <input type="text" class="form-control"
                                                                               name="name"
                                                                               v-model="contract.package_unit.name"
                                                                               id=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">项目
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <ul class="receiver_tag">
                                                                            <template v-for="item in packageitems">
                                                                                <li class="uppercase">
                                                                                    <a href="javascript:;">{{item.name}}</a>
                                                                                </li>
                                                                            </template>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3">
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <a href="#isPackage" data-toggle="modal"
                                                                           class="btn blue btn-outline form-control"
                                                                           @click="isPackage">选择分包</a>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="payment">金额
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <input type="text" class="form-control"
                                                                               name="payment"
                                                                               v-model="contract.package_unit.payment"
                                                                               id=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="contact">联系方式
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <input type="text" class="form-control"
                                                                               name="contact"
                                                                               v-model="contract.package_unit.contact"
                                                                               id=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <label class="control-label col-md-3" for="remark">其他
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <textarea id="" name="remark"
                                                                                  v-model="contract.package_unit.remark"
                                                                                  rows="3"
                                                                                  class="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12">
                                                                    <button type="button" class="btn red "
                                                                            @click="deletePackahe(contract.id)"
                                                                            style="float: right; margin-left: 10px">删 除
                                                                    </button>
                                                                    <button type="button" class="btn green "
                                                                            @click="changePackage"
                                                                            style="float: right;">修 改
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane " id="page_1">
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
            <div class="modal fade bs-modal-lg" id="isPackage" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h4 class="modal-title">分包项目</h4>
                        </div>
                        <div class="modal-body">
                            <div class="table-scrollable table-scrollable-borderless">
                                <table class="table table-hover table-light">
                                    <thead>
                                    <tr class="uppercase">
                                        <th> 检测企业或路段</th>
                                        <th> 环境要素</th>
                                        <th> 监测项目</th>
                                        <th> 是否分包</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="itemList in itemLists">
                                        <template v-for="(item,index) in itemList.items">
                                            <tr>
                                                <td class="text-center" rowspan="itemList.length">
                                                    {{itemList.flag==0?contract.client_unit:itemList.company}}
                                                </td>
                                                <td class="text-center" rowspan="item.project.length">
                                                    {{item.element.name}}
                                                </td>
                                                <td class="text-center">
                                                    <table class="table table-hover table-light">
                                                        <tbody>
                                                        <template v-for="project in item.project">
                                                            <tr>
                                                                <td class="text-center">
                                                                    {{project.name}}
                                                                </td>
                                                            </tr>
                                                        </template>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td class="text-center">
                                                    <table class="table table-hover table-light">
                                                        <tbody>
                                                        <template v-for="project in item.project">
                                                            <tr>
                                                                <td class="text-center">
                                                                    <label class="mt-checkbox mt-checkbox-outline">
                                                                        <input type="checkbox"
                                                                               v-model="packageitems"
                                                                               name="packageitems"
                                                                               :value="project">
                                                                        <span></span>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </template>
                                    </template>
                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                                <!--<button type="button" class="btn green" @click="">添 加</button>-->
                            </div>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
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
                condition: "process=waitPackage",
                contractList: [],
                contract: {
                    trustee: {},
                    type: {},
                    package_unit: {}
                },
                itemLists: [],
                log: {},
                total_count: {},
                countProcess: [],
                project: [],
                packages: {
                    contract_id: "",
                    name: "",
                    payment: "",
                    contact: "",
                    remark: "",
                    ids: []
                },
                packageitems: []
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
                    console.log(me.contractList);
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
                me.viewPackageItems(item.id);
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
                me.condition = "process=" + step;
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
                window.open("http://" + window.location.hostname + ":8080/api/contract/createContract?id=" + me.contract.id);
            },
            isPackage(){
                var me = this;
                me.packageitems = [];
            },
            createPackage(){
                var me = this;
                me.packages.contract_id = me.contract.id;
                for (var i = 0; i < me.packageitems.length; i++) {
                    me.packages.ids.push(me.packageitems[i].item_project_id);
                }
                console.log(me.packages.ids);
//                console.log(me.packages);
                this.$http.post("/api/package/create", me.packages).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("分包成功！");
                            me.getData();
                            me.packages = {
                                contract_id: "",
                                name: "",
                                payment: "",
                                contact: "",
                                remark: "",
                                ids: []
                            };
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
            },
            //修改分包
            changePackage(){
                var me = this;
                me.contract.package_unit.id = me.contract.id;
                me.changePackage = me.contract.package_unit;
                for (var i = 0; i < me.packageitems.length; i++) {
                    me.packages.ids.push(me.packageitems[i].item_project_id);
                }
                me.changePackage.ids = me.packages.ids;
                console.log(me.changePackage);
                me.$http.post("/api/package/change", me.changePackage).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("分包项目修改成功！");
                            me.getData();
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //viewdetal时获取当前合同的分包项目
            viewPackageItems(id){
                var me = this;
                me.$http.get("/api/package/getContractPackageList", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.packageitems = data;
                    console.log(me.packageitems);
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //删除分包
            deletePackahe(id){
                var me = this;
                me.$http.get("/api/package/delete", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("分包删除成功！");
                            me.getData();
                        }
                    }, response => {
                        serverErrorInfo(response);
                    })
                })
            }
        }
    }

</script>
