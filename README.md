## 1，Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## 2，Installation

### 2.1,cli

```
npm install -g @vue/cli
vue create hello-world
```

### 2.2 vue-router

```
npm install vue-router@4
```

## 3，create the pages

### 3.1 create index.vue

```
src/pages/index.vue
```

code

```
<template>
    <div class="hello">
     <h1>Index</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld'
  }
  </script>
 
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
```

### 3.2 create home.vue

```
src/pages/home.vue
```

code

```
<template>
    <div class="hello">
      <h1>home</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
```

## 4，router

### 4.1 installation 

Execute the installation command under the project folder

```
npm install vue-router@4
```

### 4.2 create the router

```
src/router.js
```

code

```
import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import Home from "./pages/home"

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Index },{ path: '/home', component: Home }],
})
```

### 4.3 configure 

Configure the router  file

```
src/main.vue
```

code

```
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App).use(router)
app.mount('#app')
```

### 4.4 router-view

this file is mainly used to display the pages in the route

```
src/App.vue
```

code

```
<template>
   <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## 5，Vuex

### 5.1 installation 

```
npm install vuex@next --save
```

### 5.2 create store

```
└── store
    ├── index.js          # where we assemble modules and export the store
    └── modules
        ├── cats.js       # home module
        └── products.js      # index module
```

#### 5.2.1 cats

```
const state = () => ({
  title:"cats list",
  items: [],
})
const getters = {
  cartProducts: (state) => {
    return state.items
  }
} 
const actions = {
  addProductToCart ({ state, commit }, product) {
    console.log(state)
    commit('pushProductToCart',product)
  }
}
const mutations = {
  pushProductToCart (state, product) {
    state.items.push(product)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
```

#### 5.2.2 products

```
const state = () => ({
  title:"Products name",
  all: [{id:0,title:"product0",inventory:10},{id:1,title:"product1",inventory:10},{id:2,title:"product2",inventory:10}]
})
const getters = {}
const actions = {}
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
```

#### 5.2.3 index 

```
import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
```

