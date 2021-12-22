<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/style.css">
  <script src="js/abrirPestañas.js"></script>

  <!--Bootsrap 4 CDN-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    <!--Fontawesome CDN-->
    <script src="https://kit.fontawesome.com/479e83529b.js" crossorigin="anonymous"></script>

  <title>¿Quién quiere ser Geográfico?</title>
</head>

<body>
  <div class="menu">
    <button class="btnx" id="ayuda" data-toggle="tooltip" data-placement="bottom" title="Ingrese Usuario y Contraseña para iniciar el juego">Ayuda <i class="fas fa-question-circle"></i></button>
  </div>
  <!-- <div class="logo2">
    <img src="img/logoesri.png" width=100%>
  </div> -->
  <center>
  <!-- <div class="logo3">
    <img src="img/cuelogo1.png" width=110%>
  </div> -->
  </center>
  <div>
    <!--<div class="logo">
      <img src="img/logo2.png" width=26.5%>
    </div>-->
    <center>
      <br> <br>
      <br> <br>
      <br> <br>
      <br> <br>
      <br> <br>
      <br> <br>
    <!-- <div class="logo">
      <img src="img/logoqqsg.png" width=32.5%>
    </div> -->
    </center>
  </div>
  <script src="index.js"></script>
    <!--<form action="scripts/controlLogin.php" method="post">
      <div class="login">
        <label class="preguntalogin">Usuario: </label>
        <input class="inputingreso" type="text" name="usuario" required>
      </div>
      <div class="login">
        <label class="preguntalogin">Contraseña:</label>
        <input class="inputingreso" type="password" name="contraseña" required>
      </div>
      <div class="login">
        <input class="btnxingreso" type="submit" value="Ingresar" name="submit">
      </div>-->
      <?php
    if (isset($_GET["fallo"]) && $_GET["fallo"] == 'true') {
      echo " <center><div style='color:red'>Usuario o contraseña invalido </div></center>";
    }
    ?>
      <div class="millonariologin">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
        <center><h3>Iniciar sesión</h3></center>
			</div>
			<div class="card-body">
      <form action="controlLogin.php" method="post">
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" name="usuario" placeholder="Usuario" required>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" name="contraseña" placeholder="Contraseña" required>
					</div>
					<div class="form-group">
          <input type="submit" name="submit" value="Ingresar" class="btn float-right login_btn">
					</div>
				</form>
			</div>

		</div>
    </div>
	
  </div>
  
</body>
<div>

  <!-- <footer class="bg-light text-center text-lg-start" style="height: 10%;">
    <div class="text-center p-3" style= "background: linear-gradient(70deg, #021f43, #164675, #2f9d40, #375c3d) no-repeat;">
      <p style="color: #d5d5d5; font-size: 15px; height: 20rem;" align="center" >
        Diseñado por el Semillero de Innovación Geográfica GeoGeeks - 2021
      </p>
    </div>
  </footer> -->

</div>
<audio id="audio" volume="0.1" src="song1.mp3" autoplay loop="-1">
  <script>
    var audio = document.getElementById("audio")
    audio.volume = 0.1;
</script>
</html>