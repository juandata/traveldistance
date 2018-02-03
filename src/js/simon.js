var off = true,verdeAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),rojoAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),azulAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),amarilloAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),wrongAudio = new Audio('https://github.com/juandata/medios/blob/master/Wrong-answer-sound-effect.mp3?raw=true'), secuenciaUser = [], secuenciaColores = ["verde", "rojo", "azul", "amarillo"],secuenciaAleatoria = [], aleatorioNumb = 0, aleatorio = "",  aleatorio2 = "", strictMode = false, restart = false;
//añado event listener a los colores
var colores = document.getElementsByClassName("borde");
for (var i = 0; i  < colores.length; i ++)
{ colores[i].addEventListener("click", iluminar);}

//modo strict
function strict(){
  if (strictMode == false){ strictMode = true;
     document.getElementById("strict").style.backgroundColor = "green";
                          }
  else { strictMode = false; document.getElementById("strict").style.backgroundColor = "red";}

}
//encender y apagar el juego
function on(){
 var on = document.getElementsByClassName("wraper");

  if (off == true) { on[0].style.pointerEvents = "auto"; off = false;}
  else {on[0].style.pointerEvents = "none"; off = true;
       secuenciaAleatoria = []; secuenciaUser = [];
    document.getElementById("digital").innerHTML = "0";
           //no es permitido hacer click mientras aleatorio
  var prohibido = document.getElementsByClassName("borde");
  for(var i = 0; i < prohibido.length; i ++){
    prohibido[i].style.pointerEvents = "none";
  }
       }


}

//iluminar,sonar al hacer click y guardar color elegido
function iluminar(color){
  var actual = color.target.id;
  if(actual == "verde"){ color.currentTarget.style.backgroundColor = "green";
     verdeAudio.play();  secuenciaUser.push(color.target.id);
   setTimeout(function(){
  document.getElementById("verde").style.backgroundColor = "#0080007d";
 },1000);
  }
  if(actual == "rojo"){ color.currentTarget.style.backgroundColor = "red";
  rojoAudio.play(); secuenciaUser.push(color.target.id);
 setTimeout(function(){
  document.getElementById("rojo").style.backgroundColor = "#ff000080";
 },1000);
  }
   if(actual == "azul"){ color.currentTarget.style.backgroundColor = "blue";
 azulAudio.play();  secuenciaUser.push(color.target.id);
 setTimeout(function(){
  document.getElementById("azul").style.backgroundColor = "#0000ff80";
 },1000);
  }
   if(actual == "amarillo"){ color.currentTarget.style.backgroundColor = "yellow";
amarilloAudio.play();  secuenciaUser.push(color.target.id);
  setTimeout(function(){
  document.getElementById("amarillo").style.backgroundColor = "#ffff007a";
 },1000);
  }
   var ultimoUser = secuenciaUser.length - 1;
   if (secuenciaUser.length == 20){
    //gano
     document.getElementById("autor").innerHTML = "YOU WON!!!";
   document.getElementById("arriba").style.backgroundColor = "green";
    var iluminando = -1;
    var gano = setInterval(function(){
      iluminando += 1;
      if(iluminando % 2 == 0){
 var iluminarBorde = document.getElementsByClassName("borde");
    for(var i = 0; i < iluminarBorde.length; i ++){
      iluminarBorde[i].style.transition = "1s";
      iluminarBorde[i].style.backgroundColor = "#47cf73";
    }}
      else {
          var iluminarBorde = document.getElementsByClassName("borde");
    for(var i = 0; i < iluminarBorde.length; i ++){
      iluminarBorde[i].style.transition = "1s";
      iluminarBorde[i].style.backgroundColor = "#333";
    }
      }
      if(iluminando == 5){
        document.getElementById("autor").innerHTML = "Designed by JDA &#169"; document.getElementById("arriba").style.backgroundColor = "#333"; secuenciaAleatoria = []; secuenciaUser = []; iluminando = -1; document.getElementById("digital").innerHTML = "0";
       clearInterval(gano);
      }
      },2000);

  }

else if (secuenciaUser[ultimoUser] == secuenciaAleatoria[ultimoUser]){if(secuenciaUser.length == secuenciaAleatoria.length){

  document.getElementById("autor").innerHTML = "CORRECT!";
   document.getElementById("arriba").style.backgroundColor = "green";
  setTimeout(function(){
     document.getElementById("autor").innerHTML = 'Designed by <a href="http://juandavidarce.co/" target= "_blank">JDA &#169; </a>'; document.getElementById("arriba").style.backgroundColor = "#333";
    secuencia();}, 1000);
}}

  else { //si se equivoca
    //no es permitido hacer click mientras aleatorio
  var prohibido = document.getElementsByClassName("borde");
  for(var i = 0; i < prohibido.length; i ++){
    prohibido[i].style.pointerEvents = "none";
  }

      document.getElementById("autor").innerHTML = "WRONG";
   document.getElementById("arriba").style.backgroundColor = "red";
    wrongAudio.play();
        setTimeout(function(){
           document.getElementById("autor").innerHTML = 'Designed by <a href="http://juandavidarce.co/" target= "_blank">JDA &#169; </a>';
   document.getElementById("arriba").style.backgroundColor = "#333";
          if(strictMode == false){ repetir(); }
          else {secuenciaAleatoria = []; secuenciaUser = [];
    document.getElementById("digital").innerHTML = "0";
               secuencia();}

        },1000);


    }
}

