import { useLocation } from './LocationDataProvider.js'
import { Locations } from './Location.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

    let locationHTMLRepresentation = ""
    for(const location of locations) {
        locationHTMLRepresentation += Locations(location)
    }


    contentElement.innerHTML += `
    <article class="locationList">
        ${locationHTMLRepresentation}
    </article>
    `
}