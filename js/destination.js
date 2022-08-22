const jsonUrl = 'https://github.com/HerreraAxelBYU/space-tourism-website-main/blob/master/js/data.json';
const p_div = document.querySelector('#parrafos');

// LINKS
const links = document.querySelectorAll('#planets_menu li');

// IMAGEN
const image = document.querySelector('#imagen');

// NAV BAR
const luna = document.querySelector('#planet1');
const marte = document.querySelector('#planet2');
const europa = document.querySelector('#planet3');
const titan = document.querySelector('#planet4');

// TEXTOS
const titulo = document.querySelector('#planeta_titulo');
const descripcion = document.querySelector('#planeta_descripcion');
const distancia = document.querySelector('#distancia');
const tiempo = document.querySelector('#tiempo');


// TRAER DATOS
fetch('js/data.json')
.then(function ( response ) {
    return response.json();
})
.then(function (jsonObject) {
    const planetas = jsonObject['destinations'];
    console.log(planetas)

    // PREPARAR LAS VARIABLES
    const moon = planetas[0];
    const mars = planetas[1];
    const europa = planetas[2];
    const titann = planetas[3];

    //console.log(moon.images.webp);

    links.forEach( (link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        
        switch (e.target.innerText) {
            case 'MOON':
                cambiarInfo(moon)
                
                break
            case 'MARS':
                cambiarInfo(mars)
                
                break
            case 'EUROPA':
                cambiarInfo(europa)
                
                break
            case 'TITAN':
                cambiarInfo(titann)
                
                break
            }   
        })    
    })
})

function cambiarInfo(datos) {
    
    // DANDO CONTENIDO
    image.src = datos.images.webp
    titulo.textContent = datos.name;
    descripcion.textContent = datos.description;
    distancia.textContent = datos.distance;
    tiempo.textContent = datos.travel;

}
