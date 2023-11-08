
const RESULTS_CONTAINER = document.getElementById("results-container")
const RESULTS = document.getElementById('results')
const NO_RESULTS = document.getElementById('no-results')

const PLANTS = []

const SUN = { high: "high", low: "low", no: "no" }
const WATER = { regularly: "regularly", rarely: "rarely", daily: "daily" }


fetch('../plants.json')
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
    .catch(error => {
        console.log("Error loading the JSON file:", error)
    }
)

function main() {
    PLANTS.forEach(plant => {
        const {url, name, price} = plant
        const item = createItem({url, name, price})
        RESULTS_CONTAINER.appendChild(item)
    })
    RESULTS.style.display = "none"
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


// ---------------------CREATE ITEM---------------------- //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv //

function createItem(
    {url, name, price}
) {
    const item = document.createElement('div')
    item.classList.add('results-item')

    const imgContainer = createImgContainer({url, name})
    item.appendChild(imgContainer)

    const textContainer = createTextContainer({name, price})
    item.appendChild(textContainer)

    return item
}

function createImgContainer({url, name}) {

    const img = document.createElement('img')
    img.src = url
    img.alt = `${name} image.`

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(img)

    return imgContainer
}

function createTextContainer({name, price}) {

    const {nameH2, priceH2} = createNameH2AndPriceH2({name, price})

    const textContainer = document.createElement('div')
    textContainer.appendChild(nameH2)
    textContainer.appendChild(priceH2)

    return textContainer
}

function createNameH2AndPriceH2({name, price}) {

    const nameH2 = document.createElement('h2')
    nameH2.innerHTML = name
    const priceH2 = document.createElement('h2')
    priceH2.style.marginTop = '5px';
    priceH2.innerHTML = `$ ${price}`

    return { nameH2, priceH2 }
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
// ---------------------CREATE ITEM---------------------- //
