<template>
    <div class="row">
        <div class="col-md-12">
            <!-- BEGIN TODO SIDEBAR -->
            <div class="todo-ui">
                <div class="todo-sidebar">
                    <div class="portlet light ">
                        <div class="portlet-title">
                            <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content">
                                <span class="caption-subject font-green-sharp bold uppercase">合同进展 </span>
                                <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看合同进展</span>
                            </div>
                           
                        </div>
                        <div class="portlet-body todo-project-list-content">
                            <div class="todo-project-list">
                                <ul class="nav nav-stacked">
                                    <li>
                                        <a href="javascript:;" @click="searchByProcess('total')">
                                            <span class="badge badge-default"> 6 </span> 所有 </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" @click="searchByProcess(0)">
                                            <span class="badge badge-warning"> 6 </span> 草稿 </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" @click="searchByProcess(1)">
                                            <span class="badge badge-info"> 2 </span> 待审核 </a>
                                    </li>
                                    <li class="active">
                                        <a href="javascript:;" @click="searchByProcess(2)">
                                            <span class="badge badge-primary"> 3 </span> 待执行</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" @click="searchByProcess(3)">
                                            <span class="badge badge-success"> 14 </span> 已执行 </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" @click="searchByProcess(-1)">
                                            <span class="badge badge-danger"> 6 </span> 已中止 </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="portlet light ">
                        <div class="portlet-title">
                            <div class="caption" data-toggle="collapse" data-target=".todo-project-list-content-tags">
                                <span class="caption-subject font-red bold uppercase">监测类别 </span>
                                <span class="caption-helper visible-sm-inline-block visible-xs-inline-block">点击查看</span>
                            </div>
                            <div class="actions">
                                <div class="actions">
                                    <a class="btn btn-circle grey-salsa btn-outline btn-sm" href="/type/create">
                                        <i class="fa fa-plus"></i> 新增 </a>
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body todo-project-list-content todo-project-list-content-tags">
                            <div class="todo-project-list">
                                <ul class="nav nav-pills nav-stacked">
                                    <template v-for="item in typeList">
                                        <li>
                                            <a href="javascript:;" @click="searchByType(item.id)">
                                                <span class="badge badge-success"> {{item.contract_count}} </span>
                                                {{item.name}} </a>
                                        </li>
                                    </template>
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
                                <span class="caption-subject font-green-sharp bold uppercase">合同列表</span>
                            </div>
                            <div class="actions">
                                <div class="btn-group">
                                    <a class="btn green btn-circle btn-sm" href="javascript:;" data-toggle="dropdown"
                                       data-hover="dropdown" data-close-others="true"> 操 作
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li>
                                            <a href="javascript:;"> 创建新合同 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"> 作为模板合同创建 </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="javascript:;"> 导出合同
                                                <span class="badge badge-success"> 12 </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;"> 中止合同
                                                <span class="badge badge-warning"> 9 </span>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a href="javascript:;"> 删除合同 </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- end PROJECT HEAD -->
                        <div class="portlet-body">
                            <div class="row">
                                <div class="col-md-5 col-sm-4">
                                    <div class="todo-tasklist">
                                        <template v-for="item in contractList">
                                            <div @click="viewDetails(item)"
                                                 :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                        style="width: 27px;height: 27px;"
                                                        class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                </div>
                                                <div class="todo-tasklist-item-title"> {{item.name}}</div>
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
                                                    <span class="label label-sm label-danger" v-if="item.process==-1">已中止</span>
                                                    <span class="label label-sm label-warning" v-if="item.process==0">草稿合同</span>
                                                    <span class="label label-sm label-info"
                                                          v-if="item.process==1">待审核</span>
                                                    <span class="label label-sm label-primary" v-if="item.process==2">待执行</span>
                                                    <span class="label label-sm label-success" v-if="item.process==3">已执行</span>
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
                                <div class="col-md-7 col-sm-8">
                                    <form action="#" class="form-horizontal">
                                        <!-- TASK HEAD -->
                                        <div class="form" style="margin-bottom: 40px;">
                                            <div class="form-group">
                                                <div class="col-md-8 col-sm-8">
                                                    <div class="todo-taskbody-user">
                                                        <div class="todo-userpic pull-left" style="margin-right: 10px;">
                                                            <i class="socicon-btn socicon-btn-circle socicon-vimeo tooltips"></i>
                                                        </div>
                                                        <span class="todo-username pull-left">{{contract.name}}</span>
                                                        <button type="button"
                                                                class="todo-username-btn btn btn-circle btn-default btn-sm">
                                                            &nbsp;编 辑&nbsp;</button>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-4">
                                                    <div class="todo-taskbody-date pull-right">
                                                        <button type="button"
                                                                class="todo-username-btn btn btn-circle btn-default btn-sm">
                                                            &nbsp; 导 出 &nbsp;</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tabbable-line">
                                                <ul class="nav nav-tabs ">
                                                    <li class="active">
                                                        <a href="#page_1" data-toggle="tab"> 甲方信息 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#page_2" data-toggle="tab"> 乙方信息 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#page_3" data-toggle="tab"> 合同内容 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#page_4" data-toggle="tab"> 监测项目 </a>
                                                    </li>
                                                    <li>
                                                        <a href="#page_5" data-toggle="tab"> 其他约定 </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="page_1">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">委托单位
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.client_unit}}</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">邮政编码
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.client_code}}</label>
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
                                                                    <label class="control-label">
                                                                        {{contract.client_tel}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">联系人
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.client}}</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">传真号码
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.client_fax}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="page_2">
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">受托单位
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.trustee_unit}}</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">邮政编码
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.trustee_code}}</label>
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
                                                                    <label class="control-label">
                                                                        {{contract.trustee_tel}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">联系人
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.trustee.name}}</label>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label class="control-label col-md-4">传真号码
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.trustee_fax}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="page_3">
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label class="control-label col-md-2">项目名称
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">
                                                                        {{contract.name}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label class="control-label col-md-2">监测目的
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">{{contract.aim}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">

                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label class="control-label col-md-2">检测方式
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label" v-if="contract.way==1">以我单位通过计量认证、国家实验室认可的方法进行检测。</label>
                                                                    <label class="control-label" v-if="contract.way==2">客户指定的方法：{{contract.wayDesp}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label class="control-label col-md-2">客户要求
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label"
                                                                           v-if="contract.in_room==1">客户需要进入实验室监视与本次委托有关的检测活动。</label>
                                                                    <label class="control-label"
                                                                           v-if="contract.secret==1">客户需要本实验室对本次委托有关资料保密。</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="form-group col-md-12">
                                                                <label class="control-label col-md-2">分包单位
                                                                </label>
                                                                <div class="col-md-8">
                                                                    <label class="control-label">{{contract.package_unit}}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="page_4">
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
                                                                    <th> 操作</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <template v-for="(item,index) in items">
                                                                    <tr>
                                                                        <td class="text-center">{{index+1}}</td>
                                                                        <td class="text-center">{{item.company}}</td>
                                                                        <td class="text-center">{{item.element.name}}
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
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane" id="page_5">
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
                                                                    <label class="control-label">{{contract.payment}}</label>
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

                                        </div>


                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#tab_1" data-toggle="tab"> 评 论 </a>
                                                </li>
                                                <li>
                                                    <a href="#tab_2" data-toggle="tab"> 流 程 </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="tab_1">
                                                    <!-- TASK COMMENTS -->
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <ul class="media-list">
                                                                <li class="media">
                                                                    <a class="pull-left" href="javascript:;">
                                                                        <img class="todo-userpic"
                                                                             src="../../../images/avatar/avatar8.jpg"
                                                                             width="27px" height="27px">
                                                                    </a>


                                                                    <div class="media-body todo-comment">
                                                                        <button type="button"
                                                                                class="todo-comment-btn btn btn-circle btn-default btn-sm">
                                                                            &nbsp; Reply &nbsp;</button>
                                                                        <p class="todo-comment-head">
                                                                            <span class="todo-comment-username">Christina Aguilera</span>
                                                                            &nbsp;
                                                                            <span class="todo-comment-date">17 Sep 2014 at 2:05pm</span>
                                                                        </p>
                                                                        <p class="todo-text-color"> Cras sit amet nibh
                                                                            libero, in gravida nulla. Nulla vel metus
                                                                            scelerisque ante sollicitudin commodo. Cras
                                                                            purus odio, vestibulum in vulputate at,
                                                                            tempus viverra
                                                                            turpis. </p>
                                                                        <!-- Nested media object -->
                                                                        <div class="media">
                                                                            <a class="pull-left" href="javascript:;">
                                                                                <img class="todo-userpic"
                                                                                     src="../../../images/avatar/avatar4.jpg"
                                                                                     width="27px" height="27px"> </a>
                                                                            <div class="media-body">
                                                                                <p class="todo-comment-head">
                                                                                    <span class="todo-comment-username">Carles Puyol</span>
                                                                                    &nbsp;
                                                                                    <span class="todo-comment-date">17 Sep 2014 at 4:30pm</span>
                                                                                </p>
                                                                                <p class="todo-text-color"> Thanks so
                                                                                    much my dear! </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="media">
                                                                    <a class="pull-left" href="javascript:;">
                                                                        <img class="todo-userpic"
                                                                             src="../../../images/avatar/avatar5.jpg"
                                                                             width="27px" height="27px"> </a>
                                                                    <div class="media-body todo-comment">
                                                                        <button type="button"
                                                                                class="todo-comment-btn btn btn-circle btn-default btn-sm">
                                                                            &nbsp; Reply &nbsp;</button>
                                                                        <p class="todo-comment-head">
                                                                            <span class="todo-comment-username">Andres Iniesta</span>
                                                                            &nbsp;
                                                                            <span class="todo-comment-date">18 Sep 2014 at 9:22am</span>
                                                                        </p>
                                                                        <p class="todo-text-color"> Cras sit amet nibh
                                                                            libero, in gravida nulla. Scelerisque ante
                                                                            sollicitudin commodo Nulla vel metus
                                                                            scelerisque ante sollicitudin commodo. Cras
                                                                            purus odio, vestibulum
                                                                            in vulputate at, tempus viverra turpis.
                                                                            <br></p>
                                                                    </div>
                                                                </li>
                                                                <li class="media">
                                                                    <a class="pull-left" href="javascript:;">
                                                                        <img class="todo-userpic"
                                                                             src="../../../images/avatar/avatar6.jpg"
                                                                             width="27px" height="27px"> </a>
                                                                    <div class="media-body todo-comment">
                                                                        <button type="button"
                                                                                class="todo-comment-btn btn btn-circle btn-default btn-sm">
                                                                            &nbsp; Reply &nbsp;</button>
                                                                        <p class="todo-comment-head">
                                                                            <span class="todo-comment-username">Olivia Wilde</span>
                                                                            &nbsp;
                                                                            <span class="todo-comment-date">18 Sep 2014 at 11:50am</span>
                                                                        </p>
                                                                        <p class="todo-text-color"> Cras sit amet nibh
                                                                            libero, in gravida nulla. Scelerisque ante
                                                                            sollicitudin commodo Nulla vel metus
                                                                            scelerisque ante sollicitudin commodo. Cras
                                                                            purus odio, vestibulum
                                                                            in vulputate at, tempus viverra turpis.
                                                                            <br></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <!-- END TASK COMMENTS -->
                                                    <!-- TASK COMMENT FORM -->
                                                    <div class="form-group">
                                                        <div class="col-md-12">
                                                            <ul class="media-list">
                                                                <li class="media">
                                                                    <a class="pull-left" href="javascript:;">
                                                                        <img class="todo-userpic"
                                                                             src="../../../images/avatar/avatar4.jpg"
                                                                             width="27px" height="27px"> </a>
                                                                    <div class="media-body">
                                                                        <textarea
                                                                                class="form-control todo-taskbody-taskdesc"
                                                                                rows="4"
                                                                                placeholder="Type comment..."></textarea>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <button type="button"
                                                                    class="pull-right btn btn-sm btn-circle green">
                                                                &nbsp; Submit &nbsp; </button>
                                                        </div>
                                                    </div>
                                                    <!-- END TASK COMMENT FORM -->
                                                </div>
                                                <div class="tab-pane" id="tab_2">
                                                    <ul class="todo-task-history">
                                                        <li>
                                                            <div class="todo-task-history-date"> 20 Jun, 2014 at
                                                                11:35am
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task created</div>
                                                        </li>
                                                        <li>
                                                            <div class="todo-task-history-date"> 21 Jun, 2014 at
                                                                10:35pm
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task category status
                                                                changed to "Top Priority"
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="todo-task-history-date"> 22 Jun, 2014 at
                                                                11:35am
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task owner changed to
                                                                "Nick Larson"
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="todo-task-history-date"> 30 Jun, 2014 at
                                                                8:09am
                                                            </div>
                                                            <div class="todo-task-history-desc"> Task completed by "Nick
                                                                Larson"
                                                            </div>
                                                        </li>
                                                    </ul>
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
</template>
<script>
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
                items: []
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
                while (!dom.hasClass("todo-tasklist-item") && dom[0].tagName != "body") {
                    dom = dom.parents(".todo-tasklist-item");
                }
                if (dom.hasClass("todo-tasklist-item")) {
                    jQuery(".todo-tasklist-item").removeClass("active");
                    dom.addClass('active');
                }
            })
        },
        methods: {
            init: function () {
                var me = this;
                me.$http.get("/api/type/contract_total").then(function (response) {
                    var data = response.data;
                    me.typeList = data.results;
                }, function (response) {
                    serverErrorInfo();
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
                this.$http.get('/api/contract/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.contractList = data.results;
                }, (response) => {
                    serverErrorInfo();
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
                    serverErrorInfo();
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
                    me.items = data.items;
                }, response => {
                    serverErrorInfo();
                });
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            viewDetails(item){
                var me = this;
                me.contract = item;
                me.fetchItems(item.id);
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

            }
        }
    }

</script>
