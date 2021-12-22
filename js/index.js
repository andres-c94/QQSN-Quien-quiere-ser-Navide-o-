window.onload = function () {
  base_preguntas = readText("base-preguntas2.json");
  interprete_bp = JSON.parse(base_preguntas);
  //Cuando se recarga la pagina consulta con la cookie cuantas llevaba correctas, y vuelve a pintar el checkpoint
  pub = parseInt(getCookie("correctas"));
  for (i = 1; i <= pub; i++) {
    let cadenaHtml = "p";
    cad = cadenaHtml.concat(i);
    document.getElementById(cad).style.display = "block";
  }
  //Cuando se recarga la pagina viene y valida si la pregunta se debe cargar por primera vez o si ya esta cargada en cookie para ser reusada
  pub2 = getCookie("preguntatemporal");
  if (getCookie("preguntatemporal") == "null") {
    escogerPreguntaAleatoria();
  } else {
    escogerPregunta(pub2);
    
  }
};



let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4"),
];
npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  arr1=[];
  arr1=getCookie("mycookie")
  
  let n = Math.floor(Math.random() * interprete_bp.length);
  // n = 0
  let nume = n.toString()
  if(arr1.includes(nume)){
    escogerPreguntaAleatoria()
  }else{
  
  //guardarPregunta(n);
  arr2=[];
  arr2=[getCookie("mycookie")]
  arr2.push(n)
  setCookie('mycookie', arr2);
  npreguntas.push(n);
  preguntas_hechas++;
  setCookie("preguntatemporal", n);
  escogerPregunta(n);
}

}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n;

  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  } else {
    select_id("puntaje").innerHTML = "";
  }

  style("imagen").objectFit = pregunta.objectFit;
  
  //
  if (getCookie("respuestaguardada") == 0) {
    pintarRespuestasGuardadas(pregunta);
  } else {
    desordenarRespuestas(pregunta);
  }
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "100%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  //no desordenar las posibles respuestas *************************
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1-a").innerHTML = posibles_respuestas[0];
  select_id("btn2-b").innerHTML = posibles_respuestas[1];
  select_id("btn3-c").innerHTML = posibles_respuestas[2];
  select_id("btn4-d").innerHTML = posibles_respuestas[3];
  let respuesta1 = "respuesta1";
  setCookie(respuesta1, posibles_respuestas[0]);
  let respuesta2 = "respuesta2";
  setCookie(respuesta2, posibles_respuestas[1]);
  let respuesta3 = "respuesta3";
  setCookie(respuesta3, posibles_respuestas[2]);
  let respuesta4 = "respuesta4";
  setCookie(respuesta4, posibles_respuestas[3]);
}

function pintarRespuestasGuardadas(pregunta){
  pub1 = getCookie("respuesta1");
  pub2 = getCookie("respuesta2");
  pub3 = getCookie("respuesta3");
  pub4 = getCookie("respuesta4");
  select_id("btn1-a").innerHTML = pub1;
  select_id("btn2-b").innerHTML = pub2;
  select_id("btn3-c").innerHTML = pub3;
  select_id("btn4-d").innerHTML = pub4;
}

let suspender_botones = false;

function fiftyFifty() {
  let je;
  document.getElementById("btn50").style.visibility = "hidden";
  for (let p = 0; p < 4; p++) {
    if (posibles_respuestas[p] == pregunta.respuesta) {
      je = p;
      btn_correspondiente[p].style.setProperty("--color-secundario", "#008FB3");
    } else if (posibles_respuestas[p] !== pregunta.respuesta) {
      btn_correspondiente[p].style.visibility = "hidden";
    }
  }
  if (je >= 3) {
    je = Math.floor(Math.random() * 2);
    btn_correspondiente[je].style.visibility = "";
  } else if (je >= 2) {
    je = Math.floor(Math.random() * 1);
    btn_correspondiente[je].style.visibility = "";
  } else if (je >= 1) {
    je = Math.floor(Math.random() * 0);
    btn_correspondiente[je].style.visibility = "";
  } else {
    je = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    btn_correspondiente[je].style.visibility = "";
  }
  return;
}

