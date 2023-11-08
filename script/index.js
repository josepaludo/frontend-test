import createItem from "./createItem"


const RESULTS_CONTAINER = document.getElementById("results-container")
const RESULTS = document.getElementById('results')
const NO_RESULTS = document.getElementById('no-results')

const PLANTS = []

const SUN = { high: "high", low: "low", no: "no" }
const WATER = { regularly: "regularly", rarely: "rarely", daily: "daily" }

fetch('/script/plants.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const fileName = item.url.split("/plants/")[1]
            // Use local images instead
            item.url = '../images/plant photos/'+fileName
            PLANTS.push(item)
        })
        main()
    })
    .catch(error => console.log("Error loading the JSON file:", error)
)

function main() {
    PLANTS.forEach(plant => {
        const {url, name, price} = plant
        const item = createItem({url, name, price})
        RESULTS_CONTAINER.appendChild(item)
    })
    NO_RESULTS.style.display = "none"
}

function switchVisibility() {
    RESULTS.style.display = RESULTS.style.display === "none" ? "block" : "none"
    NO_RESULTS.style.display = NO_RESULTS.style.display === "none" ? "block" : "none"
}

function handleSubmit() {
    console.log("heeeee")
}

function sunFilter(sun) {
    return PLANTS.filter(plant => plant.sun === sun)
}

function waterFilter(water) {
    return PLANTS.filter(plant => plant.water === water)
}

function toxicityFilter(toxicity) {
    return PLANTS.filter(plant => plant.toxicity === toxicity)
}
