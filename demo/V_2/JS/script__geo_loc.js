var doc_lat = document.getElementById(""); //Creacion de la variable input-latitud
var doc_lon = document.getElementById(""); //Creacion de la variable input-longitud

const data = localStorage; //Datos del navegador almacenados en cache, aqui se busca/almacena la ubicacion actual del dispositivo
const flag = "_"; /*Banderaque separa la latitud y la longitud en el registro, ejemplo:
    Latitud: 15
    Longitud: 20
    Registro almacenado: 15_20
*/

let latitud = ""; //Variable auxiliar
let longitud = ""; //Variable auxiliar
let margin = ""; //Margen de presicion de la ubicacion

document.addEventListener("DOMContentLoaded", function () {
    position();
})

function position() {
    if (navigator.geolocation) {//Si la geolocalizacion esta soportada por el navegador
        navigator.geolocation.getCurrentPosition(showPosition, showError);//Obtencion de la ubicacion, showPosition se ejecuta si no hay ningun inconveniente, showError se ejecuta si sucedio algun error al momento de obtener la ubicacion del dispositivo
    }else {//Si la geolocalizacion no esta soportada por el navegador
        alert("La geolocalización no es soportada por este navegador.");
    }
}

function showPosition(position) {
    var inputs = document.getElementsByClassName("textBox"); //Adquiere los divs del tipo "Inputs"

    enableHighAccuracy: true;  // Solicita mayor precisión (si es posible)
    timeout: 5000;             // Timeout de 5 segundos
    maximumAge: 0;             // No usar ubicaciones en caché

    doc_lat = document.getElementById("latitud"); //Adquiere el input respectivo a la latitud
    doc_lon = document.getElementById("longitud"); //Adquiere el input respectivo a la longitud
    doc_lat.value = position.coords.latitude; //Asigna la latitud al input respectivo
    doc_lon.value = position.coords.longitude; // Asigna la longitud al input respectivo
    margin = position.coords.accuracy; //Se captura el margen de presicion en metros (el margen depende del ISP, el navegador y/o la tecnologia GPS del dispositivo)
    console.log(`Margen de erro: ${margin}`);

    //Este bloque busca los spans y los elimina para que no se traslapen con la informacion mostrada en los inputs
    for (x = 0; x < inputs.length; x++) {//Para todo los inputs detectados...
        var text = inputs[x]; //Para el input actual...
        text = text.getElementsByTagName("span");//Captura todos los "spans" que tenga el input actual
        for (y = 0; y < text.length; y++) {//Para todos los "spans" detectados en el input actual...
            var text_2 = text[y]//Para el span actual del input actual...
            text_2.remove();//Elimina el span actual
        }
    }

    reload_map();//Recarga el mapa para mostrar la ubicacion detectada
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario negó la solicitud de geolocalización.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de la posición no está disponible.");
            break;
        case error.TIMEOUT:
            alert("La solicitud para obtener la posición del usuario expiró.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Ocurrió un error desconocido.");
            break;
    }
}

/*********************************************************************************/
/*********************************************************************************/
/*********************************************************************************/

// CREATE - UPDATE
function save() {
    let lugar = doc_lat.value + flag + doc_lon.value //Se setea la ubicacion con el formato: latitud_longitud
    localStorage.setItem(lugar, lugar); //Se registra la ubicacion
    alert("Se registro la ubicacion exitosamente");
}

//Busquedas
function search_all() {
    let key = ""; //Nombre del registro en cuestion
    let value = ""; //Valor del registro en cuestion
    console.clear();
    for (let x = 0; x < data.length; x++) {//Para cada registro en data...
        key = data.key(x);//Se obtiene el nombre del registro en cuestion...
        value = data.getItem(key);//Se obtiene el valor del registro en cuestion
        console.log(key + ": " + value);
    }
    console.log(data);
}

