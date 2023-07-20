import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {

  async getHouses() {
    const res = await api.get('api/houses')
    // logger.log(res.data)
    const houses = res.data.map(h => new House(h))
    AppState.houses = houses
    // logger.log(AppState.houses)
  }

}


export const housesService = new HousesService()