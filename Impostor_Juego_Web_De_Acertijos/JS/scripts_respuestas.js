const impostors = localStorage.getItem('impostor_list');
const impostors_div = document.getElementById('impostores');

function see_impostors(){
    if (impostors_div && impostors){
        let impostor_array = impostors.split('-');
        for (let i = 0; i < impostor_array.length; i++){
            var p = document.createElement('p');
            p.style.fontFamily = '"Creepster", system-ui';
            p.style.fontStyle = "normal";
            p.textContent = `Jugador # ${impostor_array[i]}`;
            impostors_div.appendChild(p);
        }
    }
}

function new_game(){
    window.location.href = "config.html";
}

function home(){
    window.location.href = "../index.html";
}

document.addEventListener('DOMContentLoaded', () => {
  see_impostors();
});