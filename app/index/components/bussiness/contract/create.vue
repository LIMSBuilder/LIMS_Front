<template>
    <div>
        <h1 class="page-title"> 合同起草
            <small>／Contract</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light bordered" id="form_wizard_1">
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
                        <form class="form-horizontal" action="#" id="submit_form" method="POST">
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
                                                        <span class="required"> * </span>
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
                                                        <span class="required"> * </span>
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
                                                        <span class="required"> * </span>
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
                                                        <span class="required"> * </span>
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
                                                        <span class="required"> * </span>
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
                                                        <div class="input-icon right">
                                                            <i class="fa fa-user"></i>
                                                            <input type="text" class="form-control" name="trustee"
                                                                   v-model="contract.trustee"
                                                                   id="trustee"/></div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4" for="trustee_fax">传真号码
                                                        <span class="required"> * </span>
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
                                                            v-model="contract.type" id="projectType">
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
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-9">
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 选择</th>
                                                                <th> 序号</th>
                                                                <th> 环境要素</th>
                                                                <th> 监测点（个）</th>
                                                                <th> 监测项目</th>
                                                                <th> 监测频次</th>
                                                                <th> 备注</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <p>
                                                        <a href="#createMonitor" data-toggle="modal"
                                                           class="btn green btn-outline">新 增</a>
                                                        <button type="button" class="btn red btn-outline">删除全部</button>
                                                        <button type="button" class="btn yellow btn-outline">读取模板
                                                        </button>
                                                    </p>
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
                                                <label class="control-label col-md-2" for="package_project">分包项目
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <select multiple="multiple" class="multi-select"
                                                            id="package_project" name="package_project"
                                                            v-model="contract.package_project">
                                                        <optgroup label="NFC EAST">
                                                            <option value="1">Dallas Cowboys</option>
                                                            <option value="2">New York Giants</option>
                                                            <option value="3">Philadelphia Eagles</option>
                                                            <option value="4">Washington Redskins</option>
                                                        </optgroup>
                                                        <optgroup label="NFC NORTH">
                                                            <option value="5">Chicago Bears</option>
                                                            <option value="6">Detroit Lions</option>
                                                            <option value="7">Green Bay Packers</option>
                                                            <option value="8">Minnesota Vikings</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label col-md-2">客户要求
                                                    <span class="required">  </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="mt-checkbox-list">
                                                        <label class="mt-checkbox mt-checkbox-outline">
                                                            <input type="checkbox" v-model="contract.inRoom"
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
                                                <label class="control-label col-md-2" for="finishTime">完成时间
                                                    <span class="required"> * </span>
                                                </label>
                                                <div class="col-md-10">
                                                    <div class="input-group" id="defaultrange">
                                                        <input type="text" class="form-control" id="finishTime"
                                                               v-model="contract.finish_time" name="finishTime">
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
                                            <h3 class="block">Confirm your account</h3>
                                            <h4 class="form-section">Account</h4>
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
                                <form action="#" class="form-horizontal" id="user_add">
                                    <div class="form-body">
                                        <div class="alert alert-danger display-hide">
                                            <button class="close" data-close="alert"></button>
                                            表单尚未填写完整。
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label" for="monitor_company">监测企业或路段
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" id="monitor_company"
                                                       v-model="monitor.company"
                                                       placeholder=""
                                                       name="monitor_company">
                                                <div class="form-control-focus"></div>
                                                <span class="help-block">请输入监测企业，必需字段。</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label" for="monitor_project">监测项目
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select multiple="multiple" class="multi-select"
                                                        id="monitor_project" name="monitor_project"
                                                        v-model="monitor.project">
                                                    <template v-for="item in elementList">
                                                        <optgroup :label="item.name">
                                                            <template v-for="project in item.project">
                                                                <option :value="project.id">{{project.name}}</option>
                                                            </template>
                                                        </optgroup>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label" for="monitor_frequency">监测频次
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control" name="monitor_frequency"
                                                        v-model="monitor.frequency" id="monitor_frequency">
                                                    <option value>请选择监测频次</option>
                                                    <template v-for="item in frequencyList">
                                                        <option :value="item.id">{{item.total}}</option>
                                                    </template>
                                                </select>
                                                <div class="form-control-focus"></div>
                                                <span class="help-block">请选择监测频次，必需字段。</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-2 control-label" for="monitor_frequency">监测点
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control input-large"
                                                       placeholder="回车以输入不同监测点" v-model="monitor.point"
                                                       data-role="tagsinput" id="monitor_point">
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

    </div>
</template>

