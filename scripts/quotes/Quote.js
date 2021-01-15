export const Quote = (quote) => {
    return `
        <div class="card" style="width: 14rem;">
            <div class="card-body">
              <h5 class="card-title">${quote.author}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${quote.year}</h6>
              <p class="card-text">${quote.quote}</p>            
            </div>
        </div>
    `
}