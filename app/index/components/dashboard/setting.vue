<template>
    <div class="profile-content">
        <div class="row">
            <div class="col-md-12">
                <div class="portlet light ">
                    <div class="portlet-title tabbable-line">
                        <div class="caption caption-md">
                            <i class="icon-globe theme-font hide"></i>
                            <span class="caption-subject font-blue-madison bold uppercase">账号设置</span>
                        </div>
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#tab_1_1" data-toggle="tab">个人信息</a>
                            </li>
                            <li>
                                <a href="#tab_1_2" data-toggle="tab">头像管理</a>
                            </li>
                            <li>
                                <a href="#tab_1_3" data-toggle="tab">修改密码</a>
                            </li>
                            <li>
                                <a href="#tab_1_4" data-toggle="tab">个性化设置</a>
                            </li>
                        </ul>
                    </div>
                    <div class="portlet-body">
                        <div class="tab-content">
                            <!-- PERSONAL INFO TAB -->
                            <div class="tab-pane active" id="tab_1_1">
                                <form role="form" action="#">
                                    <div class="form-group">
                                        <label class="control-label">真实姓名</label>
                                        <input type="text" placeholder="请输入真实姓名" v-model="changeInfo.name" name="name"
                                               class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">手机号码</label>
                                        <input type="text" placeholder="请输入联系方式" v-model="changeInfo.tel" name="tel"
                                               class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">电子邮箱</label>
                                        <input type="text" placeholder="请输入电子邮箱" v-model="changeInfo.mail" name="mail"
                                               class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">家庭住址</label>
                                        <input type="text" placeholder="请输入家庭住址" v-model="changeInfo.address"
                                               name="address"
                                               class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">关于本人</label>
                                        <textarea class="form-control" v-model="changeInfo.desp" rows="3" name="desp"
                                                  placeholder="描述一下自己吧"></textarea>
                                    </div>
                                    <div class="margiv-top-10 text-right">
                                        <a href="javascript:;" class="btn green" @click="changeInfoBtn"> 保 存 </a>
                                    </div>
                                </form>
                            </div>
                            <!-- END PERSONAL INFO TAB -->
                            <!-- CHANGE AVATAR TAB -->
                            <div class="tab-pane" id="tab_1_2">
                                <p> 您设置的头像将会出现在本系统公共访问区域，其他用户可以通过访问您的个人主页、通讯录等页面查看您头像。 </p>
                                <form action="" role="form" enctype="multipart/form-data" id="portrait_form">
                                    <div class="form-group">
                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                            <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                                <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image"
                                                     alt=""/></div>
                                            <div class="fileinput-preview fileinput-exists thumbnail"
                                                 style="max-width: 200px; max-height: 150px;"></div>
                                            <div>
                                                                            <span class="btn default btn-file">
                                                                                <span class="fileinput-new"> 选择图片 </span>
                                                                                <span class="fileinput-exists"> 变更 </span>
                                                                                <input type="file" name="file"> </span>
                                                <a href="javascript:;" class="btn default fileinput-exists"
                                                   data-dismiss="fileinput"> 删除 </a>
                                            </div>
                                        </div>
                                        <div class="clearfix margin-top-10">
                                            <span class="label label-danger">警告! </span>
                                            <span> 图片上传功能仅支持最新版Firefox, Chrome, Opera, Safari and Internet Explorer 10及以上。 </span>
                                        </div>
                                    </div>
                                    <div class="margin-top-10 text-right">
                                        <a href="javascript:;" class="btn green" @click="savePortait"> 保 存 </a>
                                    </div>
                                </form>
                            </div>
                            <!-- END CHANGE AVATAR TAB -->
                            <!-- CHANGE PASSWORD TAB -->
                            <div class="tab-pane" id="tab_1_3">
                                <form action="#" id="changePwd">
                                    <div class="form-group">
                                        <label class="control-label">当前密码</label>
                                        <input type="password" name="password" v-model="changePWD.password"
                                               class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">新密码</label>
                                        <input type="password" name="new_password" v-model="changePWD.new_password"
                                               class="form-control" id="new_password"/></div>
                                    <div class="form-group">
                                        <label class="control-label">重复密码</label>
                                        <input type="password" name="repeat_password" class="form-control"/></div>
                                    <div class="margin-top-10 text-right">
                                        <a href="javascript:;" class="btn green" @click="changePwdFun"> 保 存 </a>
                                    </div>
                                </form>
                            </div>
                            <!-- END CHANGE PASSWORD TAB -->
                            <!-- PRIVACY SETTINGS TAB -->
                            <div class="tab-pane" id="tab_1_4">
                                <form action="#">
                                    <table class="table table-light table-hover" id="setting_table">
                                        <tr>
                                            <td> 消息实时推送功能
                                            </td>
                                            <td>
                                                <div class="text-right">
                                                    <div class="mt-radio-inline">
                                                        <label class="mt-radio">
                                                            <input type="radio" name="isNotice" value="1"
                                                                   v-model="settingInfo.isNotice"> 开启
                                                            <span></span>
                                                        </label>
                                                        <label class="mt-radio">
                                                            <input type="radio" name="isNotice" value="0"
                                                                   v-model="settingInfo.isNotice"> 关闭
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 登录显示"欢迎"界面
                                            </td>
                                            <td>
                                                <div class="text-right">
                                                    <div class="mt-radio-inline">
                                                        <label class="mt-radio">
                                                            <input type="radio" name="showWelcome" value="1"
                                                                   v-model="settingInfo.showWelcome"> 开启
                                                            <span></span>
                                                        </label>
                                                        <label class="mt-radio">
                                                            <input type="radio" name="showWelcome" value="0"
                                                                   v-model="settingInfo.showWelcome"> 关闭
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 每页显示记录条数
                                            </td>
                                            <td>
                                                <div class="text-right pull-right">
                                                    <input id="rowCount" type="text" v-model="settingInfo.rowCount"
                                                           style="width: 70px;"
                                                           name="demo_vertical">
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <!--end profile-settings-->
                                    <div class="margin-top-10 text-right">
                                        <a href="javascript:;" class="btn green" @click="changeSettingInfo"> 保 存 </a>
                                    </div>
                                </form>
                            </div>
                            <!-- END PRIVACY SETTINGS TAB -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .table .btn {
        margin-right: 0;
    }

