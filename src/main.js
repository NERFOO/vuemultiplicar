import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';

var app = createApp(App);
app.config.globalProperties.$filters = {
    getTabla(numero) {
        var dato = 0;
        for(var i = 1; i < 11; i++) {
            dato = numero * i;
        }
        return dato;
    }
}
app.use(router).mount('#app');
