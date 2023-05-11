import { appState } from "../AppState.js"



class HouseService {

  setActive(houseId) {
    let foundHouse = appState.houses.find(h => h.id == houseId)
    console.log(foundHouse);
    appState.activeHouse = foundHouse
  }



  
}