<template>
  <div class="bg-white border border-dark rounded d-flex my-2">
    <img class="img-fluid house-img rounded-start" :src="houseProp.imgUrl" alt="">
    <div class="p-2">
      <h3>Bedrooms: {{ houseProp.bedrooms }} bathrooms: {{ houseProp.bathrooms }} floors: {{ houseProp.levels }}</h3>
      <h3>${{ houseProp.price }}</h3>
      <h4>Listed By: {{ houseProp.creator.name }} on {{ houseProp.createdAt }}</h4>
      <p>{{houseProp.description}}</p>
      <img class="img-fluid creator-picture mb-3" :src="houseProp.creator.picture" alt="">
    </div>
  </div>
</template>


<script>
import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { computed } from 'vue';


export default {
  props: {
    houseProp: {type: House, required: true}
  },
  setup(){
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.house-img {
  width: 40%;
  object-fit: cover;
  object-position: center;
}

.creator-picture {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}

</style>