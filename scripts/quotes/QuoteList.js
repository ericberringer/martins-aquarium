import { useQuote } from './QuoteDataProvider.js'
import { Quote } from './Quote.js'

export const QuoteList = () => {
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuote()

    let quoteHTMLRepresentation = ""
    for(const quoteObject of quotes) {
        
        quoteHTMLRepresentation += Quote(quoteObject)
    }
        contentElement.innerHTML += `
        <article class="quoteList">
            ${quoteHTMLRepresentation}
        </article>
        `

}


