import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn/index'
import Home from '@/components/Home/index'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        }
    ]
})
