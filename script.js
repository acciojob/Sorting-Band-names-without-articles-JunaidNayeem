//your code here
// script.js

let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who', 'Aerosmith'];

// Remove articles from band names and convert to lowercase for comparison
let bandNamesWithoutArticles = bandNames.map(name => name.replace(/^(a |an |the )/i, '').toLowerCase());

// Sort the band names in lexicographic order
bandNamesWithoutArticles.sort();

// Display the sorted band names in the <ul id="band"> tag
let bandListElement = document.getElementById('band');
bandNamesWithoutArticles.forEach(name => {
    let listItem = document.createElement('li');
    listItem.textContent = bandNames[bandNamesWithoutArticles.indexOf(name)];
    bandListElement.appendChild(listItem);
});

