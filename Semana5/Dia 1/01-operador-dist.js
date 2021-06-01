/* let objpersona = {
    nombre: "alex",
    apellido: "rodriguez",
    mostrarDatos: function () {
        console.log(`${objpersona.nombre} ${this.apellido}`);
    }
};
//el operador this sirve para no tener que nombrar el objeto: persona
objpersona.mostrarDatos();


//como se crean clases de forma tradicional

function persona (){
    this.nombre = "alex",
    this.edad = 23,
    this.apellido = `rodriguez`,
    //para usar el operador this no se debe usar funciones de flecha
    this.imprimirInfo = function () {
        console.log(`${this.nombre} ${this.apellido}`);
    };
}
let objpersona1 = new persona();
objpersona1.imprimirInfo();
 */

//nueva forma de crear
//las clases son estructuras que permiten crear objetos
//con las propiedades y metodos que tienen sus clases padres

let users = [
    {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
    },
    {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    {
        id: 3,
        email: 'emma.wong@reqres.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
    },
    {
        id: 4,
        email: 'eve.holt@reqres.in',
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
    },
    {
        id: 5,
        email: 'charles.morris@reqres.in',
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
    },
    {
        id: 6,
        email: 'tracey.ramos@reqres.in',
        first_name: 'Tracey',
        last_name: 'Ramos',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
    },
];




/**
 * Las clases son estructuras que permiten crear
 * objetos con las propiedades y métodos que tienen
 * sus clases Padres
 */

class Producto {
	descripcion = '';
	precio = 0;
	color = '';
	constructor(desc = '', prec = 0, color = '') {
		this.descripcion = desc;
		this.precio = prec;
		this.color = color;
	}
	imprimirDatos = function () {
		console.log('** Datos del producto **');
		console.log(`Nombre: ${this.descripcion}`);
		console.log(`Precio: S/${this.precio}`);
		console.log(`color: ${this.color}`);
	};
}







let objProducto1 = new Producto('Play Station 5', 4000.0, 'blanco');
objProducto1.color = 'Gris';
objProducto1.imprimirDatos();

let objProducto2 = new Producto();
console.log(objProducto2);

/**
 * Creando objetos de la clase Array
 * 02 formas
 */
let arreglo1 = [90, 8, 7];
let arreglo2 = new Array();
arreglo2.push(50);
arreglo2.push(34);
arreglo2.push(8);

console.log(arreglo1);
console.log(arreglo2);

/**
 * Creando numbers / numeros desde su clase
 * primitiva
 */

let edad = 29;
let edad2 = new Number(20);
console.log(edad);
console.log(edad2);

let rpta = edad + edad2;
console.log(rpta);






/**
 * A continuación una serie de propiedades de la clase
 * STRING (cadenas de texto)
 */
let frase = 'Los programadores crean lo que las personas sueñan';

/**
 * cadena.length => retorna la cantidad de caracteres
 * que tiene un string
 */
console.log(`Cantidad de caracteres: ${frase.length}`);

/**
 * cadena.toUpperCase()=> retorna la misma frase en mayúsculas
 * OJO: retorna, no TRANSFORMA, es decir no cambia el estado original
 * de la variable
 */
console.log(`${frase.toUpperCase()}`);
/**
 * cadena.toLowerCase()=> retorna la misma frase en minúsculas
 * OJO: retorna, no TRANSFORMA, es decir no cambia el estado original
 * de la variable
 */
console.log(`${frase.toLowerCase()}`);

/**
 * cadena.split("criterio_de_separacion"),
 * Retorna un arreglo de strings dado un separador
 */
let resultadoSplit = frase.split(' ');
console.log(resultadoSplit);

/**
 * cadena.indexOf("termino_a_buscar")
 * Retorna la posición en la que inicia el término buscado dentro
 * de la cadena de texto
 */

/**
 *  Obteniendo la posición de la palabra crean
 */
console.log(frase.indexOf('crean'));
/**
 * Cuando la palabra o el término buscado no existe, el retorno es -1
 */
console.log(frase.indexOf('asd'));

/**
 * cadena.trim()
 * retorna la misma cadena de texto sin los espacios de los extremos
 * OJO: los espacios en blanco internos, no cuentan, sólo los externos
 */

let email = 'jorgegarba@gmail.com    ';
let password = '     123456';

console.log(email.trim());
console.log(password.trim());

/**
 * cadena.replace(termino_a_reemplazar,termino_de_reemplazo)
 * Reemplaza con el "termino_de_reemplazo" en cada lugar donde
 * se encuentre el "termino_a_reemplazar"
 */

let resultadoReplace = frase.replace('ñ', 'ni');
console.log(resultadoReplace);

let resultadoReplace2 = frase.replace(/\s/g, '');
console.log(resultadoReplace2);

/**
 * cadena.substr(posicion_inicial,cantidad_de_caracteres)
 * Retorna una subcadena de la cadena inicial que inicial
 * en la "posición_inicial" y a partir de ese punto, contamos
 * "cantidad_de_caracteres"
 */

let subcadena = frase.substr(8, 5);
console.log(subcadena);






**
 * Clase Date
 * para manejar fechas
 */
let hoy = new Date();
console.log(hoy);

/**
 * Obtener el año de un objeto DATE
 * date.getFullYear();
 */

console.log(`Año actual: ${hoy.getFullYear()}`);

/**
 * Obtener el mes actual
 * Enero: 0
 * Diciembre: 11
 * date.getMonth();
 */

console.log(`Mes actual: ${hoy.getMonth() + 1}`);

/**
 * Obtener la fecha de hoy (el día del mes)
 * date.getDate();
 */

console.log(`Día del mes: ${hoy.getDate()}`);

/**
 * Obtener las horas, minutos y segundos
 * date.getHours()
 * date.getMinutes()
 * date.getSeconds()
 */

console.log(`Hora actual: ${hoy.getHours()}`);
console.log(`Minutos actual: ${hoy.getMinutes()}`);
console.log(`Seconds actual: ${hoy.getSeconds()}`);

/**
 * Obtener del día de la semana
 * date.getDay();
 */
const dias = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado',
];

