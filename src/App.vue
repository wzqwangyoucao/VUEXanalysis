<template>
  <div id="app">
    <div id="nav">
      {{$store.state.age}}
      <!-- {{$store.getters.myAge}} -->
      {{$store.state.a.age}}
      {{$store.state.b.age}}
      <!-- {{$store.state.d.age}} -->
      <button @click="change">改变</button>
      <button @click="changeAsync">改变</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    change() {
      console.log(this.$store)
      this.$store.commit('syncChange', 10)
    },
    changeAsync() {
      this.$store.dispatch('asyncChange', 20)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
