<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <text-input class="align" :warn='$store.state.validate.first_name' text="Nombre" :placeholder="'CESAR'" v-model="name"/>
        <text-input class="align" :warn='$store.state.validate.last_name' text="Apellidos" :placeholder="'ARANZUA LOPEZ'" v-model="last"/>
        <number-input class="align" :warn='$store.state.validate.contact_phone' :max="'10'" text="Número de teléfono" :placeholder="'5543256789'" v-model="phone"/>
        <text-input class="align" :warn='$store.state.validate.email' type="email" text="Correo electrónico" :placeholder="'usuario@dominio.com'" v-model="email"/>
        <!--<label class="mx-5">
            <span>Contraseña
                <button type="button" @click="$emit('event')" class="boton">
                    <eye :eye="estado"/>
                </button>
            </span>
            
            <input
            :type="tipo"
            placeholder="*****"
            v-model="password"
            :class="{'warn': !$store.state.validate.password}"
            />
        </label>-->
        <text-input class="align" :warn='$store.state.validate.password' type="password" :placeholder="'*******'" text="Contraseña" v-model="password"/>
        <text-input class="align" :warn='$store.state.validate.rfc' text="RFC" :placeholder="'CUPU800825569'" v-model="rfc"/>
        <label class="p-6">
            <input class="ml-5" type="radio" name="ocupation" value="0" v-on:click="ocup(0)">Empleado
            <input class="ml-4" type="radio" name="ocupation" value="1" v-on:click="ocup(1)">Estudiante
        </label>
        <text-input v-if="!$store.state.ocupation" class="align " :warn='$store.state.validate.employ_number' type="number" text="Número de Empleado" :placeholder="'123456'" v-model="employ"/>
        <text-input v-if="$store.state.ocupation" class="align " :warn='$store.state.validate.account_number' type="number" text="Número de Cuenta" :placeholder="'315148080'" v-model="account"/>
        
    </div>
</template>

<script>
import TextInput from '../molecules/Text-Input.vue'
import NumberInput from '../molecules/Number-Input.vue'
export default {
    data () {
        return {
            ocupacion: true,
            tipo: String,
            estado: {
                type: Boolean,
                default: true
            },
        }
    },
    components: {
        TextInput,
        NumberInput
    },
    methods: {
        ocup: function (value) {
            if(value){
                this.$store.commit('ocupacionType', true)
            } else {
                this.$store.commit('ocupacionType', false)
            }
        },
        
    },
    computed: {
        name: {
            get () { return this.$store.state.user.first_name },
            set (value) { this.$store.commit('updateName', value) }
        },
        last: {
            get () { return this.$store.state.user.last_name },
            set (value) { this.$store.commit('updateLast', value) }
        },
        phone: {
            get () { return this.$store.state.user.contact_phone.phone },
            set (value) { this.$store.commit('updatePhone', value) }
        },
        email: {
            get () { return this.$store.state.user.email },
            set (value) { this.$store.commit('updateEmail', value) }
        },
        password: {
            get () { return this.$store.state.user.password },
            set (value) { this.$store.commit('updatePass', value) }
        },
        rfc: {
            get () { return this.$store.state.user.rfc },
            set (value) { this.$store.commit('updateRFC', value) }
        },
        academic: {
            get () { return this.$store.state.student.academic_information.website },
            set (value) { this.$store.commit('updateSAcademic', value) }
        },
        account: {
            get () { return this.$store.state.user.account_number },
            set (value) { this.$store.commit('updateAccount', value) }
        },
        employ: {
            get () { return this.$store.state.user.employ_number },
            set (value) { this.$store.commit('updateEmploy', value) }
        },
    }
}
</script>

<style>

</style>