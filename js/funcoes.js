$(document).ready(function(){

	$(".load").fadeOut("slow", function()
	{
		$(".load").hide()
	})

	dadosCategoria = localStorage.getItem("categorias")

	if (dadosCategoria) {
		//se existir algo no storage
		console.log('categorias do cache')

		dados = JSON.parse(dadosCategoria)

		//função preencher o menu
		preencherCategoria(dados)
	}
	else {
		//se não existir nada no storage
		console.log('categorias do JSON')

		//importar as categorias do JSON
		$.getJSON("json/categoria.php", function()
		{
			$("#msg").html("<p> <img src='imagens/load.gif'>  Carregando categorias... </p>")
		}).done(function(dados)
		{
			//deu certo devolve os dados

			cache = JSON.stringify(dados)

			//guardar dados no cache
			localStorage.setItem('categorias', cache);

			//função preencher o menu
			preencherCategoria(dados)

		}).fail(function(){
			//erro ao carregar os dados
			$("#msg").html("<p>Erro ao carregar categorias")
		})
	}

}) // document.ready

// função preencher categorias
function preencherCategoria(dados){
	$.each(dados, function( key, val ){
		$("#mobile-demo, #menu, #footer").prepend(`
			<li>
				<a href="categoria/${val.id}">${val.categoria}</a>
			</li>
		`)
	})
	//apagar msg do #msg
	$("#msg").html('');
}

//function pegar id
function retornaId() {
	pagina = window.location.href
	p = pagina.split("/")
	return p[6]
}

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