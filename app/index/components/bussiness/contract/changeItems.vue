<template>
    <div>
        <h1 class="page-title"> 检测项变更
            <small>／Items</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light portlet-fit portlet-form ">


                    <div class="portlet-body">


                        <!--<template v-for="(companyEntry,index) in itemLists">-->
                        <!--<hr>-->
                        <!--<h4>作业{{index+1}}:{{companyEntry.company}}</h4>-->
                        <!--<div class="table-scrollable table-scrollable-borderless">-->
                        <!--<table class="table table-hover table-light">-->
                        <!--<tbody>-->
                        <!--<div class="table-scrollable table-scrollable-borderless">-->
                        <!--<table class="table table-hover table-light">-->
                        <!--<thead>-->
                        <!--<tr class="uppercase">-->
                        <!--<th> 序号</th>-->
                        <!--<th> 环境要素</th>-->
                        <!--<th> 监测点（个）</th>-->
                        <!--<th> 监测项目</th>-->
                        <!--<th> 监测频次</th>-->
                        <!--<th> 备注</th>-->
                        <!--</tr>-->
                        <!--</thead>-->
                        <!--<tbody>-->
                        <!--<template-->
                        <!--v-for="(item,index) in companyEntry.items">-->
                        <!--<tr>-->
                        <!--<td class="text-center">-->
                        <!--{{index+1}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.element.name}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.point}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--<template-->
                        <!--v-for="(project,index) in item.project">-->
                        <!--{{project.name}}-->
                        <!--<template-->
                        <!--v-if="project.isPackage==true">-->
                        <!--<span style="color: red;">[分包]</span>-->
                        <!--</template>-->
                        <!--<template-->
                        <!--v-if="index+1!=item.project.length">-->
                        <!--,-->
                        <!--</template>-->
                        <!--</template>-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.frequency.total}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.other}}-->
                        <!--</td>-->
                        <!--</tr>-->
                        <!--</template>-->
                        <!--</tbody>-->
                        <!--</table>-->
                        <!--</div>-->
                        <!--</tbody>-->
                        <!--</table>-->
                        <!--</div>-->
                        <!--</template>-->


                        <!--<div class="table-scrollable table-scrollable-borderless">-->
                        <!--<table class="table table-hover table-light">-->
                        <!--<tbody>-->
                        <!--<div class="table-scrollable table-scrollable-borderless">-->
                        <!--<table class="table table-hover table-light">-->
                        <!--<thead>-->
                        <!--<tr class="uppercase">-->
                        <!--<th> 序号</th>-->
                        <!--<th> 公司名称</th>-->
                        <!--<th> 环境要素</th>-->
                        <!--<th> 监测点（个）</th>-->
                        <!--<th> 监测项目</th>-->
                        <!--<th> 监测频次</th>-->
                        <!--<th> 备注</th>-->
                        <!--</tr>-->
                        <!--</thead>-->
                        <!--<tbody>-->
                        <!--<template v-for="itemList in itemLists">-->
                        <!--<template-->
                        <!--v-for="(item,index) in itemList.items">-->
                        <!--<tr>-->
                        <!--<td class="text-center">-->
                        <!--{{index+1}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{itemList.flag==0?contract.client_unit:itemList.company}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.element.name}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.point}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--<template-->
                        <!--v-for="(project,index) in item.project">-->
                        <!--{{project.name}}-->
                        <!--<template-->
                        <!--v-if="project.isPackage==true">-->
                        <!--<span style="color: red;">[分包]</span>-->
                        <!--</template>-->
                        <!--<template-->
                        <!--v-if="index+1!=item.project.length">-->
                        <!--,-->
                        <!--</template>-->
                        <!--</template>-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.frequency.total}}-->
                        <!--</td>-->
                        <!--<td class="text-center">-->
                        <!--{{item.other}}-->
                        <!--</td>-->
                        <!--</tr>-->
                        <!--</template>-->
                        <!--</template>-->
                        <!--</tbody>-->
                        <!--</table>-->
                        <!--</div>-->
                        <!--</tbody>-->
                        <!--</table>-->
                        <!--</div>-->
                        <!--</div>-->


                        <div class="portlet-body">
                            <div class="mt-element-list">
                                <div class="mt-list-head list-todo red">
                                    <div class="list-head-title-container">
                                        <h3 class="list-title">监测项目</h3>
                                        <div class="list-head-count">
                                            <div class="list-head-count-item">
                                                <i class="fa fa-check"></i> 15
                                            </div>
                                            <div class="list-head-count-item">
                                                <i class="fa fa-cog"></i> 34
                                            </div>
                                        </div>
                                    </div>
                                    <a href="javascript:;">
                                        <div class="list-count pull-right red-mint">
                                            <i class="fa fa-plus"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="mt-list-container list-todo">
                                    <div class="list-todo-line"></div>
                                    <ul>
                                        <template v-for="(companyEntry,index) in itemLists">
                                            <li class="mt-list-item">
                                                <div class="list-todo-icon bg-white">
                                                    <i class="fa fa-map-signs"></i>
                                                </div>
                                                <div class="list-todo-item grey">
                                                    <a class="list-toggle-container font-white" data-toggle="collapse"
                                                       :href="'#task-'+companyEntry.id" aria-expanded="false">
                                                        <div class="list-toggle done uppercase">
                                                            <div class="list-toggle-title bold">
                                                                {{companyEntry.company}}
                                                            </div>
                                                            <div class="badge badge-default pull-right bold">
                                                                {{companyEntry.items.length}}
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div class="task-list panel-collapse collapse in"
                                                         :id="'task-'+companyEntry.id">
                                                        <ul>
                                                            <template
                                                                    v-for="(item,index) in companyEntry.items">

                                                                <li class="task-list-item done">
                                                                    <div class="task-icon">
                                                                        <a href="javascript:;">
                                                                            <i class="fa fa-paperclip"></i>
                                                                        </a>
                                                                    </div>
                                                                    <div class="task-status">
                                                                        <a class="done" href="javascript:;">
                                                                            <i class="fa fa fa-edit"></i>
                                                                        </a>
                                                                        <a class="pending" href="javascript:;">
                                                                            <i class="fa fa-trash font-red"
                                                                               @click="deleteItem(item)"></i>
                                                                        </a>
                                                                    </div>
                                                                    <div class="task-content">
                                                                        <h4 class="uppercase bold">
                                                                            <a href="javascript:;">{{item.element.name}}</a>
                                                                        </h4>
                                                                        <ul class="receiver_tag">
                                                                            <template
                                                                                    v-for="(project,index) in item.project">
                                                                                <li class="uppercase">
                                                                                    <a href="javascript:;">{{project.name}}
                                                                                        <template
                                                                                                v-if="project.isPackage==true">
                                                                                            <span style="color: red;">[分包]</span>
                                                                                        </template>
                                                                                    </a>
                                                                                </li>

                                                                            </template>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </template>
                                                        </ul>
                                                        <div class="task-footer bg-grey">
                                                            <div class="row">
                                                                <div class="col-xs-6">
                                                                    <a class="task-trash" href="javascript:;">
                                                                        <i class="fa fa-trash"
                                                                           @click="deleteCompany(companyEntry)"></i>
                                                                    </a>
                                                                </div>
                                                                <div class="col-xs-6">
                                                                    <a class="task-add" href="javascript:;">
                                                                        <i class="fa fa-plus"
                                                                           @click="addItem(companyEntry)"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
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
                                <form action="#" class="form-horizontal" id="item_add">
                                    <div class="form-body">
                                        <div class="alert alert-danger display-hide">
                                            <button class="close" data-close="alert"></button>
                                            表单尚未填写完整。
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_element">环境要素
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control"
                                                        v-model="monitor.element" name="monitor_element"
                                                        id="monitor_element"
                                                        @change="fetchProjectByElement($event)" data-live-search="true">
                                                    <option>请选择环境要素</option>
                                                    <template v-for="item in elementList">
                                                        <option :value="item.id">{{item.name}}
                                                        </option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_project">监测项目
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control"
                                                        v-model="monitor.project" name="monitor_project"
                                                        id="monitor_project" multiple
                                                        data-actions-box="true" data-live-search="true">
                                                    <template v-for="item in projectList">
                                                        <option :value="item.id">{{item.name}}
                                                        </option>
                                                        <!--//monitor.project里面存的value的值-->
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_frequency">监测频次
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <select class="form-control" name="monitor_frequency"
                                                        v-model="monitor.frequency" id="monitor_frequency"
                                                        data-live-search="true">
                                                    <option>请选择监测频次</option>
                                                    <template v-for="item in frequencyList">
                                                        <option :value="item.id">{{item.total}}</option>
                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_point">监测点
                                                <span class="required">*</span>
                                            </label>
                                            <div class="col-md-9">
                                                <input type="number" class="form-control"
                                                       v-model="monitor.point" name="monitor_point" id="monitor_point">
                                            </div>
                                        </div>
                                        <div class="form-group" style="padding-bottom: 10px">
                                            <label class="col-md-2 control-label" for="monitor_other">备注
                                                <span class="required">  </span>
                                            </label>
                                            <div class="col-md-9">
                                                <textarea class="form-control" v-model="monitor.other"
                                                          id="monitor_other" name="monitor_other" rows="5"></textarea>
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


