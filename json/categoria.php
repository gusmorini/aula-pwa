<?php

	//para se comportar como json
	header("Content-Type:application/json");

	// retorna as categorias

	// inclue a conexao DB
	include "conexao.php";

	// sql para selecionar as categorias
	$consulta = $pdo->prepare("select * from categoria");
	$consulta->execute();

	while($dados = $consulta->fetch(PDO::FETCH_OBJ))
	{
		$categoria[] = array(	"id" => $dados->id,
								"categoria" => $dados->categoria
							);
	}

	// transformar array em Json

	echo json_encode($categoria);