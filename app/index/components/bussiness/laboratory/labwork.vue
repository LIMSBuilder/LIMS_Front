<template>
    <div>
        <h1 class="page-title"> 实验分析任务
            <small>／Analysis Job</small>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">实验分析任务</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-3 col-sm-3">
                                        <div class="todo-tasklist" id="task_list">
                                            <!--<p>暂无派遣给你的作业。</p>-->
                                            <template v-for="item in taskList">
                                                <div class="todo-tasklist-item todo-tasklist-item-border-warning"
                                                     @click="viewDetails(item)">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <div class="todo-tasklist-item-title">
                                                        任务编号：{{item.identify}}
                                                    </div>
                                                    <div class="todo-tasklist-item-text"> {{item.client_unit}}
                                                    </div>
                                                    <div class="todo-tasklist-item-text"> {{item.type}}
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="todo-tasklist-devider"></div>
                                    <div class="col-md-9 col-sm-9 text-center" v-if="choosep==0">
                                        <h1>暂未选择任务</h1>
                                    </div>
                                    <div class="col-md-9 col-sm-9 " v-if="choosep!=0">
                                        <div style="margin-bottom: 30px;">
                                            <template v-for="item in projectList">
                                                <button @click="chooseProject(item)" type="button"
                                                        style="margin-right: 10px; width: 100px;"
                                                        class="btn green btn-outline itemBtn">{{item.project.name}}
                                                </button>
                                            </template>
                                        </div>
                                        <div v-if="chooseItem==0">
                                            <h3 class="text-center">请选择分析项目</h3>
                                        </div>


                                        <form action="#" class="form-horizontal form-bordered form-row-stripped"
                                              v-if="chooseItem!=0">


                                            <div class="panel panel-success">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">实验结果登记</h3>
                                                </div>
                                                <div class="panel-body">
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
                                                                            <th> 操作</th>
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
                                                                                    <template v-if="dysodia.process==1">
                                                                                        {{dysodia.concentration}}
                                                                                    </template>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <button type="button"
                                                                                            @click="saveInspect(dysodia)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="dysodia.process==0">保
                                                                                        存
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            @click="changeInspect(dysodia)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="dysodia.process==1">修
                                                                                        改
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
                                                                            <th> 操作</th>
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
                                                                                    <template v-if="air.process==1">
                                                                                        {{air.result}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="air.volume"
                                                                                           v-if="air.process==0">
                                                                                    <template v-if="air.process==1">
                                                                                        {{air.volume}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="air.concentration"
                                                                                           v-if="air.process==0">
                                                                                    <template v-if="air.process==1">
                                                                                        {{air.concentration}}
                                                                                    </template>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <button type="button"
                                                                                            @click="saveInspect(air)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="air.process==0">保
                                                                                        存
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            @click="changeInspect(air)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="air.process==1">修 改
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
                                                                            <th> 操作</th>
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
                                                                                    <template v-if="water.process==1">
                                                                                        {{water.result}}
                                                                                    </template>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <button type="button"
                                                                                            @click="saveInspect(water)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="water.process==0">保
                                                                                        存
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            @click="changeInspect(water)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="water.process==1">修 改
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
                                                                            <th> 操作</th>
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
                                                                                    <template v-if="solid.process==1">
                                                                                        {{solid.result}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="solid.volume"
                                                                                           v-if="solid.process==0">
                                                                                    <template v-if="solid.process==1">
                                                                                        {{solid.volume}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="solid.flow"
                                                                                           v-if="solid.process==0">
                                                                                    <template v-if="solid.process==1">
                                                                                        {{solid.flow}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="solid.concentration"
                                                                                           v-if="solid.process==0">
                                                                                    <template v-if="solid.process==1">
                                                                                        {{solid.concentration}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="solid.discharge"
                                                                                           v-if="solid.process==0">
                                                                                    <template v-if="solid.process==1">
                                                                                        {{solid.discharge}}
                                                                                    </template>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <button type="button"
                                                                                            @click="saveInspect(solid)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="solid.process==0">保
                                                                                        存
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            @click="changeInspect(solid)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="solid.process==1">修 改
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
                                                                            <th> 操作</th>
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
                                                                                    <template v-if="soil.process==1">
                                                                                        {{soil.point}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="soil.result"
                                                                                           v-if="soil.process==0">
                                                                                    <template v-if="soil.process==1">
                                                                                        {{soil.result}}
                                                                                    </template>
                                                                                </td>
                                                                                <td style="width: 200px;"
                                                                                    class="text-center">
                                                                                    <input type="text"
                                                                                           class="form-control"
                                                                                           v-model="soil.remark"
                                                                                           v-if="soil.process==0">
                                                                                    <template v-if="soil.process==1">
                                                                                        {{soil.remark}}
                                                                                    </template>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <button type="button"
                                                                                            @click="saveInspect(soil)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="soil.process==0">保
                                                                                        存
                                                                                    </button>
                                                                                    <button type="button"
                                                                                            @click="changeInspect(soil)"
                                                                                            class="btn blue btn-outline"
                                                                                            v-if="soil.process==1">修 改
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
                                                </div>
                                            </div>


                                            <div class="panel panel-danger">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">原始记录列表</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div class="actions" style="float: right">
                                                        <button type="button"
                                                                class="btn green-haze btn-outline sbold uppercase"
                                                                data-toggle="modal" data-target="#uploadInspect">上 传
                                                        </button>
                                                    </div>
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
                                                                                <button type="button"
                                                                                        @click="deleteAttachment(attach)"
                                                                                        class="btn red btn-outline">删 除
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
                                            </div>


                                            <div class="panel panel-info">
                                                <div class="panel-heading">
                                                    <h3 class="panel-title">样品详情</h3>
                                                </div>
                                                <div class="panel-body">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">采样日期：
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{inspectInfo.sample_time}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">送样日期：
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{inspectInfo.sample_time}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">送样者：
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{inspectInfo.sample_creater.name}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">接样者：
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{inspectInfo.sample_receiver.name}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">平行样：
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    <template v-for="item in inspectInfo.libList">
                                                                        {{item.identify}} /
                                                                    </template>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">加标回收样：
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    <template v-for="item in inspectInfo.tagList">
                                                                        {{item.identify}} /
                                                                    </template>
                                                                </p>
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
                </div>
            </div>
        </div>

        <div class="modal fade bs-modal-lg" id="uploadInspect" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">上传原始记录</h4>
                    </div>
                    <div class="modal-body">
                        <div id="myId" class="dropzone">
                            <div class="dz-message">
                                将文件拖至此处或点击上传.<br>
                                <span class="note">上传经过标签化处理的送检单模板。 目前 <strong>仅支持</strong> DOC、DOCX、XLS、XLSX。</span>
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

    </div>
</template>


<script type="es6">
    import Dropzone from 'mod/dropzone'
    import 'style/dropzone'
    module.exports = {
        data: function () {
            return {
                currentPage: 1,
                condition: "",
                task: {},
                taskList: [],
                projectList: [],
                deliveryList: [],
                choosep: 0,
                chooseItem: 0,
                labItem: {},
                projectname: "",
                type: "",
                fetchLabItem: {
                    type: "",
                    id: []
                },
                projectItems: [],//保存后得到的数据
                result: "",
                inspectList: [],
                inspectInfo: {
                    sample_creater: {},
                    sample_receiver: {}
                },
                inspectAttachment: []

            }

        },
        mounted(){
            var me = this;
            me.getData();
            App.addResizeHandler(function () {
                me._handleProjectListMenu();
            });

            var elementDropzone = new Dropzone("div#myId", {
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
                        me.$http.post("/api/inspect/saveAttachment", {
                            task_id: me.task.id,
                            project_id: me.chooseItem.project.id,
                            path: finished.path
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("原始记录上传成功！");
                                    me.fetchAttachment(me.chooseItem);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        });
                    }
                })
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
        methods: {
            fetchData(pageNum, rowCount){
                var me = this;
                App.startPageLoading({animate: true});//用户等待时，提示的loading条
                this.$http.get("/api/dispatch/taskList", {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.taskList = data.results;
                    me.$nextTick(function () {
                        App.stopPageLoading();//获取数据后，去掉loading条
                    })
                }, (response) => {
                    serverErrorInfo(response);
                });
            },
            fetchPages(rowCount){
                var me = this;
                this.$http.get("/api/dispatch/taskList", {
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
            viewDetails(task){
                var me = this;
                me.task = task;
                me.fetchProject();
                me.chooseItem = 0;
            },
            fetchProject(){
                var me = this;
                me.$http.get("/api/dispatch/item", {
                    params: {
                        task_id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.projectList = data.items;
                    me.choosep = 1;

                    me.$nextTick(function () {
                        jQuery(".itemBtn").off("click").on("click", function () {
                            jQuery(".itemBtn").removeClass("active");
                            jQuery(this).addClass("active");

                        });
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //点击分析项目，获取到分析项目的详细信息
            chooseProject(item){
                var me = this;
                me.chooseItem = item;
                me.fetchItems(item);
                me.fetchInfo(item);
                me.fetchAttachment(item);
            },
            fetchItems(item){
                var me = this;
                me.$http.get("/api/dispatch/inspect", {
                    params: {
                        task_id: me.task.id,
                        project_id: item.project.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.inspectList = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            fetchInfo(item){
                var me = this;
                me.$http.get("/api/dispatch/inspectInfo", {
                    params: {
                        task_id: me.task.id,
                        project_id: item.project.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.inspectInfo = data;
                }, response => {
                    serverErrorInfo(response);
                })

            },
            fetchAttachment(item){
                var me = this;
                me.$http.get("/api/dispatch/inspectAttachment", {
                    params: {
                        task_id: me.task.id,
                        project_id: item.project.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.inspectAttachment = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            saveInspect(item){
                //console.log(item);
                var me = this;
                me.$http.post("/api/inspect/save", item).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("实验结果保存成功！");
                            me.chooseProject(me.chooseItem)
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                });
            },
            changeInspect(item){
                item.process = 0;
            },
            deleteAttachment(item){
                var me = this;
                me.$http.get("/api/inspect/deleteAttachment", {
                    params: {
                        id: item.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("原始记录删除成功！");
                            me.fetchAttachment(me.chooseItem);
                        }
                    })
                })
            }

        }
    }
</script>