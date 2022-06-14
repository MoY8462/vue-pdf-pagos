import store from './store/index.js'
var errors = [];
/*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.*/
function validPassword (pass) {
    var re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; 
    return re.test(pass);
}
function validEmail (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(email);
}
function validRFC (rfc) {
    var re = /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/;
    return re.test(rfc);
}
function validPhone (phone) {
    var re = /^(?:\D*\d){10}\D*$/;
    return re.test(phone);
}
function validLetras ( text ) {
    var re = /^[a-zA-Z_ ]*$/;
    return re.test(text);
}
function validacion () {
    errors = [];
    console.log("Validar")
    //Email
    if (!store.state.user.email) {
        errors.push('El email es obligatorio.');
        store.commit('statusEmail', false)
    } else if (!validEmail(store.state.user.email)) {
        errors.push('El correo electrónico debe ser válido.');
        store.commit('statusEmail', false);
    } else { store.commit('statusEmail', true); }
    //Password
    if (!validPassword(store.state.user.password)) {
        errors.push('La contraseña debe ser válida.');
        store.commit('statusPass', false)
    } else { store.commit('statusPass', true); }
    //RFC
    if (!validRFC(store.state.user.rfc)) {
        errors.push('El RFC debe ser válido.');
        store.commit('statusRFC', false)
    } else { store.commit('statusRFC', true); }
    //Telefono
    if (!validPhone(store.state.user.contact_phone.phone)) {
        errors.push('El teléfono debe ser válido.');
        store.commit('statusPhone', false);
    } else { store.commit('statusPhone', true); }
    //Nombre
    if (!store.state.user.first_name) {
        errors.push('El nombre es obligatorio.');
        store.commit('statusName', false);
    } else if (!validLetras(store.state.user.first_name)) {
        errors.push('El nombre es inválido.');
        store.commit('statusName', false);
    }  else{ store.commit('statusName', true)}
    //Apellidos
    if (!store.state.user.last_name) {
        errors.push('El apellido es obligatorio.');
        store.commit('statusLast', false);
    } else if (!validLetras(store.state.user.last_name)) {
        errors.push('El apellido es inválido.');
        store.commit('statusLast', false);
    }  else{ store.commit('statusLast', true); }
    //Tipo
    if(store.state.ocupation){
        if(!store.state.user.account_number){
            errors.push('El numero de cuenta es obligatorio.');
            store.commit('statusAccount', false);  
        } else { store.commit('statusAccount', true); }
    } else {
        if(!store.state.user.employ_number){
            errors.push('El numero de cuenta es obligatorio.');
            store.commit('statusEmploy', false);  
        } else { store.commit('statusEmploy', true); }
    }

    return errors;
}

export { validPassword, validEmail, validRFC, validPhone, validLetras, validacion}