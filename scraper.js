const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  try {
    const requisicao = await axios.get('https://www.netshoes.com.br/p/tenis-adidas-breaknet-masculino-NQQ-4378-058');
    const html = requisicao.data;
    const carregaHtml = cheerio.load(html);
    const titulo = carregaHtml('.product-name').text().trim();
    const preco = carregaHtml('span.saleInCents-value').first().text().trim();
    const imagem = carregaHtml('.image-presenter__carousel img').attr('src').trim();
    const descricao = carregaHtml('.features--description').text().trim();
    const resultado = {
        titulo,
        preco,
        imagem,
        descricao
    };

    console.log('Título da Página: ', titulo);
    console.log('Preço: ', preco);
    console.log('Imagem: ', imagem);
    console.log('Descrição: ', descricao);

    fs.writeFileSync('resultado.json', JSON.stringify(resultado, null, 2));

  } catch (error) {
    console.error('Erro ao fazer scraping:', error);
  }
}

scrape();

