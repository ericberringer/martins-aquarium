// import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'
import { mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft__fishList")
    

    const holyFishArray = mostHolyFish()
    const soldierFishArray = soldierFish()
    const nonHolyFishArray = nonHolyFish()

    let holyFishHTMLRepresentation = "<h3>Holy Fish</h3>"
    
    for (const fishObj of holyFishArray) {
        holyFishHTMLRepresentation += Fish(fishObj)
     }
    
     let soldierFishHTMLRepresentation = "<h3>Soldier Fish</h3>"
    
     for (const fishObj of soldierFishArray) {
        soldierFishHTMLRepresentation += Fish(fishObj)
     }
    
     let regularFishHTMLRepresentation = "<h3>Regular Fish</h3>"
    
     for (const fishObj of nonHolyFishArray) {
        regularFishHTMLRepresentation += Fish(fishObj)
     }
        
    
    // Add to the existing HTML in the content element. This attaches the html to the bottom of the referenced container.
    contentElement.innerHTML += `
        <article class="fishList">
            ${holyFishHTMLRepresentation}
            ${soldierFishHTMLRepresentation}
            ${regularFishHTMLRepresentation}
        </article>
    `
}

