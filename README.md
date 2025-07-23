# Web Scraper - Netshoes (Desafio Neogrid)
Este projeto é um **web scraper** desenvolvido em **Node.js**, com o objetivo de extrair informações de um produto na loja online [Netshoes](https://www.netshoes.com.br/). O código faz parte do desafio técnico para vaga de estágio back-end na **Neogrid**.

## Funcionalidade

O scraper acessa a página deste produto da Adidas:  
[Netshoes](https://www.netshoes.com.br/p/tenis-adidas-breaknet-masculino-NQQ-4378-058)

E extrai os seguintes dados:

- **Título do produto**
- **Preço**
- **URL da imagem principal**
- **Descrição do produto**

Essas informações são salvas no arquivo `resultado.json` e também exibidas no terminal.


## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Axios](https://www.npmjs.com/package/axios) — requisições HTTP
- [Cheerio](https://www.npmjs.com/package/cheerio) — manipulação de HTML
- [File System (fs)](https://nodejs.org/api/fs.html) — salvar dados localmente


## Como executar

### 1. Clone o repositório
```
git clone https://github.com/plucastavares/Web-Scraper.git
cd Web-Scraper
```

### 2. Instale as dependências
```
npm install
```

### 3. Execute o script
```
node scraper.js
```

### 4. Resultado
O terminal mostrará os dados extraídos, e o arquivo 'resultado.json' será criado na raiz do projeto.

### 5. Exemplo de saída

```json
{
  "titulo": "Tênis Adidas Breaknet Masculino - Azul+Branco",
  "preco": "R$ 199,99",
  "imagem": "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/58/NQQ-4378-058/NQQ-4378-058_zoom1.jpg?ts=1750257656&ims=544x",
  "descricao": "*Para um melhor ajuste nos pés, recomendamos a compra de um tamanho menor do que o seu usual. Forma grande.* Estilo atemporal para diversos momentos e combinações. Com modelo clássico, o tênis adidas Breaknet traz as listras icônicas da marca nas laterais, com opções de cores lisas e também animal print. Desenvolvido com material resistente e firme, traz perfuros para respirabilidade, forro acolchoado e solado resistente ao desgaste. Um tênis masculino versátil para usar com peças que vão da calça jeans à calça jogger ou bermudas masculinas. Conte com a Adidas para complementar o seu look urbano!"
}
```

## Arquivos
- scraper.js — código principal
- resultado.json — arquivo com os dados extraídos
- package.json — dependências do projeto

## Observação
Este projeto foi desenvolvido como parte de um desafio técnico proposto pela Neogrid para o processo seletivo de estágio em desenvolvimento Back-End.
