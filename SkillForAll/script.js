/* MODULO 2 Sección 2.0.14
Pregunta 1:Juguemos florista. Declare seis variables, recordando nombrarlos según su propósito:

el precio de una sola rosa ( 8 ) y el número de rosas que tiene ( 70 )
el precio de un solo lirio ( 10 ) y la cantidad de lirios que tiene ( 50 )
el precio de un solo tulipán ( 2 ) y la cantidad de tulipanes que tiene ( 120 )
Ahora declare tres variables, una para las rosas, lirios y tulipanes que tiene, 
en la que coloca su precio total. Inserte los valores correspondientes en las variables
utilizando las variables declaradas en el paso anterior. Finalmente, declare una variable 
en la que almacena el precio de todas sus flores ( nuevamente, use las variables anteriores 
para la inicialización ). Muestre toda la información de inventario en la consola en el siguiente 
formulario: */ 
//ZONA DE VARIABLES
/*const  rosePrice= 8; var  roseQuantity= 70; var roseValueTotal = rosePrice*roseQuantity;
const  lilyPrice= 10; var  lilyQuantity= 50; var lilyValueTotal = lilyPrice*lilyQuantity;
const  tulipPrice= 2; var  tulipQuantity= 120; var tulipValueTotal = tulipPrice*tulipQuantity;
let Total = roseValueTotal + lilyValueTotal + tulipValueTotal;
console.log(
    "Rose - unit price: "+rosePrice+ " , quantity: "+roseQuantity+ " , vaule: " + roseValueTotal+"\n"+
    "Lily - unit price: "+lilyPrice+ " , quantity: "+lilyQuantity+ " , vaule: " + lilyValueTotal+"\n"+
    "Tulip - unit price: "+tulipPrice+ " , quantity: "+tulipQuantity+ " , vaule: " + tulipValueTotal+"\n"+
    "Total: "+Total
    );
/*Pregunta 2: Modifique el código del ejemplo anterior.

Suponga que los precios de las flores serán constantes ( no cambiarán ). Declare e inicializa
las variables restantes de la misma manera que en el ejemplo anterior. Muestre toda la 
información recopilada en la consola. Ahora disminuya el número de rosas en 20 y lirios en 30.
 */ 
//ZONA DE VARIABLES
/*roseQuantity= roseQuantity-20; roseValueTotal = rosePrice*roseQuantity;
lilyQuantity= lilyQuantity-30; lilyValueTotal = lilyPrice*lilyQuantity; 
tulipQuantity= 120; tulipValueTotal = tulipPrice*tulipQuantity;
Total = roseValueTotal + lilyValueTotal + tulipValueTotal;
console.log(
    "Rose - unit price: "+rosePrice+ " , quantity: "+roseQuantity+ " , vaule: " + roseValueTotal+"\n"+
    "Lily - unit price: "+lilyPrice+ " , quantity: "+lilyQuantity+ " , vaule: " + lilyValueTotal+"\n"+
    "Tulip - unit price: "+tulipPrice+ " , quantity: "+tulipQuantity+ " , vaule: " + tulipValueTotal+"\n"+
    "Total: "+ Total
    );
*/



//Sección 2.0.15
/*LABORATORIO  Variables
Tiempo estimado
15-30 minutos

Nivel de dificultad
Fácil

Objetivos
Familiarice al estudiante con:

variables ( i.e. nombrar, declarar, inicializar y modificar sus valores )
Escenario
Nuestra tarea será crear una lista de contactos. Inicialmente, la lista será bastante 
simple: solo le escribiremos a tres personas utilizando los datos que se muestran en la 
tabla a continuación. En el resto del curso, volverá a este script y lo extenderá 
sistemáticamente con una nueva funcionalidad, utilizando los elementos recién aprendidos 
de JavaScript.*/

//VARIABLES
/*function tabla_de_Datos(nombreCompleto, telefono , email){
    console.log("| "+nombreCompleto +" | "+ telefono+ " | " + email +" |");
}
tabla_de_Datos("Luis Nieto", "+57 311-4377-329", "Lnieto009@gmail.com");*/


//Sección 2.1.11 
/*Pregunta 1: Escriba un código que creará variables e inicialize con valores de Booleano, 
Número, BigInt, Cadena, y tipos indefinidos que usan ( cuando sea posible ) literales y 
funciones de constructor.

Pregunta 2: Imprima todos los valores y todos los tipos de esos valores utilizando 
consola.log. Intente usar la interpolación de cadena para mostrar el valor y el tipo al 
mismo tiempo con una sola consola.logllamada, p. en la siguiente forma: 1000 [ número ].

Pregunta 3: Realizar una cadena de conversiones: crear un Booleanode un BigIntcreado a 
partir de un Númeroque fue creado a partir de un Cadena. Comience con el valor "1234".
¿Es posible?
Pregunta 4: Intente agregar dos valores del mismo tipo y verifique el tipo de resultado. 
Pruébalo para todos los tipos primitivos.

Pregunta 5: Intente agregar dos valores de diferentes tipos y verifique los resultados.

Pregunta 6: Intenta modificar la línea const str1 = 42 + "1";para obtener el resultado 
43( sin eliminar las comillas 1).
*/ /*
//pregunta 1
let bol1 = true; let bol2 = Boolean(true);
let num1 = 100; let num2 = Number(100);
let bigint1 = 100; let bigint2 = BigInt(200n);
let st1 = "hello"; let st2 = String("Hello");
let ud = undefined;

//pregunta 2
console.log(
    "Tipo boleanos - bol1 = "+`${bol1} = [${typeof bol1}]`+" - bol2 = "+`${bol2} = [${typeof bol2}]`+"\n"+
    "Tipo numerico - num1 = "+`${num1} = [${typeof num1}]`+" - num2 = "+`${num2} = [${typeof num2}]`+"\n"+
    "Tipo BigInt- bol1 = "+`${bigint1} = [${typeof bigint1}]`+" - bigint2 = "+`${bigint2} = [${typeof bigint2}]`+"\n"+
    "Tipo String - bol1 = "+`${st1} = [${typeof st1}]`+" - st2 = "+`${st2} = [${typeof st2}]`+"\n"
);*/



//Sección 2.2.1
//Tipo de datos complejos 
//objeto
let name = "Luis";
let phone = "+57 311-4377-329"
let pass = "badgsgashafafaf"
var register ={
    Name: name,
    Pass: pass,
    Phone: phone,
}
console.log(register);