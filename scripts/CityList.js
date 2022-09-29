import { getWalkers, getCities } from "./database.js"

// const walkers = getWalkers()
const cities = getCities()


// export const CityList = () => {
//     let citiesHTML = "<ul>"

//     for (const walker of walkers) {
//         citiesHTML += `<li>${walker.city}</li>`
//     }

//     citiesHTML += "</ul>"

//     return citiesHTML
// }

export const CityList = () => {
    let citiesHTML = "<ul>"
    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

