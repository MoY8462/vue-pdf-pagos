<template>
    <label class="center"><strong style="font-size:3rem;">Comunidad UNAM</strong></label>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <user-data class="col-span-1 sm:col-span-2 md:col-span-3"/>
      <label for=""></label>
      <div class="center mt-4">
          <button class="btn" v-on:click="validation">Enviar</button>
      </div>
    </div>
</template>

<script>
import UserData from './UserData.vue'
export default {
    data () {
        return {
            ocupacion: false,
            errors: []
        }
    },
    components: {
        UserData
    },
    computed: {
        account: {
            get () { return this.$store.state.user.account_number },
            set (value) { this.$store.commit('updateAccount', value) }
        },
        employ: {
            get () { return this.$store.state.user.employ_number },
            set (value) { this.$store.commit('updateEmploy', value) }
        }
    },
    methods: {
        ocup: function (value) {
            if(value){
                this.ocupacion=true
            } else {
                this.ocupacion=false
            }
        },
        validation: function () {
            this.errors = [];
            console.log("Validar")
            //Email
            if (!this.$store.state.user.email) {
                this.errors.push('El email es obligatorio.');
                this.$store.commit('statusEmail', false)
            } else if (!this.validEmail(this.$store.state.user.email)) {
                this.errors.push('El correo electrónico debe ser válido.');
                this.$store.commit('statusEmail', false);
            } else { this.$store.commit('statusEmail', true); }
            //Password
            if (!this.validPassword(this.$store.state.user.password)) {
                this.errors.push('La contraseña debe ser válida.');
                this.$store.commit('statusPass', false)
            } else { this.$store.commit('statusPass', true); }
            //RFC
            if (!this.validRFC(this.$store.state.user.rfc)) {
                this.errors.push('El RFC debe ser válido.');
                this.$store.commit('statusRFC', false)
            } else { this.$store.commit('statusRFC', true); }
            //Telefono
            if (!this.validPhone(this.$store.state.user.contact_phone.phone)) {
                this.errors.push('El teléfono debe ser válido.');
                this.$store.commit('statusPhone', false);
            } else { this.$store.commit('statusPhone', true); }
            //Nombre
            if (!this.$store.state.user.first_name) {
                this.errors.push('El nombre es obligatorio.');
                this.$store.commit('statusName', false);
            } else if (!this.validLetras(this.$store.state.user.first_name)) {
                this.errors.push('El nombre es inválido.');
                this.$store.commit('statusName', false);
            }  else{ this.$store.commit('statusName', true)}
            //Apellidos
            if (!this.$store.state.user.last_name) {
                this.errors.push('El apellido es obligatorio.');
                this.$store.commit('statusLast', false);
            } else if (!this.validLetras(this.$store.state.user.last_name)) {
                this.errors.push('El apellido es inválido.');
                this.$store.commit('statusLast', false);
            }  else{ this.$store.commit('statusLast', true); }
            //Tipo
            if(this.$store.state.ocupation){
                this.$store.commit('updateType','Estudiante')
                if(!this.$store.state.user.account_number){
                    this.errors.push('El numero de cuenta es obligatorio.');
                    this.$store.commit('statusAccount', false);  
                } else { this.$store.commit('statusAccount', true); }
            } else {
                this.$store.commit('updateType','Profesor')
                if(!this.$store.state.user.employ_number){
                    this.errors.push('El numero de cuenta es obligatorio.');
                    this.$store.commit('statusEmploy', false);  
                } else { this.$store.commit('statusEmploy', true); }
            }
            //Exito
            if (!this.errors.length) {
                console.log("OK");
            }
        },
        /* 
        La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
        */
        validPassword: function (pass) {
            var re =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; 
            return re.test(pass);
        },
        validEmail: function (email) {
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            return re.test(email);
        },
        validRFC: function (rfc) {
            var re = /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/;
            return re.test(rfc);
        },
        validPhone: function (phone) {
            var re = /^(?:\D*\d){10}\D*$/;
            return re.test(phone);
        },
        validLetras: function ( text ) {
            var re = /^[a-zA-Z]*$/;
            return re.test(text);
        }
    }
}
</script>

<style>

</style>