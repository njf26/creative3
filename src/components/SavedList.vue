<template>
<ol>
  <div class="restaurants">
    <div class="restaurant" v-for="restaurant in restaurants" :key="restaurant.id"
    draggable="true" v-on:dragstart="dragItem(restaurant)" v-on:dragover.prevent
    v-on:drop="dropItem(restaurant)">
    <li>

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
        <button class="auto" v-on:click="remove(restaurant)">Remove from Saved</button>
      </div>

    </li>
    </div>
  </div>
</ol>
</template>

<script>
export default {
  name: 'SavedList',
  props: {
    restaurants: Array
  },
  methods: {
    remove(toRemove) {
      let index = this.$root.$data.saved.indexOf(toRemove);
      this.$root.$data.saved.splice(index,1);
    },
    dragItem(item) {
      this.$root.$data.drag = item;
    },
    dropItem(item) {
      const indexItem = this.$root.$data.saved.indexOf(this.$root.$data.drag);
      const indexTarget = this.$root.$data.saved.indexOf(item);
      this.$root.$data.saved.splice(indexItem, 1);
      this.$root.$data.saved.splice(indexTarget, 0, this.$root.$data.drag);
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
  flex-wrap: wrap;
}

.restaurant {
  display: flex;
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.info {
  background: #FFE4C4;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  width: 100%;
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
  background: #000;
  color: white;
  border: none;
  width: 100%;
  height: 80px;
}

.up {
  background: #4CAF50;
  margin-left: auto;
}

.down {
  background: #8B0000;
  margin-left: auto;
}

button:hover {
  background: #D2691E;
}

.auto {
  margin-left: auto;
}

</style>
