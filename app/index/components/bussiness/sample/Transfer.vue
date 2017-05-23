<template>
    <div>
        <h1 class="page-title"> 样品交接列表
            <small>／Transfer</small>
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
                                    <span class="caption-subject font-green-sharp bold uppercase">样品交接列表</span>
                                </div>
                            </div>
                            <!-- end PROJECT HEAD -->
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-2 col-sm-2">
                                        <div class="todo-tasklist" id="task_list">
                                            <template v-for="item in transferList">
                                                <div @click="viewDetails(item.id)"
                                                     :class="item.process==0?'todo-tasklist-item todo-tasklist-item-border-warning':item.process==1?'todo-tasklist-item todo-tasklist-item-border-info':item.process==2?'todo-tasklist-item todo-tasklist-item-border-primary':item.process==3?'todo-tasklist-item todo-tasklist-item-border-success':'todo-tasklist-item todo-tasklist-item-border-danger'">
                                                    <div class="todo-userpic pull-left" style="margin-right: 10px;"><i
                                                            style="width: 27px;height: 27px;"
                                                            class="socicon-btn socicon-btn-circle socicon-sm socicon-vimeo tooltips"></i>
                                                    </div>

                                                    <div class="todo-tasklist-item-title">
                                                        {{item.identify}}
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

                                    <div class="col-md-10 col-sm-10" v-show="trandferId==0">
                                        <h1 class="text-center">暂无任务信息</h1>
                                    </div>
                                    <div class="col-md-10 col-sm-10" v-show="trandferId!=0">
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#page_1" data-toggle="tab"> 样品管理员填写表格 </a>
                                                </li>
                                                <li>
                                                    <a href="#page_2" data-toggle="tab"> 送样基本信息 </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="page_1">
                                                    <div class="table-scrollable table-scrollable-borderless"
                                                         v-if="trandfer.sample_type==1">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 序号</th>
                                                                <th> 样品类别</th>
                                                                <th> 分析项目</th>
                                                                <th> 件数</th>
                                                                <th> 样品描述</th>
                                                                <th> 保存条件（低温/高温）</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <template v-for="(item,index) in trandfer.items">
                                                                <tr class="uppercase">
                                                                    <td class="text-center"> {{index+1}}</td>
                                                                    <td class="text-center">
                                                                        {{item.projects[0].elementName}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <template v-for="(p,i) in item.projects">
                                                                            {{p.name}}
                                                                            <template
                                                                                    v-if="i<item.projects.length-1">
                                                                                ,
                                                                            </template>
                                                                        </template>

                                                                    </td>
                                                                    <td class="text-center"> {{item.samples.length}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <input type="text"
                                                                               style="width: 130px;"
                                                                               v-model="item.saveCharacter">
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <input type="text"
                                                                               style="width: 130px;"
                                                                               v-model="item.saveState"
                                                                               v-if="item.item.process==null">
                                                                        <span v-if="item.item.process==1">{{item.saveState}}</span>
                                                                    </td>

                                                                    <td class="text-center">
                                                                        <button type="button"
                                                                                class="btn btn-sm blue btn-outline"
                                                                                @click="saveDisPatch(item)">
                                                                            保存
                                                                        </button>
                                                                        <!--<button type="button"-->
                                                                        <!--class="btn btn-sm blue btn-outline"-->
                                                                        <!--@click="changequality(item)"-->
                                                                        <!--v-if="item.process==1">-->
                                                                        <!--修改-->
                                                                        <!--</button>-->
                                                                        <!--<button type="button"-->
                                                                        <!--class="btn btn-sm red btn-outline"-->
                                                                        <!--@click="deletequality(item)"-->
                                                                        <!--v-if="item.process==1">-->
                                                                        <!--删除-->
                                                                        <!--</button>-->
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="table-scrollable table-scrollable-borderless"
                                                         v-if="trandfer.sample_type==0">
                                                        <table class="table table-hover table-light">
                                                            <thead>
                                                            <tr class="uppercase">
                                                                <th> 序号</th>
                                                                <th> 样品类别</th>
                                                                <th> 分析项目</th>
                                                                <th> 件数</th>
                                                                <th> 样品描述</th>
                                                                <th> 保存条件（低温/高温）</th>
                                                                <th> 操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <template v-for="(item,index) in trandfer.items">
                                                                <tr class="uppercase">
                                                                    <td class="text-center"> {{index+1}}</td>
                                                                    <td class="text-center">
                                                                        {{item.projects[0].elementName}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <template v-for="(p,i) in item.projects">
                                                                            {{p.name}}
                                                                            <template
                                                                                    v-if="i<item.projects.length-1">
                                                                                ,
                                                                            </template>
                                                                        </template>

                                                                    </td>
                                                                    <td class="text-center"> {{item.samples.length}}
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <template v-for="(sam,j) in item.samples">
                                                                            {{sam.character}}
                                                                            <template v-if="j<item.samples.length-1">/
                                                                            </template>
                                                                        </template>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <input type="text"
                                                                               style="width: 130px;"
                                                                               v-model="item.saveState">
                                                                        <!--<span >{{item.item[0].saveState}}</span>-->
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button"
                                                                                class="btn btn-sm blue btn-outline"
                                                                                @click="savaRegister(item)">
                                                                            保存
                                                                        </button>
                                                                        <!--<button type="button"-->
                                                                        <!--class="btn btn-sm blue btn-outline"-->
                                                                        <!--@click="changequality(item)"-->
                                                                        <!--v-if="item.process==1">-->
                                                                        <!--修改-->
                                                                        <!--</button>-->
                                                                        <!--<button type="button"-->
                                                                        <!--class="btn btn-sm red btn-outline"-->
                                                                        <!--@click="deletequality(item)"-->
                                                                        <!--v-if="item.process==1">-->
                                                                        <!--删除-->
                                                                        <!--</button>-->
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4" for="package">样品包装状况
                                                            </label>
                                                            <div class="col-md-8">
                                                                <select class="form-control" data-live-search="true"
                                                                        name="package" id="package"
                                                                        v-model="saveTransfer.package">
                                                                    <option></option>
                                                                    <option>完好</option>
                                                                    <option>破损</option>
                                                                    <option>粘污</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4" for="receive_type">样品标识
                                                            </label>
                                                            <div class="col-md-8">
                                                                <div class="input-icon right">
                                                                    <input type="text" class="form-control"
                                                                           name="receive_type"
                                                                           id="receive_type"
                                                                           v-model="saveTransfer.receive_type"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4" for="additive">固定剂添加情况
                                                            </label>
                                                            <div class="col-md-8">
                                                                <div class="input-icon right">
                                                                    <input type="text" class="form-control"
                                                                           name="additive"
                                                                           id="additive"
                                                                           v-model="saveTransfer.additive"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4" for="">样品管理员
                                                            </label>
                                                            <div class="col-md-8">
                                                                <select class="form-control" data-live-search="true"
                                                                        name="" id="">
                                                                    <option></option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-actions right todo-form-actions">
                                                        <button type="button" class="btn  green "
                                                                style="float: right; margin-right: 20px"
                                                                @click="save()">
                                                            完 成
                                                        </button>
                                                    </div>


                                                </div>
                                                <div class="tab-pane " id="page_2">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">委托单位名称
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{trandfer.client_unit}}</p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">任务单编号
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{trandfer.task_identify}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">任务来源
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{trandfer.type.name}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">样品起止编号
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{trandfer.firstIdentify}}-{{trandfer.lastIdentify}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">送样时间
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{trandfer.time}}</p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label class="control-label col-md-4">送样件数
                                                            </label>
                                                            <div class="col-md-8">
                                                                <p class="form-control-static">
                                                                    {{trandfer.count}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
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

    </div>
</template>

<script type="es6">
    import 'style/contract_list'
    import 'style/socicon'
    module.exports = {
        data: function () {
            return {
                typeList: [],
                currentPage: 1,
                condition: "process=4",
                transferList: [],
                trandfer: {
                    type: {},
                    items: {
                        saveState: "",
                        saveCharacter: ""
                    }
                },
                trandferId: 0,
                saveTransfer: {
                    id: "",
                    package: "完好",
                    receive_type: "一片白色",
                    additive: "添加情况"
                },
                saveregister: {
                    a: "123"
                },
                saveDispatch: {}

            }
        },
        mounted(){
            var me = this;
            //me._initComponents();
            //me._handleProjectListMenu();
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
                this.$http.get('/api/task/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then((response) => {
                    var data = response.data;
                    me.transferList = data.results;
                    me.$nextTick(function () {
                        App.stopPageLoading();//获取数据后，去掉loading条
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
            //点击左侧的任务书，以公司为单位，获取到作业
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            //查看详细详信息
            viewDetails(id){
                var me = this;
                me.$http.get("ceshi.json", {
                    params: {
                        id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.trandfer = data;
                    me.trandfer.type = data.type;
                    me.trandferId = id;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            savaRegister(item){
                var me = this;
                alert("自送样样品登记！");
                var tra = item;
                tra.saveCharacter = "";
                tra.samplesID = [];
                for (var i = 0; i < item.samples.length; i++) {
                    tra.samplesID.push(item.samples[i].id);
                }
                console.log(tra);
                me.$http.post("/api/lab/saveReceipt", tra).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("样品交接！");
                            me.viewDetails(me.trandferId);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            saveDisPatch(item){
                var me = this;
                alert("现场采样登记！");
                var tra = item;
                tra.samplesID = [];
                for (var i = 0; i < item.samples.length; i++) {
                    tra.samplesID.push(item.samples[i].id);
                }
                console.log(tra);
                me.$http.post("/api/lab/saveReceipt", tra).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("样品交接！");
                            me.viewDetails(me.trandferId);
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            save(){
                alert("保存全部");
                var me = this;
                me.saveTransfer.id = me.trandferId;
                console.log(me.saveTransfer);
                me.$http.post("/api/lab/saveAll", me.saveTransfer).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("样品交接成功！");
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })

            }

        }
    }

</script>
