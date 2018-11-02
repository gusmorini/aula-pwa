<?php

	// criar conexao com o banco

	$servidor 	= "127.0.0.1";
	$usuario 	= "admin";
	$senha 		= "admin";
	$banco 		= "pwa";

	try {
		$pdo = new PDO("mysql:host=$servidor;dbname=$banco;charset=utf8", $usuario, $senha);
	} catch(PDOException $erro){
		echo "Erro ao conectar: ", $erro->getMessage();
		exit;
	}