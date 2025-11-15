const impostors = localStorage.getItem('impostor_list');
const impostors_div = document.getElementById('impostores');

function see_impostors(){
    if (impostors_div && impostors){
        let impostor_array = impostors.split('-');
        for (let i = 0; i < impostor_array.length; i++){
            var p = document.createElement('p');
            p.style.fontSize = "clamp(14px, min(7vh, 8vw), 40px)";
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
    dell();
    window.location.href = "../index.html";
}

function dell(){
    localStorage.removeItem('word');
    localStorage.removeItem('players');
    localStorage.removeItem('impostors');
    localStorage.removeItem('impostor_list');
}

document.addEventListener('DOMContentLoaded', () => {
  see_impostors();
});