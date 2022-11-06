import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import TablaMultiplicar from './components/TablaMultiplicar.vue';
import TablaMultiplicarFilters from './components/TablaMultiplicarFilters.vue';

const misRutas = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/tablaMultiplicar", component: TablaMultiplicar
    },
    {
        path: "/tablaMultiplicarFilters", component: TablaMultiplicarFilters
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: misRutas
});

export default router;