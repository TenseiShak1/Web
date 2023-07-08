var miBoton = document.getElementById('miBoton');
var incres = 0;
miBoton.addEventListener("click",function(){
    console.log("Se hizo click");
    incres= incres +1;
    console.log(incres);
    return incres
});