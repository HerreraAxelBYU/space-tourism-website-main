const hamburguer = document.querySelector('#hamburguer_btn');
const close = document.querySelector('#close_btn');
const hidden_nav = document.querySelector('#hidden_menu');


hamburguer.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);

function showMenu(){
    hidden_nav.classList.remove('hidden');
}

function hideMenu(){
    hidden_nav.classList.add('hidden');
}


fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));