<script>
    import 'mod/wizard'
    import 'mod/datarangepicker'
    import 'mod/maxlength'
    import  'mod/taginput'
    import 'style/datarangepicker'
    //    import 'mod/moment'
    import  'style/taginput'
    import moment from 'moment'
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
                    paymentWay: "客户自取",
                    package_project: [],
                    inRoom: false,
                    secret: false
                },
                typeList: [],
                customerList: [],
                currentPage: 1,
                condition: "",
                create: {},
                monitor: {
                    project: [],
                    point: "",
                    frequency: "",
                    company: ""
                },
                elementList: [{project: []}],
                frequencyList: []
            }
        },
        mounted(){
            var me = this;
            me.init();
            me.fetchType();
            me.fetchProjectByElement();
            me.fetchFrequency();
            me.getCustomer();


            moment.locale('zh-cn');
            // textarea的字数显示
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
            $('#package_project').multiSelect({
                selectableOptgroup: true
            });
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
                        '本月完成': [moment().startOf('month'), moment().endOf('month')]
                    },
                    minDate: '01/01/2012',
                    maxDate: '12/31/2018'
                },
                function (start, end) {
                    $('#defaultrange input').val(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
                }
            );
            $("#chooseCustomer").draggable({
                handle: ".modal-header"
            });
            $("#createMonitor").draggable({
                handle: ".modal-header"
            });

        },
        methods: {
            addMonitor(){
                var me = this;

                me.monitor.project = jQuery("#monitor_project").val();
                me.monitor.point = jQuery('#monitor_point').val();

                console.log(JSON.parse(JSON.stringify(me.monitor)));
            },
            create(){
                var me = this;
                me.contract.package_project = jQuery("#package_project").val();
                me.contract.finish_time = jQuery("#finishTime").val();
                console.log(JSON.parse(JSON.stringify(me.contract)));
            },
            fetchCustomer(pageNum, rowCount){
                var me = this;
                me.$http.get("/api/customer/list", {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then(response => {
                    var data = response.data;
                    me.customerList = data.results;

                }, response => {
                    serverErrorInfo();
                });
            },
            fetchProjectByElement(){
                var me = this;
                me.$http.get("/api/project/findElementList").then(response => {
                    var me = this;
                    me.elementList = response.data.results;
                    me.$nextTick(function () {
                        $('#monitor_project').multiSelect({
                            selectableOptgroup: true
                        });
                    });
                }, response => {
                    serverErrorInfo();
                });
            },
            fetchFrequency(){
                var me = this;
                me.$http.get("/api/frequency/total").then(response => {
                    var data = response.data;
                    me.frequencyList = data.results;
                    me.$nextTick(function () {
                        $('#monitor_frequency').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check'
                        });
                    });
                }, response => {
                    serverErrorInfo();
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
                            me.fetchCustomer(data.getCurrent(), rowCount, me.condition);
                            me.currentPage = data.getCurrent();
                        }
                    });
                }, (response) => {
                    serverErrorInfo();
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
            },
            importDefault(){
                //导入预设
                var me = this;
                confirm({
                    content: "是否导入预设的乙方联系信息？",
                    success: function () {
                        var demo = {
                            trustee: "张全蛋",
                            trustee_code: "000000",
                            trustee_address: "江苏省常州市",
                            trustee_tel: "1234567890",
                            trustee_unit: "常州某坑货公司",
                            trustee_fax: "09821331"
                        };
                        for (var key in demo) {
                            me.contract[key] = demo[key];
                        }

                    }
                })
            },
            init: function () {
                if (!jQuery().bootstrapWizard) {
                    return;
                }

                function format(state) {
                    if (!state.id) return state.text; // optgroup
                    return "<img class='flag' src='../../assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
                }

                var form = $('#submit_form');
                var error = $('.alert-danger', form);
                var success = $('.alert-success', form);

                form.validate({
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
                        client_address: {
                            required: true
                        },
                        client_fax: {
                            required: true
                        },
                        client_code: {
                            required: true
                        },
                        trustee_unit: {
                            required: true
                        },
                        trustee: {
                            required: true
                        },
                        trustee_tel: {
                            required: true
                        },
                        trustee_address: {
                            required: true
                        },
                        trustee_fax: {
                            required: true
                        },
                        trustee_code: {
                            required: true
                        },
                        projectName: {
                            required: true
                        },
                        projectAim: {
                            required: true
                        },
                        projectType: {
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
                    $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                    // set done steps
                    jQuery('li', $('#form_wizard_1')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }

                    if (current == 1) {
                        $('#form_wizard_1').find('.button-previous').hide();
                    } else {
                        $('#form_wizard_1').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#form_wizard_1').find('.button-next').hide();
                        $('#form_wizard_1').find('.button-submit').show();
                        displayConfirm();
                    } else {
                        $('#form_wizard_1').find('.button-next').show();
                        $('#form_wizard_1').find('.button-submit').hide();
                    }
                    App.scrollTo($('.page-title'));
                }

                // default form wizard
                $('#form_wizard_1').bootstrapWizard({
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

//                        if (form.valid() == false) {
//                            return false;
//                        }

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
                        $('#form_wizard_1').find('.progress-bar').css({
                            width: $percent + '%'
                        });
                    }
                });

                $('#form_wizard_1').find('.button-previous').hide();
                $('#form_wizard_1').find('.button-submit').hide();
                //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
                $('#country_list', form).change(function () {
                    form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
                });
            },
            fetchType(){
                var me = this;
                me.$http.get("/api/type/total").then(response => {
                    var data = response.data;
                    me.typeList = data.results;
                    me.$nextTick(function () {
                        $('.bs-select').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check'
                        });
                    })
                }, response => {
                    serverErrorInfo();
                });
            }
        }
    }
</script>
