var pantalla = document.querySelector("#ahorcado")

var pincel = pantalla.getContext("2d")
pincel.fillStyle= "grey"

function dibujarBase(){
    pincel.beginPath();
    pincel.moveTo(20, 350);
    
    pincel.lineTo(300, 350);
    
    pincel.lineTo(500,350)
    
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#000"
    pincel.stroke()
    pincel.closePath();


}

function dibujarPoste(){
    
    pincel.beginPath();
    pincel.moveTo(150, 100);
    pincel.lineTo(150, 100);
    pincel.moveTo(150, 120);
    pincel.lineTo(150, 100);
    pincel.lineTo(50,100);    
    pincel.lineTo(50, 350);
    pincel.lineWidth = 3;
    pincel.strokeStyle = "#000"
    pincel.stroke()
    pincel.closePath();

}




function dibujarRostro(){
    pincel.beginPath();
    pincel.arc(150,150,35,0,Math.PI * 2, false);
    pincel.strokeStyle = "red";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath();


}

function dibujarTorzo(){
    pincel.beginPath();
    pincel.moveTo(150,180);
    pincel.lineTo(150,250);
    
    pincel.strokeStyle = "red";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath()

}

function dibujarBrazos(){
    pincel.beginPath();
    pincel.moveTo(120,220);
    pincel.lineTo(150,180);
    pincel.lineTo(180,220)
    pincel.strokeStyle = "red";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath()

}

function dibujarPiernas(){
    pincel.beginPath();
    pincel.moveTo(120,290);
    pincel.lineTo(150,250);
    pincel.lineTo(180,290)
    pincel.strokeStyle = "red";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath()

}

function dibujarOjosMuertos(){
    pincel.beginPath();
    
    //ojo izquierdo
    pincel.moveTo(125,120);
    pincel.lineTo(145,145);
    pincel.moveTo(145,120);
    pincel.lineTo(125,145);
    
    
    //ojo derecho
    pincel.moveTo(155,120);
    pincel.lineTo(175,145);
    pincel.moveTo(175,120);
    pincel.lineTo(155,145);

    pincel.strokeStyle = "blue";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath()
}
