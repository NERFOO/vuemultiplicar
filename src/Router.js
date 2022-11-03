import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/tablamultiplicar", component: TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

export default router;