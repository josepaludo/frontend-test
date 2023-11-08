
export default function createItem({url, name, price}) {

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
