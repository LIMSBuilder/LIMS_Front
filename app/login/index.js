//============导入JS文件=============
import Vue from 'vue'
import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import 'mod/jquery'
import 'mod/bootstrap'
import 'mod/cookie'
import 'mod/slimscorll'
import 'mod/switch'
import 'mod/blockui'
import 'mod/validate'
import 'mod/valudate_additional'
import 'mod/select2'
import 'mod/backstretch'
import 'mod/iziToast'
import 'mod/theme'
import 'mod／utils'


import 'style/font_sans'
import 'style/font_awesome'
import 'style/line_icon'
import 'style/bootstrap'
import 'style/switch'
import 'style/select2'
import 'style/select2_bootstrap'
import 'style/component'
import 'style/plugins'
import 'style/iziToast'
import 'style/login'

import path from 'path'


import bg1 from 'globalPath/img/bg/1.jpg'
import bg2 from 'globalPath/img/bg/2.jpg'
import bg3 from 'globalPath/img/bg/3.jpg'
import bg4 from 'globalPath/img/bg/4.jpg'

import logo from 'globalPath/img/boncontact.png'

var Login = function () {


    var handleLogin = function () {
        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "用户名不能为空"
                },
                password: {
                    required: "登录密码不能为空"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                $('.alert-danger', $('.login-form')).show();
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
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.login-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit();
                }
                return false;
            }
        });
    }

    var handleForgetPassword = function () {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                username: {
                    required: true
                },
                card: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 5,
                    maxlength: 15
                },
                rpassword: {
                    equalTo: "#new_password"
                }
            },

            messages: {
                username: {
                    required: "用户名不能为空"
                },
                card: {
                    required: "证件号不能为空"
                },
                password: {
                    required: "密码不能为空",
                    maxlength: "用户名长度必须位于5到15位之间",
                    minlength: "用户名长度必须位于5到15位之间"
                },
                rpassword: {
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
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.forget-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleRegister = function () {

        function format(state) {
            if (!state.id) {
                return state.text;
            }
            var $state = $(
                '<span><img src="../assets/global/img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
            );

            return $state;
        }

        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                name: {
                    required: true
                },
                cardId: {
                    required: true
                },
                nick: {
                    required: true,
                    minlength: 5,
                    maxlength: 15
                },
                password: {
                    required: true,
                    minlength: 5,
                    maxlength: 15
                },
                rpassword: {
                    equalTo: "#register_password"
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                name: {
                    required: "真实姓名不能为空"
                },
                cardId: {
                    required: "证件号不能为空"
                },
                nick: {
                    required: "用户名不能为空",
                    maxlength: "用户名长度必须位于5到15位之间",
                    minlength: "用户名长度必须位于5到15位之间"
                },
                password: {
                    required: "密码不能为空",
                    maxlength: "用户名长度必须位于5到15位之间",
                    minlength: "用户名长度必须位于5到15位之间"
                },
                rpassword: {
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

        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }

    return {
        //main function to initiate the module
        init: function () {

            handleLogin();
            handleForgetPassword();
            handleRegister();

            // init background slide images
            $.backstretch([
                    bg1, bg2, bg3, bg4
                ], {
                    fade: 1000,
                    duration: 8000
                }
            );
        }
    };

}();

jQuery(document).ready(function () {
    Login.init();
    //登录验证
    jQuery("#logo").attr('src', logo);
    jQuery("#login_btn").off("click").on("click", function () {
        var form = jQuery("#login").serialize();
        if ($('.login-form').valid()) {
            $.ajax({
                type: "POST",  //提交方式
                url: "/api/login/check",//路径
                data: form,//数据，这里使用的是Json格式进行传输
                success: function (result) {//返回数据根据结果进行相应的处理
                    var data = result.code;
                    codeState(data, {
                        200: function () {
                            alert("登陆成功");
                            window.location.href = "/";
                        },
                        502: function () {
                            error("用户名或密码错误！");
                        },
                        504: function () {
                            error("用户名不存在！");
                        }
                    })
                }
            });
        }
    });
    //重置密码
    jQuery("#reset_password").off("click").on("click", function () {
        var form = jQuery("#forget").serialize();
        if ($('.forget-form').valid()) {
            $.ajax({
                type: "POST",  //提交方式
                url: "/api/login/forget",//路径
                data: form,//数据，这里使用的是Json格式进行传输
                success: function (result) {//返回数据根据结果进行相应的处理
                    var data = result.code;
                    codeState(data, {
                        200: function () {
                            alert("密码重置成功，请使用新密码登录！");
                            jQuery("#forget")[0].reset();
                        },
                        502: function () {
                            error("当前证件号错误，请重新输入！");
                        },
                        504: function () {
                            error("用户名不存在！");
                        }
                    })
                }
            });
        }
    });

    jQuery("#register-submit-btn").off("click").on("click", function () {
        var form = jQuery("#register-form").serialize();
        if ($('.register-form').valid()) {
            $.ajax({
                type: "POST",  //提交方式
                url: "/api/login/register",//路径
                data: form,//数据，这里使用的是Json格式进行传输
                success: function (result) {//返回数据根据结果进行相应的处理
                    var data = result.code;
                    codeState(data, {
                        200: function () {
                            alert("用户创建成功！");
                            jQuery("#register-form")[0].reset();
                        }
                    })
                }
            });
        }
    });
});