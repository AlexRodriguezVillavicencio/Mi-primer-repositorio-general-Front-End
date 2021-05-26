/* //1. un diagrama de flujo y pseudocódigo que representen el algoritmo para obtener el área de un triángulo.

let area = 0, base = 0, altura = 0;
altura = prompt("Ingrese la altura del triangulo");
base = prompt("Ingrese la base del triangulo");

area= (base*altura)/2
console.log(area);
document.write (`El área del triangulo es: ${area}`); */

/* //2.Una empresa importadora desea determinar cuántos dólares puede 
//adquirir con equis cantidad de dinero mexicano. Realice un diagrama 
//de flujo y pseudocódigo que representen el algoritmo para tal fin

let moneda = 0;
moneda = prompt("Ingrese la cantidad de dolares que quiera convertir a pesos mexicanos");

moneda = moneda*19.88;
document.write(`Son ${moneda} pesos mexicanos`); */

/* //3. Una empresa que contrata personal requiere determinar la edad de 
//las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el diagrama 
//de flujo y pseudocódigo que representen el algoritmo para solucionar 
//este problema.

let año = 0;
año = prompt("Ingrese el año en el que nació");

año = 2021 - año;
document.write(`Usted tiene ${año} años ♥`) */

/* //4. Un estacionamiento requiere determinar el cobro que debe aplicar a 
//las personas que lo utilizan. Considere que el cobro es con base en las 
//horas que lo disponen y que las fracciones de hora se toman como 
//completas y realice un diagrama de flujo y pseudocódigo que representen el algoritmo que permita determinar el cobro.

let horas = 0;
horas = +prompt("Ingrese las horas que se va a quedar");
horas = horas.toFixed(0);
document.write(`se le cobraran las ${horas} horas`); */

/* //5.Pinturas “La brocha gorda” requiere determinar cuánto cobrar por 
//trabajos de pintura. Considere que se cobra por m2 y realice un diagrama de flujo y pseudocódigo que representen el algoritmo que le 
//permita ir generando presupuestos para cada cliente.

let cliente = 0;
cliente = +prompt("Ingrese el metro cuadrado que va a pedir");
document.write(`se le cobraran de ${cliente} m2`); */

/* //6. Se requiere determinar la hipotenusa de un triángulo rectángulo. 
//¿Cómo sería el diagrama de flujo y el pseudocódigo que representen 
//el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene 
//que: C2 = A2+ B2

let cateto1 = 0, cateto = 0, hipotenusa = 0;
cateto1 = +prompt("inregese la longitud del primer cateto");
cateto2 = +prompt("inregese la longitud del segundo cateto");

hipotenusa = Math.sqrt(cateto1*cateto1 + cateto2*cateto2); 
console.log(hipotenusa);
document.write(`la hipotenusa del triangulo es ${hipotenusa}`); */

/* //7. compañía de autobuses “La curva loca” requiere determinar el costo 
//que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros 
//por recorrer y en el costo por kilómetro. Realice un diagrama de 
//flujo y pseudocódigo que representen el algoritmo para tal fin.

let kilometro = 0;
kilometro = +prompt("Ingrese los kilometros a recorrer");
document.write(`se le cobraran por ${kilometro} kilometros multiplicado por el costo de un kilometro`); */

/* //8. Se requiere determinar el tiempo que tarda una persona en llegar de 
//una ciudad a otra en bicicleta, considerando que lleva una velocidad 
//constante. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin.

let d = 0, v = 0, t = 0;
d = +prompt("Cuantos metros recorrerá?");
v = +prompt("A que velocidad constante irá?");

t = d/v ;
t = t.toFixed(2);
console.log(t);
document.write(`Usted llegará en un tiempo de ${t} segundos`); */

/* //9. se requiere determinar el costo que tendrá realizar una llamada 
//telefónica con base en el tiempo que dura la llamada y en el costo por 
//minuto. Realice un diagrama de flujo y pseudocódigo que representen 
//el algoritmo para tal fin.

let costo = 0;
costo = +prompt("Ingrese el tiempo de la llamada? (costo por minuto de llamada: 0.25 soles");
costo= costo*0.25;
document.write(`su costo de llamada es de ${costo} soles`); */

/* //10. La CONAGUA requiere determinar el pago que debe realizar una 
//persona por el total de metros cúbicos que consume de agua. Realice un diagrama de flujo y pseudocódigo que representen 
//el algoritmo que permita determinar ese pago.

let cubico = 0;
cubico = +prompt("Ingrese los metros cubicos de agua? costo por metro cubico: 0.5 soles");
cubico= cubico*0.25;
document.write(`el pago total es de ${cubico} soles`); */

