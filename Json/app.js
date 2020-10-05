/* // JSON.par permite con convertir un string JSON en un objeto Javascript.

let jsonPersona = '{"nombre":"Pedro", "apellido":"Morganich"}'
let objPersona = JSON.parse(jsonPersona);

// JSON.stringify permite converitr un objeto Javascript en un string JSON.

let objPersona = {nombre: "Pedro", apellido: "Morganich"}
let jsonPersona = JSON.stringify(objPersona)

console.log(jsonPersona)

$.get('ruta','parametros',function(a){
console.log(a)
})



*/
traer();

function traer(){
    console.log('Hola')
    fetch('provincias.json')
    .then(res => res.json())
    .then(datos => {
        datos.data.forEach(function(item){
            
            console.log(item.nombre_completo);

            $('#provincias').append('<a class="dropdown-item" href="#">'+item.nombre_completo+'</a>')


        });
    })
}



