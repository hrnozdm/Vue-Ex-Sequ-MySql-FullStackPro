<template>
  <div id="app">
    <HeaderComp/>
    <router-link to="/register"></router-link>
    <router-link to="/"></router-link>
   <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
   HeaderComp,
  }
}
</script>

<style>

</style>
