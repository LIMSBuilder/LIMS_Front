<template>
    <div>
        <h1 class="page-title"> 我的作业
            <small>／Job</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN TODO SIDEBAR -->
                <div class="todo-ui">
                    <!-- BEGIN TODO CONTENT -->
                    <div class="todo-content">
                        <div class="portlet light ">
                            <!-- PROJECT HEAD -->
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="icon-bar-chart font-green-sharp hide"></i>
                                    <span class="caption-subject font-green-sharp bold uppercase">我的作业</span>
                                </div>
                                <div class="actions">
                                    <button type="button" class="btn green btn-outline" @click="finishList" v-if="item.company">提 交</button>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-5 col-sm-4">
                                        <div class="todo-tasklist" id="task_list">
                                            <p v-if="taskList.length==0">暂无派遣给你的作业。</p>
                                            <template v-for="item in taskList">
                                                <div @click="viewDetails(item)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title">
                                                        任务编号：{{item.task.identify}}
                                                        <div class="todo-tasklist-controls pull-right">
                                                        <span class="label label-sm label-danger"
                                                              v-if="item.process==1">待完成</span>
                                                            <span class="label label-sm label-success"
                                                                  v-if="item.process==2">已完成</span>
                                                            <span class="label label-sm label-warning"
                                                                  v-if="item.process==3">未完成</span>
                                                        </div>
                                                    </div>
                                                    <div class="todo-tasklist-item-text"> 监测公司（路段）：{{item.company}}
                                                    </div>
                                                    <div class="todo-tasklist-controls pull-left">
                                                                    <span class="todo-tasklist-date">
                                                                        <i class="fa fa-user"></i> 参与人员：
                                                                        <template v-for="user in item.joiner">
                                                                            {{user.name}}
                                                                            <template v-if="user.type==1">
                                                                                <span class="font-red"> [负责人] </span>
                                                                            </template>
                                                                        </template>
                                                                    </span>
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
                                    <!--<div class="col-md-7 col-sm-8">-->
                                    <!--<h1 class="text-center">尚未指定任务</h1>-->
                                    <!--</div>-->
                                    <div class="col-md-7 col-sm-8">
                                        <form action="#" class="form-horizontal form-bordered form-row-stripped"
                                              v-show="item.company">
                                            <!-- TASK HEAD -->
                                            <div class="form" style="margin-bottom: 40px;">
                                                <div class="form-group">
                                                    <div class="col-md-8 col-sm-8">
                                                        <div class="todo-taskbody-user">
                                                            <div class="todo-userpic pull-left"
                                                                 style="margin-right: 10px;">
                                                                <i class="socicon-btn socicon-btn-circle socicon-vimeo tooltips"></i>
                                                            </div>
                                                            <span class="todo-username pull-left">{{item.company}}</span>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-4 col-sm-4">
                                                        <div class="todo-taskbody-date pull-right">
                                                            <!--<button type="button"-->
                                                            <!--class="todo-username-btn btn btn-circle btn-default btn-sm">-->
                                                            <!--&nbsp; 导 出 &nbsp;</button>-->

                                                            <span class="todo-username pull-left"
                                                                  style="font-size: 14px;">任务编号：{{item.task.identify}}</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="clearfix" v-if="item.process<=1">
                                                    <a href="#apply_sample" data-toggle="modal" class="btn btn-primary">编号申请</a>
                                                    <button type="button" class="btn btn-info">扫描编号</button>
                                                    <button type="button" class="btn btn-success"
                                                            @click="finishBtn(item)">完 成
                                                    </button>
                                                </div>
                                                <hr>
                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#tab_1" data-toggle="tab"> 样品信息 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#tab_2" data-toggle="tab"> 上传原始记录表 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="tab_1">
                                                            <span v-if="sampleList.length==0">暂无样品信息</span>
                                                            <div class="table-scrollable-borderless">
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
                                                                        <th> 二维码</th>
                                                                        <th v-if="item.process<=1"> 操作</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <template v-for="(sample,index) in sampleList">
                                                                        <tr :id="sample.identify">
                                                                            <td class="text-center">{{index+1}}</td>
                                                                            <td class="text-center">{{sample.identify}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <input type="text" class="form-control"
                                                                                       v-model="sample.name"
                                                                                       v-if="sample.process==null">
                                                                                <span v-if="sample.process!=null">{{sample.name}}</span>
                                                                            </td>
                                                                            <td>
                                                                                <select class="form-control select-project"
                                                                                        multiple
                                                                                        data-live-search="true"
                                                                                        v-model="sample.project"
                                                                                        v-if="sample.process==null">
                                                                                    <template
                                                                                            v-for="item in projectList">
                                                                                        <optgroup :label="item.name">
                                                                                            <template
                                                                                                    v-for="p in item.project">
                                                                                                <option :value="p.id">
                                                                                                    {{p.name}}
                                                                                                </option>
                                                                                            </template>
                                                                                        </optgroup>
                                                                                    </template>
                                                                                </select>
                                                                                <template
                                                                                        v-for="item in sample.projectList"
                                                                                        v-if="sample.process!=null">
                                                                                    {{item.name}}
                                                                                </template>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <input type="text" class="form-control"
                                                                                       v-model="sample.point"
                                                                                       v-if="sample.process==null">
                                                                                <span v-if="sample.process!=null">{{sample.point}}</span>
                                                                            </td>
                                                                            <td>
                                                                                <input type="text" class="form-control"
                                                                                       v-model="sample.other"
                                                                                       v-if="sample.process==null">
                                                                                <span v-if="sample.process!=null">{{sample.other}}</span>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <button type="button"
                                                                                        class="btn btn-sm red btn-outline"
                                                                                        v-if="sample.process==null"
                                                                                        @click="balanceSample(sample)">
                                                                                    {{sample.isbalance?sample.isbalance.identify:'设置'}}
                                                                                </button>
                                                                                <a href="javascript:;"
                                                                                   @click="lightBtn(sample.isbalance)"
                                                                                   v-if="sample.process!=null">{{sample.isbalance?sample.isbalance.identify:'否'}}</a>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <button type="button"
                                                                                        class="btn btn-sm green btn-outline"
                                                                                        @click="print(sample)">
                                                                                    打印
                                                                                </button>
                                                                            </td>
                                                                            <td>
                                                                                <button type="button"
                                                                                        class="btn btn-sm blue btn-outline"
                                                                                        @click="sampleSave(sample)"
                                                                                        v-if="sample.process==null&&item.process<=1">
                                                                                    保存
                                                                                </button>
                                                                                <button type="button"
                                                                                        class="btn btn-sm blue btn-outline"
                                                                                        @click="sampleChange(sample)"
                                                                                        v-if="sample.process==0&&item.process<=1">
                                                                                    修改
                                                                                </button>
                                                                                <button type="button"
                                                                                        class="btn btn-sm red btn-outline"
                                                                                        @click="sampleDelete(sample)"
                                                                                        v-if="(sample.process==0||sample.process ==null)&&item.process<=1">
                                                                                    删除
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </template>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane " id="tab_2">
                                                            <form action="#" class="form-horizontal" id="myTask">
                                                                <div class="form-body">
                                                                    <div class="form-group form-md-line-input">
                                                                        <label class="col-md-3 control-label">图片名称
                                                                            <span class="required">&nbsp;&nbsp;&nbsp;</span>
                                                                        </label>
                                                                        <div class="col-md-7">
                                                                            <input type="text" class="form-control"
                                                                                   id="title" placeholder=""
                                                                                   name="title" required v-model="name">
                                                                            <div class="form-control-focus"></div>
                                                                            <span class="help-block">请输入现场采样原始记录名称，必需字段。</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group form-md-line-input">
                                                                        <label class="col-md-3 control-label">原始记录
                                                                            <span class="required">&nbsp;&nbsp;&nbsp;</span>
                                                                        </label>
                                                                        <div class="col-md-7">
                                                                            <div id="myId" class="dropzone">
                                                                                <div class="dz-message">
                                                                                    将文件拖至此处或点击上传.<br>
                                                                                    <span class="note">上传经过标签化处理的现场采样原始记录图片。</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group form-md-line-input">
                                                                        <div class="col-md-3"></div>
                                                                        <div class="col-md-7">
                                                                            <div class="table-scrollable table-scrollable-borderless">
                                                                                <table class="table table-hover table-light">
                                                                                    <thead>
                                                                                    <tr class="uppercase">
                                                                                        <th> 序号</th>
                                                                                        <th> 名字</th>
                                                                                        <th> 操作</th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <template
                                                                                            v-for="(item,index) in imageLists">
                                                                                        <tr>

                                                                                            <td class="text-center">
                                                                                                {{index+1}}
                                                                                            </td>
                                                                                            <td class="text-center">
                                                                                                {{item.name}}
                                                                                            </td>
                                                                                            <td class="text-center">
                                                                                                <button type="button"
                                                                                                        class="btn green"
                                                                                                        @click="imagecheck(item.file_path)">
                                                                                                    查 看
                                                                                                </button>
                                                                                                <button type="button"
                                                                                                        class="btn default"
                                                                                                        @click="">删 除
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
                                                                <div class="form-actions">
                                                                    <div class="row">
                                                                        <div class="col-md-offset-5 col-md-9">
                                                                            <button type="button" class="btn green"
                                                                                    @click="createImage">保 存
                                                                            </button>
                                                                            <button type="reset" class="btn default"
                                                                                    @click="resetAll">重 置
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tabbable-line">
                                                    <ul class="nav nav-tabs ">
                                                        <li class="active">
                                                            <a href="#page_1" data-toggle="tab"> 监测项目 </a>
                                                        </li>
                                                        <li>
                                                            <a href="#page_2" data-toggle="tab"> 团队成员 </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="page_1">
                                                            <div class="table-scrollable table-scrollable-borderless">
                                                                <table class="table table-hover table-light">
                                                                    <thead>
                                                                    <tr class="uppercase">
                                                                        <th> 公司、道路名称</th>
                                                                        <th> 环境要素</th>
                                                                        <th> 监测点（个）</th>
                                                                        <th> 监测项目</th>
                                                                        <th> 监测频次</th>
                                                                        <!--<th> 是否分包</th>-->
                                                                        <th> 备注</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <!--{{item}}-->
                                                                    <template v-for="(pro,index) in item.items">

                                                                        <tr>
                                                                            <td class="text-center">{{item.company}}
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{pro.element.name}}
                                                                            </td>
                                                                            <td class="text-center">{{pro.point}}</td>
                                                                            <td class="text-center">
                                                                                <ul class="receiver_tag">
                                                                                    <template v-for="p in pro.project">
                                                                                        <li class="uppercase ">
                                                                                            <a href="javascript:;"
                                                                                               style="line-height: 30px">
                                                                                                {{p.name}}
                                                                                            </a>
                                                                                        </li>
                                                                                    </template>
                                                                                </ul>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                {{pro.frequency.total}}
                                                                            </td>
                                                                            <td class="text-center">{{pro.other}}</td>
                                                                        </tr>
                                                                    </template>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane " id="page_2">
                                                            参与人员：
                                                            <template v-for="user in item.joiner">
                                                                {{user.name}}
                                                                <template v-if="user.type==1">
                                                                    <span class="font-red">[负责人]</span>
                                                                </template>
                                                                &nbsp;&nbsp;
                                                            </template>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr>
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
        <div class="modal fade draggable-modal" id="apply_sample" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">样品编号申请</h4>
                    </div>
                    <div class="modal-body form">
                        <form class="form-horizontal" action="#" method="POST">
                            <div class="form-body">
                                <div class="form-group">
                                    <label class="control-label col-md-2" for="sample_count">样品数量
                                        <span class="required"> &nbsp;&nbsp;&nbsp; </span>
                                    </label>
                                    <div class="col-md-10">
                                        <div class="input-icon right">
                                            <i class="fa fa-send"></i>
                                            <input type="number" min="0" value="1" class="form-control"
                                                   name="sample_count"
                                                   id="sample_count"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" id="dialog_btn" @click="applyBtn">确 认</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade bs-modal-sm" id="smallIcon" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">样品二维码</h4>
                    </div>
                    <div class="modal-body">
                        <div id="showIcon" style="text-align: center">
                            <img src="../../../images/icon_demo.png" style="width: 200px;"/>
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
        <div class="modal fade draggable-modal" id="balance_sample" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">选择平行样</h4>
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
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(sample,index) in sampleList">
                                    <tr v-if="sample.process != null">
                                        <td class="text-center">
                                            <label class="mt-radio mt-radio-outline">
                                                <input type="radio" v-model="choose" name="choose" :value="sample">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td class="text-center">{{sample.identify}}
                                        </td>
                                        <td class="text-center">
                                            <span>{{sample.name}}</span>
                                        </td>
                                        <td>
                                            <template v-for="item in projectList"
                                                      v-if="sample.process!=null">
                                                【{{item.name}}】:
                                                <template v-for="p in item.project">
                                                    {{p.name}}
                                                </template>
                                                <br>
                                            </template>
                                        </td>
                                        <td class="text-center">
                                            <span>{{sample.point}}</span>
                                        </td>
                                        <td>
                                            <span>{{sample.other}}</span>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" id="balanceBtn">确 认</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div class="modal fade draggable-modal" id="image" tabindex="-1" role="basic" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">现场采样原始记录图片</h4>
                    </div>
                    <div class="modal-body">
                        <div class="table-scrollable table-scrollable-borderless">
                            <img :src="path" style="width: 200px;height: 260px;">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消</button>
                        <button type="button" class="btn green" id="imageBtn">确 认</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>

    </div>
