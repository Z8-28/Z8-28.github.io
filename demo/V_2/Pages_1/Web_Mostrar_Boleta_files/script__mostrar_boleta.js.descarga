let value = ""; //Variable auxiliar
let ar = []; //Variable auxiliar
let aux = ""; //Variable auxiliar

document.addEventListener("DOMContentLoaded", function (){
    search_data();
    fill_data();
    del_all(); //Eliminacion de todos los datos almacenados en cache
})

function fill_data() {
    const title = document.getElementById("boleta");
    var campo
    var key
    title.innerHTML = `Boleta: ${ar[0]}`;
    //for (key = 0; key <= 26; key++) {
    //    campo = document.getElementById(`val_${key}`)
    //    campo.innerHTML = ar[key+1];
    //}
}

function search_data() {
    const data = localStorage; //Acceso a los datos en cache del navegador
    value = data.getItem("boleta"); //Busqueda de todos los registros en cache con el nombre "Boleta" (ver script de lectura con QR)
    //console.log(value)
    if (value != null) { //Si se encontraron registros
        aux = ""; //Receteo de la variable auxiliar para almacenar datos (de uno en uno)
        ar = []; //Receteo de la variable auxiliar para almacenar datos (vector que almacena todos los datos encontrados)
        for (x = 0; x <= value.length; x++) {//Para cada caracter en el registro encontrado
            if (value[x] === "@") {//¿Se encontro una bandera que separa los datos?
                ar.push(aux); //El ultimo dato registrado se almacena en un vector auxiliar
                aux = ""; //receteo de la variable auxiliar
            } else {//Si no se encontro una bandera
                aux = aux + value[x] //Se agrega el caracter al dato actual
            }
        }
    } else {//En caso de que no se encuentren registros
        alert("No hay datos que mostrar")
    }
    /*
     Ejemplo de como se ve un registro antes de ser analizado y separado por datos
        value = [
            "14206@2025-02-18 14:11:00@1234568@PC-123ABC@Juan Pedro De La Garza@Transportes Universales S.A.@Consignatario Test@Cliente test@POL-123ASD@Granos de Cafe Aumados@5000kg@5000kg@10000kg@500tm@1000tm@500tm@50qq@100qq@50qq@Venta@Ensacado@Venta Inmediata@UIOPEW7Q9U832F78903Q43@2025-03-10 10:20:15@2025-04-20 18:50:14@Entregado@Bodega de puerto Barrios@Esta es una observacion larga para ver como se comporta con demaciado texto@"
        ]
    */
}

// DELETE
function del_all() {
    const data = localStorage //Acceso a los registros en cache del navegador
    //console.log("Eliminando datos...");
    for (let x = (data.length - 1); x >= 0; x--) { //Para cada registro en cache del navegador
        const key = data.key(x); //Se obtiene el nombre del registro
        //const value = data.getItem(key);
        //console.log(`Clave: ${key}, Valor: ${value}`);
        localStorage.removeItem(key);//Se elimina el registro en cuestion
    }
    //console.log("Datos eliminados")
}