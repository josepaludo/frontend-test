import addChangeListenerToSelects from "./selectsChangeListener"


const PLANTS = []

fetch('/script/plants.json')
    .then(response => (
        response.json()
    ))
    .then(data => {
        data.forEach(item => {
            const fileName = item.url.split("/plants/")[1]
            // Use local images instead
            item.url = '../images/plant photos/'+fileName
            PLANTS.push(item)
        })
    })
    .catch(error => {
        console.log("Error loading the JSON file:", error)
    })
    .finally(() => {
        addChangeListenerToSelects(PLANTS)
    })
