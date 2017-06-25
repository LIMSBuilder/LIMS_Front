<template>
    <div>
        <h1 class="page-title"> 报告一审
            <small>／Report Review</small>
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
                                                        <h4 class="font-grey-salsa text-center">
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
                                    <div class="col-md-6 col-sm-6 bg-after-green">
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
                                                    <button type="button" class="btn dark btn-outline"
                                                            @click="fetchProject">实验分析
                                                    </button>
                                                    <button type="button" class="btn dark btn-outline"
                                                            @click="fetchInspectReview">实验审核
                                                    </button>
                                                </p>
                                            </div>
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
                                                            <th> 查看</th>
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
                                                                <td class="text-center" v-if="it.flag==0"> 上传</td>
                                                                <td class="text-center" v-if="it.flag==1"> 创建</td>
                                                                <td class="text-center">
                                                                    <button type="button"
                                                                            class="btn btn-sm green btn-outline">查 看
                                                                    </button>
                                                                </td>
                                                                <td class="text-center">
                                                                    <button type="button"
                                                                            class="btn btn-sm btn-outline  blue"
                                                                            @click="reviewReport(it)"
                                                                            v-if="it.process==1">审 核
                                                                    </button>
                                                                    <span class="label label-danger"
                                                                          v-if="it.process==-1"> 拒 绝 </span>
                                                                    <span class="label label-success"
                                                                          v-if="it.process>=2"> 通 过 </span>
                                                                </td>
                                                            </tr>

                                                        </template>
                                                        </tbody>
                                                    </table>
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
        <div class="modal fade bs-modal-lg" id="reviewReport" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">报告审核</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">报告报表及各种记录是否齐全？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio11" v-model="result.condition1" value="1"
                                               name="radio1"
                                               class="md-radiobtn">
                                        <label for="radio11">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio12" v-model="result.condition1" value="0"
                                               name="radio1"
                                               class="md-radiobtn">
                                        <label for="radio12">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">监测内容与任务书是否一致？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio21" v-model="result.condition2" value="1"
                                               name="radio2"
                                               class="md-radiobtn">
                                        <label for="radio21">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio22" v-model="result.condition2" value="0"
                                               name="radio2"
                                               class="md-radiobtn">
                                        <label for="radio22">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">监测数据与原始记录是否一致？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio31" v-model="result.condition3" value="1"
                                               name="radio3"
                                               class="md-radiobtn">
                                        <label for="radio31">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio32" v-model="result.condition3" value="0"
                                               name="radio3"
                                               class="md-radiobtn">
                                        <label for="radio32">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">数据处理和填报是否满足要求？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio41" v-model="result.condition4" value="1"
                                               name="radio4"
                                               class="md-radiobtn">
                                        <label for="radio41">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio42" v-model="result.condition4" value="0"
                                               name="radio4"
                                               class="md-radiobtn">
                                        <label for="radio42">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">监测分析方法是否现行有效？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio51" v-model="result.condition5" value="1"
                                               name="radio5"
                                               class="md-radiobtn">
                                        <label for="radio51">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio52" v-model="result.condition5" value="0"
                                               name="radio5"
                                               class="md-radiobtn">
                                        <label for="radio52">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">极端数据是否符合逻辑？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio61" v-model="result.condition6" value="1"
                                               name="radio6"
                                               class="md-radiobtn">
                                        <label for="radio61">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio62" v-model="result.condition6" value="0"
                                               name="radio6"
                                               class="md-radiobtn">
                                        <label for="radio62">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">标准引用和结论是否准确？</label>
                            <div class="col-md-3">
                                <div class="md-radio-inline">
                                    <div class="md-radio has-success">
                                        <input type="radio" id="radio71" v-model="result.condition7" value="1"
                                               name="radio7"
                                               class="md-radiobtn">
                                        <label for="radio71">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 是 </label>
                                    </div>
                                    <div class="md-radio has-error">
                                        <input type="radio" id="radio72" v-model="result.condition7" value="0"
                                               name="radio7"
                                               class="md-radiobtn">
                                        <label for="radio72">
                                            <span></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 否 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <textarea class="form-control" rows="5" v-model="result.other"
                                  placeholder="备注信息"></textarea>
                        <hr>
                        <div class="row margin-bottom-20">
                            <div class="col-md-12">
                                <p>审核结果：<span class="label label-success"
                                              v-if="result.condition1==1&&result.condition2==1&&result.condition3==1&&result.condition4==1&&result.condition5==1&&result.condition6==1&&result.condition7==1"> 通过 </span>
                                    <span v-else class="label label-danger">拒绝</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                        <button type="button" class="btn green btn-outline" @click="review">保存审核
                        </button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
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
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
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
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
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
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
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
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade bs-modal-lg" id="project" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">查看实验分析结果</h4>
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
                                            <th> 环境要素</th>
                                            <th> 查 看</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <template v-for="(item,index) in projectList">
                                            <tr class="uppercase">
                                                <td class="text-center"> {{index+1}}
                                                </td>
                                                <td class="text-center"> {{item.name}}
                                                </td>
                                                <td class="text-center">
                                                    {{item.elementName}}
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" class="btn green btn-outline"
                                                            @click="viewInspect(item.id)">查看
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
                        <hr>
                        <h3>实验分析结果</h3>
                        <template v-for="item in inspectList">
                            <div class="table-scrollable table-scrollable-borderless"
                                 v-if="item.inspect.type=='dysodia'">
                                <table class="table table-hover table-light">
                                    <tbody>
                                    <div class="table-scrollable table-scrollable-borderless">
                                        <table class="table table-hover table-light">
                                            <thead>
                                            <tr>
                                                <th> 序号</th>
                                                <th> 样品编号</th>
                                                <th> 浓度</th>
                                                <th> 审核记录</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <template v-for="(dysodia,index) in item.items">
                                                <tr>
                                                    <td class="text-center">{{index+1}}</td>
                                                    <td class="text-center">
                                                        {{dysodia.sample.identify}}
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="dysodia.concentration"
                                                               v-if="dysodia.process==0">
                                                        <template v-else>
                                                            {{dysodia.concentration}}
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" class="btn green btn-outline"
                                                                @click="viewInspectReview(dysodia)">查看
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

                            <div class="table-scrollable table-scrollable-borderless"
                                 v-if="item.inspect.type=='air'">
                                <table class="table table-hover table-light">
                                    <tbody>
                                    <div class="table-scrollable table-scrollable-borderless">
                                        <table class="table table-hover table-light">
                                            <thead>
                                            <tr>
                                                <th> 序号</th>
                                                <th> 样品编号</th>
                                                <th> 分析结果（mg/L）</th>
                                                <th> 标况体积（NdL）</th>
                                                <th> 浓度（mg/m³）</th>
                                                <th> 审核记录</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <template v-for="(air,index) in item.items">
                                                <tr>
                                                    <td class="text-center">{{index+1}}</td>
                                                    <td class="text-center">
                                                        {{air.sample.identify}}
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="air.result"
                                                               v-if="air.process==0">
                                                        <template v-else>
                                                            {{air.result}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="air.volume"
                                                               v-if="air.process==0">
                                                        <template v-else>
                                                            {{air.volume}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="air.concentration"
                                                               v-if="air.process==0">
                                                        <template v-else>
                                                            {{air.concentration}}
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" class="btn green btn-outline"
                                                                @click="viewInspectReview(air)">查看
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

                            <div class="table-scrollable table-scrollable-borderless"
                                 v-if="item.inspect.type=='water'">
                                <table class="table table-hover table-light">
                                    <tbody>
                                    <div class="table-scrollable table-scrollable-borderless">
                                        <table class="table table-hover table-light">
                                            <thead>
                                            <tr>
                                                <th> 序号</th>
                                                <th> 样品编号</th>
                                                <th style="width: 200px;"> 分析结果（mg/L）</th>
                                                <th> 审核记录</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <template v-for="(water,index) in item.items">
                                                <tr>
                                                    <td class="text-center">{{index+1}}</td>
                                                    <td class="text-center">
                                                        {{water.sample.identify}}
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="water.result"
                                                               v-if="water.process==0">
                                                        <template v-else>
                                                            {{water.result}}
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" class="btn green btn-outline"
                                                                @click="viewInspectReview(water)">查看
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

                            <div class="table-scrollable table-scrollable-borderless"
                                 v-if="item.inspect.type=='solid'">
                                <table class="table table-hover table-light">
                                    <tbody>
                                    <div class="table-scrollable table-scrollable-borderless">
                                        <table class="table table-hover table-light">
                                            <thead>
                                            <tr>
                                                <th> 序号</th>
                                                <th> 样品编号</th>
                                                <th> 分析结果（mg/L）</th>
                                                <th> 标况体积（NdL）</th>
                                                <th> 标干流量（Ndm³/h）</th>
                                                <th> 浓度(mg/m³)</th>
                                                <th> 排放量（kg/h）</th>
                                                <th 审核记录></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <template v-for="(solid,index) in item.items">
                                                <tr>
                                                    <td class="text-center">{{index+1}}</td>
                                                    <td class="text-center">
                                                        {{solid.sample.identify}}
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="solid.result"
                                                               v-if="solid.process==0">
                                                        <template v-else>
                                                            {{solid.result}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="solid.volume"
                                                               v-if="solid.process==0">
                                                        <template v-else>
                                                            {{solid.volume}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="solid.flow"
                                                               v-if="solid.process==0">
                                                        <template v-else>
                                                            {{solid.flow}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="solid.concentration"
                                                               v-if="solid.process==0">
                                                        <template v-else>
                                                            {{solid.concentration}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="solid.discharge"
                                                               v-if="solid.process==0">
                                                        <template v-else>
                                                            {{solid.discharge}}
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" class="btn green btn-outline"
                                                                @click="viewInspectReview(solid)">查看
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

                            <div class="table-scrollable table-scrollable-borderless"
                                 v-if="item.inspect.type== 'soil' ">
                                <table class="table table-hover table-light">
                                    <tbody>
                                    <div class="table-scrollable table-scrollable-borderless">
                                        <table class="table table-hover table-light">
                                            <thead>
                                            <tr>
                                                <th> 序号</th>
                                                <th> 样品编号</th>
                                                <th> 样品名称</th>
                                                <th> 采样断面（点）</th>
                                                <th> 分析结果（mg/kg）</th>
                                                <th> 备注</th>
                                                <th> 审核记录</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <template v-for="(soil,index) in item.items">
                                                <tr>
                                                    <td class="text-center">{{index+1}}</td>
                                                    <td class="text-center">
                                                        {{soil.sample.identify}}
                                                    </td>
                                                    <td class="text-center">
                                                        {{soil.sample.name}}
                                                    </td>
                                                    <td style="width: 50px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="soil.point"
                                                               v-if="soil.process==0">
                                                        <template v-else>
                                                            {{soil.point}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="soil.result"
                                                               v-if="soil.process==0">
                                                        <template v-else>
                                                            {{soil.result}}
                                                        </template>
                                                    </td>
                                                    <td style="width: 200px;"
                                                        class="text-center">
                                                        <input type="text"
                                                               class="form-control"
                                                               v-model="soil.remark"
                                                               v-if="soil.process==0">
                                                        <template v-else>
                                                            {{soil.remark}}
                                                        </template>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" class="btn green btn-outline"
                                                                @click="viewInspectReview(soil)">查看
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
                        </template>
                        <hr>
                        <h3>实验原始记录</h3>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <tbody>
                                <div class="table-scrollable table-scrollable-borderless">
                                    <table class="table table-hover table-light">
                                        <thead>
                                        <tr>
                                            <th> 序号</th>
                                            <th> 附件名称</th>
                                            <th> 操作</th>
                                            <th> 审核记录</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        <template
                                                v-for="(attach,index) in inspectAttachment">
                                            <tr>
                                                <td class="text-center">{{index+1}}</td>
                                                <td class="text-center">
                                                    {{attach.name}}
                                                </td>
                                                <td class="text-center">
                                                    <button type="button"
                                                            class="btn green btn-outline">查
                                                        看
                                                    </button>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" class="btn green btn-outline"
                                                            @click="viewInspectReview(item)">查看
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
                        <hr>
                        <h3>实验审核记录</h3>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <tbody>
                                <div class="table-scrollable table-scrollable-borderless">
                                    <table class="table table-hover table-light">
                                        <thead>
                                        <tr>
                                            <th> 序号</th>
                                            <th> 审核类别</th>
                                            <th> 审核结果</th>
                                            <th> 审核者</th>
                                            <th> 审核时间</th>
                                            <th> 备注信息</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        <template
                                                v-for="(review,index) in inspectReview">
                                            <tr>
                                                <td class="text-center">{{index+1}}</td>
                                                <td class="text-center">
                                                    <template v-if="item.type=='review'">结果审核</template>
                                                    <template v-if="item.type=='check'">结果复核</template>
                                                </td>
                                                <td class="text-center">
                                                    <template v-if="item.result==0">
                                                        审核拒绝
                                                    </template>
                                                    <template v-if="item.result==1">
                                                        审核通过
                                                    </template>
                                                </td>
                                                <td class="text-center">{{item.Name}}</td>
                                                <td class="text-center">{{item.create_time}}</td>
                                                <td class="text-center">{{item.remark}}</td>
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
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade bs-modal-lg" id="masterReview" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">主任审核意见</h4>
                    </div>
                    <div class="modal-body">
                        <h3>一审记录</h3>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <tbody>
                                <div class="table-scrollable table-scrollable-borderless">
                                    <table class="table table-hover table-light">
                                        <thead>
                                        <tr class="uppercase">
                                            <th> 序号</th>
                                            <th> 审核者</th>
                                            <th> 审核时间</th>
                                            <th> 查 看</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <template v-for="(item,index) in masterReviewList.firstReview">
                                            <tr class="uppercase">
                                                <td class="text-center"> {{index+1}}
                                                </td>
                                                <td class="text-center"> {{item.creater.name}}
                                                </td>
                                                <td class="text-center">
                                                    {{item.create_time}}
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" class="btn green btn-outline"
                                                            @click="viewReview(item.id)">查看
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
                        <hr>
                        <h3>二审记录</h3>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <tbody>
                                <div class="table-scrollable table-scrollable-borderless">
                                    <table class="table table-hover table-light">
                                        <thead>
                                        <tr class="uppercase">
                                            <th> 序号</th>
                                            <th> 审核者</th>
                                            <th> 审核时间</th>
                                            <th> 查 看</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <template v-for="(item,index) in masterReviewList.secondReview">
                                            <tr class="uppercase">
                                                <td class="text-center"> {{index+1}}
                                                </td>
                                                <td class="text-center"> {{item.creater.name}}
                                                </td>
                                                <td class="text-center">
                                                    {{item.create_time}}
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" class="btn green btn-outline"
                                                            @click="viewReview(item.id)">查看
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
                condition: "process=10",
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
                result: {
                    condition1: 1,
                    condition2: 1,
                    condition3: 1,
                    condition4: 1,
                    condition5: 1,
                    condition6: 1,
                    condition7: 1,
                    other: ""
                },
                company_id: "",
                reportList: [],
                report: {},
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
                qualityList: [],
                projectList: [],
                inspectList: [],
                inspectAttachment: [],
                inspectReview: [],
                masterReviewList: {
                    firstReview: [],
                    secondReview: []
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
                }, response => {
                    serverErrorInfo(response);
                })
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
                        me.task.id=id;
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
            },
            reviewReport(item){
                var me = this;
                me.report = item;
                jQuery("#reviewReport").modal("show");
            },
            review(){
                var me = this;
                var obj = me.result;
                obj.report_id = me.report.id;
                confirm({
                    content: "是否完成当前报告审核?",
                    success(){
                        me.$http.post("/api/report/firstReview", obj).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("审核成功！");
                                    me.fetchRepor();
                                    jQuery("#reviewReport").modal("hide");
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        });
                    }
                })
            },
            flow(id){
                var me = this;
                confirm({
                    content: "是否确认已完成所有报告审核并流转该任务？",
                    success: function () {
                        me.$http.get("/api/report/firstReviewFlow", {
                            params: {
                                task_id: id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("报告流转成功！");
                                    me.getData();
                                },
                                501: "当前存在未审核报告，无法流转！"
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
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
                    }
                )
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
            fetchProject(){
                var me = this;
                me.$http.get("/api/task/getProjects", {
                    params: {
                        task_id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.projectList = data;
                    jQuery("#project").modal("show");
                }, response => {
                    serverErrorInfo(response);
                })
            },
            viewInspect(id){
                var me = this;
                me.$http.get("/api/dispatch/inspect", {
                    params: {
                        task_id: me.task.id,
                        project_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.inspectList = data;
                    me.fetchAttachment(id);
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchAttachment(id){
                var me = this;
                me.$http.get("/api/dispatch/inspectAttachment", {
                    params: {
                        task_id: me.task.id,
                        project_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.inspectAttachment = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            viewInspectReview(item){
                var me = this;
                me.$http.get("/api/inspect/getReviewList", {
                    params: {
                        inspect_id: item.id,
                        type: item.type
                    }
                }).then(response => {
                    var data = response.data;
                    me.inspectReview = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchInspectReview(){
                var me = this;
                me.$http.get("/api/inspect/fetchInspectReview", {
                    params: {
                        task_id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.masterReviewList = data;
                    jQuery("#masterReview").modal("show");
                }, response => {
                    serverErrorInfo(response);
                })
            },
            viewReview(id){
                //打开审核记录PageOffice
            }
        }
    }

</script>
