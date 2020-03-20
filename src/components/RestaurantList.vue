<template>
<div class="wrapper">
  <div class="restaurants">
    <div class="restaurant" v-for="restaurant in restaurants" :key="restaurant.id">
      <div class="info">
        <h1>{{restaurant.name}}</h1>
      </div>
      <div class="rating">
        <div class="star" v-if="restaurant.rating >= 1">
          <img src="../../public/images/star.jpg">
        </div>
        <div class="star" v-if="restaurant.rating >= 2">
          <img src="../../public/images/star.jpg">
        </div>
        <div class="star" v-if="restaurant.rating >= 3">
          <img src="../../public/images/star.jpg">
        </div>
        <div class="star" v-if="restaurant.rating >= 4">
          <img src="../../public/images/star.jpg">
        </div>
        <div class="star" v-if="restaurant.rating === 5">
          <img src="../../public/images/star.jpg">
        </div>
      </div>
      <div class="price">
        <h4>Price: {{restaurant.price}}</h4>
        <button class="auto" v-on:click="save(restaurant.id)">Save</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RestaurantList',
  props: {
    restaurants: Array
  },
  methods: {
    save(id) {
      id = id - 1;
      this.$root.$data.saved.push({
        id: this.$root.$data.restaurants[id].id,
        name: this.$root.$data.restaurants[id].name,
        rating: this.$root.$data.restaurants[id].rating,
        price: this.$root.$data.restaurants[id].price,
        tags: this.$root.$data.restaurants[id].tags,
      });
    },
  }
}
</script>

<style scoped>

.rating {
  display: flex;
  justify-content: left;
  padding-top: 5%;
  padding-left: 4%;
}

.star img {
  width: 20px;
  padding-left: 1%;
  padding-right: 1%;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.restaurants {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.restaurant {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.info {
  background: #FFE4C4;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 100%;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  width: 30%;
}

button:hover {
  background: #D2691E;
}

.auto {
  margin-left: auto;
}
</style>
