const fishCollection = [ 
    {
        name: "Nemo",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: 3,
        image: "../images/Nemo_Maybe.png"
    },
    {
        name: "Mike",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: 15,
        image: "../images/Fish1.jpg"
    },
    {
        name: "Jeff",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: 7,
        image: "../images/Nemo_Maybe.png"
    },
    {
        name: "Skinny",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: 21,
        image: "../images/Nemo_Maybe.png"
    },
    {
        name: "Largo",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: 23,
        image: "../images/Nemo_Maybe.png"
    },
   
]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {

    const holyFish = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
    }
    }

    return holyFish 
}

export const soldierFish = () => {

    const soldiers = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 5 === 0) {
        soldiers.push(fishObject)
    }
}

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 3 !== 0 && fishObject.length % 5 !== 0) {
        regularFish.push(fishObject)
    }
}

    return regularFish
}




