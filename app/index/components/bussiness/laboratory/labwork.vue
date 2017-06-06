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
                                                        class=" btn btn-circle"
                                                        style="margin-right: 10px;background-color:#2ab4c0; color: white;">
                                                    {{item.project.name}}
                                                </button>
                                            </template>
                                        </div>
                                        <div v-if="chooseItem==0">
                                            <h1 class="text-center">暂无选择检测项目</h1>
                                        </div>
                                        <form action="#" class="form-horizontal form-bordered form-row-stripped"
                                              v-if="chooseItem!=0">
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">任务编号：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            {{labItem.identify}}</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">分析项目：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            {{projectname}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">采样日期：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            {{labItem.Inspect[0].send_time}}</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">送样日期：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            {{labItem.Inspect[0].receive_time}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">送样者：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            {{labItem.Inspect[0].sender}}</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">接样者：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static">
                                                            {{labItem.Inspect[0].receiver}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">平行样：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static"
                                                           v-if="labItem.items[0].libList.length!=0">
                                                            <template v-for="items in labItem.items">
                                                                <template v-for="item in items.libList">
                                                                    {{item.identify}}
                                                                </template>
                                                            </template>
                                                        </p>
                                                        <p v-if="labItem.items[0].libList.length==0"
                                                           class="form-control-static">无</p>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label class="control-label col-md-4">加标回收样：
                                                    </label>
                                                    <div class="col-md-8">
                                                        <p class="form-control-static"
                                                           v-if="labItem.items[0].tagList.length!=0">
                                                            <template v-for="items in labItem.items">
                                                                <template v-for="item in items.tagList">
                                                                    {{item.identify}}
                                                                </template>
                                                            </template>
                                                        </p>
                                                        <p v-if="labItem.items[0].tagList.length==0"
                                                           class="form-control-static">无</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="table-scrollable table-scrollable-borderless"
                                                 v-if="type=='dysodia'">
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
                                                                <template v-if="labItem.item[0]">

                                                                </template>
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

                                            <div class="table-scrollable table-scrollable-borderless"
                                                 v-if="type=='air'">
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

                                            <div class="table-scrollable table-scrollable-borderless"
                                                 v-if="type=='water'">
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

                                                            <template v-for="item in labItem.items">
                                                                <template v-for="(sampleList,index) in item.sampleList">
                                                                    <tr>
                                                                        <td class="text-center">
                                                                            {{index+1}}
                                                                        </td>
                                                                        <td class="text-center">
                                                                            {{sampleList.identify}}
                                                                        </td>
                                                                        <td class="text-center"> shui</td>
                                                                        <td class="text-center">
                                                                            <input type="text" name="result" id="result"
                                                                                   v-model="sampleList.result"/>
                                                                            {{sampleList.result}}
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <button type="button" class="btn  green "
                                                                                    style="float: right; margin-right: 20px"
                                                                                    @click="save(sampleList)">
                                                                                保存
                                                                            </button>
                                                                            <button type="button" class="btn  green "
                                                                                    style="float: right; margin-right: 20px"
                                                                                    @click="change()">
                                                                                修改
                                                                            </button>
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

                                            <div class="table-scrollable table-scrollable-borderless"
                                                 v-if="type=='solid'">
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

                                            <div class="table-scrollable table-scrollable-borderless"
                                                 v-if="type== 'soil' ">
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
                result: ""

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
                }, response => {
                    serverErrorInfo(response);
                })
            },
            //点击分析项目，获取到分析项目的详细信息
            chooseProject(item){
                var me = this;
                me.chooseItem = 1;
                me.$http.get("/api/dispatch/inspect", {
                    params: {
                        task_id: me.task.id,
                        project_id: item.project.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.projectname = item.project.name;//获取分析项目的名称
                    me.labItem = data;
                    me.type = data.Inspect[0].type;
                }, response => {
                    serverErrorInfo(response);
                })
            },
//            //点击化学需要量，传type和id数组获取下面表格的数据
//            fetchlabitem(){
//                var me = this;
//                me.fetchLabItem.type = me.labItem.Inspect[0].type;
//                for (var i = 0; i < me.labItem.Inspect.length; i++) {
//                    me.fetchLabItem.id.push(me.labItem.Inspect[i].id);
//                }
//                me.$http.get("/api/inspect/save", me.fetchLabItem).then(response => {
//                    var data = response.data;
//
//                }, response => {
//                    serverErrorInfo(response);
//                });
//
//
//            },
            save(item){
                var me = this;
                me.fetchLabItem.type = me.labItem.Inspect[0].type;
                for (var i = 0; i < me.labItem.Inspect.length; i++) {
                    me.fetchLabItem.id.push(me.labItem.Inspect[i].id);
                }
                me.fetchLabItem.item = item;

                debugger
                console.log(me.fetchLabItem);
                me.$http.get("/api/inspect/save", me.fetchLabItem).then(response => {
                    var data = response.data;
                    debugger
                    me.projectItems = data;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            change(){

            }

        }
    }
</script>