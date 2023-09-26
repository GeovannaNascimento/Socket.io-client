const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.log(`Título do Post: ${data.title}`);
  } else {
    console.error('Erro ao fazer a requisição:', error);
  }
});
