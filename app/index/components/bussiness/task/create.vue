<template>
    <div>
        <h1 class="page-title"> 创建新任务
            <small>／Task</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light bordered" id="contract_wizard">
                    <div class="portlet-title">
                        <div class="caption">
                            <span class="caption-subject bold uppercase"> 任务生成流程 -
                                                <span class="step-title"> Step 1 of 4 </span>
                                            </span>
                        </div>
                        <div class="actions">
                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                <i class="icon-cloud-upload"></i>
                            </a>
                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                <i class="icon-wrench"></i>
                            </a>
                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                <i class="icon-trash"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portlet-body form">
                        <form class="form-horizontal" action="#" id="submit_form" method="POST">
                            <div class="form-wizard">
                                <div class="form-body">
                                    <ul class="nav nav-pills nav-justified steps">
                                        <li>
                                            <a href="#tab1" data-toggle="tab" class="step">
                                                <span class="number"> 1 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 创建方式 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab2" data-toggle="tab" class="step">
                                                <span class="number"> 2 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 任务详情 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab3" data-toggle="tab" class="step active">
                                                <span class="number"> 3 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 监测任务 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab4" data-toggle="tab" class="step">
                                                <span class="number"> 4 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 预览任务 </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div id="bar" class="progress progress-striped" role="progressbar">
                                        <div class="progress-bar progress-bar-success"></div>
                                    </div>
                                    <div class="tab-content">
                                        <div class="alert alert-info" v-if="contract_type">
                                            <strong>提示：</strong>
                                            当前任务数据绑定自编号为{{contract.identify}}的合同《{{contract.name}}》。
                                            <button type="button" class="btn red btn-outline" @click="clearContract">
                                                解除绑定
                                            </button>
                                        </div>
                                        <div class="alert alert-danger display-none">
                                            <button class="close" data-dismiss="alert"></button>
                                            您有任务项尚未填写完成，请再次检查确认.
                                        </div>
                                        <div class="alert alert-success display-none">
                                            <button class="close" data-dismiss="alert"></button>
                                            您已经通过当前页所有任务项的检查!
                                        </div>
                                        <div class="tab-pane active" id="tab1">
                                            <h3 class="block">来自合同</h3>
                                            <div class="row margin-bottom-40">
                                                <div class="col-md-6 col-md-offset-3">
                                                    <button class="btn green-sharp btn-outline  btn-block sbold uppercase "
                                                            type="button" @click="createByContract">
                                                        从现有合同中选择
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <h3 class="block">自定义任务</h3>
                                            <div class="row margin-bottom-40">
                                                <div class="col-md-6 col-md-offset-3 text-center">
                                                    <h3>点击"下一步"创建</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tab2">
                                            <h3 class="block">甲方信息
                                                <a href="#chooseCustomer" data-toggle="modal"
                                                   class="btn green btn-outline pull-right">选择客户
                                                </a>
                                            </h3>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_unit">委托单位
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-building-o"></i>
                                                            <input type="text" class="form-control" name="client_unit"
                                                                   v-model="task.client_unit"
                                                                   id="client_unit" required :disabled="contract_type"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_code">邮政编码
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">

                                                        <div class="input-icon right">
                                                            <i class="fa fa-send"></i>
                                                            <input type="text" class="form-control" name="client_code"
                                                                   v-model="task.client_code"
                                                                   id="client_code" :disabled="contract_type"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_address">联系地址
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">

                                                        <div class="input-icon right">
                                                            <i class="fa fa-home"></i>
                                                            <input type="text" class="form-control"
                                                                   name="client_address"
                                                                   id="client_address"
                                                                   v-model="task.client_address"
                                                                   :disabled="contract_type"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_tel">联系电话
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-phone"></i>
                                                            <input type="text" class="form-control" name="client_tel"
                                                                   v-model="task.client_tel"
                                                                   id="client_tel" :disabled="contract_type"/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client">联系人
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">

                                                        <div class="input-icon right">
                                                            <i class="fa fa-user"></i>
                                                            <input type="text" class="form-control" name="client"
                                                                   id="client"
                                                                   v-model="task.client" :disabled="contract_type"/>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_fax">传真号码
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-fax"></i>
                                                            <input type="text" class="form-control" name="client_fax"
                                                                   v-model="task.client_fax"
                                                                   id="client_fax" :disabled="contract_type"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>

                                            <h3 class="block">填写合同详情</h3>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectName">项目名称
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control" name="projectName"
                                                           v-model="task.name"
                                                           id="projectName" :disabled="contract_type" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectAim">监测目的
                                                    <span class="required"> &nbsp;&nbsp; </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <textarea class="form-control" maxlength="500" rows="3"
                                                              name="projectAim"
                                                              v-model="task.aim"
                                                              id="projectAim" :disabled="contract_type"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectType">监测类别
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <select class="bs-select form-control" name="projectType"
                                                            v-model="task.type" id="projectType"
                                                            data-live-search="true" required :disabled="contract_type">
                                                        <option>请选择监测类别</option>
                                                        <template v-for="item in typeList">
                                                            <option :value="item.id" :disabled="contract_type">
                                                                {{item.name}}
                                                            </option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectWay1">检测方式
                                                    <span class="required"> &nbsp;&nbsp; </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="mt-radio-inline">
                                                        <label class="mt-radio">
                                                            <input type="radio" name="projectWay" id="projectWay1"
                                                                   value="1" v-model="task.way"
                                                                   :disabled="contract_type">
                                                            以我单位通过计量认证、国家实验室认可的方法进行检测
                                                            <span></span>
                                                        </label>
                                                        <label class="mt-radio">
                                                            <input type="radio" name="projectWay" id="projectWay2"
                                                                   value="2" v-model="task.way"
                                                                   :disabled="contract_type"> 客户指定的方法
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group" v-if="task.way==2">
                                                <label class="control-label col-md-2" for="wayDesp">检测方式描述
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control" name="wayDesp"
                                                           v-model="task.wayDesp"
                                                           id="wayDesp" :disabled="contract_type"/>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="tab-pane" id="tab3">
                                            <h3 class="block">合同补充项</h3>
                                            <div class="form-group">
                                                <label class="control-label col-md-2">检测项目
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="table-scrollable table-scrollable-borderless"
                                                         v-if="contract_type">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 序号</th>
                                                                <th> 公司、道路名称</th>
                                                                <th> 环境要素</th>
                                                                <th> 监测点（个）</th>
                                                                <th> 监测项目</th>
                                                                <th> 监测频次</th>
                                                                <th> 是否分包</th>
                                                                <th> 备注</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <template v-for="(item,index) in items">
                                                                <tr>
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
                                                                        <template
                                                                                v-for="(project,index) in item.project">
                                                                            {{project.project.name}}
                                                                            <template
                                                                                    v-if="index+1!=item.project.length">
                                                                                ,
                                                                            </template>
                                                                        </template>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        {{item.frequency?item.frequency.total:''}}
                                                                    </td>
                                                                    <td class="text-center"
                                                                        v-if="item.is_package==1">是
                                                                    </td>
                                                                    <td class="text-center"
                                                                        v-if="item.is_package==0">否
                                                                    </td>
                                                                    <td class="text-center">{{item.other}}</td>
                                                                </tr>
                                                            </template>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="table-scrollable table-scrollable-borderless"
                                                         v-if="!contract_type">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 序号</th>
                                                                <th> 公司、道路名称</th>
                                                                <th> 环境要素</th>
                                                                <th> 监测点（个）</th>
                                                                <th> 监测项目</th>
                                                                <th> 监测频次</th>
                                                                <th> 是否分包</th>
                                                                <th> 备注</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <template v-for="(item,index) in task.item">
                                                                <tr>
                                                                    <td class="text-center">{{index+1}}</td>
                                                                    <td class="text-center">{{item.company}}</td>
                                                                    <td class="text-center">{{item.element.name}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <template v-for="(point,index) in item.point">
                                                                            {{point}}
                                                                            <template
                                                                                    v-if="index+1!=item.point.length">
                                                                                ,
                                                                            </template>
                                                                        </template>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <template
                                                                                v-for="(project,index) in item.project">
                                                                            {{project.name}}
                                                                            <template
                                                                                    v-if="index+1!=item.project.length">
                                                                                ,
                                                                            </template>
                                                                        </template>
                                                                    </td>
                                                                    <td class="text-center">{{item.frequency.total}}
                                                                    </td>
                                                                    <td class="text-center"
                                                                        v-if="item.is_package==1">是
                                                                    </td>
                                                                    <td class="text-center"
                                                                        v-if="item.is_package==0">否
                                                                    </td>
                                                                    <td class="text-center">{{item.other}}</td>
                                                                    <td class="text-center">
                                                                        <a href="javascript:;"
                                                                           class="btn btn-icon-only red"
                                                                           @click="deleteItem(item)">
                                                                            <i class="fa fa-trash-o"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                            </tbody>
                                                        </table>
                                                        <p>
                                                            <a href="#createMonitor" data-toggle="modal"
                                                               class="btn green btn-outline">新 增</a>
                                                            <button type="button" class="btn red btn-outline"
                                                                    @click="deleteAllItem">删除全部
                                                            </button>
                                                            <button type="button" class="btn yellow btn-outline">读取模板
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="other">其他约定
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <textarea class="form-control" maxlength="500" rows="5"
                                                              name="other"
                                                              v-model="task.other"
                                                              id="other" :disabled="contract_type"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="tab4">
                                            <h3 class="block">确认您的合同信息</h3>
                                            <h4 class="form-section">甲方信息</h4>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_unit">委托单位
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.client_unit}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_code">邮政编码
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.client_code}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_address">联系地址
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label">
                                                            {{task.client_address}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_tel">联系电话
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.client_tel}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client">联系人
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.client}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_fax">传真号码
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.client_fax}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="form-section">合同详情</h4>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">项目名称
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.name}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">监测目的
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{task.aim}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">监测类别
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{tag.type}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">检测方式
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label" v-if="task.way==1">
                                                            以我单位通过计量认证、国家实验室认可的方法进行检测 </label>
                                                        <label class="control-label" v-if="task.way==2">
                                                            客户指定的方法：{{task.wayDesp}} </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">检测项目
                                                    </label>
                                                    <div class="col-md-10">
                                                        <div class="table-scrollable table-scrollable-borderless"
                                                             v-if="contract_type">
                                                            <table class="table table-hover table-light">
                                                                <thead>
                                                                <tr class="uppercase">
                                                                    <th> 序号</th>
                                                                    <th> 公司、道路名称</th>
                                                                    <th> 环境要素</th>
                                                                    <th> 监测点（个）</th>
                                                                    <th> 监测项目</th>
                                                                    <th> 监测频次</th>
                                                                    <th> 是否分包</th>
                                                                    <th> 备注</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <template v-for="(item,index) in items">
                                                                    <tr>
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
                                                                            <template
                                                                                    v-for="(project,index) in item.project">
                                                                                {{project.project.name}}
                                                                                <template
                                                                                        v-if="index+1!=item.project.length">
                                                                                    ,
                                                                                </template>
                                                                            </template>
                                                                        </td>
                                                                        <td class="text-center">
                                                                            {{item.frequency?item.frequency.total:''}}
                                                                        </td>
                                                                        <td class="text-center"
                                                                            v-if="item.is_package==1">是
                                                                        </td>
                                                                        <td class="text-center"
                                                                            v-if="item.is_package==0">否
                                                                        </td>
                                                                        <td class="text-center">{{item.other}}</td>
                                                                    </tr>
                                                                </template>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="table-scrollable table-scrollable-borderless"
                                                             v-if="!contract_type">
                                                            <table class="table table-hover table-light">
                                                                <thead>
                                                                <tr class="uppercase">
                                                                    <th> 序号</th>
                                                                    <th> 公司、道路名称</th>
                                                                    <th> 环境要素</th>
                                                                    <th> 监测点（个）</th>
                                                                    <th> 监测项目</th>
                                                                    <th> 监测频次</th>
                                                                    <th> 是否分包</th>
                                                                    <th> 备注</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <template v-for="(item,index) in task.item">
                                                                    <tr>
                                                                        <td class="text-center">{{index+1}}</td>
                                                                        <td class="text-center">{{item.company}}</td>
                                                                        <td class="text-center">{{item.element.name}}
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <template
                                                                                    v-for="(point,index) in item.point">
                                                                                {{point}}
                                                                                <template
                                                                                        v-if="index+1!=item.point.length">
                                                                                    ,
                                                                                </template>
                                                                            </template>
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <template
                                                                                    v-for="(project,index) in item.project">
                                                                                {{project.name}}
                                                                                <template
                                                                                        v-if="index+1!=item.project.length">
                                                                                    ,
                                                                                </template>
                                                                            </template>
                                                                        </td>
                                                                        <td class="text-center">{{item.frequency.total}}
                                                                        </td>
                                                                        <td class="text-center"
                                                                            v-if="item.is_package==1">是
                                                                        </td>
                                                                        <td class="text-center"
                                                                            v-if="item.is_package==0">否
                                                                        </td>
                                                                        <td class="text-center">{{item.other}}</td>
                                                                    </tr>
                                                                </template>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="form-section">其他约定</h4>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2">其他约定
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label">{{task.other}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-actions">
                                    <div class="row">
                                        <div class="col-md-offset-3 col-md-9">
                                            <a href="javascript:;" class="btn default button-previous">
                                                <i class="fa fa-angle-left"></i> 上一步 </a>
                                            <a href="javascript:;" class="btn btn-outline green button-next"> 下一步
                                                <i class="fa fa-angle-right"></i>
                                            </a>
                                            <a href="javascript:;" class="btn green button-submit" @click="create(0)">
                                                自送样提交
                                                <i class="fa fa-check"></i>
                                            </a>
                                            <a href="javascript:;" class="btn blue button-submit" @click="create(1)">
                                                现场采样提交
                                                <i class="fa fa-check"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade bs-modal-lg" id="chooseCustomer" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">选择客户信息</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <!-- BEGIN BORDERED TABLE PORTLET-->
                                <div class="portlet light portlet-fit bordered">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <div class="clearfix">
                                                <a href="javascript:;" @click="createCustomer" class="btn btn-sm green">
                                                    创 建
                                                    <i class="fa fa-plus"></i>
                                                </a>
                                                <a href="javascript:;" @click="total" class="btn btn-sm default"> 全 部
                                                    <i class="fa fa-list"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="actions">
                                            <div class="input-icon right">
                                                <i class="fa fa-search"></i>
                                                <input type="text" class="form-control" placeholder="搜索..."
                                                       @keyup.enter="search($event)">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="table-scrollable table-scrollable-borderless">
                                            <table class="table table-hover table-light">
                                                <thead>
                                                <tr class="uppercase">
                                                    <th> 编号</th>
                                                    <th> 客户单位</th>
                                                    <th> 联系人</th>
                                                    <th> 客户地址</th>
                                                    <th> 联系电话</th>
                                                    <th> 操作</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <template v-for="(item,index) in customerList">
                                                    <tr>
                                                        <td class="text-center"> {{index+1}}</td>
                                                        <td class="text-center"> {{item.client_unit}}</td>
                                                        <td class="text-center"> {{item.client}}</td>
                                                        <td class="text-center"> {{item.client_address}}</td>
                                                        <td class="text-center"> {{item.client_tel}}</td>
                                                        <td class="text-center">
                                                            <button type="button" class="btn btn-sm blue btn-outline"
                                                                    @click="choose(item)">选 择
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </template>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <!-- Pagination -->
                                    <div class="pagination pull-right">
                                        <div class="M-box front pull-right" style="margin-top:10px; "></div>
                                    </div>
                                    <!-- End Pagination -->
                                </div>
                                <!-- END BORDERED TABLE PORTLET-->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->

        </div>
        <div class="modal fade bs-modal-lg" id="createMonitor" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">创建监测项</h4>
                    </div>
                    <div class="modal-body">
                        <div class="portlet light portlet-fit portlet-form ">
                            <div class="portlet-body">
                                <!-- BEGIN FORM-->
                                <form action="#" class="form-horizontal" id="item_add">
                                    <div class="form-body">
                                        <div class="alert alert-danger display-hide">
                                            <button class="close" data-close="alert"></button>
                                            表单尚未填写完整。
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_company">监测企业或路段
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="monitor_company"
                                                       v-model="monitor.company"
                                                       placeholder=""
                                                       name="monitor_company">
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_element">环境要素
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control"
                                                        v-model="monitor.element" name="monitor_element"
                                                        id="monitor_element"
                                                        @change="fetchProjectByElement($event)" data-live-search="true">
                                                    <option>请选择环境要素</option>
                                                    <template v-for="item in elementList">
                                                        <option :value="item.id">{{item.name}}
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_project">监测项目
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control"
                                                        v-model="monitor.project" name="monitor_project"
                                                        id="monitor_project" multiple
                                                        data-actions-box="true" data-live-search="true">
                                                    <template v-for="item in projectList">
                                                        <option :value="item.id">{{item.name}}
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>

                                        <!--</div>-->

                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_frequency">监测频次
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control" name="monitor_frequency"
                                                        v-model="monitor.frequency" id="monitor_frequency"
                                                        data-live-search="true">
                                                    <option>请选择监测频次</option>
                                                    <template v-for="item in frequencyList">
                                                        <option :value="item.id">{{item.total}}</option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_point">监测点
                                                <span class="required"> </span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control input-large"
                                                       v-model="monitor.point" name="monitor_point"
                                                       data-role="tagsinput" id="monitor_point">
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label">是否外包
                                                <span class="required">  </span>
                                            </label>
                                            <div class="col-md-9">
                                                <div class="mt-radio-inline">
                                                    <label class="mt-radio">
                                                        <input type="radio" name="is_package"
                                                               v-model="monitor.is_package" value="0"> 否
                                                        <span></span>
                                                    </label>
                                                    <label class="mt-radio">
                                                        <input type="radio" name="is_package"
                                                               v-model="monitor.is_package" value="1"> 是
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_other">备注
                                                <span class="required">  </span>
                                            </label>
                                            <div class="col-md-9">
                                                <textarea class="form-control" v-model="monitor.other"
                                                          id="monitor_other" name="monitor_other" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <!-- END FORM-->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" @click="addMonitor">添 加</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade" id="contractList" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-full">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">选择合同</h4>
                    </div>
                    <div class="modal-body">


                        <div class="portlet light ">
                            <!-- PROJECT HEAD -->
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="icon-bar-chart font-green-sharp hide"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">合同列表</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row" id="contract_list">
                                    <div class="col-md-5 col-sm-4">
                                        <div class="todo-tasklist">
                                            <template v-for="item in contractList">
                                                <div @click="viewDetails(item)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title"> {{item.name}} /
                                                        {{item.identify}}
                                                    </div>
                                                    <div class="todo-tasklist-item-text"> {{item.aim}}
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
                                                              v-if="item.process==-1">已中止</span>
                                                        <span class="label label-sm label-warning"
                                                              v-if="item.process==0">草稿合同</span>
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
                                    <div class="col-md-7 col-sm-8" id="detail_desp" v-show="contract.id">
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
                                                            <button type="button"
                                                                    class="todo-username-btn btn btn-circle green btn-outline btn-sm">
                                                                &nbsp;编 辑&nbsp;</button>
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
                                                            <a href="#page_1" data-toggle="tab"> 甲方信息 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 监测项目 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="page_1">
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">委托单位
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_unit}}
                                                                            <a href="javascript:;" data-type="委托单位"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">邮政编码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_code}}
                                                                            <a href="javascript:;" data-type="邮政编码"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系地址
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_address}}
                                                                            <a href="javascript:;" data-type="联系地址"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系电话
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_tel}}
                                                                            <a href="javascript:;" data-type="联系电话"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系人
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client}}
                                                                            <a href="javascript:;" data-type="联系人"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">传真号码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_fax}}
                                                                            <a href="javascript:;" data-type="传真号码"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">受托单位
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_unit}}
                                                                            <a href="javascript:;" data-type="受托单位"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">邮政编码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_code}}
                                                                            <a href="javascript:;" data-type="邮政编码"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系地址
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_address}}
                                                                            <a href="javascript:;" data-type="联系地址"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系电话
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_tel}}
                                                                            <a href="javascript:;" data-type="联系电话"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系人
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee.name}}
                                                                            <a href="javascript:;" data-type="联系人"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">传真号码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_fax}}
                                                                            <a href="javascript:;" data-type="传真号码"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="项目名称"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="监测目的"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="监测类别"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="检测方式"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.way==2">
                                                                            客户指定的方法：{{contract.wayDesp}}
                                                                            <a href="javascript:;" data-type="检测方式"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="客户要求"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
                                                                        <p class="form-control-static"
                                                                           v-if="contract.secret==1">
                                                                            客户需要本实验室对本次委托有关资料保密。
                                                                            <a href="javascript:;" data-type="客户要求"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="分包单位"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="交付方式"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="完成时间"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            {{contract.payment}}
                                                                            <a href="javascript:;" data-type="监测费用"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
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
                                                                            <a href="javascript:;" data-type="其他约定"
                                                                               @click="add_review($event)"
                                                                               v-if="contract.process==1">
                                                                                <i class="fa fa-edit"></i>
                                                                            </a>
                                                                        </p>
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
                                                                        <th> 公司、道路名称</th>
                                                                        <th> 环境要素</th>
                                                                        <th> 监测点（个）</th>
                                                                        <th> 监测项目</th>
                                                                        <th> 监测频次</th>
                                                                        <th> 是否分包</th>
                                                                        <th> 备注</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <template v-for="(item,index) in items">
                                                                        <tr>
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
                                                                                <!--<template-->
                                                                                <!--v-for="(project,index) in item.project">-->
                                                                                <!--{{project.project.name}}-->
                                                                                <!--<template-->
                                                                                <!--v-if="index+1!=item.project.length">-->
                                                                                <!--,-->
                                                                                <!--</template>-->
                                                                                <!--</template>-->
                                                                                <button type="button"
                                                                                        class="btn green btn-outline"
                                                                                        @click="showProjectName(item.id)">
                                                                                    查看详情
                                                                                </button>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{item.frequency?item.frequency.total:''}}
                                                                            </td>
                                                                            <td class="text-center"
                                                                                v-if="item.is_package==1">是
                                                                            </td>
                                                                            <td class="text-center"
                                                                                v-if="item.is_package==0">否
                                                                            </td>
                                                                            <td class="text-center">{{item.other}}</td>
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
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" @click="chooseContract">选 择</button>
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
                        <h4 class="modal-title" id="modal_title">检测项目详情列表</h4>
                    </div>
                    <div class="modal-body" id="modal_body">
                        <!--<template v-for="(project,projectIndex) in item.project">-->
                        <!--{{project.project.name}}-->
                        <!--</template>-->
                        <ul class="receiver_tag">
                            <template v-for="names in projectName">
                                <li class="uppercase"><a href="javascript:;">{{names.name}}</a></li>
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
    import 'mod/wizard'
    import 'mod/maxlength'
    import  'mod/taginput'
    import  'style/taginput'

    export default{
        data(){
            return {
                contract: {
                    trustee: {},
                    type: {}
                },
                task: {
                    client: "",
                    client_code: "",
                    client_address: "",
                    client_tel: "",
                    client_unit: "",
                    client_fax: "",
                    name: "",
                    aim: "",
                    way: 1,
                    wayDesp: "",
                    item: [],
                    project_items: [],
                    other: "",
                    type: ""
                },
                contractList: [],
                items: [],
                typeList: [],
                customerList: [],
                currentPage: 1,
                condition: "",
                contract_currentPage: 1,
                contract_condition: "process=2",
                create: {},
                monitor: {
                    project: [],
                    element: "",
                    point: "",
                    frequency: "",
                    company: "",
                    is_package: 0,
                    other: ""
                },
                elementList: [],
                frequencyList: [],
                projectList: [],
                userList: [],
                tag: {
                    trustee: "",
                    type: ""
                },
                contract_type: false,
                projectName: []
            }
        },
        mounted(){
            var me = this;

            me.fetchType();
            me.fetchFrequency();
            me.getCustomer();
            me.fetchElement();
            //me.fetchUser();
            me._init();
            $('#projectAim').maxlength({
                limitReachedClass: "label label-danger",
                alwaysShow: true,
                placement: 'centered-right'
            });

            $('#other').maxlength({
                limitReachedClass: "label label-danger",
                alwaysShow: true,
                placement: 'centered-right'
            });

            //选择客户信息窗口可拖拽
            $("#chooseCustomer").draggable({
                handle: ".modal-header"
            });
            //创建监测项目窗口可拖拽
            $("#createMonitor").draggable({
                handle: ".modal-header"
            });
            //初始化监测项目选择框
            $('#monitor_project').selectpicker({
                iconBase: 'fa',
                tickIcon: 'fa-check',
                countSelectedText: "count",
                deselectAllText: "取消选择",
                selectAllText: "选择全部",
                noneSelectedText: "请选择监测项目"

            });
        },
        watch: {
            "task.trustee": function () {
                this.tag.trustee = jQuery("#trustee option:selected").html();
            },
            "task.type": function () {
                console.log("type")
                this.tag.type = jQuery("#projectType option:selected").html();
            }
        },
        methods: {
            _init(){
                var me = this;
                me.wizard();
                jQuery("#monitor_point").tagsinput();
            },
            createByContract(){
                var me = this;
                me.getData();
                jQuery("#contractList").modal("show");
            },
            addMonitor(){
                //新增一项监测内容
                var me = this;
                if (jQuery("#item_add").valid()) {
                    me.monitor.point = jQuery("#monitor_point").tagsinput("items");
                    me.$http.get("/api/project/details", {
                        params: me.monitor
                    }).then(function (response) {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("监测项目创建成功！");
                                    me.task.item.push(data);
                                }
                            })
                        }
                        , function (response) {
                            serverErrorInfo(response);
                        });
                }
            },
            deleteItem(item){
                var me = this;
                me.task.item.splice(me.task.item.find(function (t) {
                    return t.id === item.id;
                }), 1);
            },
            deleteAllItem(){
                var me = this;
                me.task.item = [];
            },
            changeItem(item){
                var me = this;
                var temp = [];
                for (var i = 0; i < item.project.length; i++) {
                    temp.push(item.project[i].id);
                }
                var data = {
                    element: item.element.id,
                    frequency: item.frequency.id,
                    company: item.company,
                    is_package: item.is_package,
                    point: item.point,
                    other: item.other,
                    project: temp
                };
                me.monitor = data;
                jQuery("#monitor_element").selectpicker("val", data.element);
                jQuery("#monitor_frequency").selectpicker("val", data.frequency);
                me.fetchProjectByValue(data.element, data.project);
                jQuery("#monitor_point").tagsinput("removeAll")
                for (var p in item.point) {
                    jQuery("#monitor_point").tagsinput("add", item.point[p]);
                }
            },
            create(type){
                var me = this;
                var items = me.task.item;
                me.task.project_items = [];
                for (var i = 0; i < items.length; i++) {
                    console.log(JSON.stringify(items[i]))
                    me.task.project_items.push(JSON.stringify(items[i]))
                }
                console.log(JSON.parse(JSON.stringify(me.task)));
                if (me.contract_type) {
                    //是根据合同创建的任务
                    me.$http.post("/api/task/createByContract", {
                        "contract_id": me.contract.id,
                        "sample_type": type
                    }).then(function (response) {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("任务创建成功！");
                                router.push("/task/list");
                            }
                        })
                    }, function (response) {
                        serverErrorInfo(response);
                    })
                } else {
                    //是自定义创建的任务
                    me.task.sample_type = type;
                    me.$http.post("/api/task/create", me.task).then(function (response) {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("任务创建成功！");
                                router.push("/task/list");
                            }
                        })
                    }, function (response) {
                        serverErrorInfo(response);
                    })
                }
            },
            fetchCustomer(pageNum, rowCount){
                var me = this;
                me.$http.get("/api/customer/list", {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then(function (response) {
                    var data = response.data;
                    me.customerList = data.results;

                }, function (response) {
                    serverErrorInfo(response);
                });
            },
            fetchElement(){
                var me = this;
                me.$http.get("/api/element/total").then(function (response) {
                    var me = this;
                    me.elementList = response.data.results;
                    me.$nextTick(function () {
                        $('#monitor_element').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择环境要素"
                        });
                    })
                }, function (response) {
                    serverErrorInfo(response);
                });
            },
            fetchProjectByElement(e){
                var me = this;
                var value = e.target.value;
                me.$http.get("/api/project/findByElement", {
                    params: {
                        element_id: value
                    }
                }).then(function (response) {
                        var data = response.data;
                        me.projectList = data.results;
                        me.$nextTick(function () {
                            //销毁监测项目选择框
                            $('#monitor_project').selectpicker('destroy');
                            //初始化监测项目选择框
                            $('#monitor_project').selectpicker({
                                iconBase: 'fa',
                                tickIcon: 'fa-check',
                                countSelectedText: "count",
                                deselectAllText: "取消选择",
                                selectAllText: "选择全部",
                                noneSelectedText: "请选择监测项目"
                            });
                        })
                    }
                    , function (response) {
                        serverErrorInfo(response);
                    }
                )
            },
            fetchProjectByValue(value, selected){
                var me = this;
                me.$http.get("/api/project/findByElement", {
                    params: {
                        element_id: value
                    }
                }).then(function (response) {
                        var data = response.data;
                        me.projectList = data.results;
                        me.$nextTick(function () {
                            //销毁监测项目选择框
                            $('#monitor_project').selectpicker('destroy');
                            //初始化监测项目选择框
                            $('#monitor_project').selectpicker({
                                iconBase: 'fa',
                                tickIcon: 'fa-check',
                                countSelectedText: "count",
                                deselectAllText: "取消选择",
                                selectAllText: "选择全部",
                                noneSelectedText: "请选择监测项目"
                            });
                            debugger
                            $('#monitor_project').selectpicker("val", selected);
                        })
                    }
                    , function (response) {
                        serverErrorInfo(response);
                    }
                )
            },
            fetchFrequency(){
                var me = this;
                me.$http.get("/api/frequency/total").then(function (response) {
                        var data = response.data;
                        me.frequencyList = data.results;
                        me.$nextTick(function () {
                            $('#monitor_frequency').selectpicker({
                                iconBase: 'fa',
                                tickIcon: 'fa-check',
                                noneSelectedText: "请选择监测频率"
                            });
                        });
                    }
                    , function (response) {
                        serverErrorInfo(response);
                    });
            },
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/customer/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: me.condition
                    }
                }).then(function (response) {
                        var data = response.data;
                        jQuery(".M-box").pagination({
                            pageCount: data.totalPage || 1,
                            coping: true,
                            homePage: '首页',
                            endPage: '末页',
                            prevContent: '上页',
                            nextContent: '下页',
                            callback: function (data) {
                                me.fetchCustomer(data.getCurrent(), rowCount, me.condition);
                                me.currentPage = data.getCurrent();
                            }
                        });
                    }
                    , function (response) {
                        serverErrorInfo(response);
                    });
            },
            getCustomer(){
                var me = this;
                me.fetchCustomer(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            search(e){
                var me = this;
                var value = e.target.value;
                me.currentPag = 1;
                me.condition = value ? "keyword=" + encodeURI(value) : "";
                me.getCustomer();
            },
            createCustomer(){
                jQuery("#chooseCustomer").modal("hide");
                router.push("/customer/create");
            },
            total(){
                var me = this;
                me.condition = "";
                me.currentPage = 1;
                me.getCustomer();
            },
            choose(item){
                var me = this;
                for (var key in item) {
                    me.task[key] = item[key];
                }
            },
            fetchType(){
                var me = this;
                me.$http.get("/api/type/total").then(function (response) {
                    var data = response.data;
                    me.typeList = data.results;
                    me.$nextTick(function () {
//                        $('.bs-select').selectpicker({
//                            iconBase: 'fa',
//                            tickIcon: 'fa-check'
//                        });
                        $('#projectType').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择监测类别"

                        });
                    })
                }, function (response) {
                    serverErrorInfo(response);
                });
            },
            wizard(){
                //wizard插件和表单验证序列化
                var form = $('#submit_form');
                var error = $('.alert-danger', form);
                var success = $('.alert-success', form);
                jQuery('#submit_form').validate({
                    doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                    errorElement: 'span', //default input error message container
                    errorClass: 'help-block help-block-error', // default input error message class
                    focusInvalid: false, // do not focus the last invalid input
                    errorPlacement: function (error, element) { // render error placement for each input type
                        if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                            error.insertAfter("#form_gender_error");
                        } else if (element.attr("name") == "payment[]") { // for uniform checkboxes, insert the after the given container
                            error.insertAfter("#form_payment_error");
                        } else {
                            error.insertAfter(element); // for other inputs, just perform default behavior
                        }
                    },

                    invalidHandler: function (event, validator) { //display error alert on form submit
                        success.hide();
                        error.show();
                        App.scrollTo(error, -200);
                    },

                    highlight: function (element) { // hightlight error inputs
                        $(element)
                            .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                    },

                    unhighlight: function (element) { // revert the change done by hightlight
                        $(element)
                            .closest('.form-group').removeClass('has-error'); // set error class to the control group
                    },

                    success: function (label) {
                        if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                            label
                                .closest('.form-group').removeClass('has-error').addClass('has-success');
                            label.remove(); // remove error label here
                        } else { // display success icon for other inputs
                            label
                                .addClass('valid') // mark the current input as valid and display OK icon
                                .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                        }
                    },

                    submitHandler: function (form) {
                        success.show();
                        error.hide();
                        form[0].submit();
                        //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                    }

                });
                jQuery("#item_add").validate({
                    doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                    errorElement: 'span', //default input error message container
                    errorClass: 'help-block help-block-error', // default input error message class
                    focusInvalid: false, // do not focus the last invalid input
                    rules: {
                        monitor_company: {
                            required: true
                        },
                        monitor_element: {
                            required: true
                        },
                        monitor_project: {
                            required: true
                        },
                        monitor_point: {
                            required: true
                        },
                        monitor_frequency: {
                            required: true
                        }
                    },

                    messages: { // custom messages for radio buttons and checkboxes

                    },

                    errorPlacement: function (error, element) { // render error placement for each input type
                        if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                            error.insertAfter("#form_gender_error");
                        } else if (element.attr("name") == "payment[]") { // for uniform checkboxes, insert the after the given container
                            error.insertAfter("#form_payment_error");
                        } else {
                            error.insertAfter(element); // for other inputs, just perform default behavior
                        }
                    },

                    invalidHandler: function (event, validator) { //display error alert on form submit
                        success.hide();
                        error.show();
                        App.scrollTo(error, -200);
                    },

                    highlight: function (element) { // hightlight error inputs
                        $(element)
                            .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                    },

                    unhighlight: function (element) { // revert the change done by hightlight
                        $(element)
                            .closest('.form-group').removeClass('has-error'); // set error class to the control group
                    },

                    success: function (label) {
                        if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                            label
                                .closest('.form-group').removeClass('has-error').addClass('has-success');
                            label.remove(); // remove error label here
                        } else { // display success icon for other inputs
                            label
                                .addClass('valid') // mark the current input as valid and display OK icon
                                .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                        }
                    },

                    submitHandler: function (form) {
                        success.show();
                        error.hide();
                        form[0].submit();
                        //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                    }

                });
                var displayConfirm = function () {
                    $('#tab4 .form-control-static', form).each(function () {
                        var input = $('[name="' + $(this).attr("data-display") + '"]', form);
                        if (input.is(":radio")) {
                            input = $('[name="' + $(this).attr("data-display") + '"]:checked', form);
                        }
                        if (input.is(":text") || input.is("textarea")) {
                            $(this).html(input.val());
                        } else if (input.is("select")) {
                            $(this).html(input.find('option:selected').text());
                        } else if (input.is(":radio") && input.is(":checked")) {
                            $(this).html(input.attr("data-title"));
                        } else if ($(this).attr("data-display") == 'payment[]') {
                            var payment = [];
                            $('[name="payment[]"]:checked', form).each(function () {
                                payment.push($(this).attr('data-title'));
                            });
                            $(this).html(payment.join("<br>"));
                        }
                    });
                }
                var handleTitle = function (tab, navigation, index) {
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    // set wizard title
                    $('.step-title', $('#contract_wizard')).text('Step ' + (index + 1) + ' of ' + total);
                    // set done steps
                    jQuery('li', $('#contract_wizard')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }

                    if (current == 1) {
                        $('#contract_wizard').find('.button-previous').hide();
                    } else {
                        $('#contract_wizard').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#contract_wizard').find('.button-next').hide();
                        $('#contract_wizard').find('.button-submit').show();
                        displayConfirm();
                    } else {
                        $('#contract_wizard').find('.button-next').show();
                        $('#contract_wizard').find('.button-submit').hide();
                    }
                    App.scrollTo($('.page-title'));
                }
                $('#contract_wizard').bootstrapWizard({
                    'nextSelector': '.button-next',
                    'previousSelector': '.button-previous',
                    onTabClick: function (tab, navigation, index, clickedIndex) {
                        return false;

                        success.hide();
                        error.hide();
                        if (form.valid() == false) {
                            return false;
                        }

                        handleTitle(tab, navigation, clickedIndex);
                    },
                    onNext: function (tab, navigation, index) {
                        success.hide();
                        error.hide();

                        if (form.valid() == false) {
                            return false;
                        }
                        handleTitle(tab, navigation, index);
                    },
                    onPrevious: function (tab, navigation, index) {
                        success.hide();
                        error.hide();

                        handleTitle(tab, navigation, index);
                    },
                    onTabShow: function (tab, navigation, index) {
                        var total = navigation.find('li').length;
                        var current = index + 1;
                        var $percent = (current / total) * 100;
                        $('#contract_wizard').find('.progress-bar').css({
                            width: $percent + '%'
                        });
                    }
                });
                $('#contract_wizard').find('.button-previous').hide();
                $('#contract_wizard').find('.button-submit').hide();
                $('#country_list', form).change(function () {
                    form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
                });
            },
            fetchData(pageNum, rowCount){
                var me = this;
                App.startPageLoading({animate: true});
                this.$http.get('/api/contract/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.contract_condition
                    }
                }).then((response) => {
                    var data = response.data;
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
                        condition: me.contract_condition
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
                            me.fetchData(data.getCurrent(), rowCount, me.contract_condition);
                            me.contract_currentPage = data.getCurrent();
                        }
                    });
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            getData(){
                var me = this;
                me.fetchData(me.contract_currentPage, rowCount);
                me.fetchPages(rowCount);
            },
