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
                    <a href="#">基础设置</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>仪器管理</span>
                </li>
            </ul>
        </div>

        <!-- END PAGE BAR -->

        <!-- END PAGE HEADER-->
        <router-view transition transition-mode="out-in"></router-view>
    </div>
</template>
<script type="es6">
    module.exports = {
        mounted(){
            handleSidebarAndContentHeight();
        }
    };
</script>