<script type="es6">


    export default{
        data(){
            return {
                id: "",
                company_id: "",
                itemLists: [],
                contract: {},
                monitor: {
                    project: [],
                    element: "",
                    point: "",
                    frequency: "",
//                    company: "",
//                    is_package: 0,
                    other: "",
                    isHand: ""
                },
                elementList: [],
                frequencyList: [],
                projectList: []
            }
        },
        mounted(){
            var me = this;

            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要修改的合同信息！",
                    success: function () {
                        router.push("/contract/list");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/contract/contractDetails", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    me.contract = response.data;
                }, response => {
                    serverErrorInfo(response);
                });
                me.fetchItems(query.id);
                me.fetchFrequency();
                me.fetchElement();
            }


            //创建监测项目窗口可拖拽
            $("#createMonitor").draggable({
                handle: ".modal-header"
            });
            //初始化监测项目选择框
            $('#monitor_project').selectpicker({
                iconBase: 'fa',
                tickIcon: 'fa-check',
                countSelectedText: "count",
                deselectAllText: "取消选择",
                selectAllText: "选择全部",
                noneSelectedText: "请选择监测项目"

            });
        },
        methods: {
            fetchItems(id){
                var me = this;
                me.$http.get("/api/contract/getItems", {
                    params: {
                        contract_id: id
                    }
                }).then(response => {
                    var data = response.data;
                    me.itemLists = data;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            deleteCompany(company){
                var me = this;
                confirm({
                    content: "是否删除公司【" + company.company + "】所有监测项信息？",
                    success(){
                        me.$http.get("/api/company/deleteCompany", {
                            params: {
                                id: company.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("监测公司删除成功！");
                                    me.fetchItems(me.id);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            deleteItem(item){
                var me = this;
                confirm({
                    content: "是否删除关于【" + item.element.name + "】的监测项信息？",
                    success(){
                        console.log(item);
                        me.$http.get("/api/company/deleteItem", {
                            params: {
                                id: item.id
                            }
                        }).then(response => {
                            var data = response.data;
                            codeState(data.code, {
                                200(){
                                    alert("监测项删除成功！");
                                    me.fetchItems(me.id);
                                }
                            })
                        }, response => {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            addMonitor(){
                //新增一项监测内容
                var me = this;
                if (jQuery("#item_add").valid()) {
                    var obj = me.monitor;
                    obj.id = me.company_id;
                    me.$http.get("/api/company/addItem", {
                        params: obj
                    }).then(function (response) {
                            var data = response.data;
                            alert("监测项目创建成功！");
                            me.fetchItems(me.id);
                        }
                        , function (response) {
                            serverErrorInfo(response);
                        });
                }
            },
            fetchFrequency(){
                var me = this;
                me.$http.get("/api/frequency/total").then(function (response) {
                        var data = response.data;
                        me.frequencyList = data.results;
                        me.$nextTick(function () {
                            $('#monitor_frequency').selectpicker({
                                iconBase: 'fa',
                                tickIcon: 'fa-check',
                                noneSelectedText: "请选择监测频率"
                            });
                        });
                    }
                    , function (response) {
                        serverErrorInfo(response);
                    });
            },
            fetchElement(){
                var me = this;
                me.$http.get("/api/element/total").then(function (response) {
                    var me = this;
                    me.elementList = response.data.results;
                    me.$nextTick(function () {
                        $('#monitor_element').selectpicker({
                            iconBase: 'fa',
                            tickIcon: 'fa-check',
                            noneSelectedText: "请选择环境要素"
                        });
                    })
                }, function (response) {
                    serverErrorInfo(response);
                });
            },
            fetchProjectByElement(e){
                var me = this;
                var value = e.target.value;
                me.$http.get("/api/project/findByElement", {
                    params: {
                        element_id: value
                    }
                }).then(function (response) {
                        var data = response.data;
                        me.projectList = data.results;
                        me.$nextTick(function () {
                            //销毁监测项目选择框
                            $('#monitor_project').selectpicker('destroy');
                            //初始化监测项目选择框
                            $('#monitor_project').selectpicker({
                                iconBase: 'fa',//图标库
                                tickIcon: 'fa-check',
                                countSelectedText: "count",
                                deselectAllText: "取消选择",
                                selectAllText: "选择全部",
                                noneSelectedText: "请选择监测项目"
                            });
                        })
                    }
                    , function (response) {
                        serverErrorInfo(response);
                    }
                )
            },
            addItem(item){
                var me = this;
                me.company_id = item.id;
                jQuery("#createMonitor").modal("show");
            }
        }
    }
</script>
