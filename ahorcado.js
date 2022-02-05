// crea el arreglo de palabras secretas
var palabras = ["HIPOPOTAMO", "ARMADURA", "ALUMINIO", "FARMACIA", "PINTURA", "CARACOL", "ALCOHOL", "ELEFANTE", "CALCULADORA", "COMPUTADORA", "ALUMINIO"]
// creacion de variables
var palNueva;
var letra;
var letrasRepetidas= [];
var letrasErroneas= [];
var vidasTotales = 5
var palabra;
var palabraGuion;
var repetida = false





//oculto canvas
document.getElementById("ahorcado").style.display = "none";
//oculto boton reinicio
document.getElementById("reiniciar-juego").style.display= "none";


// captura el boton de iniciar juego
var jugar = document.getElementById("iniciar-juego")
jugar.addEventListener("click", function(){
    // hago visible el juego
    document.getElementById("areaJuego").style.display = "flex";
   
        
    //muestro el canvas
    
    document.getElementById("ahorcado").style.display = "block";
    
    // selecciono una palabra a adivinar por el usuario
    palabra = palabras[Math.floor(Math.random() * palabras.length)]
     
    

    // convertir la palabra seleccionada a guiones bajos
    palabraGuion = palabra.replace(/./g , "_ ")

    // hacerlo visible la palabra seleccionada con guiones
    document.getElementById("palabraSecreta").innerHTML = palabraGuion
    //muestra el titulo de las letras erradas
    document.getElementById("tituloLetras").innerHTML = "LETRAS EQUIVOCADAS"

    // se muestra la cantidad de vidas
    document.getElementById("vidas").innerHTML = "LA CANTIDAD DE VIDAS ES:  " + vidasTotales; 
    //llama a la funcion de dibujar la base del ahorcado
    dibujarBase()
    // captura el teclado
    
    window.addEventListener("keydown", ingresarLetra);

    
    
})