console.log(`Día de la semana: ${dias[hoy.getDay()]}`);

/**
 * Constructores de fechas
 */

let diaDelPadre = new Date(2021, 5, 20, 0, 0, 0);
console.log('El día del padre es: ');
console.log(dias[diaDelPadre.getDay()]);





/**
 * Ejemplo de método estático
 * Cuando un método es estático, se puede invocarlo
 * sin necesidad de crear un objeto de la clase
 * a la que pertenece
 */

class Utils {
	static valorDePi() {
		return 3.1415;
	}
}

console.log(Utils.valorDePi());

/**
 * La clase Math tiene muchos métodos estáticos en su interior
 * que podemos usar sin necesidad de instancia objetos
 */

/**
 * Math.srqt(numero)
 * retorna la raíz cuadrada de un número
 */
console.log(`Raiz cuadrada de 81: ${Math.sqrt(81)}`);

/**
 * Math.round(numero)
 * Redondear un número
 */
console.log(`Redondeando 4.85: ${Math.round(4.85)}`);

/**
 * Math.ceil(numero)
 * Devuelve el techo de un número decimal
 * Ejm:
 * Techo de 3.11 => 4
 * Techo de 2.0001 => 3
 */

console.log(`Techo de 4.01: ${Math.ceil(4.01)}`);

/**
 * Math.floor(numero)
 * Devuelve el piso de un número decimal
 * Ejm:
 * Piso de 3.99 => 3
 * Piso de 2.87 => 2
 */

console.log(`Piso de 8.99: ${Math.floor(8.99)}`);

/**
 * Obtener un número aleatorio entre dos números
 * dados
 * Math.random()
 */

// a continuación, un artificio para calcular un random
// entre dos números max y min
let aleatorio = Math.random() * (100 - 50) + 50;
console.log(aleatorio);

// Propiedad de los Numbers para redondear o aplicar decimales
// a un número determinado

// number.toFixed(cantidad_de_decimales)

console.log(aleatorio.toFixed(2));





/**
 * Ejemplo de método estático
 * Cuando un método es estático, se puede invocarlo
 * sin necesidad de crear un objeto de la clase
 * a la que pertenece
 */

class Utils {
	static valorDePi() {
		return 3.1415;
	}
}

console.log(Utils.valorDePi());

/**
 * La clase Math tiene muchos métodos estáticos en su interior
 * que podemos usar sin necesidad de instancia objetos
 */

/**
 * Math.srqt(numero)
 * retorna la raíz cuadrada de un número
 */
console.log(`Raiz cuadrada de 81: ${Math.sqrt(81)}`);

/**
 * Math.round(numero)
 * Redondear un número
 */
console.log(`Redondeando 4.85: ${Math.round(4.85)}`);

/**
 * Math.ceil(numero)
 * Devuelve el techo de un número decimal
 * Ejm:
 * Techo de 3.11 => 4
 * Techo de 2.0001 => 3
 */

console.log(`Techo de 4.01: ${Math.ceil(4.01)}`);

/**
 * Math.floor(numero)
 * Devuelve el piso de un número decimal
 * Ejm:
 * Piso de 3.99 => 3
 * Piso de 2.87 => 2
 */

console.log(`Piso de 8.99: ${Math.floor(8.99)}`);

/**
 * Obtener un número aleatorio entre dos números
 * dados
 * Math.random()
 */

// a continuación, un artificio para calcular un random
// entre dos números max y min
let aleatorio = Math.random() * (100 - 50) + 50;
console.log(aleatorio);

// Propiedad de los Numbers para redondear o aplicar decimales
// a un número determinado

// number.toFixed(cantidad_de_decimales)

console.log(aleatorio.toFixed(2));
