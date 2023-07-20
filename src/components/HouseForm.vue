<template>
  <form @submit.prevent="handleSubmit()">

<div class="form-floating mb-3">
  <input v-model="editable.bedrooms" required type="number" class="form-control" id="bedrooms" placeholder="bedrooms...">
  <label for="bedrooms">bedrooms</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editable.bathrooms" required type="number" class="form-control" id="bathrooms" placeholder="bathrooms...">
  <label for="bathrooms">bathrooms</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editable.imgUrl" required type="url" class="form-control" id="imgUrl" placeholder="ImgUrl...">
  <label for="imgUrl">ImgUrl</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editable.levels" required type="number" class="form-control" id="levels" placeholder="levels..."
    min="1800" max="2027">
  <label for="levels">levels</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editable.price" required type="number" class="form-control" id="price" placeholder="Price..."
    min="0" max="100000000">
  <label for="price">Price</label>
</div>
<div class="form-floating mb-3">
  <textarea v-model="editable.description" class="form-control" placeholder="Leave a description here"
    id="description" style="height: 100px"></textarea>
  <label for="description">Description</label>
</div>
<button type="submit" class="btn btn-success">Submit</button>
</form>
</template>


<script>
import { ref, watchEffect } from 'vue'
import { AppState } from "../AppState.js"

export default {
  setup(){
    const editable = ref({})

    // watchEffect(()=> {
    //   if(AppState.activeHouse){
    //     const brokenRefHouse = {...AppState.activeHouse}
    //     editable.value = brokenRefHouse
    //   }
    // })

    return {
      editable,
      handleSubmit(){
        if(editable.value.id){
          this.editHouse()
        }else{
          this.createHouse
        }
      },
      async createHouse(){

      }
      async editHouse(){}
      
    }

  }
}
</script>


<style lang="scss" scoped>

</style>