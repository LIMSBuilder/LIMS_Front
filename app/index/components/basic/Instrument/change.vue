<template>
    <div>
        <h1 class="page-title"> 仪器设备
            <small>／Instrument</small>
        </h1>
        <div class="portlet light portlet-fit portlet-form">
            <div class="portlet-body">
                <!--BEGIN FROM -->
                <form action="#" class="form-horizontal" id="">
                    <div class="form-body">
                        <h3 class="form-section">新建设备</h3>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="GIdentify">固定资产编号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="GIdentify" placeholder=""
                                       name="GIdentify" v-model="equipment.GIdentify" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入固定资产编号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="name">仪器设备名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="name" placeholder=""
                                       name="name" v-model="equipment.name" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入仪器设备名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="type">设备型号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="type" placeholder=""
                                       name="type" v-model="equipment.type" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入设备型号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="Fidentify">设备出厂编号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="Fidentify" placeholder=""
                                       name="Fidentify" v-model="equipment.Fidentify" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入设备出厂编号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="factory">生产厂家
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="factory" placeholder=""
                                       name="factory" v-model="equipment.factory" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入生产厂家，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="price">价 格
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="price" placeholder=""
                                       name="price" v-model="equipment.price" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入价格，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="method">溯源方式
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="method" placeholder=""
                                       name="method" v-model="equipment.method" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入溯源方式，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="place">放置地点
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="place" placeholder=""
                                       name="place" v-model="equipment.place" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入放置地点，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="certificate">证 书 号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="certificate" placeholder=""
                                       name="certificate" v-model="equipment.certificate" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入证书号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="people">保管人
                                <span class="required">*</span>
                            </label>
                            {{equipment.people}}
                            <div class="col-md-7">
                                <select class="form-control" data-live-search="true" id="people" name="people"
                                        v-model="equipment.people">
                                    <option></option>
                                    <template v-for="item in userList">
                                        <optgroup :label="item.name">
                                            <template v-for="user in item.user.results">
                                                <option :value="user.id">{{user.name}}</option>
                                            </template>
                                        </optgroup>
                                    </template>
                                </select>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="finalTime">最后检定时间
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input class="form-control form-control-inline date-picker" size="16" type="text"
                                       value="" id="finalTime" v-model="equipment.finalTime"/>
                                <span class="help-block"> Select date </span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="time">有效期
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input class="form-control form-control-inline date-picker" size="16" type="text"
                                       value="" id="time" v-model="equipment.time"/>
                                <span class="help-block"> Select date </span>
                            </div>
                        </div>
                    </div>


                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn green" @click="back">返回</button>
                                <button type="reset" class="btn default" @click="create">保存</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!--END FROM-->
            </div>
        </div>
    </div>
</template>
<script type="es6">
    module.exports = {
        data: function () {
            return {
                userList: [],
                equipment: {}

            }
        },
        mounted(){
            var me = this;
            var query = me.$route.query;
            me.$http.get("/api/equip/findById", {
                params: {
                    id: query.id
                }
            }).then(function (response) {
                var data = response.data;
                me.equipment = data;
            }, function (response) {
                serverErrorInfo(response);
            });

            $('.date-picker').datepicker({
                rtl: App.isRTL(),
                orientation: "left",
                autoclose: true
            });

        },
        methods: {
            fetchUser(){
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(response => {
                    var data = response.data;
                    me.equipment = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            back(){
                router.push("/instrument/list");
            },
            create(){
                var me = this;
                me.$http.post("/api/equip/change",me.equipment).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("仪器设备修改成功！");
                            router.push("/instrument/list");
                        }
                    }, response => {
                        serverErrorInfo(response);
                    })
                })
            }
        }
    }

</script>
