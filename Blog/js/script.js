//função para alterar imagem do botão de pesquisa
$(document).ready(function(){
    $("#btn_busca").hover(
        function(){
           $("#btn_busca img").attr("src", "img/Lupa2.png")
        },
        function(){
            $("#btn_busca img").attr("src", "img/Lupa.png")
        }
    )
});

//botões de login com redes sociais
$(document).ready(function(){
    $(".login .icones_redes .google").hover(
        function(){
            $(".google").stop().attr("src", "img/Icones/coloridos/google.png")
            .animate({width: "18%"});
        },
        function(){
            $(".google").stop().attr("src", "img/Icones/normais/google.png")
            .animate({width: "15%"});
        }
    )
    
    $(".login .icones_redes .twitter").hover(
        function(){
            $(".twitter").stop().attr("src", "img/Icones/coloridos/twitter.png")
            .animate({width: "18%"});
        },
        function(){
            $(".twitter").stop().attr("src", "img/Icones/normais/twitter.png")
            .animate({width: "15%"});
        }
    )
    
    $(".login .icones_redes .facebook").hover(
        function(){
            $(".facebook").stop().attr("src", "img/Icones/coloridos/facebook.png")
            .animate({width: "18%"});
        },
        function(){
            $(".facebook").stop().attr("src", "img/Icones/normais/facebook.png")
            .animate({width: "15%"});
        }
    )
    
    $(".login .icones_redes .instagram").hover(
        function(){
            $(".instagram").stop().attr("src", "img/Icones/coloridos/instagram.png")
            .animate({width: "18%"});
        },
        function(){
            $(".instagram").stop().attr("src", "img/Icones/normais/instagram.png")
            .animate({width: "15%"});
        }
    )
});

// Menu drop-down
$(document).ready(function(){
    $("nav li ul").hide().removeClass('submenu');//Oculta o submenu e remove sua classe submenu
    $("nav li").hover(//executa quando o mouse passa pela barra de navegação
        function(){
            $("ul", this).stop().slideDown(1000);//para a animação anterior e exibe o submenu em 1 segundo
        },
        function(){
            $("ul", this).stop().slideUp(1000);//para a animação anterior e esconde o submenu em 1 segundo
        }
    );
});

//botões das redes sociais no rodapé
$(document).ready(function(){
    $("footer .icones_redes .google").hover(
        function(){
            $(".google").stop().attr("src", "img/Icones/coloridos/google.png")
            .animate({width: "13%"});
        },
        function(){
            $(".google").stop().attr("src", "img/Icones/normais/google.png")
            .animate({width: "10%"});
        }
    )
    
    $("footer .icones_redes .twitter").hover(
        function(){
            $(".twitter").stop().attr("src", "img/Icones/coloridos/twitter.png")
            .animate({width: "13%"});
        },
        function(){
            $(".twitter").stop().attr("src", "img/Icones/normais/twitter.png")
            .animate({width: "10%"});
        }
    )
    
    $("footer .icones_redes .facebook").hover(
        function(){
            $(".facebook").stop().attr("src", "img/Icones/coloridos/facebook.png")
            .animate({width: "13%"});
        },
        function(){
            $(".facebook").stop().attr("src", "img/Icones/normais/facebook.png")
            .animate({width: "10%"});
        }
    )
    
    $("footer .icones_redes .instagram").hover(
        function(){
            $(".instagram").stop().attr("src", "img/Icones/coloridos/instagram.png")
            .animate({width: "13%"});
        },
        function(){
            $(".instagram").stop().attr("src", "img/Icones/normais/instagram.png")
            .animate({width: "10%"});
        }
    )
})