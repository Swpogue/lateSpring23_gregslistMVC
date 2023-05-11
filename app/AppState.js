import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { House } from "./Models/House.js"
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  // cars = [
  //   new Car({ make: 'Dodge', model: 'Viper', year: 2002, price: 50000, description: 'Super sick car, goes fast and guzzles gas', color: '#000000', img: 'https://bringatrailer.com/wp-content/uploads/2021/09/2002_dodge_viper_1635345255dcf15fe44065556AB8777-FE18-4724-8C40-32A88E23CDA0.jpeg?fit=1657%2C1104' }),
  //   new Car({ make: 'Subaru', model: 'Baja', year: 2004, price: 2500, description: 'Baja fresh baby', color: '#dea44e', img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg' }),
  //   new Car({ make: 'Mazda', model: 'Miata', year: 2004, price: 6000, description: 'Baja fresh baby', color: '#bac4d0', img: 'https://bringatrailer.com/wp-content/uploads/2022/09/2004_mazda_mazdaspeed-mx-5-miata_2004_mazda_mazdaspeed-mx-5-miata_8300ef52-a541-4049-b310-288b5f8732ce-75ukgs-11738-93546.jpg?fit=940%2C627' }),
  // ]

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])

  /** @type {import('./Models/Car').Car|null} */
  activeCar = null

  userName = ''

  houses = [
    new House({
      id: '',
      creatorName: '',
      year: '1974',
      name: 'Mid-Century Modern Single Family Home',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),
    new House({
      creatorName: '',
      year: '1984',
      name: 'Modern Single Family Home',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      price: 350000,
      description: 'Renovated modern home',
      imgUrl: 'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg',
    }),

  ]





}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
