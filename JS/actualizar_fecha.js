document.addEventListener('DOMContentLoaded', onload);//Se inserta la ultima fecha de
//    actualizacion del documento (la fecha se escribe manualmente en la funcion _onload)
//Funcion que inserta la ultima fecha de actualizacion de la pagina

function onload(){
    const fecha=document.getElementsByClassName("actualizacion");
    for (let i=0; i<fecha.length; i++){
        const hijo=document.createElement("p");
        hijo.textContent="Actualizado el 11/jun/2025";
        fecha[i].appendChild(hijo);
    }
}