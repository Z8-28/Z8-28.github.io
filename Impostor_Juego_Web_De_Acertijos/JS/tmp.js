function dell(){
    localStorage.removeItem('word');
    localStorage.removeItem('players');
    localStorage.removeItem('impostors');
    localStorage.removeItem('impostor_list');
    read();
}

function read(){
    let word = localStorage.getItem('word');
    let players= localStorage.getItem('players');
    let impostors = localStorage.getItem('impostors');
    let impostors_list = localStorage.getItem('impostor_list');
    console.log(word, players, impostors);
    if (impostors_list){
        console.log(impostors_list.split('-'));
    }{
        console.log('No hay lista de impostores');
    }
}

function load(){
    localStorage.setItem('word', 'ejemplo');
    localStorage.setItem('players', 10);
    localStorage.setItem('impostors', 3);
    read();
}