<template>
    <div class="contain">
        <div class="contain__form">
            <header>
                <section class="section__img">
                    <span class="brand"></span>
                    <span class="house"></span>
                    </section>
                <section class="header_section--log">
                    <p class="section__p">Registro</p>
                    <button class="btn-google"><span class="google"></span></button>
                    <button class="btn-facebook"><span class="facebook"></span></button>
                </section>
            </header>
            <form action="">
                <section class="form__name">
                    <div class="form__name--right">
                        <p>Nombre completo</p>
                        <input type="text" placeholder="Emmanuel">
                    </div>
                    <div class="form__name--left">
                        <p>Apellido</p>
                        <input type="text" placeholder="Rodriguez">
                    </div>
                </section>
                <section>
                    <p>Correo electrónico</p>
                    <input type="text" placeholder="ejemplo@dominio.com">
                </section>
                <section>
                    <p>Contraseña</p>
                    <input type="password" placeholder="Contraseña">
                </section>
                <section class="form__section--select">
                    <p>Tipo de Alumno</p>
                    <select name="select">
                        <option value="0">Seleccionar..</option>
                        <option value="1">Extranjero</option>
                        <option value="2">Comunidad UNAM</option>
                        <option value="3">General</option>
                    </select>
                    <i></i>
                </section>
                <section>
                    <p>País proveniente</p>
                    <input type="text" placeholder="País">
                </section>
                <section>
                    <p>Sitio web de la institución</p>
                    <input type="text" placeholder="Sitio Web">
                </section>
                <section class="section__file">
                    <p>Identificación escolar</p>

                    <input type="file" id="file" /> 
                    <label for="file">
                        <span></span> 
                        <p>Carga identificación</p> 
                    </label>
                </section>
                <input type="submit" class="form__input--btn"/>

            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>