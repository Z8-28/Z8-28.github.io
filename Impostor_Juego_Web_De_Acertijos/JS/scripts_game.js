const no_jugador = document.getElementById('no_jugador');
const key_word = document.getElementById('key_word');
const boton = document.getElementById('boton');
const exit_btn = document.getElementById('exit');

var impostor_list = "";
var next_player = true;
var end_game = false;
var publico = true;
var current_player = 1;
var impostor_probability = 0;
var impostor = localStorage.getItem('impostors');
const players = localStorage.getItem('players');

async function goto_respuesta(){
    return new Promise((resolve) => {
        localStorage.setItem("impostor_list", impostor_list);
        // Verificar que se guardó
        const verificado = localStorage.getItem("impostor_list");
        if (verificado === impostor_list) {
            resolve();
            window.location.href = "respuesta.html";
        }
    });
}

function init_game(){
    if (end_game){
        goto_respuesta();
    }else{
        if(publico && current_player > 1 && current_player <= players){
            publico = false;
            no_jugador.textContent = "#";
            key_word.textContent = "Siguiente jugador";
            key_word.style.color = "white";
            key_word.style.fontFamily = 'Times New Roman';
            //key_word.style.fontFamily = '"Times New Roman", system-ui';
            //boton.textContent = "Ver palabra";
        }
        else{
            publico = true;
            asignar();
        }
    }
}

function asignar(){
    if (next_player){
        boton.textContent = "Siguiente";
        no_jugador.textContent = current_player;
        get_role();
    }else{
        no_jugador.textContent = "#";
        key_word.textContent = "???";
        key_word.style.color = "white";
        //boton.textContent = "Reiniciar";
        boton.textContent = "Continuar";
        exit_btn.textContent = "Home";
        exit_btn.style.visibility = "visible";
        end_game = true;
    }
}

function get_role(){
    let word = localStorage.getItem('word')
    let role = Math.random() * 100;
    impostor_probability = (impostor / (players - current_player + 1)) * 100;
    if (role < impostor_probability){
        if (impostor_list === ""){
            impostor_list = String(current_player);
        }else{
            impostor_list = impostor_list + "-" + String(current_player);
        }
        key_word.textContent = "IMPOSTOR";
        impostor--;
        format(true)
    }else{
        key_word.textContent = String(word).toUpperCase();
        format(false)
    }
    current_player++;
    
    if(current_player > players){
        next_player = false;
    }
}

function format(impostor_status){
    if(impostor_status){
        key_word.style.color = "red";
        key_word.style.fontFamily = '"Creepster", system-ui';
        key_word.style.fontStyle = "normal";
    }else{
        key_word.style.color = "#00c11aff";
        key_word.style.fontFamily = '"Sofadi One", system-ui';
        key_word.style.fontStyle = "normal";
    }
}

function exit(){
    dell();
    window.location.href = "../index.html";
}

function dell(){
    localStorage.removeItem('word');
    localStorage.removeItem('players');
    localStorage.removeItem('impostors');
}