<template>
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="true" data-auto-scroll="true"
            data-auto-speed="400"
            data-slide-speed="400" style="padding-top: 20px">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
            <li class="sidebar-toggler-wrapper hide">
                <div class="sidebar-toggler">
                    <span></span>
                </div>
            </li>
            <!-- END SIDEBAR TOGGLER BUTTON -->
            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
            <li class="sidebar-search-wrapper">
                <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
                <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
                <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
                <form class="sidebar-search  sidebar-search-bordered" method="GET">
                    <a href="javascript:;" class="remove">
                        <i class="icon-close"></i>
                    </a>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="搜索功能...">
                        <span class="input-group-btn">
                                            <a href="javascript:;" class="btn submit">
                                                <i class="icon-magnifier"></i>
                                            </a>
                                        </span>
                    </div>
                </form>
                <!-- END RESPONSIVE QUICK SEARCH FORM -->
            </li>
            <li class="nav-item start active">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-home"></i>
                    <span class="title">Dashboard</span>
                </a>
            </li>
            <li class="heading">
                <h3 class="uppercase">通信</h3>
            </li>
            <li class="nav-item start">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-home"></i>
                    <span class="title">Email</span>
                </a>
            </li>
            <li class="nav-item start">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-home"></i>
                    <span class="title">公告</span>
                </a>
            </li>
            <li class="heading">
                <h3 class="uppercase">业务</h3>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="icon-diamond"></i>
                    <span class="title">合同起草</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/contract/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">监测业务合同</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="heading">
                <h3 class="uppercase">基础设置</h3>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-balance-scale"></i>
                    <span class="title">环境要素</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/element/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建新要素</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/element/list' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">环境要素维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/element/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新要素信息</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-balance-scale"></i>
                    <span class="title">监测频次</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/frequency/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建监测频次</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/frequency/list' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">监测频次维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/frequency/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新要素信息</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-balance-scale"></i>
                    <span class="title">监测项目</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/project/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建监测项目</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/project/list' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">监测项目维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/project/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新监测项目</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-balance-scale"></i>
                    <span class="title">监测类别</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/type/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建监测类别</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/type/list' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">监测类别维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/type/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新监测类别</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="heading">
                <h3 class="uppercase">系统设置</h3>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-building"></i>
                    <span class="title">部门管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/department/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建新部门</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/department/list' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">部门信息维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/department/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新部门信息</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-users"></i>
                    <span class="title">岗位管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/role/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建新岗位</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path:'/role/list'}" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">岗位信息维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/role/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新岗位信息</span>
                        </a>
                    </router-link>
                </ul>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-user"></i>
                    <span class="title">用户管理</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <router-link :to="{ path: '/user/create' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">创建新用户</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path:'/user/list'}" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">用户信息维护</span>
                        </a>
                    </router-link>
                    <router-link :to="{ path: '/user/change' }" tag="li" active-class="active">
                        <a class="nav-link ">
                            <span class="title">更新用户信息</span>
                        </a>
                    </router-link>
                </ul>
            </li>
        </ul>
        <!-- END SIDEBAR MENU -->
        <!-- END SIDEBAR MENU -->
    </div>
</template>