<?php

	//para se comportar como json
	header("Content-Type:application/json");

	// retorna os produtos

	// inclue a conexao DB
	include "conexao.php";

	$op = '';

	if (isset($_GET['op']) )
	{
		$op = trim ($_GET['op']);
	}

	if ($op == 'produto')
	{

	} else if ( $op == 'categoria')
	{

	} else
	{
		// produtos da página inicial
		$consulta = $pdo->prepare('	select p.*, c.categoria
									from produto p
									inner join categoria c on (c.id = p.categoria_id)
									order by rand() limit 4');
	}

	$consulta->execute();

	while($dados = $consulta->fetch(PDO::FETCH_OBJ))
	{
		$valor = number_format($dados->valor,2,",",".");
		$foto = "imagens/".$dados->foto;

		$produto[] = array(	"id" 		=> $dados->id,
							"nome" 		=> $dados->nome,
							"descrição" => $dados->descricao,
							"valor" 	=> $valor,
							"foto" 		=> $foto,
							"categoria" => $dados->categoria
		);
	}

	// transformar array em Json
	echo json_encode($produto);