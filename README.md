<h1 align="center"><strong>Projeto Smart Store</strong></h1>
<p>O projeto Smart Store foi criado e desenvolvido por Lucas Cassimiro. Este projeto é um E-Commerce feito com as ferramentas: Next.JS, React.JS, TypeScript, Styled-components, Context API e versionado com GIT. O projeto conta com um design moderno e intuitivo, visando uma ótima experiência do usuário. Fácil de mexer, o projeto conta com funcionalidades como: carrosséis de itens, filtrar de itens por preço, cor, armazenamento, ordenação, exibição e busca por nome, carrinho de compras e busca por CEP com cálculo automático de frete, além de salvar as informações da busca por CEP e os itens do carrinho em Local Storage.</p>
<br>

<h2>🌐 Visão Geral do Projeto</h2>
<p>No GIF à seguir, uma demonstração geral do projeto e suas funcionalidades: </p>

![Projeto Smart Store](./src/assets/overview.gif)

<br>

<h2>🧑‍💻 Filtrar de itens</h2>
<p>É possível filtrar os itens por preço, armazenamento e cor e ainda podemos acumular esses itens na tela. Também podemos manipular a exibição de itens, exemplo: quantos itens queremos que apareçam por página, além de ordenar pelos itens mais vendidos, mais recentes e mais procurados, e ainda por último podemos buscar os itens pelo nome. Também foram feitos alguns tratamentos de erros, caso o usuário digite o nome errado ou busque por algum produto que não exista, é mostrado uma mensagem "Produto não encontrado".
</p>

![Filtrar](./src/assets/filter.gif)

<br>

<h2>🛒 Carrinho de compras</h2>
<p>O carrinho de compras permite armazenar os itens que o usuário se interessou ou pretende comprar. É possível adicionar, editar ou remover o produto do carrinho. O acúmulo de valor é somado de acordo com o desconto do produto, caso ele esteja na black friday ou não, e foi feito um cálculo para que o valor do produto seja descontado automaticamente pelo sistema. Os itens também são salvos pelo Local Storage do navegador, impedindo que as informações sejam perdidas caso o usuário recarregue a página.</p>

![Carrinho de compras](./src/assets/cart.gif)

<br>

<h2>🚩 Localização</h2>
<p>A busca por CEP permite que o usuário informe o CEP que deseja consultar, retornando assim as informações: Nome da rua, cidade, bairro, estado e ddd. O sistema também já retorna para o usuário qual será o valor do frete, de acordo com o estado. As informações do CEP também ficam salvas em Local Storage, caso o usuário recarregue a página as informações não serão perdidas, e caso o CEP seja digitado errado, o erro não será salvo em Local Storage, apenas a informação válida do CEP.</p>

![Localização](./src/assets/locale.gif)

<br>

<h2>📱 Responsivo</h2>
<p>Versão Mobile</p>
<br>

![Responsivo](./src/assets/responsive.gif)

<br>

<h2>Rodando o projeto na sua máquina</h2>

<p>Para rodar o projeto na sua máquina, basta clicar no botão verde no começo do repositório "<> Code", baixar o arquivo ZIP e extrair para uma pasta. Em seguida, você pode baixar as dependências do projeto usando o comando "npm install" no seu terminal.</p>

<h2>Conclusão</h2>
<p>O Projeto Smart Store me proporcionou uma evolução incrível, trazendo experiência com as ferramentas Next.JS, React.JS e a trabalhar minha lógica e tipagem de dados com TypeScript. Muitos conceitos novos também foram aprendidos, como programação orientada à objetos, manipulação e tipagem de dados, rotas no Next.JS, mas principalmente SSR, SSG e CSR, para melhorar o desempenho, a performance e a SEO. Foi muito desafiador desenvolver este projeto sozinho e valeu a pena cada momento investido em seu desenvolvimento.</p>
<br>

<h2>🛠️ Ferramentas Utilizadas</h2>

- Next.JS
- React.JS
- TypeScript
- Styled-components
- Context API
- Controle de versão GIT
- [CEP API](https://viacep.com.br/)

💻 Página do projeto -  [Projeto Smart Store](https://smartstore-next-react-ts-76yi-eujjthbuw-lucas-cassimiro.vercel.app/)

🙋‍♂️ Perfil no LinkedIn - [Lucas Cassimiro](https://www.linkedin.com/in/lucasocassimiro/)
