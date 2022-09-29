import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers = getWalkers()
const allWalkerCities = getWalkerCities()
const cityList = getCities()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

// Function to get a single walker's assignments.
// declare an empty array to hold the walker's assignments
// loop through all the aissgnments(allWalkerCities)
    // If the walker id matches the current assignment's walker id
        // Add the current assignment to the walker's assignment array
// return walker's assignment array
const filterWalkerCities = (walker) => {
    const assignments = []
    for (const assignment of allWalkerCities){
        if (assignment.walkerId === walker.id) {
            assignments.push(assignment)
        }
    }
    return assignments
}
const assignedCityNames = (assignedCities) => {
    let cityNames = []
    for (const city of cityList) {
        for (const assignment of assignedCities) {
            if (city.id === assignment.cityId) {
                cityNames.push(city.name)
            }
        }
    }
    return cityNames.join(" and ")
}


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("walker")) {

            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assigned = filterWalkerCities(walker)
                    const assignedCities = assignedCityNames(assigned)
                    window.alert(`${walker.name} services ${assignedCities}`)
                }
            }
        }
    }
)
