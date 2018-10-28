$(document).ready(function(){

	$(".load").fadeOut("slow", function(){
		$(".load").hide()
	})

	//importas as categorias do JSON
	$.getJSON("json/categoria.php", function(){

		$("#msg").html("<p> <img src='imagens/load.gif'>  Carregando categorias... </p>")

	}).done(function(dados){

		//deu certo devolve os dados
		$.each(dados, function( key, val ){
			$("#mobile-demo, #menu").prepend(`
				<li>
					<a href="categoria/${val.id}">${val.categoria}</a>
				</li>
			`)
		})

		//apagar msg do #msg
		$("#msg").html('');

	}).fail(function(){

		//erro ao carregar os dados
		$("#msg").html("<p>Erro ao carregar categorias")

	})

})