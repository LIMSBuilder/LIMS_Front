<template>
    <div class="page-content">
        <!-- BEGIN PAGE HEADER-->
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <a href="#">综合业务</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>任务管理</span>
                </li>
            </ul>
        </div>

        <!-- END PAGE BAR -->

        <!-- END PAGE HEADER-->
        <router-view transition transition-mode="out-in"></router-view>
    </div>
</template>