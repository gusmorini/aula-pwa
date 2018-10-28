$(document).ready(function(){

	// produtos do cache
	produtos = localStorage.getItem("produtos")

	// produtos do JSON
	$.getJSON('json/produto.php', function(){
		$(".produto").html(`<img src='imagens/load.gif'> Carregando produtos`)
	}).done(function(dados){
		console.log('carregando produtos do JSON')
		preencherProdutos(dados)
		cache = JSON.stringify(dados)
		localStorage.setItem('produtos', dados)
	}).fail(function(){
		console.log('carregando produtos do cache')
		dados = JSON.parse(produtos)
		preencherProdutos(produtos)
	})

	//função preencher produtos
	function preencherProdutos(dados){
		$.each(dados, function (key, val){

			$('.produto').html('')
			$('.produto').append(`	<div class='col 13 m6 s12 center-align'>
										<div class='card'>
											<img src='${val.foto}' class='responsive-img'>
											<p>${val.nome}</p>
											<p class='valor'>R$ ${val.valor}</p>
											<a href='produto/${val.id}' class='btn red darken-4'>detalhes</a>
										</div>
									</div>`)
		})
	}

})