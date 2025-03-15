// CREATE - UPDATE

const flag = "@"

function save() {
    const name = document.getElementById("name").value;
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    console.log(name, lat+flag+lon);
    localStorage.setItem(name, lat + flag + lon);
}


// READ
function load() {
    const name = document.getElementById("name").value;
    const lat = document.getElementById("lat");
    const lon = document.getElementById("lon");
    const data = localStorage.getItem(name);
    let aux = "";
    let x = 0;
    while (data[x] != flag && x<20) {
        aux = aux + data[x]
        x++;
    }
    x++;
    lat.value = aux;
    aux = "";
    while (x < data.length && x < 20) {
        aux = aux + data[x]
        x++;
    }
    lon.value=aux
}

function search() {
    const data = localStorage;
    console.log(data);
}

function find() {
    const margin = 5;
    const data = localStorage;
    const message = document.getElementById("textArea").value;
    let ar = []

    for (let x = (data.length - 1); x >= 0; x--) {
        const key = data.key(x);
        const value = data.getItem(key);
        console.log(`Clave: ${key}, Valor: ${value}`);
        if (parseInt(message, 10) < (parseInt(value, 10) + margin) && parseInt(message, 10) > (parseInt(value, 10) - margin)) {
            ar.push(key);
        }
    }

    console.log("********************************")
    console.log(ar)
    console.log("********************************")

    for (let x = (ar.length - 1); x >= 0; x--) {
        const value = data.getItem(ar[0]);
        console.log(value);
    }
}


// DELETE
function del() {
    const name = document.getElementById("name").value;
    localStorage.removeItem(name);
    console.log("Registro borrado")
}

function del_all() {
    const data = localStorage
    console.log("Eliminando datos...");
    for (let x = (data.length - 1); x >= 0; x--) {
        const key = data.key(x);
        const value = data.getItem(key);
        console.log(`Clave: ${key}, Valor: ${value}`);
        localStorage.removeItem(key);
    }
    console.log("Datos eliminados")
}