</template>
<style>
    .dropzone .note {
        border: none;
        font-weight: 200;
        font-size: 0.8em;
        display: block;
        margin-top: 1.4rem;
    }

    .dropzone .dz-message {
        font-size: 1.5em;
    }

    #myId {
        border: 2px dashed #0087F7;
        border-radius: 5px;
        background: white;
    }
</style>
<script type="es6">
    import Dropzone from 'mod/dropzone'
    import 'style/dropzone'
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "",
                taskList: [],
                countProcess: 0,
                task: {
                    type: {}
                },
                items: [],
                item: {
                    task: {},
                    joiner: []
                },
                sampleList: [],
                projectList: [],
                choose: {},
                name: "",
                path: "",
                imageLists: [],
                company_id: ""
            }
        },
        mounted(){
            var me = this;
            var elementDropzone = me.elementDropzone = new Dropzone("div#myId", {
                url: "/api/file/upload",
                paramName: "file", // The name that will be used to transfer the file
                maxFilesize: 2, // MB
                uploadMultiple: false,
                addRemoveLinks: true,
                previewsContainer: null,
                acceptedFiles: "image/*",
                dictInvalidFileType: "文件类型不匹配",
                dictRemoveFile: "取消上传",
                dictRemoveLinks: "x",
                dictCancelUpload: "x"
            });
            elementDropzone.on("success", function (file, finished) {
                codeState(finished.code, {
                    200: function () {
                        me.path = finished.path;
                    }
                })
            });
            BlogUtils.formValid(jQuery("#myTask"));

            me.init();
            me.getData();
            App.addResizeHandler(function () {
                me._handleProjectListMenu();
            });
            me.fetchCount();

            jQuery(".todo-tasklist").off("click").on("click", function (e) {
                var dom = jQuery(e.target);
                while (!dom.hasClass("todo-tasklist-item") && dom[0] && dom[0].tagName != "body") {
                    dom = dom.parents(".todo-tasklist-item");
                }
                if (dom.hasClass("todo-tasklist-item")) {
                    jQuery(".todo-tasklist-item").removeClass("active");
                    dom.addClass('active');
                }
            })
            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: true
            });


        },
        methods: {
            init: function () {
                var me = this;
                me.$http.get("/api/type/task_total").then(function (response) {
                    var data = response.data;
                    me.typeList = data.results;
                }, function (response) {
                    serverErrorInfo(response);
                })
            },
            fetchData(pageNum, rowCount){
                var me = this;
                App.startPageLoading({animate: true});
                this.$http.get('/api/dispatch/UserDispatchList', {
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
                this.$http.get('/api/dispatch/UserDispatchList', {
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
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            viewDetails(item){
                var me = this;
                me.company_id = item.id;
                me.itemDetails(item.id);
                me.fetchProject(item.id);
                me.fetchSamples(item.id);
                me.imageList(item.id);
            },
            itemDetails(id){
                var me = this;
                me.$http.get("/api/task/getByCompanyId", {
                    params: {
                        company_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.item = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchProject(id){
                var me = this;
                me.$http.get("/api/sample/fetchProject", {
                    params: {
                        company_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.projectList = data;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            fetchSamples(id){
                var me = this;
                me.$http.get("/api/sample/list", {
                    params: {
                        company_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    $('.select-project').selectpicker('destroy');
                    me.sampleList = data.results;
                    me.$nextTick(function () {
//                        $('.select-project').selectpicker('destroy');
                        $('.select-project').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            countSelectedText: "count",
                            deselectAllText: "取消选择",
                            selectAllText: "选择全部",
                            noneSelectedText: "请选择监测项目"

                        });
                    })
                }, response => {
                    serverErrorInfo(response)
                })
            },
            search(){
                var me = this;
                me.currentPage = 1;
                me.condition = "";
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
                me.$http.get("/api/task/countProcess").then(
                    response => {
                        var data = response.data;
                        me.countProcess = data.create;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            applyBtn(){
                var me = this;
                me.$http.get("/api/sample/apply", {
                    params: {
                        count: jQuery("#sample_count").val(),
                        company_id: me.item.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("样品编号申请成功！");
                            me.fetchSamples(me.item.id);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            sampleSave(item){
                var me = this;
                me.$http.get("/api/sample/saveSampleSigle", {
                    params: item
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("样品保存成功！");
                            me.fetchSamples(me.item.id);
                        }
                    })
                }, response => {
                    serverErrorInfo(response)
                })
                console.log(JSON.parse(JSON.stringify(item)));

            },
            balanceSample(item){
                var me = this;
                jQuery("#balance_sample").modal("show");
                jQuery("#balanceBtn").off("click").on("click", function () {
                    if (!me.choose.id) {
                        error("请选择平行样对象！");
                        return;
                    }
                    if (me.choose.id == item.id) {
                        error("无法设置自身为平行样！");
                        return;
                    }
                    var obj = {
                        id: me.choose.id,
                        identify: me.choose.identify
                    };
                    item.isbalance = obj;
                    alert("平行样设置成功！");
                    me.choose = {}
                    jQuery("#balance_sample").modal("hide");
                });

            },
            lightBtn(item){
                var me = this;
                if (item) {
                    BlogUtils.pulsate(item.identify);
                }
            },
            sampleChange(item){
                var me = this;
                item.process = null;
                me.$nextTick(function () {
                    $("#" + item.identify + " .select-project").selectpicker({
                        iconBase: 'fa',
                        tickIcon: 'fa-check',
                        countSelectedText: "count",
                        deselectAllText: "取消选择",
                        selectAllText: "选择全部",
                        noneSelectedText: "请选择监测项目"

                    });
                    $("#" + item.identify + " .select-project").selectpicker("val", item.project);
                });
            },
            sampleDelete(item){
                var me = this;
                confirm({
                    content: "是否删除当前样品？当前样品编号将作废！",
                    success: function () {
                        me.$http.get("/api/sample/deleteSample", {
                            params: {
                                sample_id: item.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("样品删除成功！");
                                    me.fetchSamples(me.company_id);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            finishBtn(item){
                var me = this;
                me.$http.get("/api/delivery/finishItem", {
                    params: {
                        id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("当前派遣任务完成！");
                            me.getData();
                            me.viewDetails(me.item);
                        },
                        505: "存在尚未提交的样品信息！",
                        504: "存在尚未处理的分析项目！"

                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            print(item){
                var me = this;
                var identify = item.identify;
//                window.print();
                jQuery("#smallIcon").modal("show");
//                jQuery("#showIcon").qrcode(BlogUtils.utf16to8("aa"));
                jQuery("#showIcon").jqprint();
            },
            finishList(){
                var me = this;
                me.$http.get("/api/delivery/finishList").then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("")
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //上传原始记录图片
            createImage(){
                var me = this;
                if (jQuery("#myTask").valid()) {
                    me.$http.post("/api/file/saveSceneSample", {
                        company_id: me.item.id,
                        name: me.name,
                        file_path: me.path
                    }).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("原始记录图片上传成功！");
                                me.imageList(me.item.id);
                            }

                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            },
            //取消原始记录图片的上传
            resetAll(){
                this.name = "";
                this.path = "";
                this.elementDropzone.removeAllFiles();
            },
            imageList(id){
                var me = this;
                me.$http.get("/api/file/findByCompanyId", {
                    params: {
                        company_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.imageLists = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //点击查看原始记录图片
            imagecheck(path){
                var me = this;
                me.path = path;
                jQuery("#image").modal("show");
            },
            finishList(){
                var me = this;
                confirm({
                    content: "是否提交当前所有任务执行结果？",
                    success: function () {
                        me.$http.get("/api/delivery/finishList").then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("当前全部任务提交成功！");
                                    me.getData();
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            }

        }
    }

</script>