</style>
<script>
    import  'mod/touchspin'
    import  'style/touchspin'
    module.exports = {
        data: function () {
            return {
                changePWD: {},
                changeInfo: {},
                settingInfo: {}
            }
        },
        mounted(){
            var me = this;
            me._form_vaild();
            me.fetchData();

        },
        methods: {
            _form_vaild(){
                $('#changePwd').validate({
                    errorElement: 'span', //default input error message container
                    errorClass: 'help-block', // default input error message class
                    focusInvalid: false, // do not focus the last invalid input
                    ignore: "",
                    rules: {
                        password: {
                            required: true,
                            minlength: 5,
                            maxlength: 15
                        },
                        new_password: {
                            required: true,
                            minlength: 5,
                            maxlength: 15
                        },
                        repeat_password: {
                            equalTo: "#new_password"
                        }
                    },

                    messages: { // custom messages for radio buttons and checkboxes
                        password: {
                            required: "密码不能为空",
                            maxlength: "用户名长度必须位于5到15位之间",
                            minlength: "用户名长度必须位于5到15位之间"
                        },
                        new_password: {
                            required: "密码不能为空",
                            maxlength: "用户名长度必须位于5到15位之间",
                            minlength: "用户名长度必须位于5到15位之间"
                        },
                        repeat_password: {
                            equalTo: "两次密码输入不一致"
                        }
                    },

                    invalidHandler: function (event, validator) { //display error alert on form submit

                    },

                    highlight: function (element) { // hightlight error inputs
                        $(element)
                            .closest('.form-group').addClass('has-error'); // set error class to the control group
                    },

                    success: function (label) {
                        label.closest('.form-group').removeClass('has-error');
                        label.remove();
                    },

                    errorPlacement: function (error, element) {
                        if (element.attr("name") == "tnc") { // insert checkbox errors after the container
                            error.insertAfter($('#register_tnc_error'));
                        } else if (element.closest('.input-icon').size() === 1) {
                            error.insertAfter(element.closest('.input-icon'));
                        } else {
                            error.insertAfter(element);
                        }
                    },

                    submitHandler: function (form) {
                        form.submit();
                    }
                });
            },
            changePwdFun(){
                var me = this;
                if ($('#changePwd').valid()) {
                    me.$http.post("/api/user/changePwd", me.changePWD).then(response => {
                        var data = response.data;
                        codeState(data.code, {
                            200: function () {
                                alert("密码修改成功，请使用新密码登录！");
                            },
                            503: "当前密码不正确，无法修改密码！"
                        })
                    }, response => {
                        serverErrorInfo();
                    })
                }
            },
            savePortait(){
                var me = this;
                var formData = new FormData($("#portrait_form")[0]);
                me.$http.post("/api/file/upload", formData).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            me.$http.post("/api/user/changePortait", {
                                path: data.path
                            }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200: "头像上传成功！"
                                })
                            }, response => {
                                serverErrorInfo();
                            });
                        }
                    })
                }, response => {
                    serverErrorInfo();
                });
            },
            changeInfoBtn(){
                var me = this;
                me.$http.post("/api/user/changeInfo", me.changeInfo).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("个人信息修改完成！");
                        }
                    })
                }, response => {
                    serverErrorInfo();
                });

            },
            changeSettingInfo(){
                var me = this;
                me.$http.post("/api/user/changeSetting", me.settingInfo).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            alert("个性化设置修改完成！");
                        }
                    })
                }, response => {
                    serverErrorInfo();
                });
            },
            fetchData(){
                var me = this;
                me.$http.get("/api/login/getLogin").then(response => {
                    var data = response.data;
                    me.changeInfo = {
                        name: data.name,
                        mail: data.mail,
                        address: data.address,
                        desp: data.desp,
                        tel: data.tel
                    };
                    me.settingInfo = {
                        showWelcome: data.showWelcome,
                        rowCount: data.rowCount,
                        isNotice: data.isNotice
                    }
                    me.$nextTick(function () {
                        $("#rowCount").TouchSpin({
                            min: 1,
                            max: 30
                        });

                        jQuery("#rowCount").on("change", function (e) {
//                            console.log(e.target.value);
                            me.settingInfo.rowCount = e.target.value;
                        });
                    })
                }, response => {
                    serverErrorInfo();
                })
            }
        }
    }
</script>