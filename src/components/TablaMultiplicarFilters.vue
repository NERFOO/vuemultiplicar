<template>
    <div>
        <h1>Tabla Multiplicar Filters</h1>
        <label>Introduzca número: </label>
        <input type="number" v-model="numero"/>
        <hr/>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="n in 10" :key="n">
                    <td>
                        {{ $filters.getOperacion(numero, n) }}
                    </td>
                    <td>
                        {{ $filters.getMultiplicacion(numero, n) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: "TablaMultiplicarFilters",
        data()  {
            return {
                numero: 0
            }
        }
    }
</script>