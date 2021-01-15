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


// export const mostHolyFish = () => {
//     // 3, 6, 9, 12, etc... fish
//     const holyFish = []

//     for (const angels of fishCollection) {
//         if (angels.length % 3 === 0) {
//             holyFish.push(angels)
//     }

//     return holyFish
// }

// export const soldierFish = () => {
//     // 5, 10, 15, 20, 25, etc... fish
//     const soldierFish = []

//     for (const soldiers of fishCollection) {
//         if (soldiers.length % 5 === 0) {
//         soldierFish.push(soldiers)
//     }

//     return soldiers
// }

// export const nonHolyFish = () => {
//     // Any fish not a multiple of 3 or 5
//     const nonHolyFish = []

//     for (const regularFish of fishCollection) {
//         if (regularFish.length % 3 !== 0 && regularFishFish.length % 5 !== 0) {
//         nonHolyFish.push(regularFish)
//     }
// }

//     return regularFish
// }




