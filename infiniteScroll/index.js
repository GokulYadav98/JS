(()=>{
const quotesElement = document.querySelector('.quotes');
const loader = document.querySelector('.loader');

let page = 1;
let limit = 10;
let total = 0;

const getQuotes = async (page,limit) => {
    const API = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
    const response = await fetch(API);
    if(!response.ok) {
        throw new Error(`An Error Occured ${response.status}`)
    } else {
        return await response.json();
    }
}

const showQuotes = (quotes) =>{
    quotes.forEach(quote => {
        const quotesEl = document.createElement('blockquote');
        quotesEl.classList.add('quote');
        quotesEl.innerHTML = `
            <span>${quote.id}</span>
            ${quote.quote}
            <footer>${quote.author}</footer>
        `;
        quotesElement.appendChild(quotesEl);
    });
}

const hasMoreQuotes = (page, limit, total) =>{
    const index = ( page - 1 ) * limit + 1;
    return total == 0 || index < total;
}

const loadQuotes = async (page,limit) => {
    try {   
        if (hasMoreQuotes(page,limit,total)) {
            const response =  await getQuotes(page,limit);
            showQuotes(response.data);
            total = response.total;
        }
    } catch(e) {
        console.log("Error Message", e.message);
    }
    finally {

    }
}

document.addEventListener('scroll',(event)=>{
    const {scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if( (scrollTop + clientHeight > scrollHeight - 5) && hasMoreQuotes(page,limit,total) ) {
        loadQuotes(page,limit);
        page++;
    }
}, {
    passive: true
})

loadQuotes(page,limit);
})();