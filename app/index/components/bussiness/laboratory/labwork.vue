<template>
    <div>
        <h1 class="page-title"> 分析任务
            <small>／Labwork</small>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">分析任务</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-3 col-sm-3">
                                        <div class="todo-tasklist" id="task_list">
                                            <p>暂无派遣给你的作业。</p>

                                            <div class="todo-tasklist-item todo-tasklist-item-border-warning">
                                                <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                        style="width: 27px;height: 27px;"
                                                        class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                </div>
                                                <div class="todo-tasklist-item-title">
                                                    任务编号：任务编号
                                                    <!--<div class="todo-tasklist-controls pull-right">-->
                                                    <!--<span class="label label-sm label-danger"-->
                                                    <!--v-if="item.process==1">待完成</span>-->
                                                    <!--<span class="label label-sm label-success"-->
                                                    <!--v-if="item.process==2">已完成</span>-->
                                                    <!--<span class="label label-sm label-warning"-->
                                                    <!--v-if="item.process==3">未完成</span>-->
                                                    <!--</div>-->
                                                </div>
                                                <div class="todo-tasklist-item-text"> 检测项目
                                                </div>
                                                <div class="todo-tasklist-item-text"> 备注信息
                                                </div>
                                            </div>

                                            <div class="todo-tasklist-item todo-tasklist-item-border-warning">
                                                <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                        style="width: 27px;height: 27px;"
                                                        class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                </div>
                                                <div class="todo-tasklist-item-title">
                                                    任务编号：任务编号
                                                    <!--<div class="todo-tasklist-controls pull-right">-->
                                                    <!--<span class="label label-sm label-danger"-->
                                                    <!--v-if="item.process==1">待完成</span>-->
                                                    <!--<span class="label label-sm label-success"-->
                                                    <!--v-if="item.process==2">已完成</span>-->
                                                    <!--<span class="label label-sm label-warning"-->
                                                    <!--v-if="item.process==3">未完成</span>-->
                                                    <!--</div>-->
                                                </div>
                                                <div class="todo-tasklist-item-text"> 检测项目
                                                </div>
                                                <div class="todo-tasklist-item-text"> 备注信息
                                                </div>
                                            </div>

                                            <div class="todo-tasklist-item todo-tasklist-item-border-warning">
                                                <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                        style="width: 27px;height: 27px;"
                                                        class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                </div>
                                                <div class="todo-tasklist-item-title">
                                                    任务编号：任务编号
                                                    <!--<div class="todo-tasklist-controls pull-right">-->
                                                    <!--<span class="label label-sm label-danger"-->
                                                    <!--v-if="item.process==1">待完成</span>-->
                                                    <!--<span class="label label-sm label-success"-->
                                                    <!--v-if="item.process==2">已完成</span>-->
                                                    <!--<span class="label label-sm label-warning"-->
                                                    <!--v-if="item.process==3">未完成</span>-->
                                                    <!--</div>-->
                                                </div>
                                                <div class="todo-tasklist-item-text"> 检测项目
                                                </div>
                                                <div class="todo-tasklist-item-text"> 备注信息
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="todo-tasklist-devider"></div>
                                    <div class="col-md-9 col-sm-9 ">
                                        <h1 class="text-center">尚未指定任务</h1>
                                        <form action="#" class="form-horizontal form-bordered form-row-stripped">
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">任务编号：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            2017-069</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">分析项目：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            化学需氧量</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">采样日期：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            2017.02.20</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">送样日期：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            2017.02.21</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">送样者：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            mm</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">接样者：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            qq</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">平行样：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            mm</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">加标回收样：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            qq</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="table-scrollable table-scrollable-borderless">
                                                <table class="table table-hover table-light">
                                                    <tbody>
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr>
                                                                <th> 序号（臭氧1）</th>
                                                                <th> 样品编号</th>
                                                                <th> 浓度</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td class="text-center"> 序号</td>
                                                                <td class="text-center"> 样品编号</td>
                                                                <td class="text-center"> 浓度</td>
                                                                <td class="text-center"> 保存</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-scrollable table-scrollable-borderless">
                                                <table class="table table-hover table-light">
                                                    <tbody>
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr>
                                                                <th> 序号（环境空气）</th>
                                                                <th> 样品编号</th>
                                                                <th> 分析结果（mg/L）</th>
                                                                <th> 标况体积（NdL）</th>
                                                                <th> 浓度（mg/m³）</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td class="text-center"> 序号</td>
                                                                <td class="text-center"> 样品编号</td>
                                                                <td class="text-center"> 123</td>
                                                                <td class="text-center"> 345</td>
                                                                <td class="text-center"> 浓度</td>
                                                                <td class="text-center"> 保存</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-scrollable table-scrollable-borderless">
                                                <table class="table table-hover table-light">
                                                    <tbody>
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr>
                                                                <th> 序号(水)</th>
                                                                <th> 样品编号</th>
                                                                <th> 样品类型</th>
                                                                <th> 分析结果（mg/L）</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td class="text-center"> 序号</td>
                                                                <td class="text-center"> 样品编号</td>
                                                                <td class="text-center"> shui</td>
                                                                <td class="text-center"> 23</td>
                                                                <td class="text-center"> 保存</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-scrollable table-scrollable-borderless">
                                                <table class="table table-hover table-light">
                                                    <tbody>
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr>
                                                                <th> 序号(固体)</th>
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
                                                            <tr>
                                                                <td class="text-center"> 序号</td>
                                                                <td class="text-center"> 样品编号</td>
                                                                <td class="text-center"> 112</td>
                                                                <td class="text-center"> 123</td>
                                                                <td class="text-center"> 13</td>
                                                                <td class="text-center"> 1231</td>
                                                                <td class="text-center"> 123</td>
                                                                <td class="text-center"> 保存</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-scrollable table-scrollable-borderless">
                                                <table class="table table-hover table-light">
                                                    <tbody>
                                                    <div class="table-scrollable table-scrollable-borderless">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr>
                                                                <th> 序号(土壤)</th>
                                                                <th> 样品编号</th>
                                                                <th> 样品名称</th>
                                                                <th> 采样断面（点）</th>
                                                                <th> 分析结果（mg/kg）</th>
                                                                <th> 备注</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td class="text-center"> 序号</td>
                                                                <td class="text-center"> 全额群翁</td>
                                                                <td class="text-center"> 112</td>
                                                                <td class="text-center"> 123</td>
                                                                <td class="text-center"> 1231</td>
                                                                <td class="text-center"> 123</td>
                                                                <td class="text-center"> 保存</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    </tbody>
                                                </table>
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
    </div>
</template>

<script type="es6">
    module.exports = {
        data: function () {
            return {}
        },
        mounted(){

        },
        methods: {}
    }
</script>