$(document).ready(function(){
    //Escriptor panel
    $(".texto-encriptar").click(function(){
        $(".container-encriptar").addClass("container-encriptar-shadow");
    });
    $(".texto-encriptar").blur(function(){
        $(".container-encriptar").removeClass("container-encriptar-shadow");
    });

    //Descincriptor panel
    $(".texto-desencriptar").click(function(){
        $(".container-desencriptar").addClass("container-desencriptar-shadow");
    });
    $(".texto-desencriptar").blur(function(){
        $(".container-desencriptar").removeClass("container-desencriptar-shadow");
    });
});