//numero aleatorio de 0 a 3
function aleat(){
  aleatorioNumb = Math.round(Math.random()  * (3 - 0) + 0);
  Math.round(aleatorioNumb);
  return aleatorioNumb;
}

//generar secuencia de colores

function secuencia(){
  //no es permitido hacer click mientras aleatorio
  var prohibido = document.getElementsByClassName("borde");
  for(var i = 0; i < prohibido.length; i ++){
    prohibido[i].style.pointerEvents = "none";
  }

  aleatorioNumb = aleat();
  secuenciaAleatoria.push(secuenciaColores[aleatorioNumb]);
  aleatorio = secuenciaAleatoria.slice(-1); secuenciaUser = [];
  document.getElementById("digital").innerHTML = secuenciaAleatoria.length;

  var elColor = "", elColorOriginal = "", contador = -1;

  var intervalo = setInterval(function(){


  document.getElementById("verde").style.backgroundColor = "#0080007d";
    document.getElementById("rojo").style.backgroundColor = "#ff000080";
    document.getElementById("azul").style.backgroundColor = "#0000ff80";
    document.getElementById("amarillo").style.backgroundColor = "#ffff007a";

    contador += 1; aleatorio = secuenciaAleatoria[contador];

     // es permitido hacer click mientras aleatorio
    if(contador == secuenciaAleatoria.length){ var prohibido = document.getElementsByClassName("borde");
  for(var i = 0; i < prohibido.length; i ++){
    prohibido[i].style.pointerEvents = "auto";
  }}



    //asignar colores
  //iluminar el color con el sonido
  if(aleatorio == "verde"){elColor = "green"; elColorOriginal = "#0080007d"; }
  if(aleatorio == "rojo"){elColor = "red"; elColorOriginal = "#ff000080"; }
  if(aleatorio == "azul"){elColor = "blue"; elColorOriginal = "#0000ff80"; }
  if(aleatorio == "amarillo"){elColor = "yellow"; elColorOriginal = "#ffff007a"; }

  document.getElementById(aleatorio).style.backgroundColor = elColor;
  if(aleatorio == "verde"){verdeAudio.play(); }
  if(aleatorio == "rojo"){rojoAudio.play(); }
  if(aleatorio == "azul"){azulAudio.play(); }
  if(aleatorio == "amarillo"){amarilloAudio.play(); }

  },1500);

}

function start(){
  if(restart == false){
   secuencia(); restart = true;
  }
  else { secuenciaAleatoria = []; secuenciaUser = [];
    document.getElementById("digital").innerHTML = "0"; secuencia(); }


}

//repetir secuencia de colores
function repetir(){
    //no es permitido hacer click mientras aleatorio
  var prohibido = document.getElementsByClassName("borde");
  for(var i = 0; i < prohibido.length; i ++){
    prohibido[i].style.pointerEvents = "none";
  }
 var elColor2 = "", elColorOriginal2 = "", contador2 = -1;
  secuenciaUser = [];
  var intervalo2 = setInterval(function(){


  document.getElementById("verde").style.backgroundColor = "#0080007d";
    document.getElementById("rojo").style.backgroundColor = "#ff000080";
    document.getElementById("azul").style.backgroundColor = "#0000ff80";
    document.getElementById("amarillo").style.backgroundColor = "#ffff007a";

    contador2 += 1; aleatorio2 = secuenciaAleatoria[contador2];

        // es permitido hacer click mientras aleatorio
    if(contador2 + 1 == secuenciaAleatoria.length){ var prohibido = document.getElementsByClassName("borde");
  for(var i = 0; i < prohibido.length; i ++){
    prohibido[i].style.pointerEvents = "auto";
  }}

    //asignar colores
  //iluminar el color con el sonido
  if(aleatorio2 == "verde"){elColor2 = "green"; elColorOriginal2 = "#0080007d"; }
  if(aleatorio2 == "rojo"){elColor2 = "red"; elColorOriginal2 = "#ff000080"; }
  if(aleatorio2 == "azul"){elColor2 = "blue"; elColorOriginal2 = "#0000ff80"; }
  if(aleatorio2 == "amarillo"){elColor2 = "yellow"; elColorOriginal2 = "#ffff007a"; }

  document.getElementById(aleatorio2).style.backgroundColor = elColor2;
  if(aleatorio2 == "verde"){verdeAudio.play(); }
  if(aleatorio2 == "rojo"){rojoAudio.play(); }
  if(aleatorio2 == "azul"){azulAudio.play(); }
  if(aleatorio2 == "amarillo"){amarilloAudio.play(); }

    if(contador2 + 1 == secuenciaAleatoria.length){
      clearInterval(intervalo2);
    }

  },1500);
}
