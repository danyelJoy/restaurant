// querySelector

const heading = document.querySelector('.header_texto h2') //return 0 o 1 elemento
heading.textContent = 'Nuevo Heading'


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'Nuevo Texto Para Enlace'
enlaces[0].classList.add('nueva-clase');// par ELIMINAR O AGREGAR NO NECESITA EL .
// enlaces[0].classList.remove('navegacion__enlace'); 

/*
// GENERAR UN NUEVO ENLACE

const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enalce');

//Agregar al Documento

const navegacion =document.querySelector('.navegacion')
console.log(nuevoEnlace); */

//EVENTOS

console.log(1);

window.addEventListener('load', function(){ //load espera a que JS y los archivos que dependan del HTML estén listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // Solo espera por  el HTML, pero no espera CSS o imagenes
    console.log(4);
});

console.log(5);


//SELECCIONAR ELEMENTOS  Y ASOCIARLES UN EVENTO

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault();
//     console.log('Enviando');

// });

// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje:''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validar formulario

    const { nombre, email, mensaje } = datos;

    if ( nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true)

        return; //Corta la ejecución del código
    }


    // Enviar el formulario
    
    mostrarAlerta('Datos enviados exitosamente')
});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

        //Desaparecer después de 5 segundos
        setTimeout(() =>{
            alerta.remove();
        }, 5000);
    

}

//ENVIAR UNO POR UNO LOS DATOS

// function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');
    
//     formulario.appendChild(error);

//     //Desaparecer después de 5 segundos
//     setTimeout(() =>{
//         error.remove();
//     }, 5000);
// }

// function enviarDatos(mensaje){
//     const envio = document.createElement('P');
//     envio.textContent = mensaje;
//     envio.classList.add('envio');

//     formulario.appendChild(envio);
//     //Desaparecer después de 5 segundos
//     setTimeout(() =>{
//         alerta.remove();
//     }, 5000);
// }