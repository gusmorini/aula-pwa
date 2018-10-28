$(document).ready( function (){
	$('.sidenav').sidenav();

	//pegar o conteúdo do cache
	var dadosCategorias = localStorage.getItem("menuCategorias");

	//verificar se existe algo
	if ( dadosCategorias ) {	

		//se existir carregar do cache
		console.log("Carregando menu do cache");
		var cache = JSON.parse(dadosCategorias);
		preencherCategoria(cache);

	} else {

		//carregar do JSON
		console.log("Carregando menu do JSON");

		//pegar as categorias do JSON e montar o menu
		$.getJSON("json/categoria.php", function(){

			//mensagem no #msg
			$("#msg").html("<div class='center-align'><img src='imagens/load.gif'> Carregando...</div>");

		}).done( function(dados) {

			//guardar os dados no localStorage
			var cache = JSON.stringify(dados);
			localStorage.setItem("menuCategorias",cache);
			//mandar preencher o menu
			preencherCategoria(dados);

		}).fail( function() {

			$("#msg").html("<div class='center-align'>Erro requisição inválida</div>");

		})
	} // fim do else

	//funcao para preencher o menu de categorias
	function preencherCategoria ( dados ) {
		$("#msg").html("");
		$.each( dados, function ( key, val ) {
			$("#nav-mobile,#nav-footer,.sidenav").prepend("<li><a href='categorias.html?id="+val.id+"'>"+val.categoria+"</a></li>");
		})
	}
})

// ******** pegar id da página

atual = window.location.href;
array = atual.split("/");
function returnId ( array ) {

	id = "";
	pagina = pagina[1].split("=");
	console.log ( pagina.length );

	if ( pagina.length > 1 ) {
	  
	  id = pagina[1].split("&");
	} 

	return id;
}