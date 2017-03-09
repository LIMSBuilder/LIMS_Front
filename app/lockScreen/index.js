import Vue from 'vue'
import VueResource from 'vue-resource'
import 'mod/jquery'
import 'mod/bootstrap'
import 'mod/cookie'
import 'mod/slimscorll'
import 'mod/switch'
import 'mod/blockui'
import 'mod/backstretch'
import 'mod/iziToast'
import 'mod/theme'
import 'mod／utils'
import './script/lock'

import 'style/font_sans'
import 'style/font_awesome'
import 'style/line_icon'
import 'style/bootstrap'
import 'style/switch'
import 'style/component'
import 'style/plugins'
import 'style/iziToast'
import './style/lock.css'

import Lock from './components/Lock.vue'
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;


new Vue({
    el: '#page_body',
    render: h => h(Lock)
});
