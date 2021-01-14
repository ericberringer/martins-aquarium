/**
 *  Fish which renders individual fish objects as HTML
 */

                
export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
}

// ${fish.name} is referencing a key/value pair on an object. Dot notation is used to grab image,name,species,
// length, location, food our of the fish variable.

// Calling Fish will give us the info for every fish. Fish()