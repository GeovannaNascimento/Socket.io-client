const fs = require('fs');
const cheerio = require('cheerio');

// Lendo o arquivo HTML
const html = fs.readFileSync('cheche.html', 'utf-8');

// Carregando o HTML com o Cheerio
const $ = cheerio.load(html);

// Selecionando e manipulando elementos
const titulo = $('h1').text();
const itens = $('.lista li').map((index, elemento) => $(elemento).text()).get();

console.log('Título:', titulo);
console.log('Itens:');
itens.forEach(item => console.log(item));
