<template>
  <div id="app">
    <Operation></Operation>
    <input class="title" type="text" v-show="when_content !== ''" v-model="title" />
    <textarea class="full_content" v-show="when_content !== ''" v-model="content"></textarea>
  </div>
</template>

<script>
import Operation from './components/operation'

export default {
/* eslint-disable */
  name: 'App',
  data () {
    return {
      content: '',
      id: '',
      title: ''
    }
  },
  watch: {
    content: {
      handler () {
        this.$store.commit('change_content', {
          id: this.id,
          title: this.title,
          content: this.content
        })
      },
      deep: true
    },
    title: {
      handler () {
       console.log('changes')
       this.$store.commit('change_content', {
         id: this.id,
         title: this.title,
         content: this.content
       })
      },
      deep: true
    }
  },
  computed: {
    when_content () {
      this.content = this.$store.state.when_content
      this.id = this.$store.state.choose_id
      this.title = this.$store.state.title
      return this.$store.state.when_content
    }
  },
  components: {
    Operation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
