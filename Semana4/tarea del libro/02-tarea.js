/* // 1. Realice un algoritmo para determinar si una persona puede votar 
//con base en su edad en las próximas elecciones. Construya el diagrama de flujo, 
//el pseudocódigo y el diagrama N/S.

let edad = 18;
edad = prompt("ingrese su edad");
if ( edad >=18){
    console.log("puedes votar");
}
else {
    console.log("no puedes votar");
} */




/* //2. Realice un algoritmo para determinar el sueldo semanal de un trabajador con base en las horas 
//trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como 
//excedente y se paga el doble. Construya el diagrama de flujo, el 
//pseudocódigo y el diagrama N/S.

let horas = 0;
horas = prompt("ingrese las horas que laboró?");

if(horas<=40){
    console.log("se le pagará por " + (horas) +" horas laboradas");
}
else{
    horas = 40 + (horas-40)*2
    console.log("se le pagará por " + (horas) +" horas laboradas");
} */



/* 
3. El 14 de febrero una persona desea comprarle un regalo al ser querido que más aprecia en ese momento, su dilema radica en qué regalo 
puede hacerle, las alternativas que tiene son las siguientes:
****Regalo          Costo*******
Tarjeta           $10.00 o menos
Chocolates        $11.00 a $100.00
Flores            $101.00 a $250.00
Anillo            Más de $251.00 
************************************
Se requiere un diagrama de flujo con el algoritmo que ayude a determinar qué regalo se le puede comprar a ese ser tan especial por el 
día del amor y la amistad. */

/* let dinero = 0;
dinero = prompt("ingrese la cantidad de dinero que tiene");

if(dinero<=10){
    console.log("puedes comprar una tarjeta");
}
else if(dinero<=100){
    console.log("puedes comprar unos chocolates");
}
else if(dinero<=250){
    console.log("puedes comprar unas flores");
}
else{
    console.log("puedes comprar un anillo");
} */



/* 
4. El dueño de un estacionamiento requiere un diagrama de flujo con 
el algoritmo que le permita determinar cuánto debe cobrar por el 
uso del estacionamiento a sus clientes. Las tarifas que se tienen son 
las siguientes:
Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos. */

/* let hora = 0;
hora = prompt("ingrese la cantidad de horas que se va a quedar");

if (hora<=2){
    hora = hora*5;
    console.log(`su tarifa será de ${hora} soles`);
}
else if (hora<=5){
    hora = 10 + (hora-2)*4;
    console.log(`su tarifa será de ${hora} soles`);
}
else if (hora<=10){
    hora = 10 + 12 + (hora-5)*3;
    console.log(`su tarifa será de ${hora} soles`);
}
else{
    hora = 10 + 12 + 15 + (hora-10)*2;
    console.log(`su tarifa será de ${hora} soles`);
} */





/* 
5. Se tiene el nombre y la edad de tres personas. Se desea saber el 
nombre y la edad de la persona de menor edad. Realice el algoritmo 
correspondiente y represéntelo con un diagrama de flujo, pseudocódigo y diagrama N/S. */

/* let n1=0, n2=0, n3=0 ,e1=0, e2=0, e3=0;
n1 = prompt("ingrese el primer nombre");
e1 = prompt("ingrese la edad");
n2 = prompt("ingrese el segundo nombre");
e2 = prompt("ingrese la edad");
n3 = prompt("ingrese el tercer nombre");
e3 = prompt("ingrese la edad");

if (e1<e2){
    if (e1<e3){
        document.write(`${n1} es el menor con ${e1} años`)
    } else{
        document.write(`${n3} es el menor con ${e3} años`)
    }
}
else if (e1==e2){
    if (e1<e3){
        document.write(`${n1} y ${n2} son los menores con ${e1} años`)
    } else{
        document.write(`${n3} es el menor con ${e3} años`)
    }
}
else if (e1==e3){
    if (e1<e2){
        document.write(`${n1} y ${n3} son los menores con ${e1} años `)
    } else{
        document.write(`${n2} es el menor con ${e2} años`)
    }
}
else if (e2==e3){
    if (e2<e1){
        document.write(`${n2} y ${n3} son los menores con ${e2} años`)
    } else{
        document.write(`${n1} es el menor con ${e1} años `)
    }
}
else if (e1>e2){
    if (e2<e3){
        document.write(`${n2} es el menor con ${e2} años`)
    } else{
        document.write(`${n3} es el menor con ${e3} años`)
    }
} */


