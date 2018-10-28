$(document).ready( function (){

	id = returnId( pagina );

	var produtos = localStorage.getItem("categorias"+id);

	if ( produtos ) {

		console.log("Produtos do Cache");
		var dados = JSON.parse(produtos);
		preencher( dados );

	} else {

		//buscar os produtos em destaque
		$.getJSON("json/produto.php?op=categoria&categoria="+id,
			function() {

			$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif'> Carregando...</div>");

		}).done( function (dados) {

			console.log("Produtos armazenados no Cache");
			localStorage.setItem("categorias"+id, JSON.stringify(dados));
			preencher( dados );

		})

	}

	//funcao para preencher os produtos
	function preencher( dados ) {

		$.each( dados, function( key, val ) {
			//adicionar os itens no .row
			$(".produtos").append("<div class='col l3 m6 s12 center-align'><div class='card'><img src='"+val.foto+"' class='thumb'><p class='produto'>"+val.nome+"</p><p class='valor'>R$ "+val.valor+"</p><a href='produto.html?id="+val.id+"' class='btn red darken-4'>Detalhes</a></div></div>");
			$("h1").html(val.categoria)
		})
		$("#msg").html("");
	}

})