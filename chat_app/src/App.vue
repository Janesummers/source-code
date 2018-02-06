<template>
  <div id="app">
    <broadsideNavigation></broadsideNavigation>
    <router-view/>
  </div>
</template>

<script>
import broadsideNavigation from '@/components/broadsideNavigation'
export default {
  name: 'App',
  components: {
    broadsideNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  padding-left: 60px;
}
</style>
