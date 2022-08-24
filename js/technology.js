const imagen_grande = document.querySelector('#large_image');
const imagen_pequeña = document.querySelector('#normal_image');
const vehiculo = document.querySelector('#vehicle');
const description = document.querySelector('#descripcion');
const buttons = document.querySelectorAll('#botones button')

console.log(buttons)

fetch('js/data.json')
.then(function ( response ) {
    return response.json();
})
.then(function (jsonObject) {
    const vehiculo = jsonObject['technology'];
    console.log(vehiculo)

    let launch = vehiculo[0];
    let spaceport = vehiculo[1];
    let capsule = vehiculo[2];

    console.log(launch.images.portrait)

    buttons.forEach(boton => {
        boton.addEventListener('click', function(e){
            var target = e.target;

            switch(target.textContent) {
                case "1":
                    console.log('Hola')
                    cambiarVehiculo(launch)
                    break
                case "2":
                    console.log('Hola')
                    cambiarVehiculo(spaceport)
                    break
                case "3":
                    cambiarVehiculo(capsule)
                    break
            }
            
        })
    });

})


function cambiarVehiculo(datos){

    imagen_grande.src = datos.images.portrait;
    imagen_pequeña.src = datos.images.landscape;
    vehiculo.textContent = datos.name;
    description.textContent = datos.description;

}

