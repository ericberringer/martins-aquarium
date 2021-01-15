// import { useFish } from './FishDataProvider.js'
import { FishList } from './FishList.js'
import { useLocation } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'
import { useQuote } from './quotes/QuoteDataProvider.js'
import { QuoteList } from './quotes/QuoteList.js'


const quoteArray = useQuote()
const locationArray = useLocation()
// const allTheFish = useFish()

// This for..of loop is giving me each object within the array. console.log(locationArray) would
// only print the whole array without returning each individual object and its key value pairs.
for(const quote of quoteArray) {
    console.log(quote);
}


// for(const locations of locationArray) {
//     console.log(locations);
// }

// for(const fish of allTheFish) {
//     console.log(fish)
// }

FishList()
LocationList()
QuoteList()