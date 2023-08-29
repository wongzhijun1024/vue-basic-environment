<template>
    <div class="hello">
      <h1>home</h1>
      <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} 
      <button
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
  <button @click="turnToIndex" >turn to index</button>
    </div>
  </template>
  
  <script>
  import { mapState,mapActions } from 'vuex'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    turnToIndex(){
      this.$router.push('/')
    }
  },
    computed: mapState({
      products: state => state.products.all
    }),
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  