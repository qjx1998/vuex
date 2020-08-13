<template>
  <div id="app">
     <h1>{{ count }}</h1>
     <button @click="addNum">+</button>
     <button @click="deser">也加</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    addNum(){
      this.$store.commit('increate');
    },
    deser(){
      this.$store.dispatch('decrease', '123');
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
