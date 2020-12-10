import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Vue.prototype.$apiurl = "https://sneakers-watch.fr:3000";
Vue.prototype.$apiurl = "http://localhost:3000";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false
    /* creation du bus d'événements */
export const bus = new Vue();




/* render :  function ( createElement ) {
  return  createElement (App);
}La render()fonction est un élément central de Vue.
 */

new Vue({
    router,

    // h un alias createElement
    render: h => h(App),
    // “mount” signifie le moment où votre composant est inséré dans le DOM.
    // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID d'application. 
}).$mount('#app')