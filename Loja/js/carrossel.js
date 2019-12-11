$(document).ready(function(){
    // var largura = $("#itens li").outerWidth();
    var ativo = $("#itens .ativo");

    ativo.css({display: "list-item"}).animate({left: "0"},500);

    rodar = setInterval("carrossel()",3000);
    
    $("#ant").click(function(){
        ativo = $("#itens .ativo");
    
        if($(ativo.prev()).length){
            var proximo = ativo.prev();
        }else{
            var proximo = $("#itens li:last")
        }
    
        ativo.removeClass("ativo").animate({left: "100%"},500);
        proximo.addClass("ativo").css({display: "list-item", left: "-100%"}).animate({left: "0"},500);
    });

    $("#prox").click(function(){
        ativo = $("#itens .ativo");
    
        if($(ativo.next()).length){
            var proximo = ativo.next();
        }else{
            var proximo = $("#itens li:first")
        }

        ativo.removeClass("ativo").animate({left: "-100%"},500);
        proximo.addClass("ativo").css({display: "list-item", left: "100%"}).animate({left: "0"},500);
    });

    $("#itens").hover(
        function(){
            clearInterval(rodar);
        },
        function(){
            rodar = setInterval("carrossel()",3000);
        }
    )
});
function carrossel(){
    ativo = $("#itens .ativo");
    
    if($(ativo.next()).length){
        var proximo = ativo.next();
    }else{
        var proximo = $("#itens li:first")
    }

    ativo.removeClass("ativo").animate({left: "-100%"},500);
    proximo.addClass("ativo").css({display: "list-item", left: "100%"}).animate({left: "0"},500);
}