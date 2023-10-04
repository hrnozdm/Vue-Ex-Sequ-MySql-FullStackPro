<template>
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <router-link class="nav-link ml-auto text-white" to="/songs" >Songs</router-link>
      <div class="d-flex">        
        <router-link class="nav-link ml-auto text-white" to="/register"  v-if="!$store.state.isUserLoggedIn">Register</router-link>
        <router-link class="nav-link ml-auto text-white" to="/login" v-if="!$store.state.isUserLoggedIn">Login</router-link>
        <button  @click="logout"  v-if="$store.state.isUserLoggedIn" class="btn btn-danger">Çıkış</button>
      </div>
    </nav>
  </template>

<script>
 export default{
  data() {
    return {
      
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('setToken',null);
      this.$store.dispatch('setUser',null);
      this.$router.push({
        name:'home'
      })
    }
  }
 }
</script>
  