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
import 'mod/theme'
import 'mod/layout'
import 'mod/layout_demo'
import 'mod/sidebar'
import 'mod/nav'
import 'mod/multiselect'
import 'mod/validate'
import 'mod/valudate_additional'
import 'mod/fileinput'
import 'mod/select'
import  'mod/pagination'
import 'mod／utils'
import 'mod/jqueryUI'

//===========导入Vue组件==============

import Top from './components/Top.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'
//=============Basic================
//Element
import Element from './components/basic/element/element.vue'
import Create_Element from './components/basic/element/create.vue'
import Element_List from './components/basic/element/list.vue'
import CHange_Element from './components/basic/element/change.vue'

//=============System===============
//Department
import Department from './components/system/department/department.vue'
import Create_Department from './components/system/department/create.vue'
import Department_List from './components/system/department/list.vue'
import Change_Department from './components/system/department/change.vue'

//Role
import Role from './components/system/role/role.vue'
import Create_Role from './components/system/role/create.vue'
import Role_List from './components/system/role/list.vue'
import Change_Role from './components/system/role/change.vue'

//User
import User from './components/system/user/user.vue'
import Create_User from './components/system/user/create.vue'
import User_List from './components/system/user/list.vue'
import Change_User from './components/system/user/change.vue'
//==========导入CSS文件===============
import 'style/font_sans'
import 'style/font_awesome'
import 'style/line_icon'
import 'style/bootstrap'
import 'style/switch'

import 'style/iziToast'
import 'style/iziModal'

import 'style/component'
import 'style/plugins'

import 'style/layout'
import 'style/theme'
import 'style/custom'
import 'style/multiselect'
import 'style/fileinput'
import 'style/select'
import 'style/pagination'
import 'style/jqueryUI'
Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


var routes = [
    {
        path: "/department",
        name: "department",
        component: Role,
        children: [
            {
                path: "create",
                component: Create_Department
            }, {
                path: "list",
                component: Department_List
            }, {
                path: "change",
                component: Change_Department
            }
        ]
    },
    {
        path: "/role",
        name: "role",
        component: Role,
        children: [
            {
                path: "create",
                component: Create_Role
            },
            {
                path: "list",
                component: Role_List
            },
            {
                path: "change",
                component: Change_Role
            }
        ]
    },
    {
        path: "/user",
        name: "user",
        component: User,
        children: [
            {
                path: "create",
                component: Create_User
            },
            {
                path: "list",
                component: User_List
            },
            {
                path: "change",
                component: Change_User
            }
        ]
    },
    {
        path: "/element",
        name: "element",
        component: Element,
        children: [
            {
                path: "create",
                component: Create_Element
            },
            {
                path: "list",
                component: Element_List
            },
            {
                path: "change",
                component: CHange_Element
            }
        ]
    }
];

//路由器实例
var router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history'
});
window.router = router;
new Vue({
    el: '#header',
    render: h => h(Top)
});

new Vue({
    el: '#container',
    router,
    render: h => h(Container)
});

new Vue({
    el: '#footer',
    render: h => h(Footer)
});
