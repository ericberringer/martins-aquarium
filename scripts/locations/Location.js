export const Locations = (location) => {
    return `
        <div class="card" style="width: 14rem;">
            <img class="card-img-top" src="${location.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${location.place}</h5>
            <p class="card-text">${location.subtitle}</p>
            </div>
        </div>
        `
}