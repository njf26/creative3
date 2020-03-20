<template>
<div>
<h1>Restaurant Finder</h1>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchName" />
      </form>
    </div>
  </div>
  <RestaurantList :restaurants="restaurants" />
</div>
</template>

<script>
import RestaurantList from "../components/RestaurantList.vue"
export default {
  name: 'Home',
  components: {
    RestaurantList
  },
  data() {
    return {
      searchName: '',
    }
  },
  computed: {
    restaurants() {
      return this.$root.$data.restaurants.filter(restaurant =>
      (restaurant.name.toLowerCase().search(this.searchName)
      >= 0)
      );
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

h1 {
  text-align: center;
}
</style>
