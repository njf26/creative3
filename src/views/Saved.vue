<template>
<div>
  <h1>Your Saved Restaurants</h1>
  <SavedList :restaurants="restaurants" />
</div>
</template>

<script>
import SavedList from "../components/SavedList.vue"
export default {
  name: 'restaurants',
  components: {
    SavedList
  },
  computed: {
    restaurants() {
      return this.$root.$data.saved;
    },
  },
}
</script>
