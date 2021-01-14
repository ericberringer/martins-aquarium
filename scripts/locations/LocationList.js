import { useLocation } from './LocationDataProvider.js'

export const LocationList = () => {
    const contentElement = document.querySelector(.containerLeft__travelLocations)
    const locations = useLocation()

    contentElement.innerHTML += `
    <article class="locationList">
        All the locations go here
    </article>
    `
}