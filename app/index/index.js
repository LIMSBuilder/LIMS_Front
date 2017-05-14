//============导入JS文件=============
import Vue from 'vue'
import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'
import 'mod/jquery'
import 'mod/bootstrap'
import Cookies from 'mod/cookie'
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
import 'mod/select2'

import 'mod/pulsate'
import 'mod/migrate'
import 'mod/qrcode'
import 'mod/jqprint'
import 'mod/datepicker'
import 'mod/datepicker_locales'


import 'mod/pushlet'
//===========导入Vue组件==============

import Top from './components/Top.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'


//=============Bussiness============
import Contract from './components/bussiness/contract/contract.vue'
import Create_Contract from './components/bussiness/contract/create.vue'
import Contract_List from './components/bussiness/contract/list.vue'
import Contract_Review from './components/bussiness/contract/review.vue'
import Change_Contract from './components/bussiness/contract/change.vue'
import contract_Sreview from './components/bussiness/contract/sreview.vue'
import contract_IsPackage from './components/bussiness/contract/isPackage.vue'
import contract_ServiceList from  './components/bussiness/contract/serviceList.vue'
import contract_serviewReview from './components/bussiness/contract/serviceReview.vue'
import ChangeItems from './components/bussiness/contract/changeItems.vue'


import service from './components/bussiness/contract/service.vue'

import Task from './components/bussiness/task/task.vue'
import Create_Task from './components/bussiness/task/create.vue'
import Task_List from './components/bussiness/task/list.vue'
import ChangeTaskItems from  './components/bussiness/task/changeItems.vue'


import Sample from './components/bussiness/sample/sample.vue'
import Apply_Sample from './components/bussiness/sample/apply.vue'
import Register_Sample from './components/bussiness/sample/register.vue'
import DisPatch from './components/bussiness/sample/dispatch.vue'
import DisPatchSetting from './components/bussiness/sample/dispatchSetting.vue'
import DisPatchCheck from './components/bussiness/sample/dispatchCheck.vue'
import MyTask from './components/bussiness/sample/myTask.vue'

import Quality from './components/bussiness/quality/quality.vue'
import Qreview from './components/bussiness/quality/qReview.vue'
import Firstreview from './components/bussiness/quality/firstReview.vue'
import Quality_list from './components/bussiness/quality/list.vue'


//=============Basic================
//Element
import Element from './components/basic/element/element.vue'
import Create_Element from './components/basic/element/create.vue'
import Element_List from './components/basic/element/list.vue'
import CHange_Element from './components/basic/element/change.vue'

//Frequency
import Frequency from './components/basic/frequency/frequency.vue'
import Create_Frequency from './components/basic/frequency/create.vue'
import Frequency_List from "./components/basic/frequency/list.vue"
import Change_Frequency from './components/basic/frequency/change.vue'

//Project
import Project from './components/basic/project/project.vue'
import Create_Project from './components/basic/project/create.vue'
import Project_List from "./components/basic/project/list.vue"
import Change_Project from './components/basic/project/change.vue'

//Type
import Type from './components/basic/type/type.vue'
import Create_Type from './components/basic/type/create.vue'
import Type_List from "./components/basic/type/list.vue"
import Change_Type from './components/basic/type/change.vue'

//Customer
import Customer from './components/basic/customer/customer.vue'
import Create_Customer from './components/basic/customer/create.vue'
import Customer_List from "./components/basic/customer/list.vue"
import Change_Customer from './components/basic/customer/change.vue'

//Basic
import Basic from './components/basic/basic/basic.vue'
import Default from './components/basic/basic/default.vue'

//Instrument
import Instrument from './components/basic/Instrument/Instrument.vue'
import Create_Instrument from './components/basic/Instrument/create.vue'
import List_Instrument from './components/basic/Instrument/list.vue'
import Change_Instrument from './components/basic/Instrument/change.vue'

//Export
import Export from './components/basic/export/export.vue'
import Export_List from './components/basic/export/list.vue'

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

//Function
import page_404 from './components/system/function/404.vue'
import page_403 from './components/system/function/403.vue'
import page_500 from './components/system/function/500.vue'
import addpower from './components/system/function/addpower.vue'

//DashBoard
import dashboard from './components/dashboard/Dashboard.vue'
import overview from './components/dashboard/overview.vue'
import setting from './components/dashboard/setting.vue'
import help from './components/dashboard/help.vue'

//Calendar
import calendar from './components/calendar/calendar.vue'

//Mail
import mail from './components/mail/mail.vue'
import inbox from './components/mail/inbox.vue'
import compose from './components/mail/compose.vue'
import star from './components/mail/star.vue'
import trash from './components/mail/trash.vue'
import view from './components/mail/view.vue'
import outbox from './components/mail/outbox.vue'
import viewSend from './components/mail/viewSend.vue'

//Address List
import address from './components/address/address.vue'
import address_list from './components/address/list.vue'
//==========导入CSS文件===============
import 'style/font_sans'
import 'style/font_awesome'
import 'style/line_icon'
import 'style/bootstrap'
import 'style/switch'

import 'style/iziToast'
import 'style/iziModal'

import 'style/datepicker'
import 'style/component'
import 'style/plugins'

import 'style/select'
import 'style/layout'
import 'style/theme'
import 'style/custom'
import 'style/multiselect'
import 'style/fileinput'
import 'style/select'
import 'style/pagination'
import 'style/jqueryUI'
import 'style/main'
Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

console.log(PL);