//            查看详情信息
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
            },
            fetchItems(id){
                var me = this;
                me.$http.get("/api/contract/getItems", {
                    params: {
                        contract_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.items = data.items;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            chooseContract(){
                var me = this;
                if (!me.contract.id) {
                    error("请先选择合同！");
                    return;
                }
                var obj = me.contract;
                for (var key in me.task) {
                    if (obj[key] != undefined) {
                        if (key == "type") {
                            me.task[key] = me.contract.type.id;
                            continue;
                        }
                        me.task[key] = obj[key];
                    }
                }
                jQuery("#projectType").selectpicker("val", me.contract.type.id);
                me.contract_type = true;
                jQuery("#contractList").modal("hide");
                //jQuery("#contract_wizard").bootstrapWizard("show", 3);
                jQuery(".button-next").trigger("click");
            },
            clearContract(){
                var me = this;
                me.task = {
                    client: "",
                    client_code: "",
                    client_address: "",
                    client_tel: "",
                    client_unit: "",
                    client_fax: "",
                    name: "",
                    aim: "",
                    way: 1,
                    wayDesp: "",
                    item: [],
                    project_items: [],
                    other: "",
                    type: ""
                };
                me.contract_type = false;
                jQuery("#contract_wizard").bootstrapWizard("show", 0);
                $('#contract_wizard').find('.button-previous').hide();
                $('#contract_wizard').find('.button-submit').hide();
                $('#contract_wizard').find('.button-next').show();
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
                        me.projectName = data;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
                jQuery("#showProject").modal("show");

            }
        }
    }
</script>
