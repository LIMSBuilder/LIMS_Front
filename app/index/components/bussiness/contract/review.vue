<template>
    <div>
        <h1 class="page-title"> 技术审核
            <small>／Review</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN TODO SIDEBAR -->
                <div class="todo-ui">
                    <div class="todo-sidebar">
                        <div class="portlet light ">
                            <div class="portlet-title">
                                <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content">
                                    <span class="caption-subject font-green-sharp bold uppercase">当前进度 </span>
                                </div>

                            </div>
                            <div class="portlet-body todo-project-list-content">
                                <div class="todo-project-list">
                                    <ul class="nav nav-stacked">
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('reviewBig')">全部 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('waitReviewBig')">
                                                <span class="badge badge-info"
                                                      v-if="dear_count!=0"> {{dear_count}} </span> 待审核 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('afterReviewBig')">已通过 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="searchByProcess('beforeReviewBig')">待修改 </a>
                                        </li>
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
                                        <input type="text" class="form-control" v-model="search.key">
                                        <span class="help-block">支持委托单位、合同编号和项目名称查询。</span>
                                        <i class="fa fa-search"></i>
                                    </div>
                                </div>
                                <div class="md-checkbox-list">
                                    <div class="md-checkbox has-info">
                                        <input type="checkbox" id="checkbox9" class="md-check" v-model="search.onlyMe">
                                        <label for="checkbox9">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 显示本人 </label>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-actions text-center">
                                    <button type="button" class="btn green text-center" @click="searchKey">搜 索</button>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">技术审核</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-5 col-sm-4">
                                        <div class="todo-tasklist" id="contract_list">
                                            <span v-if="contractList.length==0">暂无合同。</span>
                                            <template v-for="item in contractList">
                                                <div @click="viewDetails(item.id)"
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
                                    <div class="col-md-7 col-sm-8" id="detail_desp" v-show="contract.id">
                                        <form action="#" class="form-horizontal">
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
                                                            <a href="#reviewContract" data-toggle="modal"
                                                               class="btn green btn-outline" v-if="contract.process==1">审
                                                                核</a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs">
                                                        <li class="active">
                                                            <a href="#page_1" data-toggle="tab"> 合同信息 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 检测项目 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_3" data-toggle="tab"> 审核历史 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_4" data-toggle="tab"> 操作日志 </a>
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
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">邮政编码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_code}}
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
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系电话
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_tel}}
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
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">传真号码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.client_fax}}
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
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">邮政编码
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_code}}
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
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">联系电话
                                                                    </label>
                                                                    <div class="col-md-8">
                                                                        <p class="form-control-static">
                                                                            {{contract.trustee_tel}}
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
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-6">
                                                                    <label class="control-label col-md-4">传真号码
                                                                    </label>
                                                                    <div class="col-md-8">
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
                                                            <div class="col-md-7 col-sm-8" v-show="!reviewList.result">
                                                                <h1 class="text-center">尚未审核合同</h1>
                                                            </div>
                                                            <ul class="todo-task-history">

                                                                <template v-for="item in reviewList.result">
                                                                    <li>
                                                                        <div class="todo-task-history-date">
                                                                            <button type="button"
                                                                                    class="btn green btn-outline"
                                                                                    @click="viewReviewAdvice(item)">审核意见
                                                                            </button>
                                                                        </div>
                                                                        <div class="todo-task-history-desc">
                                                                            {{item.reviewer.name}} 于
                                                                            {{item.review_time}}【
                                                                            <template v-if="item.result==1">审核通过
                                                                            </template>
                                                                            <template v-else>审核拒绝</template>
                                                                            】了合同
                                                                        </div>
                                                                    </li>
                                                                </template>
                                                            </ul>
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
        </div>
        <div class="modal fade draggable-modal" id="showReviewAdvice" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">审核日志</h4>
                    </div>
                    <div class="modal-body">
                        <h4>审核结论</h4>
                        <hr>
                        <div>
                            <span class="label label-danger" v-if="advice.result==0"> 审核拒绝 </span>
                            <span class="label label-success" v-if="advice.result==1"> 审核通过 </span>
                        </div>
                        <h4 class="margin-top-30">审核项</h4>
                        <hr>
                        <form class="form-horizontal" action="#" method="POST">
                            <div class="form-body">
                                <div class="form-group form-md-radios">
                                    <label :class="advice.same==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">客户要求与合同内容相符</label>
                                    <span v-if="advice.same==1">是</span>
                                    <span v-if="advice.same==0" class="font-red">否</span>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label :class="advice.contract==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">人力、物力、信息资源等条件均可以满足合同中的要求 </label>
                                    <span v-if="advice.contract==1">是</span>
                                    <span v-if="advice.contract==0" class="font-red">否</span>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label :class="advice.guest==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">确定的监测方案与测试方法是否可以满足客户的要求 </label>
                                    <span v-if="advice.guest==1">是</span>
                                    <span v-if="advice.guest==0" class="font-red">否</span>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label :class="advice.package==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">是否有分包内容</label>
                                    <span v-if="advice.package==1"> 有</span>
                                    <span v-if="advice.package==0" class="font-red"> 无</span>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label :class="advice.company==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">分包单位评审是否合格</label>
                                    <span v-if="advice.company==1">是</span>
                                    <span v-if="advice.company==0" class="font-red">否</span>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label :class="advice.company==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">合同额是否满足工作量要求 </label>
                                    <span v-if="advice.company==1">是</span>
                                    <span v-if="advice.company==0" class="font-red">否</span>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label :class="advice.time==0?'col-md-10 control-label font-red':'col-md-10 control-label'"
                                           style="text-align: left">提交报告时间是否合适 </label>
                                    <span v-if="advice.time==1">是</span>
                                    <span v-if="advice.time==0" class="font-red">否</span>
                                </div>
                            </div>
                        </form>
                        <h4 class="margin-top-30">审核意见</h4>
                        <hr>
                        <p v-html="advice.msg"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green btn-outline" @click="exportReview">导 出</button>
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">关 闭</button>
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
        <div class="modal fade bs-modal-lg" id="reviewContract" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">审核合同：{{contract.name}}</h4>
                    </div>
                    <div class="modal-body form">
                        <form class="form-horizontal" action="#" id="submit_form"
                              method="POST">
                            <div class="form-body">
                                <div class="form-group form-md-radios">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">客户要求与合同内容相符</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="same1"
                                                   name="same"
                                                   v-model="review_info.same"
                                                   value="1" class="md-radiobtn">
                                            <label for="same1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="same2"
                                                   name="same"
                                                   v-model="review_info.same"
                                                   value="0" class="md-radiobtn">
                                            <label for="same2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">人力、物力、信息资源等条
                                        件均可以满足合同中的要求 </label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="contract1"
                                                   name="contract"
                                                   v-model="review_info.contract"
                                                   value="1"
                                                   class="md-radiobtn">
                                            <label for="contract1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="contract2"
                                                   name="contract"
                                                   v-model="review_info.contract"
                                                   value="0" class="md-radiobtn"
                                            >
                                            <label for="contract2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">确定的监测方案与测试方法
                                        是否可以满足客户的要求 </label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="guest1"
                                                   name="guest"
                                                   v-model="review_info.guest"
                                                   value="1"
                                                   class="md-radiobtn">
                                            <label for="guest1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="guest2"
                                                   name="guest"
                                                   v-model="review_info.guest"
                                                   value="0"
                                                   class="md-radiobtn"
                                            >
                                            <label for="guest2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">是否有分包内容</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="package1"
                                                   name="package"
                                                   class="md-radiobtn"
                                                   v-model="review_info.package"
                                                   value="1">
                                            <label for="package1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 有 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="package2"
                                                   name="package"
                                                   class="md-radiobtn"
                                                   v-model="review_info.package"
                                                   value="0">
                                            <label for="package2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 无 </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="form-group form-md-radios" v-if="review_info.package==1">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">分包单位评审是否合格</label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="company1"
                                                   name="company"
                                                   v-model="review_info.company"
                                                   value="1"
                                                   class="md-radiobtn">
                                            <label for="company1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="company2"
                                                   name="company"
                                                   class="md-radiobtn"
                                                   v-model="review_info.company"
                                                   value="0">
                                            <label for="company2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>

                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">合同额是否满足工作量要求 </label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="money1"
                                                   name="money"
                                                   class="md-radiobtn"
                                                   v-model="review_info.money"
                                                   value="1">
                                            <label for="money1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="money2"
                                                   name="money" class="md-radiobtn"
                                                   v-model="review_info.money"
                                                   value="0">
                                            <label for="money2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否 </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-md-radios">
                                    <label class="col-md-8 control-label"
                                           style="text-align: left">提交报告时间是否合适 </label>
                                    <div class="md-radio-inline">
                                        <div class="md-radio">
                                            <input type="radio" id="time1"
                                                   name="time"
                                                   class="md-radiobtn"
                                                   v-model="review_info.time"
                                                   value="1">
                                            <label for="time1">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 是 </label>
                                        </div>
                                        <div class="md-radio has-error">
                                            <input type="radio" id="time2"
                                                   name="time" class="md-radiobtn"
                                                   v-model="review_info.time"
                                                   value="0">
                                            <label for="time2">
                                                <span class="inc"></span>
                                                <span class="check"></span>
                                                <span class="box"></span> 否</label>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="alert alert-success alert-dismissable">
                                            <button type="button" class="close"
                                                    data-dismiss="alert"
                                                    aria-hidden="true"></button>
                                            <strong>小技巧：</strong>
                                            您可以在文本框内详细描述您的审核意见及观点，内容将会被显示给合同修改人员查看。
                                        </div>
                                        <textarea class="inbox-editor  form-control"
                                                  name="content" style="height: 100px;"
                                                  v-model="review_info.msg"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn green btn-outline"
                                @click="review_confirm(1)">审核通过
                        </button>
                        <button type="button" class="btn red btn-outline"
                                @click="review_confirm(0)">审核拒绝
                        </button>
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
    import 'wangeditor'
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "process=waitReviewBig",
                contractList: [],
                contract: {
                    trustee: {},
                    type: {}
                },
                itemLists: [],
                log: [],
                review_info: {
                    same: "1",
                    contract: "1",
                    guest: "1",
                    package: "0",
                    company: "3",
                    money: "1",
                    time: "1",
                    type: "",
                    content: ""
                },
                dear_count: 0,
                search: {
                    key: "",
                    onlyMe: false
                },
                reviewList: {},
                advice: {},
                project: [],
            }
        },
        mounted(){
            var me = this;
            me._handleProjectListMenu();
            me.fetchDearCount();
            me.getData();
            App.addResizeHandler(function () {
                me._handleProjectListMenu();
            });

            $("#reviewContract").draggable({
                handle: ".modal-header"
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
        watch: {
            'review_info.package': function () {
                var me = this;
                if (me.review_info.package == 1) {
                    me.review_info.company = 1;
                }
                else {
                    me.review_info.company = "";
                }
            }
        },
        methods: {
            _handleProjectListMenu: function () {
                if (App.getViewPort().width <= 992) {
                    $('.todo-project-list-content').addClass("collapse");
                } else {
                    $('.todo-project-list-content').removeClass("collapse").css("height", "auto");
                }
            }
            ,
            fetchData(pageNum, rowCount)
            {
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
                    me.contractList = data.results;
                    me.$nextTick(function () {
                        App.stopPageLoading();
                    })
                }, (response) => {
                    serverErrorInfo(response);
                });
            }
            ,
            fetchPages(rowCount)
            {
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
            }
            ,
            fetchItems(id)
            {
                var me = this;
                me.$http.get("/api/contract/getItems", {
                    params: {
                        contract_id: id
                    }
                }).then(response => {
                    var data = response.data;
//                    debugger
                    me.itemLists = data;
                }, response => {
                    serverErrorInfo(response);
                });
            }
            ,
            fetchContract(id)
            {
                var me = this;
                me.$http.get("/api/contract/contractDetails", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.contract = data;
                }, response => {
                    serverErrorInfo(response);
                })
            }
            ,
            fetchLog(id)
            {
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
            }
            ,
            fetchReviewList(id)
            {
                var me = this;
                me.$http.get("/api/contract/getReviewList", {
                    params: {
                        id: id
                    }
                }).then(function (response) {
                    var data = response.data;
//                    debugger
                    me.reviewList = data;
                }, function (response) {
                    serverErrorInfo(response);
                })
            }
            ,
            getData()
            {
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
                me.fetchDearCount();
            }
            ,
            viewDetails(id)
            {
                var me = this;
                App.startPageLoading({animate: true});
                me.fetchContract(id)
                me.fetchItems(id);
                me.fetchLog(id);
                me.fetchReviewList(id);
                me.$nextTick(function () {
                    App.stopPageLoading();
                })
            }
            ,
            searchKey()
            {
                var me = this;
                if (me.search.key != "") {
                    if (me.condition != "") {
                        me.condition = "&&keyWords=" + encodeURI(me.search.key);
                    } else {
                        me.condition = "keyWords=" + encodeURI(me.search.key);
                    }
                }
                if (me.search.onlyMe) {
                    if (me.condition != "") {
                        me.condition += "&&review_me=1";
                    } else {
                        me.condition = "review_me=1";
                    }

                }
                me.currentPage = 1;
                me.getData();
            }
            ,
            searchByProcess(step)
            {
                var me = this;
                me.currentPage = 1;
//                me.condition = "process=" + step;  //这两个办法都可以实现通过进程查找当前合同
                switch (step) {
                    case "reviewBig": {
                        me.condition = "process=reviewBig";
                        break;
                    }
                    case "waitReviewBig": {
                        me.condition = "process=waitReviewBig";
                        break;
                    }
                    case "afterReviewBig": {
                        me.condition = "process=afterReviewBig";
                        break;
                    }
                    case "beforeReviewBig": {
                        me.condition = "process=beforeReviewBig";
                        break;
                    }
                }
                me.getData();

            }
            ,
            review_confirm(result)
            {
                var me = this;
                if (me.review_info.package == 0) {
                    me.review_info.company = 0;
                }
                var response = me.review_info;
                response.result = result;
                response.id = me.contract.id;
//                debugger
                debugger
                confirm({
                    content: "是否审核" + (result == 0 ? "<span class='font-red'>拒绝</span>" : "<span class='font-green'>通过</span>") + "合同【" + me.contract.name + "】？",
                    success: function () {
                        me.$http.get("/api/contract/review", {
                            params: response
                        }).then(function (response) {
                            var data = response.data;
//                            debugger
                            codeState(data.code, {
                                200: function () {
                                    alert("合同审核完成！");
                                    me.viewDetails(me.contract.id);
                                    me.getData();
                                    me.fetchDearCount();
                                    me.contract = {};
                                    jQuery("#reviewContract").modal("hide");
                                }
                            })
                        }, function (response) {
                            serverErrorInfo(response);
                        })
                    }
                })
            }
            ,
            viewReviewAdvice(item)
            {
                var me = this;
                jQuery("#showReviewAdvice").modal("show");
                me.$http.get("/api/contract/reviewDetail", {
                    params: {
                        id: item.id
                    }
                }).then(function (response) {
                    var data = response.data;
//                    console.log(data);
                    debugger
                    me.advice = data;
//                    console.log(me.advice.id);
                }, function (response) {
                    serverErrorInfo(response);
                })
            }
            ,
            fetchDearCount()
            {
                var me = this;
                me.$http.get("/api/contract/getWaitReviewCount").then(function (response) {
                    var data = response.data;
                    me.dear_count = data.count;
                }, function (response) {
                    serverErrorInfo(response);
                })
            }
            ,
            showProjectName(id)
            {
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

            }
            ,
            exportReview()
            {
                var me = this;
//                console.log(me.advice.id);
                window.open("http://" + window.location.hostname + ":8080/api/contract/createReview?id=" + me.advice.id);


            }
        }
    }

</script>