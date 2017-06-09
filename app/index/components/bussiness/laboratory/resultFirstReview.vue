<template>
    <div>
        <h1 class="page-title"> 实验室主任一审
            <small>／Director Review</small>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">待审核任务</span>
                                </div>
                                <div class="actions">
                                    <!--<button type="button" class="btn green btn-outline" @click="agreeInspect">通 过-->
                                    <!--</button>-->
                                    <!--<button type="button" class="btn red btn-outline" @click="rejectInspect">拒 绝-->
                                    <!--</button>-->
                                    <!--<button type="button" class="btn blue btn-outline" @click="reviewInspect">实验审核-->
                                    <!--</button>-->
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
                                                        <button type="button" class="btn blue btn-outline"
                                                                @click="reviewInspect" style="float: right">审 核
                                                        </button>
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
                                                    <h3 class="panel-title">实验结果审核</h3>
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
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <template v-for="(dysodia,index) in item.items">
                                                                            <tr>
                                                                                <td class="text-center">{{index+1}}</td>
                                                                                <td class="text-center">
                                                                                    {{dysodia.sample.identify}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{dysodia.concentration}}
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
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <template v-for="(air,index) in item.items">
                                                                            <tr>
                                                                                <td class="text-center">{{index+1}}</td>
                                                                                <td class="text-center">
                                                                                    {{air.sample.identify}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{air.result}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{air.volume}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{air.concentration}}
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
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                        <template v-for="(water,index) in item.items">
                                                                            <tr>
                                                                                <td class="text-center">{{index+1}}</td>
                                                                                <td class="text-center">
                                                                                    {{water.sample.identify}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{water.result}}
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
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <template v-for="(solid,index) in item.items">
                                                                            <tr>
                                                                                <td class="text-center">{{index+1}}</td>
                                                                                <td class="text-center">
                                                                                    {{solid.sample.identify}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{solid.result}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{solid.volume}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{solid.flow}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{solid.concentration}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{solid.discharge}}
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
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{soil.point}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{soil.result}}
                                                                                </td>
                                                                                <td
                                                                                        class="text-center">
                                                                                    {{soil.remark}}
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


        <div class="modal fade bs-modal-lg" id="reviewInsp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">原始记录审核</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row margin-bottom-20">
                            <label class="col-md-9 control-label">原始记录是否填写完整？</label>
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
                            <label class="col-md-9 control-label">监测数据有效位数是否规范？</label>
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
                            <label class="col-md-9 control-label">原始记录修改是否符合规范？</label>
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
                            <label class="col-md-9 control-label">送检单结果与记录是否一致？</label>
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
                            <label class="col-md-9 control-label">原始记录审核是否完整？</label>
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
                            <label class="col-md-9 control-label">标准曲线是否符合规范？</label>
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
                        <hr>
                        <textarea class="form-control" rows="5" v-model="result.remark"
                                  placeholder="备注信息"></textarea>
                        <hr>
                        <div class="row margin-bottom-20">
                            <div class="col-md-12">
                                <p>审核结果：<span class="label label-success"
                                              v-if="result.condition1==1&&result.condition2==1&&result.condition3==1&&result.condition4==1&&result.condition5==1&&result.condition6==1"> 通过 </span>
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
                inspectAttachment: [],
                rejectObj: {
                    remark: ""
                },
                result: {
                    condition1: 1,
                    condition2: 1,
                    condition3: 1,
                    condition4: 1,
                    condition5: 1,
                    condition6: 1,
                    remark: ""
                }

            }

        },
        mounted(){
            var me = this;
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
        },
        methods: {
            fetchData(pageNum, rowCount){
                var me = this;
                App.startPageLoading({animate: true});//用户等待时，提示的loading条
                this.$http.get("/api/inspect/taskList", {
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
                this.$http.get("/api/inspect/taskList", {
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
                me.$http.get("/api/inspect/itemList", {
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
                me.$http.get("/api/inspect/detail", {
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
            flowTask(){
                var me = this;
                me.$http.get("/api/inspect/flowWord", {
                    params: {
                        task_id: me.task.id
                    }
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("任务流转成功！");
                        }
                    })
                })
            },
            review(){
                var me = this;
                var obj = me.result;
                obj.task_id = me.task.id;
                confirm({
                    content: "是否完成对任务编号为【" + me.task.identify + "】的实验审核?",
                    success(){
                        me.$http.post("/api/inspect/review", obj).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("审核成功！");
                                    me.chooseProject(me.chooseItem);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            reviewInspect(){
                var me = this;
                jQuery("#reviewInsp").modal("show");
            }

        }
    }
</script>