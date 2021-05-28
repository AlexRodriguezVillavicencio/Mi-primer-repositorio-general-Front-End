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

/* 
6. Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que 
muestren el algoritmo para determinar el costo y el descuento que 
tendrá un artículo. Considere que si su precio es mayor o igual a 
$200 se le aplica un descuento de 15%, y si su precio es mayor a $100 
pero menor a $200, el descuento es de 12%, y si es menor a $100, 
sólo 10%. */

/* let precio=0, descuento=0;
precio = prompt ("ingrese el precio")

if (precio>=200){
    descuento = precio*0.85;
    console.log(`el precio normal del producto es ${precio}, y con descuento: ${descuento}`)
}
else if (precio>100){
    descuento = precio*0.88;
    console.log(`el precio normal del producto es ${precio}, y con descuento: ${descuento}`)
}
else{
    descuento = precio*0.90;
    console.log(`el precio normal del producto es ${precio}, y con descuento: ${descuento}`)
} */

/* El presidente de la república ha decidido estimular a todos los estudiantes
de una universidad mediante la asignación de becas
mensuales, para esto se tomarán en consideración los siguientes
criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a
9, la beca será de $2000.00; con promedio mayor o igual a 7.5, de
$1000.00; para los promedios menores de 7.5 pero mayores o iguales
a 6.0, de $500.00; a los demás se les enviará una carta de invitación
incitándolos a que estudien más en el próximo ciclo escolar.
A los alumnos de 18 años o menores de esta edad, con promedios
mayores o iguales a 9, se les dará $3000; con promedios menores a
9 pero mayores o iguales a 8, $2000; para los alumnos con promedios
menores a 8 pero mayores o iguales a 6, se les dará $100, y a los
alumnos que tengan promedios menores a 6 se les enviará carta de
invitación. Realice el algoritmo correspondiente y represéntelo con
un diagrama de flujo. */

/* let age=0, average=0;
age= prompt("how age are you?");
average= +prompt("what is your average?");

if (age>18){
    if (average>=9){
        console.log("la beca es de 2000");
    }
    else if (average>=7.5){
        console.log("la beca es de 1000");
    }
    else if (average>=6){
        console.log("la beca es de 500");
    }
    else{
        console.log("estudien más para la proxima ☺");
    }
}
else {
    if (average>=9){
        console.log("la beca es de 3000");
    }
    else if (average>=8){
        console.log("la beca es de 2000");
    }
    else if (average>=6){
        console.log("la beca es de 100");
    }
    else{
        console.log("estudien más para la proxima ☻");
    }
} */

/* 8.  Cierta empresa proporciona un bono mensual a sus trabajadores, el
cual puede ser por su antigüedad o bien por el monto de su sueldo
(el que sea mayor), de la siguiente forma:
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
algoritmo correspondiente para calcular los dos tipos de bono, asignando
el mayor, y represéntelo con un diagrama de flujo y pseudocódigo. */

/* let x=0, s=0;
x = prompt("cuantos años tiene laborando en la empresa");
s = prompt("cual es su sueldo actual");

if (2<x<5){
    if (s<=1000){
        s = s*.25;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
    else if (s<=3500){
        s = s*.20;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
    else if (s>3500){
        s = s*.20;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
}
else if (5<=x){
    if (s<=1000){
        s = s*.30;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
    else if (s<=3500){
        s = s*.30;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
    else if (s>3500){
        s = s*.30;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
}
else if (x<=2){
    if (s<=1000){
        s = s*.25;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
    else if (s<=3500){
        s = s*.15;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
    else if (s>3500){
        s = s*.10   ;
        document.write("felicidades! tiene un bono extra de: "+ (s));
    }
}
 */

/* 9. Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
amplia (A) y daños a terceros (B). Para el plan A, la cuota
base es de $1,200, y para el B, de $950. A ambos planes se les carga
10% del costo si la persona que conduce tiene por hábito beber alcohol,
5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
cardiaca o diabetes–, y si tiene más de 40 años, se le carga
20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
el costo base. Realice diagrama de flujo y diagrama N/S que represente
el algoritmo para determinar cuánto le cuesta a una persona
contratar una póliza. */

/* let x=0, total=0, error=0;
x = prompt("cual es su tipo de poliza: A o B?");

if (x=="a" || x=="A" || x=="B" || x=="b" ){
    if (x=="a" || x=="A"){
        total = 1200;
    }
    else{
        total = 950
    }
    total = total;
    x = prompt("tienes habitos de alcohol: 1 = si o 2 = no");
    if (x==1  || x==2){
        if (x==1){
            total= total*1.1;
        }
        x = prompt("usas lentes: 1= si o 2=no");
        if (x==1 || x==2){
            if (x==1){
                total = total*1.05;
            }
            x = prompt( "tienes alguna enfermedad: 1=si o 2=no");
            if (x==1 || x==2){
                if (x==1){
                    total = total*1.05;
                }           
                x = +prompt( "ingresa tu edad");
                if (x>40){
                    total = total*1.2;
                }else{
                    total = total*1.1;
                }

            }else{error=1;}

        }else{error=1;}

    }else{error=1;}
 
}else{error=1;}

if (error==0){
    total = total.toFixed(0);
    console.log("el total a pagar es: " + (total));
}
else{
    console.log("la poliza no se puede calcular");
} */

/* 10. Represente un algoritmo mediante un diagrama de flujo y el pseudocódigo
para determinar a qué lugar podrá ir de vacaciones una
persona, considerando que la línea de autobuses “La tortuga” cobra
por kilómetro recorrido. Se debe considerar el costo del pasaje tanto
de ida, como de vuelta; los datos que se conocen y que son fijos son:
México, 750 km; P.V., 800 km; Acapulco, 1200 km, y Cancún, 1800
km. También se debe considerar la posibilidad de tener que quedarse
en casa. */

/* let go=0;
//considerando que cada KM es 1 sol
go= prompt("cuanto dinero tienes y ver a que lugar puedes viajar?");

if (go>= 3600){
    console.log("puedes vijara a mexico, PV , Acapulco o Cancún");
}
else if (go>=2400){
    console.log("puedes viajar a mexico, PV o Acapulco");
}
else if (go>=1600){
    console.log("puedes vijara a mexico o PV");
}
else if (go>=1500){
    console.log("puedes ir a mexico");
}
else{
    console.log("puedes quedarte en casa, aun no te alcanza");
} */
"use strict";