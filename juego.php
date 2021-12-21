<?php

//INICIO DE DE SESION
session_start();

$session = $_SESSION['user'];

if($session == null || $session= "" ){
  header("location:index.php");
  die();
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.3.2/chart.js" ></script>
  <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
  <script src="https://kit.fontawesome.com/479e83529b.js" crossorigin="anonymous"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  
    <!-- require ArcGIS REST JS libraries from https://unpkg.com -->
    <script src="https://unpkg.com/@esri/arcgis-rest-request@3.0.0/dist/umd/request.umd.js"></script>
    <script src="https://unpkg.com/@esri/arcgis-rest-auth@3.0.0/dist/umd/auth.umd.js"></script>
    <script src="https://unpkg.com/@esri/arcgis-rest-feature-layer@3.0.0/dist/umd/feature-layer.umd.js"></script>

  <title>¿Quién quiere ser Geográfico?</title>
</head>

<body background= "img/cue.png">
  <div class="menu">
    <button class="btnx" id="btnayuda" onclick="abrirAyudaPublico()"><i class="fas fa-users"></i></button>
    <button class="btnx" id="btn50" onclick="fiftyFifty()"> 50 / 50</button>
    <button class="btnx" id="btnllamada" onclick="abrirAyudaLlamada()"><i class="fas fa-phone-volume"></i></button>
    <button class="btnx" id="btnvolver" onclick="volverInicio()">Volver<br><i class="fas fa-arrow-left"></i></button>
    <button class="btnx" id="siguiente" onclick="siguiente()">Siguiente<br><i class="fas fa-arrow-right"></i></button>
    <button class="btnx" id="siguiente" onclick="mostrarQR()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
      <path d="M2 2h2v2H2V2Z"/>
      <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/>
      <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/>
      <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/>
      <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/>
    </svg></button>
    <div class="segundos" id="segundos">--</div>
    <div class="segundos2" id="segundos2">--</div>
  </div>
<div id="ventana3" class="ventana3">
<a><div id="tel"> <img src="img/llamada.png" alt=""> </div></a>
<a href="javascript:cerrarLlamada()"><div id="cerrar"> <img src="img/cerrar.png" alt=""> </div></a>
<span id="ponente1" style="font-size: 140%; font-weight: bold; top: 0%" >Llamando</span>
</div>

<!--**************** M O D A L I D A D   5  P R E G U N T A S ***************************** -->

<div id="ventana4" class="ventana4">
<table class="default">
<!-- <tr>
  <td class="amarillo">P5 :</td>
  <td id="p5" class="amarillo" style="display: none">Premio Mayor</td>
</tr>
<tr>
  <td >P4 :</td>
  <td id="p4" style="display: none">Pregunta 4</td>
</tr> -->
<tr>
  <td class="amarillo">P3 :</td>
  <td id="p3" class="amarillo" style="display: none">¡Has ganado!</td>
</tr>
<tr>
  <td >P2 :</td>
  <td id="p2" style="display: none">Pregunta 2</td>
</tr>
<tr>
  <td >P1 :</td>
  <td id="p1" style="display: none">Pregunta 1</td>
</tr>
<!--<div>Jugando: Nicolas Garzon</div>-->
</table>

</div>


<!--**************** M O D A L I D A D   9  P R E G U N T A S ***************************** -->

<!--<div id="ventana4" class="ventana4">
<table class="default">
<tr>
  <td class="amarillo">P9 :</td>
  <td id="p9" class="amarillo" style="display: none">Premio 9</td>
</tr>
<tr>
  <td >P8 :</td>
  <td id="p8" style="display: none">Premio 8</td>
</tr>
<tr>
  <td >P7 :</td>
  <td id="p7" style="display: none">Premio 7</td>
</tr>
<tr>
  <td class="amarillo">P6 :</td>
  <td id="p6" class="amarillo" style="display: none">Premio 6</td>
</tr>
<tr>
  <td >P5 :</td>
  <td id="p5" style="display: none">Premio 5</td>
</tr>
<tr>
  <td >P4 :</td>
  <td id="p4" style="display: none">Premio 4</td>
</tr>
<tr>
  <td class="amarillo">P3 :</td>
  <td id="p3" class="amarillo" style="display: none">Premio 3</td>
</tr>
<tr>
  <td >P2 :</td>
  <td id="p2" style="display: none">Premio 2</td>
</tr>
<tr>
  <td >P1 :</td>
  <td id="p1" style="display: none">Premio 1</td>
</tr>
</table>
</div>-->
<div class="logo2">
      <img src="img/logoesri.png" width=100%>
    </div>
    <center>
  <!-- <div class="logo3">
    <img src="img/cuelogo1.png" width=110%>
  </div> -->
  </center>
  <div id="ventana2" class="ventana2">
    <!--<a href="javascript:cerrarAyudaPublico()"><div id="cerrar"> <img src="img/cerrar.png" alt=""> </div></a>-->
    <div>
      <span style="font-size: 230%; font-weight: bold;" class="amarillo">Ayuda del público</span>
    </div>
    <div>
      <canvas id="migrafica"  width="450" height="180"></canvas>
    </div>
  </div>
  <center>
    <div class="logo">
      <img src="img/logoqqsg.png" width=32.5%>
    </div>
    </center>
  
 
  <div class="contenedor">
    <div class="puntaje" id="puntaje" style="display: none"></div>
    <div >
      <div class="categoria" id="categoria" style="display: none">
      </div>
      <div class="numero" id="numero" style="display: none"></div>
      <div style="font-size: 170%" class="pregunta" id="pregunta">
      </div>
      <img src="#" class="imagen" id="imagen">
    </div>
  </div>
  

 
  <div class="millonario">
  
    <!-- Primera fila de botones -->
    <div class="millonario__item">
      <div class="opciones">
        <div class="opciones__item">
          <button id="btn1" class="button fondoA" onclick="oprimir_btn(0)"><div><span class="amarillo">A: </span></div><div id="btn1-a"></div></button>
        </div>
  
        <div class="opciones__item">
          <button id="btn2" class="button fondoB" onclick="oprimir_btn(1)"><div><span class="amarillo">B: </span></div><div id="btn2-b"></div></button>
        </div>
      </div>
    </div>
  
    <!-- Segunda fila de botones -->
    <div class="millonario__item">
      <div class="opciones">
        <div class="opciones__item">
          <button id="btn3" class="button fondoA" onclick="oprimir_btn(2)"><div><span class="amarillo">C: </span></div><div id="btn3-c"></div></button>
        </div>
        
        <div class="opciones__item">
          <button id="btn4" class="button fondoB" onclick="oprimir_btn(3)"><div><span class="amarillo">D: </span></div><div id="btn4-d"></div></button>
        </div>
      </div>
    </div>
  </div>
</body>
<script>

function mostrarQR(){


Swal.fire({

  confirmButtonText: "Cerrar",
  background: "#2064A8",
  showConfirmButton: true,
  confirmButtonColor: "#164675",
  imageUrl:'img/QR_QQSGV3.png.png',
  imageWidth: "200px",
  imageHeight:"200px"

});

}
    

const resA = []
const resB = []
const resC = []
const resD = []


const apiKey = "";

const authentication = new arcgisRest.ApiKey({
  key: apiKey
});

arcgisRest.queryFeatures({
  url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/survey123_a9bf0ee0b73d4874ae0d3aa0e6005f05_fieldworker/FeatureServer/0",
//   where: "respuesta = 'A'",
  authentication
})
  .then(response => {
    let datos = response.features;
    //console.log(datos);
 
    for( i=0; i<datos.length; i++ ){
        
        if(datos[i]["attributes"]["respuesta"]=="A"){
            resA.push(datos[i]["attributes"]["respuesta"])
        }
        else if(datos[i]["attributes"]["respuesta"]=="B"){
            resB.push(datos[i]["attributes"]["respuesta"])
        }
        else if(datos[i]["attributes"]["respuesta"]=="C"){
            resC.push(datos[i]["attributes"]["respuesta"])
        }
        else if(datos[i]["attributes"]["respuesta"]=="D"){
            resD.push(datos[i]["attributes"]["respuesta"])
        }

    
    }

    

  var ctx = document.getElementById('migrafica');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
          datasets: [{
              label: '# of Votes',
              data: [resA.length,resB.length,resC.length,resD.length],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 5
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });



});


const todasRes = []

    
    arcgisRest.queryFeatures({
      url: "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/survey123_a9bf0ee0b73d4874ae0d3aa0e6005f05_fieldworker/FeatureServer/0",
    //   where: "respuesta = 'A'",
      authentication
    })
      .then(response => {
        let datos = response.features;
        //console.log(datos);
     
        for( i=0; i<datos.length; i++ ){
            
        todasRes.push(datos[i]["attributes"]["objectid"])
        
        }
    


    const featureServiceLayerUrl = "https://services.arcgis.com/8DAUcrpQcpyLMznu/arcgis/rest/services/survey123_a9bf0ee0b73d4874ae0d3aa0e6005f05_fieldworker/FeatureServer/0";

  
  

      arcgisRest.deleteFeatures({
        url: featureServiceLayerUrl,
        objectIds: todasRes,
        authentication
      })
        .then(handleDeleted);
    

    function handleDeleted(response) {
      console.log(response);
      document.getElementById("result-delete").textContent = JSON.stringify(response, null, 2);
    }
    
    
    });



  </script>
<footer class="bg-light text-center text-lg-start" style="height: 10%;">
  <div class="text-center p-3" style= "background: linear-gradient(70deg, #021f43, #164675, #2f9d40, #375c3d) no-repeat;">
    <p style="color: #d5d5d5; font-size: 15px; height: 20rem;" align="center" >
      Diseñado por el Semillero de Innovación Geográfica GeoGeeks - 2021
    </p>
  </div>
</footer>

  <script src="js/index.js"></script>
  <script src="js/abrirPestañas.js"></script>
  <script src="js/recibirDatos.js"></script>
  <script src="js/eliminar.js"></script>
  <audio id="audio" volume="0.1" src="song1.mp3" autoplay loop="-1">
        
        <script>
            var audio = document.getElementById("audio")
            audio.volume = 0.1;
        </script>
</html>