/* //11. La compañía de luz y sombras (CLS) requiere determinar el pago 
//que debe realizar una persona por el consumo de energía eléctrica, 
//la cual se mide en kilowatts (KW). Realice un diagrama de flujo y 
//pseudocódigo que representen el algoritmo que permita determinar ese pago.

let kilowatts = 0;
kilowatts = +prompt("ingrese la cantidad de kilowatts que consumió? Precio por kilowatt: 0.33 soles")
kilowatts = kilowatts*0.33
kilowatts = kilowatts.toFixed(2);
document.write(`tu pago total es de ${kilowatts} soles`); */

/* //12. Realice un diagrama de flujo y pseudocódigo que representen el 
//algoritmo para determinar cuánto pagará finalmente una persona 
//por un artículo equis, considerando que tiene un descuento de 20%, 
//y debe pagar 15% de IVA (debe mostrar el precio con descuento y el 
// precio final).

let monto = 0 , descuento = 0 ,total = 0;
monto = +prompt("ingrese el monto");
descuento = monto*0.80;
descuento = descuento.toFixed(2);
document.write(`usted tiene un descuento del 20% lo cual pagará ${descuento} soles sin iva`);
total = descuento*1.18;
total = total.toFixed(2);
document.write(`y el costo total con iva es de ${total} soles `); */

/* //13. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para 
//determinar cuánto dinero ahorra una persona en un 
//año si considera que cada semana ahorra 15% de su sueldo 
//(considere cuatro semanas por mes y que no cambia el sueldo).

let t = 48, sueldo = 0, m = 0;
sueldo = prompt("diga su sueldo semanal");
m = sueldo*t*0.15;
document.write(`usted ahorrara dentro de un año ${m}`);
console.log(m); */

/* //14. Una empresa desea determinar el monto de un cheque que debe 
//proporcionar a uno de sus empleados que tendrá que ir por equis 
//número de días a la ciudad de Monterrey; los gastos que cubre la 
//empresa son: hotel, comida y 100.00 pesos diarios para otros gastos. 
//El monto debe estar desglosado para cada concepto. Realice un 
//diagrama de flujo y pseudocódigo que representen el algoritmo 
//que determine el monto del cheque.

let dias = 0; h = 0, c = 0, e = 100;
dias = prompt("cuantos dias estarás en monterrey?")
h = dias;
document.write(`Hotel: Se te darán para ${h} dias. <br/>`);
c = dias;
document.write(`Comida: Se te darán para ${h} dias. <br/>`);
e = e*dias;
document.write(`Extra: Se te darán ${e} soles.`); */

/* //15. Se desea calcular la potencia eléctrica de circuito de la figura 2.6. 
//Realice un diagrama de flujo y el pseudocódigo que representen el algoritmo 
//para resolver el problema. Considere que: P = V*I y V = R*I.
//R = 4Ω
//V = I = ?
// Figura 2.6 Circuito eléctrico.

let v = 0, p = 0, r = 4;
v = prompt("ingrese la cantidad de voltaje");
p = (v*v)/r;
document.write(`la potencia sera de ${p}`); */

/* //19. realice el diagrama de flujo y pseudocódigo que representen el 
//algoritmo para encontrar el área de un cuadrado.

let lado = 0, area = 0;
lado = +prompt("ingrese el lado del cuadrado");
area = lado*lado;
document.write( `el area del cuadraddo es de ${area} `); */

/* //20. realice el diagrama de flujo y pseudocódigo que representen el 
//algoritmo para determinar el promedio que obtendrá un alumno considerando 
//que realiza tres exámenes, de los cuales el primero y el 
//segundo tienen una ponderación de 25%, mientras que el tercero de 50%.

let a = 0, b = 0, c = 0, total= 0;
a =+prompt("ingrese la primera nota");
b =+prompt("ingrese la segunda nota");
c =+prompt("ingrese la tercera nota");
total = a*0.25 + b*0.25 + c*0.5;
total = total.toFixed(2);
document.write(`su promedio es de ${total}`); */
//21. realice un diagrama de flujo y pseudocódigo que representen el algoritmo para determinar 
//aproximadamente cuántos meses, semanas, días y horas ha vivido una persona.

/* //22. se requiere un algoritmo para determinar el costo que tendrá realizar una 
//llamada telefónica con base en el tiempo que dura la llamada y en el costo por minuto. 
//Represente la solución mediante el diagrama de flujo y pseudocódigo.

//esta es una pregunta repetida, es el numero 9 */

/* //23. El hotel “Cama Arena” requiere determinar lo que le debe cobrar a 
//un huésped por su estancia en una de sus habitaciones. Realice un 
//diagrama de flujo y pseudocódigo que representen el algoritmo para 
//determinar ese cobro.

let habitaciones = 0;
habitaciones = prompt("en que numero de habitación estuvo?");
habitaciones = prompt("cuantas horas estuvo?");
document.write(`usted pagara por las ${habitaciones} horas que se quedó`); */
"use strict";