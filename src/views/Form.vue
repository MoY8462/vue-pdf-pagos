<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-3 center">
        <button class="btn mx-5" v-on:click="extr">Extranjero</button>
        <button class="btn mx-5" v-on:click="com">Comunidad UNAM</button>
        <button class="btn mx-5" v-on:click="stu">Estudiante Externo</button>
        <button class="btn mx-5" >Público en General</button>
    </div>
    <foreign v-if="extranjero"/>
    <comunidad-unam v-if="comunidad"/>
    <extern-student v-if="student"/>
   
</template>

<script>
import Foreign from '../components/organism/Foreign.vue'
import ComunidadUnam from '../components/organism/UNAMCommunity.vue'
import ExternStudent from '../components/organism/ExternStudent.vue'
export default {
    data () {
        return {
            extranjero: false,
            comunidad: true,
            student: false
        }
    },
    components: {
        Foreign,
        ComunidadUnam,
        ExternStudent
    },
    methods: {
        extr: function () {
            this.extranjero = true;
            this.comunidad =false;
            this.student = false;
        },
        com: function () {
            this.extranjero = false;
            this.comunidad = true;
            this.student = false;
        },
        stu: function () {
            this.extranjero = false;
            this.comunidad = false;
            this.student = true;
        }
    }
}
</script>

<style>

</style>