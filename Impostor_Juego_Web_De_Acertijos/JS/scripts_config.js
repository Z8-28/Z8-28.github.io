const numero_jugadores = document.getElementById('numero_jugadores');
const numero_impostores = document.getElementById('numero_impostores');
const alerta = document.getElementById('alerta');
/*const alerta_1 = document.getElementById('alerta_1');
const alerta_2 = document.getElementById('alerta_2');*/
const min_jugadores = "Se requieren al menos 3 jugadores.";
const max_jugadores = "El máximo de jugadores es 20.";
const min_impostores = "Se requieren al menos 1 impostor.";
const max_impostores = "El máximo de impostores es la mitad de los jugadores.";
var jugadores = 0;
var ok_1 = false;
var ok_2 = false;
var no_players = 0;

if (numero_jugadores) {
  ok_1 = true;
  no_players = localStorage.getItem('players');
  no_players = parseInt(no_players, 10);
  if (no_players) {
    numero_jugadores.value = no_players;
  }
  no_players = localStorage.getItem('impostors');
  no_players = parseInt(no_players, 10);
  if (no_players) {
    numero_impostores.value = no_players;
  }
  // en cada entrada, forzar entero y limitar entre 1 y 20
  numero_jugadores.addEventListener('input', (e) => {
    verificar_jugadores(e);
    if (numero_impostores) {
      // reajustar impostores si es necesario
      re_verificar_impostores({target: numero_impostores});
    }
  });

  // en blur o cambio final, asegurar límite también
  numero_jugadores.addEventListener('change', (e) => {
    re_verificar_jugadores(e);
  });
}else{
  ok_1 = false;
}

if (numero_impostores) {
  ok_2 = true;
  // en cada entrada, forzar entero y limitar entre 1 y 20
  numero_impostores.addEventListener('input', (e) => {
    verificar_impostores(e);
  });

  // en blur o cambio final, asegurar límite también
  numero_impostores.addEventListener('change', (e) => {
    re_verificar_impostores(e);
  });
}else{
  ok_2 = false;
}


function verificar_jugadores(e){
  const v = e.target.value;
  alerta.style.visibility = 'hidden';
  /*alerta_1.style.visibility = 'hidden';*/
    if (v === '') return;
    // usar parseInt para evitar decimales
    let n = parseInt(v, 10);
    if (Number.isNaN(n)) { e.target.value = ''; return; }
    if (n > 20) {
        e.target.value = 20
        alerta.textContent = max_jugadores;
        alerta.style.visibility = 'visible';
        /*alerta_1.textContent = max_jugadores;
        alerta_1.style.visibility = 'visible';*/
    };
    if (n < 1) {
        e.target.value = 3;
        alerta.textContent = min_jugadores
        alerta.style.visibility = 'visible';
        /*alerta_1.textContent = min_jugadores
        alerta_1.style.visibility = 'visible';*/
    };
    jugadores = numero_jugadores.value;
}

function re_verificar_jugadores(e){
  let n = parseInt(e.target.value || '0', 10);
  if (Number.isNaN(n) || n < 3) {
    n = 3
    alerta.textContent = min_jugadores;
    alerta.style.visibility = 'visible';
    /*alerta_1.textContent = min_jugadores;
    alerta_1.style.visibility = 'visible';*/
  };
  if (n > 20) {
    n = 20
    alerta.textContent = max_jugadores;
    alerta.style.visibility = 'visible';
    /*alerta_1.textContent = max_jugadores;
    alerta_1.style.visibility = 'visible';*/
  };
  e.target.value = n;
  jugadores = numero_jugadores.value;
  }


function verificar_impostores(e){
  const v = e.target.value;
  jugadores = numero_jugadores.value;
  alerta.style.visibility = 'hidden';
  /*alerta_2.style.visibility = 'hidden';*/
  if (v === '') return;
  // usar parseInt para evitar decimales
  let n = parseInt(v, 10);
  if (Number.isNaN(n)) { e.target.value = ''; return; }
  if (n > (jugadores / 2)) {
      e.target.value = parseInt(jugadores/2, 10);
      alerta.textContent = max_impostores;
      alerta.style.visibility = 'visible';
      /*alerta_2.textContent = max_impostores;
      alerta_2.style.visibility = 'visible';*/
  };
  if (n < 1) {
      e.target.value = 1;
      alerta.textContent = min_impostores
      alerta.style.visibility = 'visible';
      /*alerta_2.textContent = min_impostores
      alerta_2.style.visibility = 'visible';*/
  };
}
function re_verificar_impostores(e){
  let n = parseInt(e.target.value || '0', 10);
  jugadores = numero_jugadores.value;
  if (Number.isNaN(n) || n < 1) {
    n = 1
  };
  if (n > (jugadores / 2)) {
    n = parseInt(jugadores / 2, 10)
  };
  e.target.value = n;
}

async function goto_game(){
  if (numero_impostores.value > 0 && numero_jugadores.value > 0){
    set_players();
    try {
      await read_json(); // esperar a que termine la carga y almacenamiento
      window.location.href = "../HTML/game.html";
    } catch (err) {
      alerta.textContent = "Error cargando datos. Intente otra vez.";
      alerta.style.visibility = 'visible';
      /*alerta_1.textContent = "Error cargando datos. Intente otra vez.";
      alerta_1.style.visibility = 'visible';*/
      console.error(err);
    }
  }else{
    alerta.textContent = "Por favor, ingrese valores válidos"
    alerta.style.visibility = 'visible';
    /*alerta_1.textContent = "Por favor, ingrese valores válidos"
    alerta_1.style.visibility = 'visible';*/
    if (numero_jugadores.value <= 0){
      numero_jugadores.focus();
    }else{
      numero_impostores.focus();
    }
  }
}

function set_players(){
    localStorage.setItem('players', numero_jugadores.value);
    localStorage.setItem('impostors', numero_impostores.value);
}