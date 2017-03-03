<template>
    <div class="page-content">
        <!-- BEGIN PAGE HEADER-->
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <span>Home</span>
                </li>
            </ul>
        </div>
        <!-- END PAGE BAR -->
        <!-- BEGIN PAGE TITLE-->
        <h1 class="page-title"> 仪表盘
            <small> / DashBoard</small>
        </h1>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN PROFILE SIDEBAR -->
                <div class="profile-sidebar">
                    <!-- PORTLET MAIN -->
                    <div class="portlet light profile-sidebar-portlet ">
                        <!-- SIDEBAR USERPIC -->
                        <div class="profile-userpic">
                            <img :src="user.portrait?user.portrait:'../../../global/img/profile_user.jpg'"
                                 class="img-responsive" alt="" style="width: 150px;height: 150px;"></div>
                        <!-- END SIDEBAR USERPIC -->
                        <!-- SIDEBAR USER TITLE -->
                        <div class="profile-usertitle">
                            <div class="profile-usertitle-name"> {{user.name}}</div>
                            <div class="profile-usertitle-job"> {{user.role.name}}</div>
                        </div>
                        <!-- END SIDEBAR USER TITLE -->
                        <!-- SIDEBAR BUTTONS -->
                        <div class="profile-userbuttons">
                            <button type="button" class="btn btn-circle green btn-sm">个人设置</button>
                            <button type="button" class="btn btn-circle red btn-sm">退出登录</button>
                        </div>
                        <!-- END SIDEBAR BUTTONS -->
                        <!-- SIDEBAR MENU -->
                        <div class="profile-usermenu">
                            <ul class="nav">
                                <router-link :to="{ path: '/overview' }" tag="li" active-class="active">
                                    <a href="javascript:;">
                                        <i class="icon-home"></i> 概述 </a>
                                </router-link>
                                <router-link :to="{ path: '/setting' }" tag="li" active-class="active">
                                    <a href="javascript:;">
                                        <i class="icon-settings"></i> 账号设置 </a>
                                </router-link>
                                <router-link :to="{ path: '/help' }" tag="li" active-class="active">
                                    <a href="javascript:;">
                                        <i class="icon-info"></i> 帮助中心 </a>
                                </router-link>
                            </ul>
                        </div>
                        <!-- END MENU -->
                    </div>
                    <!-- END PORTLET MAIN -->
                    <!-- PORTLET MAIN -->
                    <div class="portlet light ">
                        <!-- STAT -->
                        <div class="row list-separated profile-stat">
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <div class="uppercase profile-stat-title"> 37</div>
                                <div class="uppercase profile-stat-text"> 相关项目</div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <div class="uppercase profile-stat-title"> 51</div>
                                <div class="uppercase profile-stat-text"> 任务流程</div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <div class="uppercase profile-stat-title"> 61</div>
                                <div class="uppercase profile-stat-text"> 线上文件</div>
                            </div>
                        </div>
                        <!-- END STAT -->
                        <div>
                            <h4 class="profile-desc-title">关于 {{user.name}}</h4>
                            <span class="profile-desc-text">{{user.desp}}</span>
                            <div class="margin-top-20 profile-desc-link">
                                <i class="fa fa-envelope-o"></i>
                                <a :href="'mailto:'+user.mail">{{user.mail}}</a>
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                                <i class="fa fa-phone"></i>
                                <a :href="'tel:'+user.id">{{user.tel}}</a>
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                                <i class="fa fa-location-arrow"></i>
                                <span>{{user.address}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- END PORTLET MAIN -->
                </div>
                <!-- END BEGIN PROFILE SIDEBAR -->
                <!-- BEGIN PROFILE CONTENT -->
                <router-view></router-view>
                <!-- END PROFILE CONTENT -->
            </div>
        </div>
    </div>
</template>
<style>
    /* Cubic Bezier Transition */
    /***
    New Profile Page
    ***/
    .profile-sidebar {
        float: left;
        width: 300px;
        margin-right: 20px;
    }

    .profile-content {
        overflow: hidden;
    }

    /* PROFILE SIDEBAR */
    .profile-sidebar-portlet {
        padding: 30px 0 0 0 !important;
    }

    .profile-userpic img {
        float: none;
        margin: 0 auto;
        width: 50%;
        height: 50%;
        -webkit-border-radius: 50% !important;
        -moz-border-radius: 50% !important;
        border-radius: 50% !important;
    }

    .profile-usertitle {
        text-align: center;
        margin-top: 20px;
    }

    .profile-usertitle-name {
        color: #5a7391;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 7px;
    }

    .profile-usertitle-job {
        text-transform: uppercase;
        color: #5b9bd1;
        font-size: 13px;
        font-weight: 800;
        margin-bottom: 7px;
    }

    .profile-userbuttons {
        text-align: center;
        margin-top: 10px;
    }

    .profile-userbuttons .btn {
        margin-right: 5px;
    }

    .profile-userbuttons .btn:last-child {
        margin-right: 0;
    }

    .profile-userbuttons button {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        padding: 6px 15px;
    }

    .profile-usermenu {
        margin-top: 30px;
        padding-bottom: 20px;
    }

    .profile-usermenu ul li {
        border-bottom: 1px solid #f0f4f7;
    }

    .profile-usermenu ul li:last-child {
        border-bottom: none;
    }

    .profile-usermenu ul li a {
        color: #93a3b5;
        font-size: 16px;
        font-weight: 400;
    }

    .profile-usermenu ul li a i {
        margin-right: 8px;
        font-size: 16px;
    }

    .profile-usermenu ul li a:hover {
        background-color: #fafcfd;
        color: #5b9bd1;
    }

    .profile-usermenu ul li.active a {
        color: #5b9bd1;
        background-color: #f6f9fb;
        border-left: 2px solid #5b9bd1;
        margin-left: -2px;
    }

    .profile-stat {
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f4f7;
    }

    .profile-stat-title {
        color: #7f90a4;
        font-size: 25px;
        text-align: center;
    }

    .profile-stat-text {
        color: #5b9bd1;
        font-size: 11px;
        font-weight: 800;
        text-align: center;
    }

    .profile-desc-title {
        color: #7f90a4;
        font-size: 17px;
        font-weight: 600;
    }

    .profile-desc-text {
        color: #7e8c9e;
        font-size: 14px;
    }

    .profile-desc-link i {
        width: 22px;
        font-size: 19px;
        color: #abb6c4;
        margin-right: 5px;
    }

    .profile-desc-link a {
        font-size: 14px;
        font-weight: 600;
        color: #5b9bd1;
    }

    /* END PROFILE SIDEBAR */
    /* RESPONSIVE MODE */
    @media (max-width: 991px) {
        /* 991px */
        /* 991px */
        .profile-sidebar {
            float: none;
            width: 100% !important;
            margin: 0;
        }

        .profile-sidebar > .portlet {
            margin-bottom: 20px;
        }

        .profile-content {
            overflow: visible;
        }
    }


</style>
<script>
    import 'mod/sparkline'
    module.exports = {
        data: function () {
            return {
                user: {
                    role: {}
                }
            }
        },
        mounted(){
            var me = this;
            me.fetchUser();
        },
        methods: {
            fetchUser(){
                var me = this;
                me.$http.get("/api/login/getLogin").then(response => {
                    var data = response.data;
                    if (data.name) {
                        me.user = data;
                    }
                }, response => {
                    serverErrorInfo();
                })
            }
        }
    }
</script>