/*function oprimir_btn(i) {
  if (suspender_botones) {
    return
  }
  suspender_botones = true
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++
    btn_correspondiente[i].style.background = "lightgreen"
  } else {
    btn_correspondiente[i].style.background = "pink"
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen"
      break
    }
  }*/
function pintarVerde() {
  btn_correspondiente[i].style.setProperty("--color-secundario", "lightgreen");
}

function finjuegoganador() {
  //alert("Felicitaciones ha ganado Quién quiere ser Geográfico!!!")

  Swal.fire({
    // title: "Perdiste",
    // text: "Ha perdido Quién quiere ser Geográfico!!!, suerte para la proxima..",
    html: '<h2 style="color: white;">¡Felicidades! Ha ganado "¿Quién quiere ser Geográfico?"</h2>',
    confirmButtonText: "Cerrar",
    background: "#2A619B",
    showConfirmButton: true,
    confirmButtonColor: "#0056B3",
    imageUrl:'img/feliz2.png',
    imageWidth: "110px",
    imageHeight:"110px"
  });

  document.getElementById("siguiente").style.display = "none";
  document.getElementById("btn50").style.display = "none";
  document.getElementById("btnayuda").style.display = "none";
  document.getElementById("btnllamada").style.display = "none";
}
function finjuegoperdedor() {
  //alert("Ha perdido Quién quiere ser Geográfico!!!, suerte para la proxima..")

  Swal.fire({
    // title: "Perdiste",
    // text: "Ha perdido Quién quiere ser Geográfico!!!, suerte para la proxima..",
    html: '<h2 style="color: white;">Ha perdido "¿Quién quiere ser Geográfico?" Suerte para la próxima...</h2>',
    confirmButtonText: "Cerrar",
    background: "#2A619B",
    showConfirmButton: true,
    confirmButtonColor: "#0056B3",
    imageUrl:'img/triste2.png',
    imageWidth: "110px",
    imageHeight:"110px"
  });

  document.getElementById("siguiente").style.display = "none";
  document.getElementById("btn50").style.display = "none";
  document.getElementById("btnayuda").style.display = "none";
  document.getElementById("btnllamada").style.display = "none";
}

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  let num=i+1;
  let prueba = "respuesta"+num;
  let prueba2 =getCookie(prueba);
  let prueba3 = pregunta.respuesta;
  console.log(pregunta.respuesta)
  console.log(prueba2)
  //boton cookie
  if(getCookie("bandera")==1){
  if (prueba2==prueba3) {
    pub = parseInt(getCookie("correctas"));
    preguntas_correctas=pub;
    preguntas_correctas++;
    setCookie("correctas", preguntas_correctas);
    console.log(btn_correspondiente[i]);
    let cadenaHtml = "p";
    cad = cadenaHtml.concat(preguntas_correctas);
    setTimeout(() => {
      document.getElementById(cad).style.display = "block";
    }, 3500);

    if (preguntas_correctas == 3) {
      document.getElementById("siguiente").style.display = "none";
      setTimeout(() => {
        finjuegoganador();
      }, 4000);
    }
  } else {
    btn_correspondiente[i].style.setProperty("--color-secundario", "#be8f0a");
    setTimeout(() => {
      btn_correspondiente[i].style.setProperty("--color-secundario", "pink");
    }, 3500);

    setTimeout(() => {
      finjuegoperdedor();
    }, 4000);
  }
  for (let j = 0; j < 4; j++) {
    let num2=j+1;
    prueba = "respuesta"+num2;
    prueba2 =getCookie(prueba);
    if (prueba2 == pregunta.respuesta) {
      btn_correspondiente[i].style.setProperty("--color-secundario", "#be8f0a");
      setTimeout(() => {
        btn_correspondiente[j].style.setProperty(
          "--color-secundario",
          "lightgreen"
        );
      }, 3500);
      break;
    }
  }
}else{
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++;
    setCookie("correctas", preguntas_correctas);
    console.log(btn_correspondiente[i]);
    let cadenaHtml = "p";
    cad = cadenaHtml.concat(preguntas_correctas);
    setTimeout(() => {
      document.getElementById(cad).style.display = "block";
    }, 3500);

    if (preguntas_correctas == 3) {
      document.getElementById("siguiente").style.display = "none";
      setTimeout(() => {
        finjuegoganador();
      }, 4000);
    }
  } else {
    btn_correspondiente[i].style.setProperty("--color-secundario", "#be8f0a");
    setTimeout(() => {
      btn_correspondiente[i].style.setProperty("--color-secundario", "pink");
    }, 3500);

    setTimeout(() => {
      finjuegoperdedor();
    }, 4000);
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[i].style.setProperty("--color-secundario", "#be8f0a");
      setTimeout(() => {
        btn_correspondiente[j].style.setProperty(
          "--color-secundario",
          "lightgreen"
        );
      }, 3500);
      break;
    }
  }
}
  
}

