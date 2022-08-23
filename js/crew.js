const dots = document.querySelectorAll('#circulos button');
let empezar = 0


const image = document.querySelector('#imagen');
const posicion = document.querySelector('#position')
const nombre = document.querySelector('#name');
const persona = document.querySelector('#persona');


// TRAER DATOS
fetch('js/data.json')
.then(function ( response ) {
    return response.json();
})
.then(function (jsonObject) {
    const persona = jsonObject['crew'];
    
    let douglas = persona[0];
    let mark = persona[1];  
    let victor = persona[2];
    let anousheh = persona[3];

    console.log(douglas)
    dots.forEach(dot => {
    dot.addEventListener('click', function(e){
        var target = e.target;

        if (target.id == 'button1') {
            cambiarPersona(douglas);
        } else if (target.id == 'button2'){
            cambiarPersona(mark);
        } else if (target.id == 'button3'){
            cambiarPersona(victor);
        }  else if (target.id == 'button4'){
            cambiarPersona(anousheh);
        }
    })
})


})




function cambiarPersona(datos){
    image.src = datos.images.webp;
    posicion.textContent = datos.role;
    nombre.textContent = datos.name;
    persona.textContent = datos.bio;
}



