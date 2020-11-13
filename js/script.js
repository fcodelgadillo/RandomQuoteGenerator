/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

// The quotes array contains the different quotes, saved as objects, used to generate the content of the project-1
const quotes = [
    {
        quote: 'The important thing is not to stop questioning. Curiosity has it\'s own reason for existence',
        source: ' Albert Einstein ',
        citation: ' www.goalcast.com ',
        tags: ' life advice ',
        authorBio: 'https://en.wikipedia.org/wiki/Albert_Einstein'
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: ' Oscar Wilde ',
        citation: ' www.goodreads.com/quotes ',
        tags: ' life advice ',
        authorBio: 'https://en.wikipedia.org/wiki/Oscar_Wilde'
    },

    {
        quote:'It is strange that only extraordinary men make the discoveries, wich later appear so easy and simple.',
        source: ' Georg C. Lichtenberg ',
        citation: ' www.forbes.com ',
        tags: ' science ',
        authorBio: 'https://en.wikipedia.org/wiki/Georg_Christoph_Lichtenberg'
    },

    {
        quote:'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do.',
        source: ' Mark Twain ',
        citation: ' www.keepinspiring.me/famous-quotes ',
        tags: ' life advice ',
        authorBio: 'https://en.wikipedia.org/wiki/Mark_Twain'
    },
    {
        quote:'Dying is an art, like everything else',
        source: ' Sylvia Plath ',
        citation: ' www.thisdayinquotes.com ',
        year: ' 1962 ',
        tags: ' art ',
        authorBio: 'https://en.wikipedia.org/wiki/Sylvia_Plath'
    },
    {
        quote:'I hold it that a little rebellion, now and then, is a good thing for the tree of liberty',
        source: ' Thomas Jefferson ',
        citation: ' www.thisdayinquotes.com ',
        year: ' 1787 ',
        tags: ' politics ',
        authorBio: 'https://en.wikipedia.org/wiki/Thomas_Jefferson'
    },
    {
        quote:'A little learning is a dangerous thing',
        source: ' Alexander Pope ',
        citation: ' www.thisdayinquotes.com ',
        year: ' 1711 ',
        tags: ' education ',
        authorBio: 'https://en.wikipedia.org/wiki/Alexander_Pope'
    },
    {
        quote:'We have met the enemy and he is us',
        source: ' Walt Kelly ',
        citation: ' www.thisdayinquotes.com ',
        year: ' 1970 ',
        tags: ' science ',
        authorBio: 'https://en.wikipedia.org/wiki/Walt_Kelly'
    },
    {
        quote:'Nothing is certain except death and taxes',
        source: ' Benjamin Franklin ',
        citation: ' www.thisdayinquotes.com ',
        year: ' 1789 ',
        tags: ' economy ',
        authorBio: 'https://en.wikipedia.org/wiki/Benjamin_Franklin'
    },
    {
        quote:'I have always imagined that paradise will be a kind of library',
        source: ' Jorge Luis Borges ',
        citation: ' www.goodreads.com/quotes ',
        tags: ' art ',
        authorBio: 'https://en.wikipedia.org/wiki/Jorge_Luis_Borges'
    }
]


/***
 * `getRandomQuote` function
***/

// This is a function declaration of "getRandomQuotes". As it says, this function generates a random quote from the array of objects quotes.

function getRandomQuote() {
    const randomElement = Math.floor(quotes.length * Math.random());
    return quotes[randomElement];
}

/***
 * `printQuote` function
***/

// The printQuote function is in charge of changing the html code in de index file to print the generated random quote from the function getRandomQuote.

function printQuote() {
    const newQuote = getRandomQuote();
    let htmlString = `<p class="quote">${ newQuote.quote }</p>
                        <p class="source">${ newQuote.source }`;

    if(newQuote.citation) {
        htmlString += `<span class="citation">${ newQuote.citation }</span>`;
    }

    if(newQuote.year) {
        htmlString += `<span class="year">${ newQuote.year }</span>`;
    }

    if(newQuote.tags) {
        htmlString += `<span class="tags">${ newQuote.tags }</span>`;
    }

    htmlString += `<a id="load-bio" class="load-bio" target="_blank" href="${newQuote.authorBio}">Show Quote Author Bio</a></p>`;

    return htmlString;
}

/**
 * `myButton` function
**/

// This function is going to call the printQuote function and change de color of the body element every time the user clicks the button

function myButton() {
    document.getElementById('quote-box').innerHTML = printQuote();
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
}

// setInterval is going to automatize the call of the function myButton every 7 seconds

setInterval(myButton, 7000);
