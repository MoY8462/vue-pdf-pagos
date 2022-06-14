import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
   storage: window.localStorage
 })
export default createStore({
  state: {
    user: {
      id: '',
      first_name: '',
      last_name: '',
      account_number: '',
      employ_number: '',
      contact_phone: {
          label: '',
          phone: ''
      },
      email: '',
      password: '',
      rfc: '',
      type: {
        general: '',
        academic: ''
      },
    },
    ocupation: true,
    foreign: {
       nationality_iformation: {
          country: '',
          id_client: '',
       }
    },
    student: {
      academic_information: {
          image: '',
          website: '',
      }
    },
    validate: {
      first_name: true,
      last_name: true,
      account_number: true,
      employ_number: true,
      contact_phone: true,
      email: true,
      password: true,
      rfc: true,
      type: true,
      nationality: true,
      url: true,
      image: true
    },
    data_course: {
        tittle:"C# Avanzado",
        description:"Se aprenderan conceptos como try cath",
        price:"1500",
        img:"c.png"
    }
  },
  mutations: {
    updateName (state, val) { state.user.first_name = val },
    updateLast (state, val) { state.user.last_name = val },
    updateAccount (state, val) { state.user.account_number = val },
    updateEmploy (state, val) { state.user.employ_number = val },
    updatePhone (state, val) { state.user.contact_phone.phone = val },
    updateEmail (state, val) { state.user.email = val },
    updatePass (state, val) { state.user.password = val },
    updateRFC (state, val) { state.user.rfc = val },
    updateTypeG (state, val) { state.user.type.general = val },
    updateTypeA (state, val) { state.user.type.academic = val },
    updateFNationality (state, val) { state.foreign.nationality_iformation.country = val },
    updateSAcademic (state, val) { state.student.academic_information.website = val },
    updateSImage (state, val) { state.student.academic_information.image = val },
    statusName (state, val) { state.validate.first_name = val },
    statusLast (state, val) { state.validate.last_name = val },
    statusAccount (state, val) { state.validate.account_number = val },
    statusEmploy (state, val) { state.validate.employ_number = val },
    statusPhone (state, val) { state.validate.contact_phone = val },
    statusEmail (state, val) { state.validate.email = val },
    statusPass (state, val) { state.validate.password = val },
    statusRFC (state, val) { state.validate.rfc = val },
    statusNationality (state, val) { state.validate.nationality = val },
    statusURL (state, val) { state.validate.url = val },
    statusImage (state, val) { state.validate.image = val },
    ocupacionType (state, val) { state.ocupation = val},
    dataCourse (state, val) { state.data_course = val},
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
