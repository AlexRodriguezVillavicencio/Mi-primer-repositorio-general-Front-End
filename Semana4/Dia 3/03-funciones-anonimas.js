//FUNCIONES ANÓNIMAS Y CALLBACKS

/* function buscarporDNI(dni, parametro2){

    setTimeout(function(){
        parametro2();
    },3000)
}

buscarporDNI("755849999", function (){
            console.log("hola soy una función anonima");
})
 */


/*
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback 
 * Funcion que recibe un callback al cual envía
 * un arreglo con la lista de usuarios
 */


const getNombres = (callback) => {
    fetch("https://reqres.in/api/users").then((peticion) => {
      return peticion.json();
    }).then(data => {
      let nombres = data.data.map(obj => obj.first_name);
      callback(nombres);
    })
  };
  
getNombres(function(usuarios){
    console.log(usuarios);
});
console.log("linea final!!!!!");