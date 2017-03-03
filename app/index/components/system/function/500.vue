<template>
    <div class="page-content">
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>系统消息</span>
                </li>
            </ul>
        </div>
        <h1 class="page-title"> 系统消息
            <small> / 500</small>
        </h1>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div class="row">
            <div class="col-md-12 page-500">
                <div class=" number font-red"> 500</div>
                <div class=" details">
                    <h3>Oops! 服务器发生了故障</h3>
                    <p> 我们正在努力修复，请稍等片刻。
                        <br/></p>
                    <p>
                        <a href="index.html" class="btn red btn-outline"> 返回首页 </a>
                        <br></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        mounted(){
            handleSidebarAndContentHeight()
        }
    }

</script>