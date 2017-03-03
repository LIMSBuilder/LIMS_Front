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
                                        <label class="control-label">First Name</label>
                                        <input type="text" placeholder="John" class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">Last Name</label>
                                        <input type="text" placeholder="Doe" class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">Mobile Number</label>
                                        <input type="text" placeholder="+1 646 580 DEMO (6284)" class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Interests</label>
                                        <input type="text" placeholder="Design, Web etc." class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">Occupation</label>
                                        <input type="text" placeholder="Web Developer" class="form-control"/></div>
                                    <div class="form-group">
                                        <label class="control-label">About</label>
                                        <textarea class="form-control" rows="3"
                                                  placeholder="We are KeenThemes!!!"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Website Url</label>
                                        <input type="text" placeholder="http://www.mywebsite.com" class="form-control"/>
                                    </div>
                                    <div class="margiv-top-10">
                                        <a href="javascript:;" class="btn green"> Save Changes </a>
                                        <a href="javascript:;" class="btn default"> Cancel </a>
                                    </div>
                                </form>
                            </div>
                            <!-- END PERSONAL INFO TAB -->
                            <!-- CHANGE AVATAR TAB -->
                            <div class="tab-pane" id="tab_1_2">
                                <p> 您设置的头像将会出现在本系统公共访问区域，其他用户可以通过访问您的个人主页、通讯录等页面查看您头像。 </p>
                                <form action="#" role="form">
                                    <div class="form-group">
                                        <div class="fileinput fileinput-new" data-provides="fileinput">
                                            <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                                <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image"
                                                     alt=""/></div>
                                            <div class="fileinput-preview fileinput-exists thumbnail"
                                                 style="max-width: 200px; max-height: 150px;"></div>
                                            <div>
                                                                            <span class="btn default btn-file">
                                                                                <span class="fileinput-new"> Select image </span>
                                                                                <span class="fileinput-exists"> Change </span>
                                                                                <input type="file" name="..."> </span>
                                                <a href="javascript:;" class="btn default fileinput-exists"
                                                   data-dismiss="fileinput"> Remove </a>
                                            </div>
                                        </div>
                                        <div class="clearfix margin-top-10">
                                            <span class="label label-danger">警告! </span>
                                            <span> 图片上传功能仅支持最新版Firefox, Chrome, Opera, Safari and Internet Explorer 10及以上。 </span>
                                        </div>
                                    </div>
                                    <div class="margin-top-10">
                                        <a href="javascript:;" class="btn green"> 保 存 </a>
                                        <a href="javascript:;" class="btn default"> 取 消 </a>
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
                                    <div class="margin-top-10">
                                        <a href="javascript:;" class="btn green" @click="changePwdFun"> 变 更 </a>
                                        <a href="javascript:;" class="btn default"> 取 消 </a>
                                    </div>
                                </form>
                            </div>
                            <!-- END CHANGE PASSWORD TAB -->
                            <!-- PRIVACY SETTINGS TAB -->
                            <div class="tab-pane" id="tab_1_4">
                                <form action="#">
                                    <table class="table table-light table-hover">
                                        <tr>
                                            <td> Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                accusamus..
                                            </td>
                                            <td>
                                                <div class="mt-radio-inline">
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios1" value="option1"/> Yes
                                                        <span></span>
                                                    </label>
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios1" value="option2"
                                                               checked/> No
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon
                                            </td>
                                            <td>
                                                <div class="mt-radio-inline">
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios11" value="option1"/> Yes
                                                        <span></span>
                                                    </label>
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios11" value="option2"
                                                               checked/> No
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon
                                            </td>
                                            <td>
                                                <div class="mt-radio-inline">
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios21" value="option1"/> Yes
                                                        <span></span>
                                                    </label>
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios21" value="option2"
                                                               checked/> No
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon
                                            </td>
                                            <td>
                                                <div class="mt-radio-inline">
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios31" value="option1"/> Yes
                                                        <span></span>
                                                    </label>
                                                    <label class="mt-radio">
                                                        <input type="radio" name="optionsRadios31" value="option2"
                                                               checked/> No
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <!--end profile-settings-->
                                    <div class="margin-top-10">
                                        <a href="javascript:;" class="btn red"> Save Changes </a>
                                        <a href="javascript:;" class="btn default"> Cancel </a>
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
<script>
    module.exports = {
        data: function () {
            return {
                changePWD: {}
            }
        },
        mounted(){
            var me = this;
            me._form_vaild();
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
            }
        }
    }
</script>