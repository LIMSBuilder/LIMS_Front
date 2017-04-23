<template>
    <div>
        <h1 class="page-title"> 合同起草
            <small>／Contract</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light bordered" id="contract_wizard">
                    <div class="portlet-title">
                        <div class="caption">
                            <span class="caption-subject bold uppercase"> 合同生成流程 -
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
                        <form class="form-horizontal" action="#" id="submit_form" method="POST"
                              enctype="multipart/form-data">
                            <div class="form-wizard">
                                <div class="form-body">
                                    <ul class="nav nav-pills nav-justified steps">
                                        <li>
                                            <a href="#tab1" data-toggle="tab" class="step">
                                                <span class="number"> 1 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 基本信息 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab2" data-toggle="tab" class="step">
                                                <span class="number"> 2 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 监测内容 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab3" data-toggle="tab" class="step active">
                                                <span class="number"> 3 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 其他约定 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab4" data-toggle="tab" class="step">
                                                <span class="number"> 4 </span>
                                                <span class="desc">
                                                                    <i class="fa fa-check"></i> 预览合同 </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div id="bar" class="progress progress-striped" role="progressbar">
                                        <div class="progress-bar progress-bar-success"></div>
                                    </div>
                                    <div class="tab-content">
                                        <div class="alert alert-danger display-none">
                                            <button class="close" data-dismiss="alert"></button>
                                            您有合同项尚未填写完成，请再次检查确认.
                                        </div>
                                        <div class="alert alert-success display-none">
                                            <button class="close" data-dismiss="alert"></button>
                                            您已经通过当前页所有合同项的检查!
                                        </div>
                                        <div class="tab-pane active" id="tab1">
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
                                                                   v-model="contract.client_unit"
                                                                   id="client_unit"/>
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
                                                                   v-model="contract.client_code"
                                                                   id="client_code"/>
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
                                                                   v-model="contract.client_address"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_tel">联系电话
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-phone"></i>
                                                            <input type="text" class="form-control" name="client_tel"
                                                                   v-model="contract.client_tel"
                                                                   id="client_tel"/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client">联系人
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-user"></i>
                                                            <input type="text" class="form-control" name="client"
                                                                   id="client"
                                                                   v-model="contract.client"/>
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
                                                                   v-model="contract.client_fax"
                                                                   id="client_fax"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <h3 class="block">乙方信息
                                                <button type="button" class="btn green btn-outline pull-right"
                                                        @click="importDefault">导入预设
                                                </button>
                                            </h3>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee_unit">受托单位
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-building-o"></i>
                                                            <input type="text" class="form-control" name="trustee_unit"
                                                                   v-model="contract.trustee_unit"
                                                                   id="trustee_unit"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee_code">邮政编码
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-send"></i>
                                                            <input type="text" class="form-control" name="trustee_code"
                                                                   v-model="contract.trustee_code"
                                                                   id="trustee_code"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee_address">联系地址
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-home"></i>
                                                            <input type="text" class="form-control"
                                                                   name="trustee_address"
                                                                   v-model="contract.trustee_address"
                                                                   id="trustee_address"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee_tel">联系电话
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-phone"></i>
                                                            <input type="text" class="form-control" name="trustee_tel"
                                                                   v-model="contract.trustee_tel"
                                                                   id="trustee_tel"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee">联系人
                                                        <span class="required"> * </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <select class="form-control" data-live-search="true"
                                                                name="trustee"
                                                                v-model="contract.trustee" id="trustee">
                                                            <option></option>
                                                            <template v-for="item in userList">
                                                                <optgroup :label="item.name">
                                                                    <template v-for="user in item.user.results">
                                                                        <option :value="user.id">{{user.name}}</option>
                                                                    </template>
                                                                </optgroup>
                                                            </template>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee_fax">传真号码
                                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                                    </label>
                                                    <div class="col-md-8">
                                                        <div class="input-icon right">
                                                            <i class="fa fa-fax"></i>
                                                            <input type="text" class="form-control" name="trustee_fax"
                                                                   v-model="contract.trustee_fax"
                                                                   id="trustee_fax"/></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="tab-pane" id="tab2">
                                            <h3 class="block">填写合同详情</h3>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectName">项目名称
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control" name="projectName"
                                                           v-model="contract.name"
                                                           id="projectName"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectAim">监测目的
                                                    <span class="required"> &nbsp;&nbsp; </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <textarea class="form-control" maxlength="500" rows="3"
                                                              name="projectAim"
                                                              v-model="contract.aim"
                                                              id="projectAim"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="projectType">监测类别
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <select class="bs-select form-control" name="projectType"
                                                            v-model="contract.type" id="projectType"
                                                            data-live-search="true">
                                                        <option>请选择监测类别</option>
                                                        <template v-for="item in typeList">
                                                            <option :value="item.id">{{item.name}}</option>
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
                                                                   value="1" v-model="contract.way">
                                                            以我单位通过计量认证、国家实验室认可的方法进行检测
                                                            <span></span>
                                                        </label>
                                                        <label class="mt-radio">
                                                            <input type="radio" name="projectWay" id="projectWay2"
                                                                   value="2" v-model="contract.way"> 客户指定的方法
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group" v-if="contract.way==2">
                                                <label class="control-label col-md-2" for="wayDesp">检测方式描述
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control" name="wayDesp"
                                                           v-model="contract.wayDesp"
                                                           id="wayDesp"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2">检测项目
                                                    <span class="required"> &nbsp;&nbsp; </span>
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
                                                                        <th> 操作</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <template v-for="itemList in contract.item">
                                                                        <template
                                                                                v-for="(item,index) in itemList.items">
                                                                            <tr>
                                                                                <td class="text-center">{{index+1}}</td>
                                                                                <td class="text-center">
                                                                                    {{itemList.flag==0?contract.client_unit:itemList.company}}
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    {{item.element.name}}
                                                                                </td>
                                                                                <td class="text-center">{{item.point}}
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
                                                                                <td class="text-center">
                                                                                    {{item.frequency.total}}
                                                                                </td>
                                                                                <td class="text-center">{{item.other}}
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <a href="javascript:;"
                                                                                       class="btn btn-icon-only blue"
                                                                                       @click="edit(item)">
                                                                                        <i class="fa fa-gear"></i>
                                                                                    </a>
                                                                                    <a href="javascript:;"
                                                                                       class="btn btn-icon-only red"
                                                                                       @click="deleteItem(project)">
                                                                                        <i class="fa fa-trash-o"></i>
                                                                                    </a>
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
                                                    <p>
                                                        <a href="#createMonitor" data-toggle="modal"
                                                           class="btn green btn-outline">新 增</a>
                                                        <button type="button" class="btn red btn-outline"
                                                                @click="deleteAllItem">删除全部
                                                        </button>
                                                        <a href="#isPackage" data-toggle="modal"
                                                           class="btn blue btn-outline">选择分包</a>
                                                    </p>
                                                    <div class="fileinput fileinput-new" data-provides="fileinput">
                                                        <div class="input-group input-large">
                                                            <div class="form-control uneditable-input input-fixed input-medium"
                                                                 data-trigger="fileinput">
                                                                <i class="fa fa-file fileinput-exists"></i>&nbsp;
                                                                <span class="fileinput-filename"> </span>
                                                            </div>

                                                            <span class="input-group-addon btn default btn-file">
                                                                    <span class="fileinput-new"> 选择模板 </span>
                                                                <span class="fileinput-exists"> 变 更 </span>
                                                                    <input type="file" name="..."> </span>
                                                            <a href="javascript:;"
                                                               class="input-group-addon btn green fileinput-exists"
                                                               @click="readTemplate"> 读 取 </a>
                                                            <a href="javascript:;"
                                                               class="input-group-addon btn red fileinput-exists"
                                                               data-dismiss="fileinput"> 删 除 </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="packageUnit">分包单位
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <input type="text" class="form-control" name="packageUnit"
                                                           id="packageUnit" v-model="contract.package_unit"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2">客户要求
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="mt-checkbox-list">
                                                        <label class="mt-checkbox mt-checkbox-outline">
                                                            <input type="checkbox" v-model="contract.in_room"
                                                                   name="inRoom"> 客户需要进入实验室监视与本次委托有关的检测活动
                                                            <span></span>
                                                        </label>
                                                        <label class="mt-checkbox mt-checkbox-outline">
                                                            <input type="checkbox" v-model="contract.secret"
                                                                   name="secret"> 客户需要本实验室对本次委托有关资料保密
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="tab-pane" id="tab3">
                                            <h3 class="block">合同补充项</h3>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="payWay">交付方式
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <select class="bs-select form-control" name="payWay"
                                                            v-model="contract.paymentWay" id="payWay">
                                                        <option value="客户自取">客户自取</option>
                                                        <option value="挂号邮寄">挂号邮寄</option>
                                                        <option value="其他方式">其他方式</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="finish_time">完成时间
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="input-group" id="defaultrange">
                                                        <input type="text" class="form-control" id="finish_time"
                                                               v-model="contract.finish_time" name="finish_time">
                                                        <span class="input-group-btn">
                                                                <button class="btn default date-range-toggle"
                                                                        type="button">
                                                                    <i class="fa fa-calendar"></i>
                                                                </button>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="payment">监测费用
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="input-icon right">
                                                        <i class="fa fa-cny"></i>
                                                        <input type="text" class="form-control" name="payment"
                                                               id="payment" v-model="contract.payment"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2" for="paymentCap">大写
                                                    <!--<span class="required"> * </span>-->
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="input-icon right">
                                                        <i class="fa fa-cny"></i>
                                                        <input type="text" class="form-control" name="paymentCap"
                                                               id="paymentCap" v-model="paymentCap" disabled/>
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
                                                              v-model="contract.other"
                                                              id="other"></textarea>
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
                                                        <label class="control-label"> {{contract.client_unit}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_code">邮政编码
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.client_code}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_address">联系地址
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label">
                                                            {{contract.client_address}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_tel">联系电话
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.client_tel}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client">联系人
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.client}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_fax">传真号码
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.client_fax}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="form-section">乙方信息</h4>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_unit">受托单位
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.trustee_unit}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_code">邮政编码
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.trustee_code}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_address">联系地址
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label">
                                                            {{contract.client_address}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_tel">联系电话
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.trustee_tel}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client">联系人
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{tag.trustee}}</label>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="client_fax">传真号码
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.trustee_fax}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="form-section">合同详情</h4>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">项目名称
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.name}}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">监测目的
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.aim}}</label>
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
                                                        <label class="control-label" v-if="contract.way==1">
                                                            以我单位通过计量认证、国家实验室认可的方法进行检测 </label>
                                                        <label class="control-label" v-if="contract.way==2">
                                                            客户指定的方法：{{contract.wayDesp}} </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-12">
                                                    <label class="control-label col-md-2" for="client">检测项目
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
                                                                        <template v-for="itemList in contract.item">
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
                                                    <label class="control-label col-md-2" for="client">分包单位
                                                    </label>
                                                    <div class="col-md-8">
                                                        <label class="control-label"> {{contract.package_unit}}</label>
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
                                                        <div class="col-md-4">
                                                            <label class="control-label">{{paymentCap}}</label>
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
                                            <a href="javascript:;" class="btn green button-submit" @click="create"> 提交
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
                                                        //monitor.project里面存的value的值
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
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
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="number" class="form-control"
                                                       v-model="monitor.point" name="monitor_point" id="monitor_point">
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
        <div class="modal fade bs-modal-lg" id="changeMonitor" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">修改监测项</h4>
                    </div>
                    <div class="modal-body">
                        <div class="portlet light portlet-fit portlet-form ">
                            <div class="portlet-body">
                                <!-- BEGIN FORM-->
                                <form action="#" class="form-horizontal" id="item_change">
                                    <div class="form-body">
                                        <div class="alert alert-danger display-hide">
                                            <button class="close" data-close="alert"></button>
                                            表单尚未填写完整。
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="change_element">环境要素
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control"
                                                        v-model="monitor.element" name="change_element"
                                                        id="change_element"
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
                                            <label class="col-md-2 control-label" for="change_project">监测项目
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control"
                                                        v-model="monitor.project" name="change_project"
                                                        id="change_project" multiple
                                                        data-actions-box="true" data-live-search="true">
                                                    <template v-for="item in projectList">
                                                        <option :value="item.id">{{item.name}}
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="change_frequency">监测频次
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control" name="change_frequency"
                                                        v-model="monitor.frequency" id="change_frequency"
                                                        data-live-search="true">
                                                    <option>请选择监测频次</option>
                                                    <template v-for="item in frequencyList">
                                                        <option :value="item.id">{{item.total}}</option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="change_point">监测点
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="number" class="form-control"
                                                       v-model="monitor.point" name="change_point" id="change_point">
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="change_other">备注
                                                <span class="required">  </span>
                                            </label>
                                            <div class="col-md-9">
                                                <textarea class="form-control" v-model="monitor.other"
                                                          id="change_other" name="change_other" rows="5"></textarea>
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
                        <button type="button" class="btn green" @click="addMonitor">修改</button>
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
                                <template v-for="itemList in contract.item">
                                    <template v-for="(item,index) in itemList.items">
                                        <tr>
                                            <td class="text-center" rowspan="itemList.length">
                                                {{itemList.flag==0?contract.client_unit:itemList.company}}
                                            </td>
                                            <td class="text-center" rowspan="item.project.length">{{item.element.name}}
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
                                                                    <!--<input type="checkbox" v-model="project.id"-->
                                                                    <!--name="ispackage" :value="item.id+'/'+project.id">-->
                                                                    <input type="checkbox" v-model="project.isPackage"
                                                                           name="ispackage" value="1">
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
                        <!--<div class="table-scrollable table-scrollable-borderless">-->
                        <!--<template v-for="itemList in contract.item">-->
                        <!--<table class="table table-hover table-light">-->
                        <!--<thead class="uppercase text-center">公司名称【{{itemList.company}}】-->
                        <!--</thead>-->
                        <!--<tbody>-->
                        <!--<div class="table-scrollable table-scrollable-borderless">-->
                        <!--<table class="table table-hover table-light">-->
                        <!--<thead>-->
                        <!--<tr class="uppercase">-->
                        <!--<th> 序号</th>-->
                        <!--<th> 环境要素</th>-->
                        <!--<th> 监测点（个）</th>-->
                        <!--<th> 监测项目</th>-->
                        <!--<th> 监测频次</th>-->
                        <!--<th> 备注</th>-->
                        <!--<th> 操作</th>-->
                        <!--</tr>-->
                        <!--</thead>-->
                        <!--<tbody>-->
                        <!--<template v-for="(item,index) in itemList.items">-->
                        <!--<tr>-->
                        <!--<td class="text-center">{{index+1}}</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.element.name}}-->
                        <!--</td>-->
                        <!--<td class="text-center">{{item.point}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--<template-->
                        <!--v-for="(project,index) in item.project">-->
                        <!--{{project.name}}-->
                        <!--<template-->
                        <!--v-if="index+1!=item.project.length">-->
                        <!--,-->
                        <!--</template>-->
                        <!--</template>-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.frequency.total}}-->
                        <!--</td>-->
                        <!--<td class="text-center">{{item.other}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--<a href="javascript:;"-->
                        <!--class="btn btn-icon-only red"-->
                        <!--@click="deleteItem(item)">-->
                        <!--<i class="fa fa-trash-o"></i>-->
                        <!--</a>-->
                        <!--</td>-->
                        <!--</tr>-->
                        <!--</template>-->
                        <!--</tbody>-->
                        <!--</table>-->
                        <!--</div>-->
                        <!--</tbody>-->
                        <!--</table>-->
                        <!--</template>-->
                        <!--</div>-->
                        <div class="modal-footer">
                            <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                            <button type="button" class="btn green" @click="isPackges">添 加</button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>
    </div>
</template>

<script>
    import 'mod/wizard'
    import 'mod/datarangepicker'
    import 'mod/maxlength'
    import  'mod/taginput'

    //    import "../../../script/contract_create"

    import 'style/datarangepicker'
    //    import 'mod/moment'
    import  'style/taginput'
    import moment from 'moment'

    import '../../../script/bootstrap-fileinput'

    export default{
        data(){
            return {
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
                    type: ""
                },
                typeList: [],
                paymentCap: "",
                customerList: [],
                currentPage: 1,
                condition: "",
                create: {},
                monitor: {
                    project: [],
                    element: "",
                    point: "",
                    frequency: "",
//                    company: "",
//                    is_package: 0,
                    other: "",
                    isHand: ""
                },
                elementList: [],
                frequencyList: [],
                projectList: [],
                userList: [],
                tag: {
                    trustee: "",
                    type: ""
                }
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
            moment.locale('zh-cn');
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
            //时间选择器
            $('#defaultrange').daterangepicker({
                    opens: (App.isRTL() ? 'left' : 'right'),
                    format: 'YYYY/MM/DD',
                    separator: ' to ',
                    startDate: moment().subtract('days', 29),
                    endDate: moment(),
                    ranges: {
                        '今日完成': [moment(), moment()],
                        '未来七天完成': [moment(), moment().add('days', 6)],
                        '未来一月完成': [moment(), moment().add('days', 29)],
                        '本月完成': [moment(), moment().endOf('month')]
                    },
                    minDate: '01/01/2012',
                    maxDate: '12/31/2018'
                },
                function (start, end) {
                    $('#defaultrange input').val(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
                }
            );
            $('#defaultrange').on('apply.daterangepicker', function (ev, picker) {
                var str = picker.startDate.format('YYYY-MM-DD') + "至" + picker.endDate.format('YYYY-MM-DD');
                me.contract.finish_time = str;
            });

            //选择客户信息窗口可拖拽
            $("#chooseCustomer").draggable({
                handle: ".modal-header"
            });
            //创建监测项目窗口可拖拽
            $("#createMonitor").draggable({
                handle: ".modal-header"
            });
            //创建选择分包窗口可拖拽
            $("#isPackage").draggable({
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
            "contract.trustee": function () {
                this.tag.trustee = jQuery("#trustee option:selected").html();
            },
            "contract.type": function () {
                console.log("type");
                this.tag.type = jQuery("#projectType option:selected").html();
            },
            'contract.payment': function (currentValue) {
                this.paymentCap = BlogUtils.atoc(currentValue);
            }
        },
        methods: {
            _init(){
                var me = this;
                me.fetchUser();
                me.wizard();
//                jQuery("#monitor_point").tagsinput();
            },
            //读取外部监测文件
            readTemplate(){
                var me = this;
                var formData = new FormData();
                formData.append("file", jQuery("input[type=file]")[0].files[0]);
                jQuery.ajax({
                    url: '/api/file/upload',
                    type: 'POST',
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (returndata) {
                        codeState(returndata.code, {
                            200: function () {
                                alert("打开" + returndata.path);
                                //这里调用球球的PageOffice页面，顺便把returndata.path传给球球
                                me.$http.get("/api/contract/readItemFile", {
                                    params: {
                                        path: returndata.path
                                    }
                                }).then(response => {
                                    var data = response.data;
                                    me.contract.item = data;
                                }, response => {
                                    serverErrorInfo(response);
                                })
                            }
                        })
                    }
                });
            },
            fetchUser(){
                //加载乙方联系人信息，默认选中为当前登录人员
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(function (response) {
                    var data = response.data;
                    me.userList = data.results;
                    me.$nextTick(function () {
                        $('#trustee').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择联系人"

                        });
                        me.$http.get("/api/login/getLogin").then(function (response) {
                            var data = response.data;
                            $('#trustee').selectpicker("val", data.id);
                            me.contract.trustee = data.id;
                        }, function (response) {
                            serverErrorInfo(response);
                        })
                    })
                }, function (response) {
                    serverErrorInfo(response);
                });
            },
            addMonitor(){
                //新增一项监测内容
                var me = this;
                if (jQuery("#item_add").valid()) {
//                    me.monitor.point = jQuery("#monitor_point").tagsinput("items");
//                    me.monitor.isHand = 0;
                    me.$http.get("/api/project/details", {
                        params: me.monitor
                    }).then(function (response) {
                            var data = response.data;
                            alert("监测项目创建成功！");
                            me.contract.item.push(data);
                            console.log(JSON.parse(JSON.stringify(me.contract)));
                        }
                        , function (response) {
                            serverErrorInfo(response);
                        });
                }
            },
            deleteItem(item){
                var me = this;
                me.contract.item.splice(me.contract.item.find(function (t) {
                    return t.id === item.id;
                }), 1);
            },
            deleteAllItem(){
                var me = this;
                me.contract.item = [];
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
            create(){
                var me = this;
                me.contract.finish_time = jQuery("#finish_time").val();
                var items = me.contract.item;
                me.contract.project_items = [];
                for (var i = 0; i < items.length; i++) {
                    console.log(JSON.stringify(items[i]));
                    me.contract.project_items.push(JSON.stringify(items[i]))
                }
                console.log(JSON.parse(JSON.stringify(me.contract)));
                App.startPageLoading({animate: true});
                me.$http.post("/api/contract/create", me.contract).then(function (response) {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("合同创建成功！");
                            router.push("/contract/list");
                            App.stopPageLoading();//loading条结束
                        }
                    })
                }, function (response) {
                    serverErrorInfo(response);
                })
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
                                iconBase: 'fa',//图标库
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
                        jQuery('#change_project').selectpicker('destroy');
                        me.projectList = data.results;
                        me.$nextTick(function () {
                            jQuery('#change_project').selectpicker({
                                iconBase: 'fa',
                                tickIcon: 'fa-check',
                                countSelectedText: "count",
                                deselectAllText: "取消选择",
                                selectAllText: "选择全部",
                                noneSelectedText: "请选择监测项目"
                            });
                            jQuery('#change_project').selectpicker("val", selected);
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
                    me.contract[key] = item[key];
                }
                jQuery("#chooseCustomer").modal("hide");
            },
            importDefault(){
                //导入预设
                var me = this;
                confirm({
                    content: "是否导入预设的乙方联系信息？",
                    success: function () {
                        me.$http.get("/api/contract/fetchDefault").then(function (response) {
                            var data = response.data;
                            for (var key in data) {
                                me.contract[key] = data[key];
                            }
                        }, function (response) {
                            serverErrorInfo(response);
                        });
                    }
                })
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
                            noneSelectedText: "请选择联系人"

                        });
                    })
                }, function (response) {
                    serverErrorInfo(response);
                });
            },
            isPackges(){
                var me = this;
                confirm({
                    content: "是否将选中项目设置为分包项目？分包项目将不参与后续流程！",
                    success: function () {
                        jQuery("#isPackage").modal("hide");
                    }
                })
            },
            //合同中点击=某一检测项目，然后对该条检测项目进行修改
            edit(item){
                var me = this;
                jQuery("#changeMonitor").modal("show");
                var temp = [];
                for (var i = 0; i < item.project.length; i++) {
                    temp.push(item.project[i].id);
                }
                var data = {
                    element: item.element.id,
                    frequency: item.frequency.id,
                    point: item.point,
                    other: item.other,
                    project: temp
                };
                me.monitor = data;
                me.fetchProjectByValue(data.element, data.project);
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
                    rules: {
                        client_unit: {
                            required: true
                        },
                        client: {
                            required: true
                        },
                        client_tel: {
                            required: true
                        },
                        trustee_unit: {
                            required: true
                        },
                        trustee_tel: {
                            required: true
                        },
                        trustee: {
                            required: true
                        },
                        projectName: {
                            required: true
                        },
                        projectType: {
                            required: true
                        },
                        payWay: {
                            required: true
                        },
                        wayDesp: {
                            required: true
                        },
                        payment: {
                            required: true
                        },
                        finish_time: {
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
                jQuery("#item_add").validate({
                    doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                    errorElement: 'span', //default input error message container
                    errorClass: 'help-block help-block-error', // default input error message class
                    focusInvalid: false, // do not focus the last invalid input
                    rules: {
//                        monitor_company: {
//                            required: true
//                        },
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
            }
//            intToChinese (str) {
//                str = str + '';
//                var len = str.length - 1;
//                var idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
//                var num = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
//                return str.replace(/([1-9]|0+)/g, function ($, $1, idx, full) {
//                    var pos = 0;
//                    if ($1[0] != '0') {
//                        pos = len - idx;
//                        if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
//                            return idxs[len - idx];
//                        }
//                        return num[$1[0]] + idxs[len - idx];
//                    } else {
//                        var left = len - idx;
//                        var right = len - idx + $1.length;
//                        if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
//                            pos = left - left % 4;
//                        }
//                        if (pos) {
//                            return idxs[pos] + num[$1[0]];
//                        } else if (idx + $1.length >= len) {
//                            return '';
//                        } else {
//                            return num[$1[0]]
//                        }
//                    }
//                });
//            }
        }
    }
</script>
