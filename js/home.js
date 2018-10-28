$(document).ready(function(){
	//produtos do cache
	produtos = localStorage.getItem("produtos");

	$.getJSON("json/produto.php", function(){
		$(".produto").html("<img src='imagens/load.gif'> Carregando produtos");
	}).done(function(dados){
		console.log("Carregando produtos do JSON");
		//jogar os dados no .produto
		preencherProdutos(dados);
		cache = JSON.stringify(dados);
		localStorage.setItem("produtos",dados);
	}).fail(function(){
		console.log("Carregando produtos do Cache");
		dados = JSON.parse(produtos);
		preencherProdutos(dados);
	})

	//funcao para preencher os produtos
	function preencherProdutos(dados) {
		$(".produto").html("");
		$.each(dados, function (key,val) {
			$(".produto").append(`
				<div class='col l3 m6 s12 center-align'>
					<div class='card'>
					<img src='${val.foto}' class='responsive-img'>
					<p>${val.nome}</p>
					<p class='valor'>R$ ${val.valor}</p>
					<a href='produto/${val.id}' class='btn red darken-4'>Detalhes</a>
					</div>
				</div>`);
		});
	}
})