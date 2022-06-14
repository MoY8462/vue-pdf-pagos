<template>
    <label class="center"><strong style="font-size:3rem;">Extranjero</strong></label>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <user-data class="col-span-1 sm:col-span-2 md:col-span-3"/>
      <text-input class="align" :warn='$store.state.validate.nationality' text="Nacionalidad" :placeholder="'Mexicana'" v-model="nationality"/>
      <label class="col-span-2"></label>
      <label for=""></label>
      <div class="center mt-4">
          <button class="btn" v-on:click="validation">Enviar</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import TextInput from '../molecules/Text-Input.vue'
import UserData from './UserData.vue'
import { validLetras , validacion} from '../../functions.js'
export default {
    data () {
        return {
            errors: [],
        }
    },
    components: {
        TextInput,
        UserData
    },
    computed: {
        nationality: {
            get () { return this.$store.state.foreign.nationality_iformation.country },
            set (value) { this.$store.commit('updateFNationality', value) }
        },
    },
    methods: {
        validation: function () {
            this.$store.commit('updateTypeG', "Foráneo")
            this.errors = [];
            this.errors = validacion();
            //Nacionalidad
            if (!this.$store.state.foreign.nationality_iformation.country) {
                this.errors.push('La nacionalidad es obligatoria.');
                this.$store.commit('statusNationality', false);
            } else if (!validLetras(this.$store.state.foreign.nationality_iformation.country)) {
                this.errors.push('La nacionalidad es inválida.');
                this.$store.commit('statusNationality', false);
            }  else{ this.$store.commit('statusNationality', true); }
            if (!this.errors.length) {
                console.log("OK");
                this.postJS();
            }
        },
        postJS: function () {
                if(this.$store.state.ocupation){
                    this.$store.commit('updateTypeA', "Estudiante");
                    axios
                    .post('http://localhost:3000/users', {
                                id: Math.round(Math.random()*10000000),
                                first_name: this.$store.state.user.first_name,
                                last_name: this.$store.state.user.last_name,
                                account_number: this.$store.state.user.account_number,
                                worker_number: "",
                                academic_information: {
                                    photo_identification: "",
                                    website: ""
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
                                    country: this.$store.state.foreign.nationality_iformation.country,
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
                    this.$store.commit('updateTypeA', "Profesor");
                    axios
                    .post('http://localhost:3000/users', {
                                _id: Math.round(Math.random()*10000000),
                                first_name: this.$store.state.user.first_name,
                                last_name: this.$store.state.user.last_name,
                                account_number: "",
                                worker_number: this.$store.state.user.employ_number,
                                academic_information: {
                                    photo_identification: "",
                                    website: ""
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
                                    country: this.$store.state.foreign.nationality_iformation.country,
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
                
        }
    }
}
</script>

<style>

</style>