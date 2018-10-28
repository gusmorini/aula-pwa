$(document).ready( function (){

	id = returnId( pagina );

	var produto = localStorage.getItem("produto"+id);

	if ( produto ) {

		console.log("Produto do Cache");
		var dados = JSON.parse(produto);
		preencher( dados );

	} else {

		//buscar os produtos em destaque
		$.getJSON("json/produto.php?op=produto&produto="+id,
			function() {

			$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif'> Carregando...</div>");

		}).done( function (dados) {

			console.log("Produtosarmazenados no Cache");
			localStorage.setItem("produto"+id, JSON.stringify(dados));
			preencher( dados );

		})

	}

	//funcao para preencher os produtos
	function preencher( dados ) {

		$.each( dados, function( key, val ) {
			//adicionar os itens no .row
			$(".produtos").append("<div class='col l4 m6 s12 center-align'><img src='"+val.foto+"' class='thumb'><p class='valor'>R$ "+val.valor+"</p><a href='carrinho.html?id="+val.id+"' class='btn red darken-4'>Comprar</a></div><div class='col l8 m6 s12 center-align'><h4>"+val.nome+"</h4><p>"+val.descricao+"</p></div></div>");
			
		})
		$("#msg").html("");
	}

})