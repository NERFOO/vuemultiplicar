<template>
    <div>
        <h1>Menu</h1>
        <ul id="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/tablaMultiplicar">Tabla multiplicar</router-link></li>
            <li><router-link to="/tablaMultiplicarFilters">Tabla multiplicar filter</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "MenuComponent",

}
</script>

<style>

</style>