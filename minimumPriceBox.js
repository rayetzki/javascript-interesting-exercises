const minPriceBox = (item) => {
    const itemParameters = Object.keys(item)
    const itemValues = Object.values(item)

    const foundBox = []
    const usedParameters = []
    const checkIfBoxAlreadyFound = box => foundBox.includes(box)
    const alreadyUsedParameter = parameter => usedParameters.includes(parameter)

    boxes.forEach(box => {
        const boxValues = Object.values(box).slice(0, 3)
        for (let i = 0; i <= itemParameters.length; i++) {
            if ((boxValues[i] >= itemValues[i]) && (boxValues[i + 1] >= itemValues[i + 1]) && (boxValues[i + 2] >= itemValues[i + 2])) {
                alreadyUsedParameter(itemParameters[i]) ? null : usedParameters.push(itemParameters[i])
                checkIfBoxAlreadyFound(box) ? null : foundBox.push(box)
            } else if ((boxValues[i - 1] >= itemValues[i - 1]) && (boxValues[i] >= itemValues[i]) && (boxValues[i + 1] >= itemValues[i + 1])) {
                alreadyUsedParameter(itemParameters[i]) ? null : usedParameters.push(itemParameters[i])
                checkIfBoxAlreadyFound(box) ? null : foundBox.push(box)
            } else if ((boxValues[i - 2] >= itemValues[i - 2]) && (boxValues[i - 1] >= itemValues[i - 1]) && (boxValues[i] >= itemValues[i])) {
                alreadyUsedParameter(itemParameters[i]) ? null : usedParameters.push(itemParameters[i])
                checkIfBoxAlreadyFound(box) ? null : foundBox.push(box)
            } else if ((boxValues[i] <= itemValues[i]) && (boxValues[i + 1] >= itemValues[i + 1]) && (boxValues[i + 2] >= itemValues[i + 2])) {
                alreadyUsedParameter(itemParameters[i]) ? null : usedParameters.push(itemParameters[i])
                checkIfBoxAlreadyFound(box) ? null : foundBox.push(box)
            } else if ((boxValues[i] <= itemValues[i]) && (boxValues[i - 1] >= itemValues[i - 1]) && (boxValues[i + 1] >= itemValues[i + 1])) {
                alreadyUsedParameter(itemParameters[i]) ? null : usedParameters.push(itemParameters[i])
                checkIfBoxAlreadyFound(box) ? null : foundBox.push(box)
            } else if ((boxValues[i] <= itemValues[i]) && (boxValues[i - 1] >= itemValues[i - 1]) && (boxValues[i - 2] >= itemValues[i - 2])) {
                alreadyUsedParameter(itemParameters[i]) ? null : usedParameters.push(itemParameters[i])
                checkIfBoxAlreadyFound(box) ? null : foundBox.push(box)
            }
        }
    })

    const parametersFitPrices = foundBox.map(box => box.price)
    const minPriceBox = Math.min(...parametersFitPrices) 
    return foundBox.filter(box => box.price === minPriceBox)
}

const parcel = {
    width: 10,
    height: 25,
    depth: 20
}

const boxes = [
    {
        width: 10,
        height: 20,
        depth: 15,
        price: 10
    }, 
    {
        width: 12,
        height: 25,
        depth: 20,
        price: 20
    }, 
    {
        width: 15,
        height: 30,
        depth: 25,
        price: 30
    }, 
    {
        width: 20,
        height: 35,
        depth: 30,
        price: 40
    }
]

console.log(minPriceBox(parcel))