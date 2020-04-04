<template>
  <div id="app">
     <router-view></router-view> 
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Home from './views/Home.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Home,
  },
});
</script>

<style lang="scss">
#app{
  padding: 0;
  margin: 0;
}
</style>
