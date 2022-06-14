<template>
  <div>
    <section v-if="errored">
        <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
    </section>

    <section v-else>
        <div v-if="loading">Cargando...</div>

        <div v-else class="grid grid-cols-3">
            <div v-for="item in info" :key = "item">
                <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ item.tittle }}</div>
                        <p class="text-grey-darker text-base">
                        {{ item.description }}
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        ${{ item.price }}
                    </div>
                    <div>
                        <button @click="course(item)" class="btn btn-sm btn-primary">Seguir</button>
                    </div>
                </div>
        </div>
        </div>
        

    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
        info: null,
        loading: true,
        errored: false
        }
    },
    methods: {
        course (item) {
            this.$store.commit('dataCourse', item);
            this.$router.push('order') 
        }
    },
    mounted () {
        axios
        .get('http://localhost:3000/course')
        .then(response => {
            this.info = response.data
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>

<style>

</style>