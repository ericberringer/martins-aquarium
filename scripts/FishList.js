/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

// Fish list needs to be exported to main.js using an export command.
export const FishList = () => {

    // Get a reference to the `<article class="content">` element. This is the container in the html where the fish info will live.
    const contentElement = document.querySelector(".containerLeft__fishList")
    const fishes = useFish()
// Change this const to a holy fish variable that equals the holyfish function mostHolyFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentation = ""
    
    for (const fish of fishes) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       
       fishHTMLRepresentation += Fish(fish)
    //    += will add fish to the end of the list.
    }


    // Add to the existing HTML in the content element. This attaches the html to the bottom of the referenced container.
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentation}
        </article>
    `
}

