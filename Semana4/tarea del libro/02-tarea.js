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

if (2<x && x<5){
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
} */




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
    console.log("puedes vijar a a mexico o PV");
}
else if (go>=1500){
    console.log("puedes ir a mexico");
}
else{
    console.log("puedes quedarte en casa, aun no te alcanza");
} */





/* 
11. Se les dará un bono por antigüedad a los empleados de una tienda.
Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
sucesivamente hasta los 5 años. Para los que tengan más de 5, el
bono será de $1000. Realice un algoritmo y represéntelo mediante
el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
determinar el bono que recibirá un trabajador. */


/* let years = 0;
years = +prompt("Cuantos años tienes laborando en la empresa");

if (years == 1){
    console.log ("se te dará un bono por 100 dolares");
}
else if (years == 2){
    console.log("se te dará un bono por 200 dolares");
}
else if (years == 3){
    console.log("se te dará un bono por 300 dolares");
}
else if (years ==4 ){
    console.log("se te dará un bono por 400 dolares");
}
else if (years == 5 ){
    console.log("se te dará un bono por 500 dolares");
}
else if (years > 5 ){
    console.log("se te dará un bono por 1000 dolares");
}
else { 
    console.log("No tienes bono");
} */



/* 12. Realice un algoritmo que permita determinar el sueldo semanal de
un trabajador con base en las horas trabajadas y el pago por hora,
considerando que a partir de la hora número 41 y hasta la 45, cada
hora se le paga el doble, de la hora 46 a la 50, el triple, y que trabajar
más de 50 horas no está permitido. Represente el algoritmo mediante
el diagrama de flujo, el pseudocódigo y el diagrama N/S.*/

/* let hour = 0;
hour = prompt("horas trabajadas?");
//considerando el pago de 10 soles la hora
if (41<=hour && hour<=45){
    hour= (hour-40)*2*10 + 40*10;
    console.log(`su sueldo es: ${hour} soles`);
}
else if (46<= hour && hour <=50){
    hour= (hour-45)*3*10 + 40*10 + 5*2*10;
    console.log(`su sueldo es: ${hour} soles`);
}
else{
    
} */




/* 13. Los alumnos de una escuela desean realizar un viaje de estudios,
pero requieren determinar cuánto les costará el pasaje, considerando
que las tarifas del autobús son las siguientes: si son más de 100
alumnos, el costo es de $20; si son entre 50 y 100, $35; entre 20 y
49, $40, y si son menos de 20 alumnos, $70 por cada uno. Realice
el algoritmo para determinar el costo del pasaje de cada alumno.
Represente el algoritmo mediante el diagrama de flujo, el pseudocódigo
y el diagrama N/S. */

/* let x = 0;
x = prompt("cuantos alumnos son?");

if (100<x){
    x = x*20;
    console.log(`el total es ${x} soles`);
}
else if (50<=x){
    x = x*35;
    console.log(`el total es ${x} soles`);
}
else if (20<=x){
    x = x*40;
    console.log(`el total es ${x} soles`);
}
else{
    x = x*70;
    console.log(`el total es ${x} soles`);
} */




/* 14. Realice un algoritmo que, con base en una calificación proporcionada
(0-10), indique con letra la calificación que le corresponde: 10 es
“A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”. Represente
el diagrama de flujo, el pseudocódigo y el diagrama N/S correspondiente. */

/* let x = 0;
x = prompt("ingrese su nota del 0 al 10");

if ( x>=0 && x<=10 ){
    if (x == 10){
        console.log("A");
    }
    else if (x == 9){
        console.log("B");
    }
    else if (x == 8){
        console.log("C");
    }
    else if (x==7 || x==6){
        console.log("D");
    }
    else if (x==0 || x ==1 || x==2 || x==3 || x==4 || x==5){
        console.log("F");
    }
}
else{
 console.log("ERROR");
} */





/* 15. Realice un algoritmo que, con base en un número proporcionado
(1-7), indique el día de la semana que le corresponde (L-D). 
Represente el diagrama de flujo, el pseudocódigo y el diagrama N/S
correspondiente. */

/* let x = 0;
x = prompt("ingrese un numero del 1 al 7");

    if (x == 1){
        console.log("LUNES");
    }
    else if (x == 2){
        console.log("MARTES");
    }
    else if (x == 3){
        console.log("MIERCOLES");
    }
    else if (x==4){
        console.log("JUEVES");
    }
    else if (x==5){
        console.log("VIERNES");
    }
    else if (x==6){
        console.log("SABADO");
    }
    else if (x==7){
        console.log("DOMINGO");
    }
    else{
        console.log("ERROR");
    } */


/* 16. El secretario de educación ha decidido otorgar un bono por desempeño
a todos los profesores con base en la puntuación siguiente:
    ++++++++++++++++++++++++++++++
    Puntos                    Premio
    0 - 100                1 salario
    101 - 150              2 salarios mínimos
    151 - en adelante      3 salarios mínimos
    +++++++++++++++++++++++++++++++
Realice un algoritmo que permita determine el monto de bono que
percibirá un profesor (debe capturar el valor del salario mínimo y
los puntos del profesor). Represente el algoritmo mediante el diagrama
de flujo, el pseudocódigo y el diagrama N/S. */

