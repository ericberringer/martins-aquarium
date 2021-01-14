const locationCollection = [
    {
       image: "",
       place: "Bermuda",
       subtitle: "Bermuda is home to a variety of exotic fish."
    },
    {
       image: "",
       place: "Fiji",
       subtitle: "Fiji is very far away, they have fish."
    },
    {
       image: "",
       place: "Crete",
       subtitle: "I'll give you $10 if you can tell me where Crete is. They too have fish."
    },
    
]

export const useLocation = () => {
    return locationCollection.slice()
}