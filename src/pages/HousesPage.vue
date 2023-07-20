<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Title and Form Button -->
      <div class="col-12 text-center">
        <h1>Houses</h1>
        <button class="btn btn-primary" >
          Create Listing
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div v-for="house in houses" :key="house.id" class="col-10">
        <HouseCard :houseProp="house"/>
      </div>

    </div>
  </div>  

  <ModalComponent>
    <template #header>

    </template>
    <template #body>
      
    </template>
  </ModalComponent>
</template>


<script>
import { logger } from "../utils/Logger.js";
import { computed, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { housesService} from '../services/HousesService.js'
import { AppState } from "../AppState.js";
import HouseCard from "../components/HouseCard.vue";
import ModalComponent from "../components/ModalComponent.vue";



export default {
    setup() {
        onMounted(() => {
            // logger.log('Houses Page Mounted');
            GetHouses();
        });
        async function GetHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                logger.log(error);
                Pop.error(error.message);
            }
        }
        return {
            houses: computed(() => AppState.houses),
        };
    },
    components: { HouseCard, ModalComponent }
}
</script>


<style lang="scss" scoped>

</style>