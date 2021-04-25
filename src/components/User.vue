
<template>
  <div id="main">
      <form @submit.prevent="actionUserAdd()">
          <input type="text" name="nombre" id="nombre" placeholder="Ingresar Nombre" v-model="nombre"/>
          <input type="text" name="edad" id="edad" placeholder="Ingresar Edad" v-model="edad"/>
          <input type="submit" value="Anadir Usuario"/>
      </form>
    
  </div>
</template>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebase/8.4.2/firebase-app.js"></script>

<script>
import {mapState, mapActions,mapGetters} from 'vuex'
export default {
  name: 'User',
  
  computed:{
      ...mapState(['nombre','edad']),
       nombre: {
      /* By default get() is used */
      get() {
        return this.$store.state.nombre
      },
      /* We add a setter */
      set(value) {
        this.$store.edad
        this.$store.commit('updateNombre', value)
        console.log("Hello world!"+value);
      }
    },
    edad: {
      /* By default get() is used */
      get() {
        return this.$store.state.edad
      },
      /* We add a setter */
      set(value) {
        this.$store.nombre
        this.$store.commit('updateEdad', value)
      }
      }
  },

  methods:{
      ...mapActions(['actionUserAdd'])
  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>