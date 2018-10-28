if ('serviceWorker' in navigator) {
	navigator.serviceWorker
         .register('sw.js')
         .then(function() { console.log('Service Worker Registrado com Sucesso'); });
} else {
	console.log('Erro ao Registrar Service Worker')
}

$(document).ready( function (){

	var produtos = localStorage.getItem("produtos");

	if ( produtos ) {

		console.log("Produtos do Cache");
		var dados = JSON.parse(produtos);
		preencher( dados );

	} else {

		//buscar os produtos em destaque
		$.getJSON("json/produto.php",
			function() {

			$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif'> Carregando...</div>");

		}).done( function (dados) {

			console.log("Produtos armazenados no Cache");
			localStorage.setItem("produtos", JSON.stringify(dados));
			preencher( dados );

		})

	}

	//funcao para preencher os produtos
	function preencher( dados ) {

		$.each( dados, function( key, val ) {
			//adicionar os itens no .row
			$(".produtos").append("<div class='col l3 m6 s12 center-align'><div class='card'><img src='"+val.foto+"' class='thumb'><p class='produto'>"+val.nome+"</p><p class='valor'>R$ "+val.valor+"</p><a href='produto.html?id="+val.id+"' class='btn red darken-4'>Detalhes</a></div></div>");
		})
		$("#msg").html("");
	}

	//***************************************************************
	
	

	//buscar os produtos em destaque
	$.getJSON("json/imagem.php",
		function() {

		$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif'> Carregando...</div>");

	}).done( function (dados2) {

		console.log("Banners armazenados no Cache");
		localStorage.setItem("banners", JSON.stringify(dados2));
		preencherBanner( dados2 );

	})

	

	//funcao para preencher os produtos
	function preencherBanner( dados2 ) {
		
		$.each( dados2, function( key, val ) {

			//adicionar os itens no .row
			$(".banner").append("<img src='"+val.banner+"' title='"+val.titulo+"' alt='"+val.titulo+"'>");
		})
		$("#msg").html("");
	}
})


