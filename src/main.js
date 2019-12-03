import Vue from 'vue'
import connect from '@vkontakte/vk-connect';
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';

Vue.config.productionTip = false;

mVKMiniAppsScrollHelper(document.getElementById('app'));

new Vue({
    render: h => h(App),
    mounted() {
        connect.send("VKWebAppInit", {});
    }
}).$mount('#app');
