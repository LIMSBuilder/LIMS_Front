<template>
    <div class="page-body">
        <div class="lock-head"> 锁 定</div>
        <div class="lock-body">
            <div class="pull-left lock-avatar-block">
                <img :src="user.portrait" class="lock-avatar" style="width: 100px;height: 100px;"></div>
            <form class="lock-form pull-left" action="" method="post" onkeydown="if(event.keyCode==13)return false;"
                  onSubmit="return false;">
                <h4>{{user.name}}</h4>
                <div class="form-group">
                    <input class="form-control placeholder-no-fix" type="password" autocomplete="off"
                           placeholder="请输入密码" name="password" v-model="password" @keyup.enter="backLogin"></div>
                <div class="form-actions">
                    <button type="button" class="btn red uppercase" @click="checkPwd">登 录
                    </button>
                </div>
            </form>
        </div>
        <div class="lock-bottom">
            <a href="javascript:;" @click="backLogin">不是 {{user.name}} 本人？</a>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                user: {},
                password: ""
            }
        },
        mounted(){
            var me = this;
            me.$http.get("/api/login/getLogin").then(response => {
                me.user = response.data;
            }, response => {
                serverErrorInfo();
            });
            localStorage.setItem("locked", "1");
        },
        methods: {
            checkPwd(){
                var me = this;
                if (me.password == "") {
                    error("请输入密码解除账号锁定状态！");
                    return;
                }
                me.$http.post("/api/login/checkPwd", {
                    password: me.password
                }).then(response => {
                    var data = response.data;
                    codeState(data.code, {
                        200: function () {
                            localStorage.removeItem("locked");
                            window.location.href = "/";
                        },
                        502: function () {
                            error("密码输入错误，无法解除锁定状态！");
                            me.password = "";
                        }
                    })
                }, response => {
                    serverErrorInfo(response);
                })
            },
            backLogin(){
                var me = this;
                me.$http.get("/api/login/exitLogin").then(response => {
                    var data = response.data;
                    localStorage.removeItem("locked");
                    window.location.href = "/login.html";

                }, response => {
                    serverErrorInfo();
                });
            }
        }
    }
</script>
