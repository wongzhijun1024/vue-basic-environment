<template>
    <div class="hello">
      <h1>{{title}}</h1>
     <button @click="turnToRegister" >turn to home</button>
     <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} 
    </li>
  </ul>
    </div>
  </template>
  
  <script>
  import { mapState,mapGetters } from 'vuex'
  export default {
    name: 'HelloWorld',
    data(){
      return {
        name:"index"
      }
    },
    computed: {
      ...mapState({
      title: state => state.cart.title
    }), 
    ...mapGetters('cart', {
      products: 'cartProducts',
    })
    },
    methods:{
        turnToRegister(){
            this.$router.push('/home')
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  