window.Cookies = Cookies;
var routes = [
    {
        path: "/",
        name: "/",
        component: dashboard,
        children: [{
            path: "overview",
            component: overview

        }, {
            path: "setting",
            component: setting

        }, {
            path: "help",
            component: help

        }]
    }, {
        path: "/address",
        name: "/address",
        component: address,
        children: [{
            path: "list",
            component: address_list
        }]
    },
    {
        path: "/mail",
        name: "/mail",
        component: mail,
        children: [
            {
                path: "inbox",
                component: inbox
            }, {
                path: "compose",
                component: compose
            },
            {
                path: "star",
                component: star
            }, {
                path: "trash",
                component: trash
            }, {
                path: "view",
                component: view
            }, {
                path: "outbox",
                component: outbox
            }, {
                path: "viewSend",
                component: viewSend
            }
        ]
    },
    {
        path: "/calendar",
        name: "/calendar",
        component: calendar
    },
    {
        path: "/404",
        name: "404",
        component: page_404
    },
    {
        path: "/403",
        name: "403",
        component: page_403
    },
    {
        path: "/500",
        name: "500",
        component: page_500
    },
    {
        path: "/addpower",
        name: "addpower",
        component: addpower
    },
    {
        path: "/department",
        name: "department",
        component: Department,
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
        path: "/instrument",
        name: "instrument",
        component: Instrument,
        children: [
            {
                path: "create",
                component: Create_Instrument
            },
            {
                path: "list",
                component: List_Instrument
            },
            {
                path: "change",
                component: Change_Instrument
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
    }, {
        path: "/frequency",
        name: "frequency",
        component: Frequency,
        children: [
            {
                path: "create",
                component: Create_Frequency
            },
            {
                path: "list",
                component: Frequency_List
            },
            {
                path: "change",
                component: Change_Frequency
            }
        ]
    },
    {
        path: "/project",
        name: "project",
        component: Project,
        children: [
            {
                path: "create",
                component: Create_Project
            },
            {
                path: "list",
                component: Project_List
            },
            {
                path: "change",
                component: Change_Project
            }
        ]
    },
    {
        path: "/type",
        name: "type",
        component: Type,
        children: [
            {
                path: "create",
                component: Create_Type
            },
            {
                path: "list",
                component: Type_List
            },
            {
                path: "change",
                component: Change_Type
            }
        ]
    },
    {
        path: "/customer",
        name: "customer",
        component: Customer,
        children: [
            {
                path: "create",
                component: Create_Customer
            },
            {
                path: "list",
                component: Customer_List
            },
            {
                path: "change",
                component: Change_Customer
            }
        ]
    },
    {
        path: "/basic",
        name: "basic",
        component: Basic,
        children: [
            {
                path: "default",
                component: Default
            }
        ]
    },
    {
        path: "/contract",
        name: "contract",
        component: Contract,
        children: [
            {
                path: "create",
                component: Create_Contract
            },
            {
                path: "changeItem",
                component: ChangeItems
            },
            {
                path: "list",
                component: Contract_List
            },
            {
                path: "change",
                component: Change_Contract
            },
            {
                path: "review",
                component: Contract_Review
            },
            {
                path: "sreview",
                component: contract_Sreview
            },
            {
                path: "isPackage",
                component: contract_IsPackage
            },
            {
                path: "service",
                component: service
            },
            {
                path: "serviceList",
                component: contract_ServiceList
            },
            {
                path: "serviewReview",
                component: contract_serviewReview
            }
        ]
    },
    {
        path: "/task",
        name: "task",
        component: Task,
        children: [
            {
                path: "create",
                component: Create_Task
            },
            {
                path: "list",
                component: Task_List
            },
            {
                path: "changeItems",
                component: ChangeTaskItems
            }
        ]
    },
    {
        path: "/sample",
        name: "sample",
        component: Sample,
        children: [
            {
                path: "apply",
                component: Apply_Sample
            },
            {
                path: "list",
                component: Task_List
            },
            {
                path: "register",
                component: Register_Sample
            },
            {
                path: "disPatch",
                component: DisPatch
            },
            {
                path: "disPatchSetting",
                component: DisPatchSetting
            },
            {
                path: "disPatchCheck",
                component: DisPatchCheck
            },
            {
                path: "myTask",
                component: MyTask
            }
        ]
    },
    {
        path: "/export",
        name: "export",
        component: Export,
        children: [
            {
                path: "list",
                component: Export_List
            }
        ]
    },
    {
        path: "/quality",
        name: "quality",
        component: Quality,
        children: [
            {
                path: "qreview",
                component: Qreview
            },
            {
                path: "firstreview",
                component: Firstreview
            },
            {
                path: "list",
                component: Quality_list
            }
        ]
    }
];

//路由器实例
var router = new VueRouter({
    routes, // （缩写）相当于 routes: routes
    mode: 'history'
});

router.afterEach(function () {
    handleSidebarAndContentHeight();
});
router.beforeEach((to, from, next) => {
    if (localStorage.getItem("locked")) {
        window.location.href = "/lock.html";
    } else {
        // Vue.http.get("/api/login/getLogin").then(response => {
        //     var data = response.data;
        //     next();
        // }, response => {
        //     serverErrorInfo();
        // });
        next();
    }

});
window.router = router;
new Vue({
    el: '#header',
    router,
    render: h => h(Top)
});

new Vue({
    el: '#container',
    router,
    render: h => h(Container),
    watch: {
        '$route': "autoRouter"
    },
    created(){
        this.autoRouter();
    },
    methods: {
        autoRouter(){
            //当前路径为/或者/index.html -> /blog/list
            if (router.history.current.path == "/" || router.history.current.path == "/index.html") {
                router.push("/overview");
            }
        }
    }
});

new Vue({
    el: '#footer',
    render: h => h(Footer)
});
//
//
// PL._init();
// //PL.setDebug(true);
// PL.joinListen('/cuige/he');
// function onData(event) {
//     console.log(event.get("mess"));
// //            alert(event.get("mess"));
//     // 离开
//     // PL.leave();
// }