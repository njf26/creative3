<template>
<div id="app">

  <div id="menu">

    <div id="brand">
      <router-link to="/">
        <img src="/images/food-logo.jpg">
      </router-link>
    </div>

    <div id="side">
      <router-link to="/sort">
        <div class="menu-item sort">
          <p>Sort</p>
          </div>
      </router-link>
      <router-link to="/saved">
        <div class="menu-item saved">
          <p>Saved</p>
        </div>
      </router-link>
    </div>

  </div>
  <router-view />

  <div class='footer-container'>
    <div class='footer'>
      <p><a href="https://github.com/njf26/creative3.git">
        Website github
      </a></p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    numberOfItems() {
      return this.$root.$data.saved.length;
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: space-around;


}

.menu-item {
  display: flex;
  flex-direction: column;
  font-size: 150%;
}

.menu-item p {
  margin: 0px;
}

.saved {
  margin-right: 50px;
}

.footer-container {
  display: flex;
  justify-content: center;
  background-color: #111;
  color: #fff;
  width: 100%;
  height: 100%;
}

.footer {
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
  text-decoration: none;
}

.footer a {
  color: #fff;
}

</style>
