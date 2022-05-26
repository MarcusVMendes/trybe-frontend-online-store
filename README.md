# Boas vindas ao repositório do projeto frontend online store!


Este projeto foi desenvolvido por [MarcusVMendes](http://www.linkedin.com/in/marcusvmendes-dev) enquanto estudante de Desenvolvimento Web Full Stack na [Trybe](https://www.linkedin.com/school/betrybe/) no periodo 2021/2022, como requisito parcial para aprovação de módulo.  #vqv 🚀

A proposta do projeto é desenvolver uma single-page application utilizando componentes React com estado e ciclo, bem como rotas, por meio da lib React Router.


# Habilidades

* Entender o que são Métodos Ágeis
* Entender o que é Kanban
* Entender o que é Scrum
* Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz
* Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End.<br><br>


# Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _marcus.mendes89@gmail.com_.
<br>
<br>

<div style="text-align: left">1. Abra o terminal e crie um diretório no local de sua preferência com o comando <b>mkdir</b>:</div><br>

```javascript
mkdir projetos
```
<br>
<div style="text-align: left">2. Entre no diretório que acabou de criar e depois clone o projeto:<div><br>


```javascript
cd projetos
git clone git@github.com:MarcusVMendes/trybe-frontend-online-store.git
```
<br>
<div style="text-align: left">3. Acesse o diretório do projeto e depois utilize o comando <b>npm install</b> para instalar todas as dependências necessárias:<div><br>

```javascript
cd trybe-frontend-online-store
npm install
```

<br>
<div style="text-align: left">4. Na raiz do repositório, executar o comando <b>npm start</b> para inicializar a execução do projeto:<div><br>

```javascript
npm start
```
<br>

# Sumário


- [Requisitos do Projeto](#requisitos-do-projeto)

    - [1. Implemente o módulo de acesso à api do Mercado Livre](#1-implemente-o-módulo-de-acesso-à-api-do-mercado-livre)
    - [2. Crie uma página de listagem de produtos vazia](#2-crie-uma-página-de-listagem-de-produtos-vazia)
    - [3. Crie a página do carrinho de compras](#3-crie-a-página-do-carrinho-de-compras)
    - [4. Liste as categorias de produtos disponíveis via API na página principal](#4-liste-as-categorias-de-produtos-disponíveis-via-api-na-página-principal)
    - [5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos](#5-liste-os-produtos-buscados-por-termos-com-os-dados-resumidos-associados-a-esses-termos)
    - [6. Selecione uma categoria e mostre somente os produtos daquela categoria](#6-selecione-uma-categoria-e-mostre-somente-os-produtos-daquela-categoria)
    - [7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto](#7-redirecione-para-uma-tela-com-a-exibição-detalhada-ao-clicar-na-exibição-resumida-de-um-produto)
    - [8. Adicione produtos a partir da tela de listagem de produtos](#8-adicione-produtos-a-partir-da-tela-de-listagem-de-produtos)
    - [9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada](#9-adicione-um-produto-ao-carrinho-a-partir-de-sua-tela-de-exibição-detalhada)
    - [10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade](#10-visualize-a-lista-de-produtos-adicionados-ao-carrinho-em-sua-página-e-permita-a-manipulação-da-sua-quantidade)
    - [11. Avalie e comente acerca de um produto em sua tela de exibição detalhada](#11-avalie-e-comente-acerca-de-um-produto-em-sua-tela-de-exibição-detalhada)
    - [12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento](#12-finalize-a-compra-vendo-um-resumo-dela-preenchendo-os-seus-dados-e-escolhendo-a-forma-de-pagamento)

    `Requisitos Bônus`
    - [13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece](#13-mostre-junto-ao-ícone-do-carrinho-a-quantidade-de-produtos-dentro-dele-em-todas-as-telas-em-que-ele-aparece)
    - [14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque](#14-limite-a-quantidade-de-produtos-adicionados-ao-carrinho-pela-quantidade-disponível-em-estoque)
    - [15. Mostre quais produtos tem o frete grátis](#15-mostre-quais-produtos-tem-o-frete-grátis)

    `Requisitos Extras Não Avaliativos`
    - [16. Faça um layout para o site](#16-faça-um-layout-para-o-site)
    - [17. Faça um layout responsivo para o site](#17-faça-um-layout-responsivo-para-o-site)
    - [18. Crie um seletor dropdown para ordenar a lista de produto por maior e menor preço](#18-crie-um-seletor-dropdown-para-ordenar-a-lista-de-produto-por-maior-e-menor-preço)
    - [19. Coloque uma animação no carrinho para quando um produto for adicionado](#19-coloque-uma-animação-no-carrinho-para-quando-um-produto-for-adicionado)
    - [20. Crie um slider lateral para exibir o carrinho na tela principal](#20-crie-um-slider-lateral-para-exibir-o-carrinho-na-tela-principal)
    - [21. Destaque, na tela principal, os produtos já adicionados ao carrinho](#21-destaque-na-tela-principal-os-produtos-já-adicionados-ao-carrinho)
    - [22. Impeça que a quantidade do produto seja negativa](#22-impeça-que-a-quantidade-do-produto-seja-negativa)