function siguiente() {
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 3000);
  document.getElementById("ventana2").style.display = "none";
}

//let p = prompt("numero")

/*function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white"
  }
  escogerPreguntaAleatoria()
}*/

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.setProperty("--color-secundario", "#008FB3");
    btn.style.visibility = "";
  }
  escogerPreguntaAleatoria();
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
//TEMPORIZADOR

//Cookies

document.getElementById("btnayuda").addEventListener("click", modAyudaPublico);
document.getElementById("btnllamada").addEventListener("click", modAyudaLlamada);
document.getElementById("btn50").addEventListener("click", modAyuda50);
document.getElementById("btnvolver").addEventListener("click", modVolver);
document.getElementById("siguiente").addEventListener("click", modSiguiente);
//document.getElementById("salirjuego").addEventListener("click", modSalirJuego);

function verCookie() {
  alert("Cookies actuales:\n" + document.cookie);
}
function inicializarCookie() {
  let cincuenta = "cincuenta";
  let publico = "publico";
  let llamada = "llamada";
  setCookie(publico, 1);
  setCookie(cincuenta, 1);
  setCookie(llamada, 1);
}

function modAyudaPublico() {
  let publico = "publico";
  let grafica = "grafica";
  let respuestaguardada = "respuestaguardada";
  let bandera = "bandera";
  setCookie(respuestaguardada, 0);
  setCookie(publico, 0);
  setCookie(grafica, 0);
  setCookie(bandera, 1)
}
function modAyuda50() {
  let cincuenta = "cincuenta";
  setCookie(cincuenta, 0);
  
}
function modAyudaLlamada() {
  let llamada = "llamada";
  setCookie(llamada, 0);
}
function modSiguiente() {
  let grafica = "grafica";
  let bandera = "bandera";
  setCookie(grafica, 1);
  let respuestaguardada = "respuestaguardada";
  setCookie(respuestaguardada, 1);
  setCookie("preguntatemporal", null);
  setCookie(bandera, 0)
}
function modVolver() {
  let bandera = "bandera";
  let cincuenta = "cincuenta";
  let publico = "publico";
  let llamada = "llamada";
  let grafica = "grafica";
  let respuestaguardada = "respuestaguardada";
  setCookie(respuestaguardada, 1);
  setCookie(publico, 1);
  setCookie(cincuenta, 1);
  setCookie(llamada, 1);
  setCookie("correctas", 0);
  setCookie("preguntatemporal", null);
  setCookie(grafica, 1);
  setCookie(bandera, 0)
}
function modSalirJuego() {
  arr1 = [100,200];
  setCookie('mycookie', arr1);
}

function deleteCookie(nombre) {
  setCookie(nombre, "");
}
function setCookie(nombre, valor) {
  document.cookie = nombre + "=" + valor;
}

function getCookie(nombre) {
  var nom = nombre + "=";
  var array = document.cookie.split(";");
  for (var i = 0; i < array.length; i++) {
    var c = array[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nombre) == 0) {
      return c.substring(nom.length, c.length);
    }
  }
  return "";
}
pub = parseInt(getCookie("cincuenta"));
if (pub == 0) {
  document.getElementById("btn50").style.visibility = "hidden";
}
pub = parseInt(getCookie("publico"));
if (pub == 0) {
  document.getElementById("btnayuda").style.visibility = "hidden";
}
pub = parseInt(getCookie("llamada"));
if (pub == 0) {
  document.getElementById("btnllamada").style.visibility = "hidden";
}
pub = parseInt(getCookie("grafica"));
if (pub == 0) {
  document.getElementById("ventana2").style.display="block";
}

