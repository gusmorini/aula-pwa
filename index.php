<?php 
	//configura qual página vai ser carregada
	$pagina = 'home';
	if (isset($_GET['param'])) {
		$param = trim ($_GET['param']);
		$param = explode("/",$param);
		$pagina = $param[0];
	}
	$arquivo = $pagina.".js";
?>
<!DOCTYPE html>
<html>
<head>
	
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sub Sub Marino.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- definir a pasta base do projeto -->
    <base href="http://localhost/aula-pwa/">
    
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/materialize.min.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- icones -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <!-- JS/SCRIPT -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.cycle2.min.js"></script>
    <script src="js/materialize.min.js"></script>
    <script src="js/funcoes.js"></script>
    <script src="js/<?=$arquivo?>"></script>

</head>
    <body>

    	<!-- tela de load -->
    	<div class="load">
    		<img src="imagens/load.gif">
    	</div>

    	<!-- menu web -->
		<nav>
			<div class="nav-wrapper">
			  <a href="index.php" class="brand-logo">
			  	<img src="imagens/logo.png" class="img">
			  </a>
			  <a href="#" data-target="mobile-demo" class="sidenav-trigger">
			  	<i class="material-icons">menu</i>
			  </a>
			  <ul class="right hide-on-med-and-down" id="menu">
			  	<li>
			  		<a href="carrinho" class="btn red darken-4">
			  			<i class="material-icons">shopping_cart</i>
			  		</a>
			  	</li>
			  </ul>
			</div>
		</nav>

		<!-- menu mobile -->
		<ul class="sidenav" id="mobile-demo"></ul>

		<main class="container">
			<div id="msg"></div>

			<h1></h1>
			<div class="row produto"></div>

		</main>

		<footer class="page-footer">
		  <div class="container">
		    <div class="row">
		      <div class="col l6 s12">
		        <h5 class="white-text">Sub Sub Marino</h5>
		        <p class="grey-text text-lighten-4">Sua Loja de La Paloma</p>
		      </div>
		      <div class="col l4 offset-l2 s12">
		        <h5 class="white-text">Links</h5>
		        <ul id="footer">
		        </ul>
		      </div>
		    </div>
		  </div>
		  <div class="footer-copyright">
		    <div class="container">
		    © 2018 Copyright Text
		    <a class="grey-text text-lighten-4 right" href="#!">La Paloma Systems</a>
		    </div>
		  </div>
		</footer>

    </body>
</html>