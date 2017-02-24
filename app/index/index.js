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

//=============System===============
//Department
import Department from './components/system/department/department.vue'
import Create_Department from './components/system/department/create.vue'
import Department_List from './components/system/department/list.vue'
import Change_Department from './components/system/department/change.vue'

import Role from './components/system/role/role.vue'
import Create_Role from './components/system/role/create.vue'

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
        component: Department,
        children: [
            {
                path: "create",
                name: "create",
                component: Create_Role
            },
            {
                path: "list",
                name: "list",
                component: Department_List
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
