const doc_lat = document.getElementById("latitud");
const doc_lon = document.getElementById("longitud");
const data = localStorage;
const flag = "_";
const margin = 0.05;

let altitud = "";
let longitud = "";
let name = "";

document.addEventListener("DOMContentLoaded", function () {
    doc_lat.readOnly = true;
    doc_lon.readOnly = true;
    position();
})

function position() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocalización no es soportada por este navegador.");
    }
}

function showPosition(position) {
    //const map = document.getElementById("mapa");
    /*const doc_lat = document.getElementById("latitud");
    const doc_lon = document.getElementById("longitud");*/
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    doc_lat.value = lat;
    doc_lon.value = lon;
    reload_map();
    /*map = new google.maps.Map(document.getElementById('mapContainer'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });*/
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("El usuario negó la solicitud de geolocalización.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("La información de la posición no está disponible.");
            break;
        case error.TIMEOUT:
            console.log("La solicitud para obtener la posición del usuario expiró.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("Ocurrió un error desconocido.");
            break;
    }
}

/*********************************************************************************/
/*********************************************************************************/
/*********************************************************************************/

// CREATE - UPDATE

function save() {
    /*const doc_lat = document.getElementById("latitud");
    const doc_lon = document.getElementById("longitud");*/
    let lugar = doc_lat.value + flag + doc_lon.value
    localStorage.setItem(lugar, lugar);
    alert("Se registro la ubicacion exitosamente");
}

//Busquedas

function search_all() {
    //const data = localStorage;
    let key = "";
    let value = "";
    console.clear();
    for (let x = 0; x < data.length; x++) {
        key = data.key(x);
        value = data.getItem(key);
        console.log(key + ": " + value);
    }
    console.log(data);
}

function search_by_location() {
    /*const doc_lat = document.getElementById("latitud");
    const doc_lon = document.getElementById("longitud");
    const data = localStorage;*/
    let x = 0;
    let y = 0;
    let flag_2 = true;
    let flag_3 = true;
    let key = "";
    let pos = "";
    let lat_1 = 0;
    let lat_2 = 0;
    let lon_1 = 0;
    let lon_2 = 0;
    latitud = "";
    longitud = "";
    if (doc_lat.value != "" && doc_lon.value != "") {
        for (x = 0; x < data.length; x++) {
            key = data.key(x);
            pos = data.getItem(key);
            flag_2 = true;
            latitud = "";
            longitud = "";
            for (y = 0; y < pos.length; y++) {
                if (pos[y] === flag) {
                    y++;
                    flag_2 = false;
                }
                if (flag_2) {
                    latitud += pos[y];
                } else {
                    longitud += pos[y];
                }
            }
            lat_1 = parseFloat(doc_lat.value, 10);
            lat_2 = parseFloat(latitud, 10);
            lon_1 = parseFloat(doc_lon.value, 10);
            lon_2 = parseFloat(longitud, 10);
            if ((lat_1 < (lat_2 + margin) && lat_1 > (lat_2 - margin)) && (lon_1 < (lon_2 + margin) && lon_1 > (lon_2 - margin))) {
                alert("La ubicacion ya esta registrada como: " + key + "\n con margen de error de: +- " + margin);
                doc_lat.value = lat_2;
                doc_lon.value = lon_2;
                flag_3 = false;
                break;
            }
        }
        if (flag_3) {
            save();
            reload_map();
        }
    } else {
        alert("La ubicacion ingresada no es valida");
    }
}

// DELETE
function del_all() {
    //const data = localStorage
    console.log("Eliminando datos...");
    for (let x = (data.length - 1); x >= 0; x--) {
        const key = data.key(x);
        const value = data.getItem(key);
        console.log(`Clave: ${key}, Valor: ${value}`);
        localStorage.removeItem(key);
    }
    console.log("Datos eliminados")
    alert("Datos eliminados exitosamente")
}

//////////////////////////////////////////////////////////////////////////////////////

function editar() {
    /*const doc_lat = document.getElementById("latitud");
    const doc_lon = document.getElementById("longitud");*/
    doc_lat.readOnly = false;
    doc_lon.readOnly = false;
}

/////////////////////////////////////////////////////////////////////////////////////////

function reload_map() {
    const map = document.getElementById("mapa");
    //const link_1 = "https://maps.google.com/?ll=";
    const lat = parseFloat(document.getElementById("latitud").value, 10);
    //const link_2 = ",";
    const lon = parseFloat(document.getElementById("longitud").value, 10);
    //const link_3 = "&z=";
    //const zoom = parseFloat(document.getElementById("zoom").value, 10);
    const zoom = 15;
    //const link_4 = "&t=m&output=embed";
    const link = `https://maps.google.com/?ll=${lat},${lon}&z=${zoom}&t=m&output=embed`;
    //const link = link_1 + lat + link_2 + lon + link_3 + zoom + link_4;
    console.clear();
    console.log(link);
    map.src = link;
}