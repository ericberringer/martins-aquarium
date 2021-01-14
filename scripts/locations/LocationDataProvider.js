const locationCollection = [
    {
       image: "../images/carribbean.jpeg",
       place: "Bermuda",
       subtitle: "Bermuda is home to a variety of exotic fish."
    },
    {
       image: "../images/fiji.jpg",
       place: "Fiji",
       subtitle: "Fiji is very far away, they have fish."
    },
    {
       image: "../images/crete.jpg",
       place: "Crete",
       subtitle: "I'll give you $10 if you can tell me where Crete is. They too have fish."
    },
    
]

export const useLocation = () => {
    return locationCollection.slice()
}