function search_by_location() {
    let x = 0; //No. de datos almacenados en data
    let y = 0; //Longitud de la informacion del dato almacenado en data
    let flag_2 = true;//¿Se esta analizando la latitud?, de entrada si se analiza, por eso se inicializa en verdadero
    let flag_3 = true;//¿La ubicacion en cuestion es nueva?, de entrada se asume que si hasta que se demuestre lo contrario
    let key = ""; //Nombre del registro que se analizara
    let pos = ""; //Posicion almacenada en el registro
    let lat_1 = 0; //Latitud actual
    let lat_2 = 0; //Latitud almacenada
    let lon_1 = 0; //Longitud actual
    let lon_2 = 0; //Longitud almacenada
    latitud = ""; //Variable auxiliar
    longitud = ""; //Variable auxiliar
    if (doc_lat.value != "" && doc_lon.value != "") {//Si se ingresaron-registraron datos en los inputs
        for (x = 0; x < data.length; x++) {//Para cada registro en data
            key = data.key(x);//Se obtiene el nombre del registro
            pos = data.getItem(key);//Se obtiene el valor del registro
            flag_2 = true;//¿Aun se esta analizando la latitud?
            latitud = "";//Receteo de variable auxiliar
            longitud = "";//Receteo de variable auxiliar
            for (y = 0; y < pos.length; y++) {/* Separacion de los registros almacenados en data,
                esto es dado que data solo puede almacenar una unica cadena por registro,
                este codigo asume que la posicion se lamacena de la manera "latitud_longitud" */
                if (pos[y] === flag) {//¿Se llego a la bandera que separa la latitud de la longitud?
                    y++;//Avanzar a la siguiente casilla
                    flag_2 = false;//Ya no se esta analizando la latitud
                }
                if (flag_2) {//¿Se esta analizando la latitud?
                    latitud += pos[y];//A latitud agregarle el nuevo dato
                } else {//Se esta analizando la longitud
                    longitud += pos[y];//A longitud agregar el nuevo dato
                }
            }
            lat_1 = parseFloat(doc_lat.value, 10);//Se convierte la latitud actual en un dato del tipo float base 10
            lat_2 = parseFloat(latitud, 10);//Se convierte la latitud registrada en un dato del tipo float base 10
            lon_1 = parseFloat(doc_lon.value, 10);//Se convierte la longitud actual en un dato del tipo float base 10
            lon_2 = parseFloat(longitud, 10);//Se convierte la longitud registrada en un dato del tipo float base 10
            if ((lat_1 < (lat_2 + margin) && lat_1 > (lat_2 - margin)) && (lon_1 < (lon_2 + margin) && lon_1 > (lon_2 - margin))) {//Si la latitud y la longitud actual estan dentro de la ubicacion registrada +- el margen de erro...
                alert("La ubicacion ya esta registrada como: " + key + "\n con margen de tolerancia de: +- " + margin + "mts");
                doc_lat.value = lat_2;//Se muestra la latitud registrada
                doc_lon.value = lon_2;//Se muestra la longitud registrada
                flag_3 = false;//la ubicacion en cuestion no es nueva
                break;
            }
        }
        if (flag_3) {//Si la ubicacion actual es nueva
            save();//Se registra la nueva ubicacion
            reload_map();//Se actualiza el mapa a la nueva ubicacion
        }
    } else {//Si alguno de los inputs no tiene datos ingresados
        alert("La ubicacion ingresada no es valida");
    }
}

// DELETE
function del_all() {
    console.log("Eliminando datos...");
    for (let x = (data.length - 1); x >= 0; x--) {//Para todos los registros en data
        const key = data.key(x);//Se obtiene el nombre del registro actual
        const value = data.getItem(key);//Se obtiene el valor del registro actual
        console.log(`Clave: ${key}, Valor: ${value}`);//Se muestra el registro que se esta elminando
        localStorage.removeItem(key);//Se elimina el registro de la cache del navegador
    }
    console.log("Datos eliminados")
    alert("Datos eliminados exitosamente")
}

//////////////////////////////////////////////////////////////////////////////////////

// Edit - Funcion de desarrollo
//function editar() {
//    /*const doc_lat = document.getElementById("latitud");
//    const doc_lon = document.getElementById("longitud");*/
//    doc_lat.readOnly = false;
//    doc_lon.readOnly = false;
//}

/////////////////////////////////////////////////////////////////////////////////////////

function reload_map() {//Actualizacion de la vista del mapa
    const map = document.getElementById("mapa");//Se obtiene el elemento mapa
    //const link_1 = "https://maps.google.com/?ll=";
    const lat = parseFloat(document.getElementById("latitud").value, 10);//Se captura la latitud actual en formato float base 10
    //const link_2 = ",";
    const lon = parseFloat(document.getElementById("longitud").value, 10);//Se captura la longitud actual en formato float base 10
    //const link_3 = "&z=";
    //const zoom = parseFloat(document.getElementById("zoom").value, 10);
    const zoom = 15;//Se ajusta el zoom del mapa a 15 unidades
    //const link_4 = "&t=m&output=embed";
    const link = `https://maps.google.com/?ll=${lat},${lon}&z=${zoom}&t=m&output=embed`; //Se crea el link de googlo maps para mostrar en el mapa
    //const link = link_1 + lat + link_2 + lon + link_3 + zoom + link_4;
    //console.clear();
    //console.log(link);
    map.src = link; //Se mueve el mapa a la ubicacion actual
}