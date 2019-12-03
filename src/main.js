import Vue from 'vue'
import connect from '@vkontakte/vk-connect';
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    mounted() {
        connect.send("VKWebAppInit", {});
    }
}).$mount('#app');