/* let salario =0, puntos = 0;
salario = prompt("ingrese su salario");
puntos = +prompt("ingrese su puntaje");

if (Number.isInteger(puntos)){
//Number.isInteger(puntos) me permite validar si se ingreso un número entero
    if (puntos>=0 && puntos<=100){
        salario = salario;
        console.log(`recibirá: ${salario}`);
    }
    else if (puntos>=101 && puntos<=150){
        salario = 2*salario;
        console.log(`recibirá: ${salario}`);
    }
    else if (puntos>=151){
        salario = 3*salario;
        console.log(`recibirá: ${salario}`);
    }
}
else{
    console.log("ERROR");
} */





/* 17. Realice un algoritmo y represéntelo mediante el diagrama de flujo,
el pseudocódigo y el diagrama N/S que permitan determinar qué
paquete se puede comprar una persona con el dinero que recibirá
en diciembre, considerando lo siguiente:
• Paquete A. Si recibe $50,000 o más se comprará una televisión,
un modular, tres pares de zapatos, cinco camisas y cinco pantalones.
• Paquete B. Si recibe menos de $50,000 pero más (o igual) de
$20,000, se comprará una grabadora, tres pares de zapatos,
cinco camisas y cinco pantalones.
• Paquete C. Si recibe menos de $20,000 pero más (o igual) de
$10,000, se comprará dos pares de zapatos, tres camisas y tres
pantalones.
• Paquete D. Si recibe menos de $10,000, se tendrá que conformar
con un par de zapatos, dos camisas y dos pantalones. */


/* let paqueteA = {
    1: "TELEVISION",
    2: "UN MODULAR",
    3: "3 PARES DE ZAPATOS",
    4: "5 CAMISAS",
    5: "5 PANTALONES"
}

let paqueteB = {
    1: "GRABADORA",
    2: "3 PARES DE ZAPATOS",
    3: "5 CAMISAS",
    4: "5 PANTALONES"
}

let paqueteC = {
    1: "2 PARES DE ZAPATOS",
    2: "3 CAMISAS",
    3: "3 PANTALONES"
}

let paqueteD = {
    1: "1 PAR DE ZAPATOS",
    2: "2 CAMISAS",
    3: "2 PANTALONES"
}

let x = 0;
x = prompt ("ingrese el monto")

if (x>=50000){
    console.log(paqueteA);
}
else if (x>=20000){
    console.log(paqueteB);
}
else if (x>=10000){
    console.log(paqueteC);
}
else{
    console.log(paqueteD);
} */



/* 18. Realice un algoritmo y represéntelo mediante el diagrama de flujo,
el pseudocódigo y el diagrama N/S que permitan determinar la cantidad
del bono navideño que recibirá un empleado de una tienda,
considerando que si su antigüedad es mayor a cuatro años o su sueldo
es menor de dos mil pesos, le corresponderá 25 % de su sueldo, y
en caso contrario sólo le corresponderá 20 % de éste. */

/* let a = 0, s = 0;
a = prompt ("cuantos años lleva en la empresa");
s = prompt ("cual es su sueldo");

if (a>4 || s<2000){
    s = s*1.25;
    console.log(s);
}
else {
    s = s*1.2;
    console.log(s);
} */



/* 19. La secretaria de salud requiere un diagrama de flujo que le represente
el algoritmo que permita determinar qué tipo de vacuna (A, B o
C) debe aplicar a una persona, considerando que si es mayor de 70
años, sin importar el sexo, se le aplica la tipo C; si tiene entre 16 y
69 años, y es mujer, se le aplica la B, y si es hombre, la A; si es menor
de 16 años, se le aplica la tipo A, sin importar el sexo. */


/* let edad = 0, sexo = 0;
edad = +prompt("cual es su edad");
sexo = prompt ("Cual es su sexo: M o F")

if (sexo == "M" || sexo == "m" ||sexo == "F" || sexo == "f" ){
  
    if (edad>=70){
        console.log("le toca la vacuna C");
    }
    else if (edad>=16 && edad<70){
        if (sexo == "M" || sexo == "m"){
            console.log("le toca la vacuna A");
        }
        else{
            console.log("le toca la vacuna B");
        }
    }
    else if (edad>=0 && edad<16) {
        console.log("le toca la vacuna A chaval");
    }
    else{
        console.log("ERROR");
    }
}

else{
    console.log("ERROR");
} */






/*20. Realice un algoritmo para resolver el siguiente problema: una fábrica
de pantalones desea calcular cuál es el precio final de venta
y cuánto ganará por los N pantalones q  ue produzca con el corte de
alguno de sus modelos, para esto se cuenta con la siguiente información:
a) Tiene dos modelos A y B, tallas 30, 32 y 36 para ambos modelos.
b) Para el modelo A se utiliza 1.50 m de tela, y para el B 1.80 m.
c) Al modelo A se le carga 80 % del costo de la tela, por mano de
obra. Al modelo B se le carga 95 % del costo de la tela, por el
mismo concepto.
d) A las tallas 32 y 36 se les carga 4 % del costo generado por
mano de obra y tela, sin importar el modelo.
e) Cuando se realiza el corte para fabricar una prenda sólo se hace
de un solo modelo y una sola talla.
f) Finalmente, a la suma de estos costos se les carga 30%, que
representa la ganancia extra de la tienda. */