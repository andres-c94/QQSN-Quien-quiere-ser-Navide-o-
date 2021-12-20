function abrirEscogerJugador(){
    location.href = 'escogerJugador.php';
}
function volverInicio(){
    location.href = 'inicio.php';
}
function volverInicio2(){
    location.href = 'cerrarSesion.php';
}
function volverInicio3(){
    location.href = 'cerrarSesion.php';
    arr1 = [100];
    setCookie('mycookie', arr1);
    setCookie("preguntatemporal", null);
}
function abrirJuego(){
    location.href = 'juego.php';
}
function abrirInstrucciones(){
    document.getElementById("ventana").style.display="block";
}
function cerrarInstrucciones(){
    document.getElementById("ventana").style.display="none";
}
function cerrarLlamada(){
    document.getElementById("ventana3").style.display="none";
}

function cerrarAyudaPublico(){
    document.getElementById("ventana2").style.display="none";
    console.log("Hola")
}
function abrirInicio(){
    location.href = 'inicio.php';
}
function abrirAyudaPublico(){
    //
    //document.cookie="publico=1"
    document.getElementById("btnayuda").style.visibility = "hidden";
    document.getElementById("segundos").style.display = "block"
    // temporizador
    let segundos = 7;
cargarSegundo();
function cargarSegundo(){
    let txtSegundos;
    if(segundos<0){
        segundos=7;
    }
    if(segundos<10){
        txtSegundos=`0${segundos}`;

    }else{
        txtSegundos=segundos;
    }
    document.getElementById('segundos').innerHTML=txtSegundos;
    segundos --;
}
setInterval(cargarSegundo,1000);
    // temporizador
    setTimeout(function() {
        //select_id("bienvenida1").innerHTML = "Bienvenido, es tu momento de jugar"
        //select_id("bienvenidanombre1").innerHTML = "Nicolas Garzon"
        //document.getElementById("ventana2").style.display="block";
        document.getElementById("segundos").style.visibility = "hidden";
        location.reload();
        console.log("hola")
    }, 1000 *7)
    
    function select_id(id) {
        //return document.getElementById(id)
      }
}
function abrirAyudaLlamada(){
    
    document.getElementById("btnllamada").style.visibility = "hidden";
    document.getElementById("segundos2").style.display = "block"
    document.getElementById("ventana3").style.display = "block"
    // temporizador
    let segundos = 45;
cargarSegundo();
function cargarSegundo(){
    let txtSegundos;
    if(segundos<0){
        segundos=45;
    }
    if(segundos<10){
        txtSegundos=`0${segundos}`;

    }else{
        txtSegundos=segundos;
    }
    document.getElementById('segundos2').innerHTML=txtSegundos;
    segundos --;
}
setInterval(cargarSegundo,1000);
    // temporizador
    setTimeout(function() {
        //select_id("bienvenida1").innerHTML = "Bienvenido, es tu momento de jugar"
        //select_id("bienvenidanombre1").innerHTML = "Nicolas Garzon"
        //document.getElementById("ventana2").style.display="block";
        document.getElementById("segundos2").style.visibility = "hidden";
        document.getElementById("ventana3").style.visibility = "hidden";
        console.log("hola")
    }, 1000 *45)
    
    function select_id(id) {
        //return document.getElementById(id)
      }
}

