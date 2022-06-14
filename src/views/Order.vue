<template>
    <div>
        <pre>{{ $store.state.user}}</pre>
        <pre>{{ $store.state.data_course }}</pre>
        <button @click="this.$router.push('course')" class="btn btn-sm btn-primary">Atrás</button>
        <button @click="confirm" class="btn btn-sm btn-primary">Confirmar</button>
    </div>
</template>
<script>
import { generatePDF } from '../pdf.js'
export default {
   methods: {
       confirm () {
           generatePDF();
           this.$router.push('form');
       }
   } 
}
</script>
<style>

</style>