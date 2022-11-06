import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';

var app = createApp(App);
app.config.globalProperties.$filters = {
    getMultiplicacion(num1, num2){
        return  num1 * num2;
    },
    getOperacion(num1, num2){
        return num1 + " * " + num2;
    }

}
app.use(router).mount('#app');


