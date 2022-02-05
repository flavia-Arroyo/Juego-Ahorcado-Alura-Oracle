// capurar el boton de agregar palabra

var nueva_palabra = document.getElementById("nueva-palabra")
nueva_palabra.addEventListener("click", validar_palabra) // llama a la funcion que valide la palabra ingresada


function validar_palabra(){
    //capturo lo ingresado por el usuario y lo paso mayuscula
    var palNueva = document.getElementById("input-nueva-palabra").value.toUpperCase()
    //determino que se acepten solo mayusculas
    var patronValido = /^[A-Z]+$/g
    

    if (patronValido.test(palNueva)){
        // agrega al arrelo de palabras
        palabras.push(palNueva)
        swal({
            text:"palabra agregada",
            icon: "success",
            buttons:false,
            timer: 2000,
        })


    }else{
        
        if(palNueva.length == 0 ){
            swal({
                text: "Debe ingresar palabra",
                icon: "error",
                buttons:false ,
                timer:2000,
            })

        }else{
            swal({
                text: "solo se admite letras-sin acentos ",
                icon: "error",
                buttons:false ,
                timer:2000,
            })

        }        
    }

    document.getElementById("input-nueva-palabra").value = ""
    document.getElementById("input-nueva-palabra").focus()

}