<template>
<div>
<div class="wrapper">
  <div class="dropdown">
    <button class="dropbtn">Sort by Price</button>
      <div class="dropdown-content">
        <a @click="selectPrice('low')" href="#" class="pure-menu-link">Low</a>
        <a @click="selectPrice('medium')" href="#" class="pure-menu-link">Medium</a>
      </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Sort by Rating</button>
    <div class="dropdown-content">
      <a @click="selectRating(1)" href="#" class="pure-menu-link">1</a>
      <a @click="selectRating(2)" href="#" class="pure-menu-link">2</a>
      <a @click="selectRating(3)" href="#" class="pure-menu-link">3</a>
      <a @click="selectRating(4)" href="#" class="pure-menu-link">4</a>
      <a @click="selectRating(5)" href="#" class="pure-menu-link">5</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Sort by Tags</button>
    <div class="dropdown-content">
      <a @click="selectTag('American')" href="#" class="pure-menu-link">American</a>
      <a @click="selectTag('Chinese')" href="#" class="pure-menu-link">Chinese</a>
      <a @click="selectTag('Italian')" href="#" class="pure-menu-link">Italian</a>
      <a @click="selectTag('Mexican')" href="#" class="pure-menu-link">Mexican</a>
      <a @click="selectTag('Asian')" href="#" class="pure-menu-link">Asian</a>
      <a @click="selectTag('Southern')" href="#" class="pure-menu-link">Southern</a>
      <a @click="selectTag('Greek')" href="#" class="pure-menu-link">Greek</a>
      <a @click="selectTag('European')" href="#" class="pure-menu-link">European</a>
      <a @click="selectTag('Seafood')" href="#" class="pure-menu-link">Seafood</a>
      <a @click="selectTag('Fast Food')" href="#" class="pure-menu-link">Fast Food</a>
      <a @click="selectTag('Sit down')" href="#" class="pure-menu-link">Sit down</a>
      <a @click="selectTag('Drive-in')" href="#" class="pure-menu-link">Drive-in</a>
      <a @click="selectTag('Delivery')" href="#" class="pure-menu-link">Delivery</a>
      <a @click="selectTag('Dessert')" href="#" class="pure-menu-link">Dessert</a>
      <a @click="selectTag('Bakery')" href="#" class="pure-menu-link">Bakery</a>
      <a @click="selectTag('Snack')" href="#" class="pure-menu-link">Snack</a>
      <a @click="selectTag('Breakfast')" href="#" class="pure-menu-link">Breakfast</a>
      <a @click="selectTag('Grill')" href="#" class="pure-menu-link">Grill</a>
      <a @click="selectTag('Bbq')" href="#" class="pure-menu-link">Bbq</a>
      <a @click="selectTag('Beverage')" href="#" class="pure-menu-link">Beverage</a>
      <a @click="selectTag('Juice')" href="#" class="pure-menu-link">Juice</a>
      <a @click="selectTag('Smoothie')" href="#" class="pure-menu-link">Smoothie</a>
      <a @click="selectTag('Noodles')" href="#" class="pure-menu-link">Noodles</a>
      <a @click="selectTag('Burger')" href="#" class="pure-menu-link">Burger</a>
      <a @click="selectTag('Pizza')" href="#" class="pure-menu-link">Pizza</a>
      <a @click="selectTag('Chicken')" href="#" class="pure-menu-link">Chicken</a>
      <a @click="selectTag('Sandwich')" href="#" class="pure-menu-link">Sandwich</a>
      <a @click="selectTag('Icecream')" href="#" class="pure-menu-link">Icecream</a>
      <a @click="selectTag('Ice')" href="#" class="pure-menu-link">Ice</a>
      <a @click="selectTag('Frozen Yogurt')" href="#" class="pure-menu-link">Frozen Yogurt</a>
    </div>
  </div>
</div>
  <RestaurantList :restaurants="restaurants" />
</div>
</template>


<script>
import RestaurantList from "../components/RestaurantList.vue"
export default {
  name: 'Sort',
  components: {
    RestaurantList
  },
  data() {
    return {
      category: '',
      price: '',
      rating: '',
      tag: '',
    }
  },
  computed: {
    restaurants() {
      if(this.category === "price"){
        return this.$root.$data.restaurants.filter(restaurant =>
        restaurant.price === this.price);
      }
      else if(this.category === "rating"){
        return this.$root.$data.restaurants.filter(restaurant =>
        restaurant.rating === this.rating);
      }
      else if(this.category === "tag"){
        return this.$root.$data.restaurants.filter(restaurant =>
          restaurant.tags.filter(tag =>
            tag === this.tag).length > 0);
      }
      return this.$root.$data.restaurants;
    }
  },
  methods: {
    selectPrice(priceRange) {
      this.price = priceRange;
      this.category = "price";
    },
    selectRating(rateNum) {
      this.rating = rateNum;
      this.category = "rating";
    },
    selectTag(type) {
      this.tag = type;
      this.category = "tag";
    },
  }
}
</script>




<style scoped>

/* Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.dropdown .dropbtn .dropdown-content{
  margin: 10%;
}

</style>
