$(document).ready(function () {
    $("#boton1").click(function (e) {
        alert("Evento click boton 1")
    });

    $("#div1").on("dbclick", function(){
        alert("Evento doble click")
    });

    $("#input1").focus(function (e) {
        console.log("Metodo focus al dar click en input")
    });

    $("#texto1").hover(function () {
        $("#texto1").css("background-color", "red");
    }, function
    );  
});