<template>
    <!-- BEGIN CONTENT BODY -->
    <div>
        <h1 class="page-title"> 监测频次维护
            <small>／Frequency</small>
        </h1>
        <!-- BEGIN PAGE HEADER-->
        <div class="portlet light portlet-fit portlet-form ">
            <div class="portlet-body">
                <!-- BEGIN FORM-->
                <form action="#" class="form-horizontal" id="frequency_add">
                    <div class="form-body">
                        <h3 class="form-section">监测频次</h3>
                        <div class="alert alert-success">
                            <strong>小技巧：</strong> 开启循环提示，到达固定循环节点时会收到相应的消息推送提醒。
                        </div>
                        <div class="alert alert-danger display-hide">
                            <button class="close" data-close="alert"></button>
                            表单尚未填写完整。
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="count">监测频次名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <input type="number" class="form-control" min="0" placeholder="周期监测次数"
                                               id="count"
                                               name="count"
                                               v-model="frequency.count" required>
                                        <div class="form-control-focus"></div>
                                        <span class="help-block">每周期内进行监测的次数。</span>
                                        <span class="input-group-addon">次</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <span class="input-group-addon">每</span>
                                        <input type="number" class="form-control" min="0" placeholder="周期单位长度"
                                               id="times"
                                               name="times"
                                               v-model="frequency.times" required>
                                        <div class="form-control-focus"></div>
                                        <span class="help-block">每周期包含的周期单位个数。</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control" id="unit" name="unit" v-model="frequency.unit"
                                            required @change="unitChange($event)">
                                        <option value="">选择周期单位</option>
                                        <option value="one">仅一次</option>
                                        <option value="minute">分钟</option>
                                        <option value="hour">小时</option>
                                        <option value="day">天数</option>
                                        <option value="week">星期</option>
                                        <option value="month">月份</option>
                                        <option value="quarter">季度</option>
                                        <option value="year">年度</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="open">循环提示
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <div class="md-radio-inline">
                                    <div class="md-radio">
                                        <input type="radio" id="open" name="notice" v-model="frequency.notice"
                                               value="1" class="md-radiobtn">
                                        <label for="open">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 开 启 </label>
                                    </div>
                                    <div class="md-radio">
                                        <input type="radio" id="close" name="notice" v-model="frequency.notice"
                                               value="0" class="md-radiobtn">
                                        <label for="close">
                                            <span class="inc"></span>
                                            <span class="check"></span>
                                            <span class="box"></span> 关 闭 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn blue" @click="back">返回列表</button>
                                <button type="button" class="btn green" @click="create">保 存</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!-- END FORM-->
            </div>
        </div>
    </div>
    <!-- END CONTENT BODY -->
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {
                frequency: {
                    unit: "",
                    notice: 1
                }
            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            if (!query.id) {
                confirm({
                    content: "请先选择需要维护的监测频次！",
                    success: function () {
                        router.push("/frequency/list");
                        closeConfirm();
                    }
                });
            } else {
                me.id = query.id;
                me.$http.get("/api/frequency/findById", {
                    params: {
                        id: query.id
                    }
                }).then(response => {
                    var data = response.data;
                    me.frequency = data;
                }, response => {
                    serverErrorInfo(response);
                })
            }
            BlogUtils.formValid(jQuery("#frequency_add"));
        },
        methods: {
            create(){
                var me = this;
                if (jQuery("#frequency_add").valid()) {
                    me.$http.post("/api/frequency/change", me.frequency).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: "监测频次修改成功！"
                        });
                    }, response => {
                        serverErrorInfo(response);
                    });
                }
            },
            back(){
                router.push("/frequency/list");
            },
            unitChange(e){
                var me = this;
                var value = e.target.value;
                if (value == "one") {
                    me.frequency.times = "0";
                    jQuery("#times").prop("disabled", true);
                } else {
                    me.frequency.times = me.frequency.times == 0 ? 1 : me.frequency.times;
                    jQuery("#times").prop("disabled", false);
                }
            }
        }
    }
</script>