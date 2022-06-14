<template>
    <div>
        <header class="header">
            <nav class="header__nav-tall">
                <button class="header__nav--btn" v-on:click="extr">Extranjero</button>
                <button class="header__nav--btn" v-on:click="com">Comunidad UNAM</button>
                <button class="header__nav--btn" v-on:click="stu">Comunidad Externa</button>
                <button class="header__nav--btn" >Público en General</button>
                
            </nav>
            <nav class="header__nav-small">
                <span class="header__nav--icon"></span>
                <div class="header__nav--div">
                    <button v-on:click="extr">Extranjero</button>
                    <button v-on:click="com">Comunidad UNAM</button>
                    <button v-on:click="stu">Comunidad Externa</button>
                    <button>Público en General</button>
                </div>
            </nav>
        </header>
        <main>
            <foreign v-if="extranjero"/>
            <comunidad-unam v-if="comunidad"/>
            <extern-student v-if="student"/>
        </main>
        
    </div>
    
   
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