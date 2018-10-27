$(document).ready(function(){

	id = retornaId()
	produtos = localStorage.getItem("categoria"+id)

	if ( produtos ) {
		console.log("produtos do cache")
		dados = JSON.parse(produtos)
		preencherProdutos(dados)
	} else {
		console.log("produtos do JSON")
		$.getJSON("json/produto.php?op=categoria&id="+id, function(){
			$(".produto").html("<img src='imagens/load.gif'>  Carregando Produtos... ")
		}).done( function(){
			preencherProdutos(dados)
			cache = JSON.stringify(dados)
			localStorage.setItem("categoria"+id, cache)
		}).fail (function(){
			$(".produto").html("Erro ao carregar produtos")
		})
	}

})