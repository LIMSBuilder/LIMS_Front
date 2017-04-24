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
                        <h3 class="form-section">设备管理</h3>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">固定资产编号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入固定资产编号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">仪器设备名称
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入仪器设备名称，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">设备型号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入设备型号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">价 格
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入价格，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">溯源方式
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入溯源方式，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">放置地点
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入放置地点，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">证 书 号
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <input type="text" class="form-control" id="" placeholder=""
                                       name="" required>
                                <div class="form-control-focus"></div>
                                <span class="help-block">请输入证书号，必需字段。</span>
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">保管人
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                <select class="form-control" data-live-search="true" name="">
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
                            <label class="col-md-3 control-label" for="">最后检定时间
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                2017年04月24日10:42:12
                            </div>
                        </div>
                        <div class="form-group form-md-line-input">
                            <label class="col-md-3 control-label" for="">有效期
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-7">
                                时间
                            </div>
                        </div>
                    </div>


                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-5 col-md-9">
                                <button type="button" class="btn green" @click="create">保 存</button>
                                <button type="reset" class="btn default">重 置</button>
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
                userList: []
            }
        },
        mounted(){
            var me = this;
            me.fetchUser();

        },
        methods: {
            fetchUser(){
                var me = this;
                me.$http.get("/api/user/listByDepartment").then(response => {
                    var data = response.data;
                    me.userList = data.results;
                }, response => {
                    serverErrorInfo(response);
                })
            },
            create(){
                alert(123);
            }
        }
    }

</script>
