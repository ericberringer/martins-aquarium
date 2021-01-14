const fishCollection = [ 
    {
        name: "Nemo",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: "1 Foot",
        image: "../images/Nemo_Maybe.png"
    },
    {
        name: "Mike",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: "1 Foot",
        image: "../images/Fish1.jpg"
    },
    {
        name: "Jeff",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: "1 Foot",
        image: "../images/Nemo_Maybe.png"
    },
    {
        name: "Skinny",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: "1 Foot",
        image: "../images/Nemo_Maybe.png"
    },
    {
        name: "Largo",
        species: "Amphiprioninae",
        diet: "Curstaceans",
        hometown: "Rio de Janeiro",
        size: "1 Foot",
        image: "../images/Nemo_Maybe.png"
    },
   
]

export const useFish = () => {
    return fishCollection.slice()
}