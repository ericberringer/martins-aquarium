const locationCollection = [
    {
       author: "Dirk Diggler",
       year: "2002",
        quote: "If you're not moving, you're not going anywhere."
    },
    {
       author: "Dominic DeCoco",
       year: "1956",
        quote: "Hitler was a bad guy."
    },
    {
       author: "Jack from Stare Farm",
       year: "2020",
        quote: "Insurance is good. I am wearing khakis."
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}