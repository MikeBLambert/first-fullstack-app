<template>
  <div id="app">
    <header class="app-header">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/countries">Countries</router-link>
      </nav>
      <!-- <img alt="plane" src="./assets/plane.jpeg"> -->
    </header>
    
    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-header {
  background: url("https://cdn-images-1.medium.com/max/1330/1*_6EdJgpcWyeWne36eFH7eA@2x.jpeg");
  height: 400px;
}
</style>

