import createItem from "./createItem"


const RESULTS_CONTAINER = document.getElementById("results-container")
const RESULTS = document.getElementById('results')
const NO_RESULTS = document.getElementById('no-results')

const TYPES = { water: "water", sun: "sun", pets: "pets"}

export default function addChangeListenerToSelects(PLANTS) {

    const selects = document.querySelectorAll('select')
    selects.forEach(select => {select.value = 'none'})
    selects.forEach(select => {
        select.addEventListener('change', () => {
            changeListener({PLANTS, selects, select})
        })
    })
}

function changeListener({PLANTS, selects, select}) {
    resetOthersSelect({selects, select})
    const type = select.name
    const value = select.value
    const filteredPlants = filterList({PLANTS, type, value})
    updateDisplayPlants({filteredPlants})
    updateVisibilitty({filteredPlants})
}

function resetOthersSelect({selects, select}) {
    selects.forEach(selectElement => {
        if (selectElement === select) return
        selectElement.value = 'none'
    })
}

function filterList({PLANTS, type, value}) {

    switch (type) {
        case TYPES.water:
            return PLANTS.filter(plant => plant.water === value)
        case TYPES.sun:
            return PLANTS.filter(plant => plant.sun === value)
        case TYPES.pets:
            if (value === "true") {
                return PLANTS.filter(plant => plant.toxicity === false)
            }
            return PLANTS
        default:
            return []
    }
}

function updateDisplayPlants({filteredPlants}) {
    RESULTS_CONTAINER.innerHTML = ""
    filteredPlants.forEach(plant => {
        const {url, name, price} = plant
        const newPlant = createItem({url, name, price})
        RESULTS_CONTAINER.appendChild(newPlant)
    })
}

function updateVisibilitty({filteredPlants}) {
    if (filteredPlants.length === 0) {
        RESULTS.style.display = "none"
        NO_RESULTS.style.display = "block"
        return
    }
    RESULTS.style.display = "block"
    NO_RESULTS.style.display = "none"
}