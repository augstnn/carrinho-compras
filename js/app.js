var total = document.getElementById("valor-total");
var listaProdutos = document.getElementById("lista-produtos");

limpar();

function adicionar() {

    var produto = document.getElementById("produto").value;
    var nomeProduto = produto.split(" - R$")[0];
    var valor = parseInt(produto.split(" - R$")[1]);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var preco = quantidade * valor;

    if(quantidade > 0) {

    var novoProduto = `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
    </section>`;
    listaProdutos.insertAdjacentHTML("beforeend", novoProduto);

    totalGeral = totalGeral + preco;
    total.innerText = `R$ ${totalGeral}`;

    quantidade = "";

    } else {

        alert("Nenhuma quantidade selecionada, tente novamente...");

    };
   
    document.getElementById("quantidade").value = "";
    document.getElementById("quantidade").focus();

};

function limpar() {

    listaProdutos.innerHTML = null ;
    total.innerText = "R$ 0";
    totalGeral = 0;

};