// OBJETOS EN JAVASCRIPT

let cpu = {
    ram: 16,
    nucleos: 8,
    discosolido: "1tb",
    enfriamientoliquido: false,
}
console.log(cpu);
//modificando una propiedad del objeto
cpu.ram = 8;
console.log(cpu);
//////////////////////////////////////////

let plato = {
    nombre: "asado de tira",
    precio: 39.00,
    ingredientes: ["carne de res", "papas", "legumbres"]
}
//como agregar un ingrediende al objeto plato? (al arreglo)

plato.ingredientes.push("chorizo");
console.log(plato);

//cambiando un arreglo
plato.ingredientes[0] = "pan";
///////////////////////////////////////////////////

let objtrabajador = {
    datosPersonales: {
        nombre: "alex",
        apellido: "rodriguez",
        edad: 23,
    },
    cargo: "front",
    sueldo: 800.00,
}

console.log(objtrabajador);
////////////////////////////////////////////////////

//agregando un atributo al objeto
objtrabajador.datosPersonales.telefono = "976767262";
/////////////////////////////////////////////////////


let ajiGallina = {
    nombre: "aji de gallina",
    precio: 12.00,
    ingredientes: [{
        nombre:"gallina",
        um: "pechuga",
        cant: 1,
    },{
        nombre: "aji amarillo",
        um: "gramos",
        cant: 200,
    }]
}

console.log(ajiGallina);

console.log("listando los ingredientes");

for (let i = 0; i < ajiGallina.ingredientes.length; i++){
    console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre} `);
}
////////////////////////////////////////////////////////////////////

