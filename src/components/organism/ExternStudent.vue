<template>
    <label class="center"><strong style="font-size:3rem;">Estudiante Externo</strong></label>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <user-data class="col-span-1 sm:col-span-2 md:col-span-3"/>
      <text-input class="align" :warn='$store.state.validate.url' type="url" text="Sitio web de tu escuela" :placeholder="'https://www.unam.mx'" v-model="academic"/>
      <text-input class="align" :warn='$store.state.validate.image'  text="Credencial escolar" v-model="image"/>
      
      
      <label for=""></label>
      <label for=""></label>
      <div class="center mt-4">
          <button class="btn" v-on:click="validation">Enviar</button>
      </div>
    </div>
</template>

<script>
import TextInput from '../molecules/Text-Input.vue'
import UserData from './UserData.vue'
import { validacion } from '../../functions.js'
import axios from 'axios'
export default {
    data () {
        return {
            errors: []
        }
    },
    components: {
        TextInput,
        UserData
    },
    computed: {
        image: {
            get () { return this.$store.state.student.academic_information.image },
            set (value) { this.$store.commit('updateSImage', value) }
        },
        academic: {
            get () { return this.$store.state.student.academic_information.website },
            set (value) { this.$store.commit('updateSAcademic', value) }
        }
    },
    methods: {
        validation: function () {
            this.$store.commit('updateTypeG', "Comunidad externa");
            this.errors = [];
            this.errors = validacion();
            //URL 
            if (!this.$store.state.student.academic_information.website) {
                this.errors.push('El URL es obligatorio.');
                this.$store.commit('statusURL', false);
            } else if (!this.validURL(this.$store.state.student.academic_information.website)) {
                this.errors.push('El URL es inválida.');
                this.$store.commit('statusURL', false);
            }  else{ this.$store.commit('statusURL', true); }
            //Image
            if (!this.$store.state.student.academic_information.image) {
                this.errors.push('LA imagen es obligatoria.');
                this.$store.commit('statusImage', false);
            } else if (!this.validImage(this.$store.state.student.academic_information.image)) {
                this.errors.push('Formato es inválido.');
                this.$store.commit('statusImage', false);
            }  else{ this.$store.commit('statusImage', true); }

            if (!this.errors.length) {
                console.log("OK");
                this.postJS();
            }
        },
        postJS: function () {
                if(this.$store.state.ocupation){
                    this.$store.commit('updateTypeA', "Estudiante")
                    axios
                    .post('http://localhost:3000/users', {
                                id: Math.round(Math.random()*10000000),
                                first_name: this.$store.state.user.first_name,
                                last_name: this.$store.state.user.last_name,
                                account_number: this.$store.state.user.account_number,
                                worker_number: "",
                                academic_information: {
                                    photo_identification: this.$store.state.student.academic_information.image,
                                    website: this.$store.state.student.academic_information.website
                                },
                                contact_phone: {
                                    label: "",
                                    phone: this.$store.state.user.contact_phone.phone
                                },
                                email: this.$store.state.user.email,
                                password: this.$store.state.user.password,
                                rfc: this.$store.state.user.rfc,
                                type: {
                                    general: this.$store.state.user.type.general,
                                    academic: this.$store.state.user.type.academic
                                },
                                nationality: {
                                    country: "",
                                    id_client: ""
                                },
                                created_at: "",
                                updated_at: ""
                            
                    })
                    .then(response => (console.log(response.data),this.$router.push('course')))
                    .catch(error => console.log(error))
                    .finally(() => console.log("Post: Ok")
                    )
                } else {
                    this.$store.commit('updateTypeA', "Profesor")
                    axios
                    .post('http://localhost:3000/users', {
                                _id: Math.round(Math.random()*10000000),
                                first_name: this.$store.state.user.first_name,
                                last_name: this.$store.state.user.last_name,
                                account_number: "",
                                worker_number: this.$store.state.user.employ_number,
                                academic_information: {
                                    photo_identification: this.$store.state.student.academic_information.image,
                                    website: this.$store.state.student.academic_information.website
                                },
                                contact_phone: {
                                    label: "",
                                    phone: this.$store.state.user.contact_phone.phone
                                },
                                email: this.$store.state.user.email,
                                password: this.$store.state.user.password,
                                rfc: this.$store.state.user.rfc,
                                type: {
                                    general: this.$store.state.user.type.general,
                                    academic: this.$store.state.user.type.academic
                                },
                                nationality: {
                                    country: "",
                                    id_client: ""
                                },
                                created_at: "",
                                updated_at: ""
                            
                    })
                    .then(response => (console.log(response.data),this.$router.push('course')))
                    .catch(error => console.log(error))
                    .finally(() => console.log("Post: Ok")
                    )
                }
                
        },
        validURL: function (url) {
            var re = /^[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
            return re.test(url);
        },
        validImage: function (image) {
            var re = /\.(jpg|png|gif)$/;
            return re.test(image);
        }
        
    }
}
</script>

<style>

</style>