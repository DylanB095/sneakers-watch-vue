import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$apiurl = "https://sneakers-watch.fr:3000";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false





new Vue({
    router,
    render: h => h(App)
}).$mount('#app')