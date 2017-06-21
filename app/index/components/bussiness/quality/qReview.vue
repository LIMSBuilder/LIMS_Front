<template>
    <div>
        <h1 class="page-title"> 质控列表
            <small>／Quality</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light bordered" id="contract_wizard">
                    <div class="portlet-title">
                        一审人意见
                    </div>
                    <div class="portlet-body ">

                        <div class="row">
                            <div class="col-md-3 col-sm-3">
                                <div class="todo-tasklist" id="task_list">
                                    <template v-for="item in transferList">
                                        <div @click="qviewdetail(item)" style="margin-bottom: 20px;">
                                            <div
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

                            <div class="col-md-9 col-sm-9" v-if="!companydetail">
                                <h1 class="text-center">暂无任务信息</h1>
                            </div>
                            <div class="col-md-9 col-sm-9" v-if="companydetail">
                                <form action="#" class="form-horizontal form-bordered form-row-stripped">
                                    <!-- TASK HEAD -->
                                    <div class="form" style="margin-bottom: 40px;">
                                        <div class="form-group">
                                            <div class="col-md-8 col-sm-8">
                                                <div class="todo-taskbody-user">
                                                    <div class="todo-userpic pull-left"
                                                         style="margin-right: 10px;">
                                                        <i class="socicon-btn socicon-btn-circle socicon-vimeo tooltips"></i>
                                                    </div>
                                                    <span class="todo-username pull-left">{{companydetail.client_unit}}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="todo-taskbody-date pull-right">
                                                            <span class="todo-username pull-left"
                                                                  style="font-size: 14px;">编号：{{companydetail.identify}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tabbable-line">
                                            <ul class="nav nav-tabs ">
                                                <li class="active">
                                                    <a href="#page_1" data-toggle="tab"> 一审意见 </a>
                                                </li>
                                                <li>
                                                    <a href="#page_2" data-toggle="tab"> 基本信息 </a>
                                                </li>
                                            </ul>

                                            <div class="tab-content">
                                                <div class="tab-pane active" id="page_1">
                                                    <div class="form-body ">
                                                        <div class="form-group form-md-radios">
                                                            <label class="col-lg-1"></label>
                                                            <label class="col-md-4 control-label"
                                                                   style="text-align: left">①原始记录是否填写完整</label>
                                                            <div class="md-radio-inline">
                                                                <div class="md-radio">
                                                                    <input type="radio" id="origin"
                                                                           name="origin"
                                                                           value="1" class="md-radiobtn"
                                                                           v-model="reviewFinfo.origin">
                                                                    <label for="origin">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 是 </label>
                                                                </div>
                                                                <div class="md-radio has-error">
                                                                    <input type="radio" id="origin2"
                                                                           name="origin"
                                                                           value="2" class="md-radiobtn"
                                                                           v-model="reviewFinfo.origin">
                                                                    <label for="origin2">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 否 </label>
                                                                </div>
                                                                <div class="md-radio has-success">
                                                                    <input type="radio" id="origin3"
                                                                           name="origin"
                                                                           value="3" class="md-radiobtn"
                                                                           v-model="reviewFinfo.origin">
                                                                    <label for="origin3">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 纠正 </label>
                                                                </div>
                                                                {{reviewFinfo.origin}}
                                                            </div>
                                                        </div>
                                                        <div class="form-group form-md-radios">
                                                            <label class="col-lg-1"></label>
                                                            <label class="col-md-4 control-label"
                                                                   style="text-align: left">②监测数据有效位数是否规范</label>
                                                            <div class="md-radio-inline">
                                                                <div class="md-radio">
                                                                    <input type="radio" id="monitorDate"
                                                                           name="monitorDate"
                                                                           value="1" class="md-radiobtn"
                                                                           v-model="reviewFinfo.monitorDate">
                                                                    <label for="monitorDate">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 是 </label>
                                                                </div>
                                                                <div class="md-radio has-error">
                                                                    <input type="radio" id="monitorDate1"
                                                                           name="monitorDate"
                                                                           value="2" class="md-radiobtn"
                                                                           v-model="reviewFinfo.monitorDate">
                                                                    <label for="monitorDate1">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 否 </label>
                                                                </div>
                                                                <div class="md-radio has-success">
                                                                    <input type="radio" id="monitorDate2"
                                                                           name="monitorDate"
                                                                           value="3" class="md-radiobtn"
                                                                           v-model="reviewFinfo.monitorDate">
                                                                    <label for="monitorDate2">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 纠正</label>
                                                                </div>
                                                                {{reviewFinfo.monitorDate}}
                                                            </div>
                                                        </div>
                                                        <div class="form-group form-md-radios">
                                                            <label class="col-lg-1"></label>
                                                            <label class="col-md-4 control-label"
                                                                   style="text-align: left">③原始记录修改是否符合规范</label>
                                                            <div class="md-radio-inline">
                                                                <div class="md-radio">
                                                                    <input type="radio" id="originAlter"
                                                                           name="originAlter"
                                                                           value="1" class="md-radiobtn"
                                                                           v-model="reviewFinfo.originAlter">
                                                                    <label for="originAlter">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 是 </label>
                                                                </div>
                                                                <div class="md-radio has-error">
                                                                    <input type="radio" id="originAlter2"
                                                                           name="originAlter"
                                                                           value="2" class="md-radiobtn"
                                                                           v-model="reviewFinfo.originAlter">
                                                                    <label for="originAlter2">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 否 </label>
                                                                </div>
                                                                <div class="md-radio has-success">
                                                                    <input type="radio" id="originAlter3"
                                                                           name="originAlter"
                                                                           value="3" class="md-radiobtn"
                                                                           v-model="reviewFinfo.originAlter">
                                                                    <label for="originAlter3">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 纠正 </label>
                                                                </div>
                                                                {{reviewFinfo.originAlter}}
                                                            </div>
                                                        </div>
                                                        <div class="form-group form-md-radios">
                                                            <label class="col-lg-1"></label>
                                                            <label class="col-md-4 control-label"
                                                                   style="text-align: left">④送检单结果与记录是否一致</label>
                                                            <div class="md-radio-inline">
                                                                <div class="md-radio">
                                                                    <input type="radio" id="inspect"
                                                                           name="inspect"
                                                                           value="1" class="md-radiobtn"
                                                                           v-model="reviewFinfo.inspect">
                                                                    <label for="inspect">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 是 </label>
                                                                </div>
                                                                <div class="md-radio has-error">
                                                                    <input type="radio" id="inspect2"
                                                                           name="inspect"
                                                                           value="2" class="md-radiobtn"
                                                                           v-model="reviewFinfo.inspect">
                                                                    <label for="inspect2">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 否 </label>
                                                                </div>
                                                                <div class="md-radio has-success">
                                                                    <input type="radio" id="inspect3"
                                                                           name="inspect"
                                                                           value="3" class="md-radiobtn"
                                                                           v-model="reviewFinfo.inspect">
                                                                    <label for="inspect3">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 纠正</label>
                                                                </div>
                                                                {{reviewFinfo.inspect}}
                                                            </div>
                                                        </div>
                                                        <div class="form-group form-md-radios">
                                                            <label class="col-lg-1"></label>
                                                            <label class="col-md-4 control-label"
                                                                   style="text-align: left">⑤原始记录审核是否完整</label>
                                                            <div class="md-radio-inline">
                                                                <div class="md-radio">
                                                                    <input type="radio" id="originReview"
                                                                           name="originReview"
                                                                           value="1" class="md-radiobtn"
                                                                           v-model="reviewFinfo.originReview">
                                                                    <label for="originReview">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 是 </label>
                                                                </div>
                                                                <div class="md-radio has-error">
                                                                    <input type="radio" id="originReview2"
                                                                           name="originReview"
                                                                           value="2" class="md-radiobtn"
                                                                           v-model="reviewFinfo.originReview">
                                                                    <label for="originReview2">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 否 </label>
                                                                </div>
                                                                <div class="md-radio has-success">
                                                                    <input type="radio" id="originReview3"
                                                                           name="originReview"
                                                                           value="3" class="md-radiobtn"
                                                                           v-model="reviewFinfo.originReview">
                                                                    <label for="originReview3">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 纠正 </label>
                                                                </div>
                                                                {{reviewFinfo.originReview}}
                                                            </div>
                                                        </div>
                                                        <div class="form-group form-md-radios">
                                                            <label class="col-lg-1"></label>
                                                            <label class="col-md-4 control-label"
                                                                   style="text-align: left">⑥标准曲线是否符合规范</label>
                                                            <div class="md-radio-inline">
                                                                <div class="md-radio">
                                                                    <input type="radio" id="standard"
                                                                           name="standard"
                                                                           value="1" class="md-radiobtn"
                                                                           v-model="reviewFinfo.standard">
                                                                    <label for="standard">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 是 </label>
                                                                </div>
                                                                <div class="md-radio has-error">
                                                                    <input type="radio" id="standard2"
                                                                           name="standard"
                                                                           value="0" class="md-radiobtn"
                                                                           v-model="reviewFinfo.standard">
                                                                    <label for="standard2">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 否 </label>
                                                                </div>
                                                                <div class="md-radio has-success">
                                                                    <input type="radio" id="standard3"
                                                                           name="standard"
                                                                           value="0" class="md-radiobtn"
                                                                           v-model="reviewFinfo.standard">
                                                                    <label for="standard3">
                                                                        <span class="inc"></span>
                                                                        <span class="check"></span>
                                                                        <span class="box"></span> 纠正 </label>
                                                                </div>
                                                                {{reviewFinfo.standard}}
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
                                                                          v-model="reviewFinfo.other
"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn green btn-outline"
                                                                    @click="review_confirm(1)">审核通过
                                                            </button>
                                                            <button type="button" class="btn red btn-outline"
                                                                    @click="review_confirm(2)">审核拒绝
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane " id="page_2">
                                                    hljksdhfalskfhaks
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
            <!-- END PAGE CONTENT-->

        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {
                reviewFinfo: {
                    origin: 1,
                    monitorDate: 1,
                    inspect: 1,
                    originAlter: 1,
                    originReview: 1,
                    standard: 1,
                    other: "nihaocehsi "
                },
                currentPage: 1,
                condition: "process=4",
                transferList: [],
                companydetail: "",//点击获取detail中公司的基本信息，名称和任务书编号
            }
        },
        mounted(){
            var me = this;
            me.getData();
        },
        methods: {
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
                    }
                    ,
                    (response) => {
                        serverErrorInfo(response);
                    }
                )
                ;
            },
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
                    }
                    ,
                    (response) => {
                        serverErrorInfo(response);
                    }
                )
                ;
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            review_confirm(result){
                var me = this;
                var response = me.reviewFinfo;
                response.result = result;
                console.log(response);
                debugger
//                response.id =
                confirm({
                    content: "是否审核" + (result == 2 ? "<span class='font-red'>拒绝</span>" : "<span class='font-green'>通过</span>") + "任务【" + "任务你名称" + "】？",
                    success: function () {
                        me.$http.get("", {
                            params: response
                        }).then(function (response) {
                            var data = response.data;
                            codeState(data.code, {
                                200: function () {
                                    alert("任务一审完成！");
                                }
                            })
                        }, function (response) {
                            serverErrorInfo(response);
                        })
                    }
                })
            },
            qviewdetail(item){
                var id = item.id;
                var me = this;
                alert(id);
                me.companydetail = item;
            }
        }
    }

</script>
