<template>
    <div>
        <h1>Tabla de multiplicar</h1>
        <label>Introducir un nuero </label>
        <input type="number" v-model="numero"/>
        <button @click="generarTabla()">Multiplicar</button>

        <table border="1">
            <thead>
                <tr>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="tabla">

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : "TablaMultiplicar" ,
    data() {
        return {
            numero : 3,
            tabla : ""
        }
    },
    methods : {
        generarTabla() {
            console.log("pulsado " + this.numero);
            var html = "";
            for(var i = 1; i < 11; i++) {
                var operacion = this.numero * i;
                html += "<tr>";
                html += "<td>" + operacion + "</td>"
                html += "</tr>";
            }
            this.tabla = html;
        }
    }
}
</script>

<style>

</style>