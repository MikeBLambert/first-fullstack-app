<template>
  <div id="app">
    <header class="container">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/countries">Countries</router-link>
      </nav>
      <h1>Know where you've been so you can know where you're going...</h1>
    </header>
    
    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>

export default {

};
</script>

<style>

html {
  background-color: rgb(5, 16, 63);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: white;
  text-align: left;

  margin-left: 30px;
}

.container {
  background: url("https://cdn-images-1.medium.com/max/1330/1*_6EdJgpcWyeWne36eFH7eA@2x.jpeg");
  background-size: cover;
  display: flex;
  height: 400px;
  justify-content: flex-start space-around;
  flex-direction: column;
  grid-template-rows: 200px 200px;
}

a {
  color: white;
  text-decoration: none;
  text-align: center;
}

nav a {
  float: left;
  /* margin-top: 200px; */
  margin: 30px 0px 0px 20px;
  padding: 10px;
  border: 1px solid black;
  background-color: rgb(2, 36, 129);
  border-radius: 15px;
  font-size: 25px;
}
</style>

