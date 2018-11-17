$(document).ready(function(){

    id = retornaId(5)

    if ( id == undefined )
    {
        // se o produto não existir
        alert('Produto Inexistente')
        location.href='index.php'

    }
    else
    {
        // recuperar do cache
        produto = localStorage.getItem("produto"+id)

        //verifica se o produto existe em cache
        if (produto)
        {
            dados = JSON.parse(produto)
            preencherProduto(dados)
            console.log("produto carregado do cache")
        }
        else
        {
            //produto JSON
            .getJSON("json/produto.php?op=produto&id="+id, 
            function(){
                $(".produto").html("carregando produtos...")
            }).done(function(dados){
                preencherProduto(dados)
                cache = JSON.stringify(dados)
                localStorage.setItem("produto"+id, cache)
                console.log("Produto armazenado em cache")
            }).fail(function(){
                $(".produto").html("Erro ao carregar produto")
            })
        }
    }

})