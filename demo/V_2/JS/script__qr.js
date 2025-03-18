var first = true;
var mensage = "";

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    actualizar_pantalla(); //Se actualiza la interface de la pantalla
    const loading = document.getElementById("loading"); //Se obtiene el elemento "loading"
    loading.innerHTML = "Cargando contenido 1/4...";
    try {
        function onScanSuccess(decodeText, decodeResult) {//Se prepara funcionalidad del scaner de QR
            var texto = document.getElementById("boleta");//Se obtiene el textBox de la pagina
            var inputs = document.getElementsByClassName("textBox"); //Adquiere los divs del tipo "Inputs"
            console.log(decodeText);
            {
                //Cambiar la logica del while cuando se tenga ya la bandera asignada para separar los datos
                //let x = 0;
                //mensaje = "";
                //while (decodeText[x] != "@") {
                //    mensaje = mensaje + decodeText[x];
                //    x++;
                //}
                //texto.value = mensaje;
            }
            // Aqui va la logica de captura de datos (se requiere analizar decodeText para saber que venia en el QR)
            if (texto) {//Si se logro capturar el textBox de la pagina
                texto.value = decodeText //Se muestra toda la informacion que venia en el QR, Se recomienda cambiarlo por solo el No. de boleta

                //Este bloque busca los spans y los elimina para que no se traslapen con la informacion mostrada en los inputs
                //for (x = 0; x < inputs.length; x++) {//Para todo los inputs detectados...
                //    var text = inputs[x]; //Para el input actual...
                //    text = text.getElementsByTagName("span");//Captura todos los "spans" que tenga el input actual
                //    for (y = 0; y < text.length; y++) {//Para todos los "spans" detectados en el input actual...
                //        var text_2 = text[y]//Para el span actual del input actual...
                //        text_2.remove();//Elimina el span actual
                //    }
                //}
            }
            //mensage = decodeText;
            //save_data(decodeText);    //Se alamcena en cache del navegador los datos del QR
        }
        loading.innerHTML = "Cargando contenido 2/4...";
        let htmlscanner = new Html5QrcodeScanner("my-qr-reader", { fps: 10, qrbox: 250 }); //Se crea un scaner QR
        loading.innerHTML = "Cargando contenido 3/4...";
        htmlscanner.render(onScanSuccess);//Se asigna la funcion que ejecutara el scaner QR al momento de lograr escanear un codigo
        loading.innerHTML = "Cargando contenido 4/4...";
        //actualizar_interface();
        //actualizar_pantalla();
        if (loading) {//Se remueve el label de muestra el progreso de carga de la pagina
            loading.remove();
        }
    } catch (ex) {//En caso de que ocurra un error al preparar el escaner de QR
        loading.innerHTML = ex
    }
});

//function save_data(boleta_data) {//Se almacena los datos de la boleta en cache del navegador
//    //if (boleta_data.value != "") {//Si hay datos que almacenar
//    //    localStorage.setItem("boleta", boleta_data); //Se almacenan los datos en la cache del navegador
//    //    alert("Boleta escaneada exitosamente");
//    //} else { //Si no hay datos que almacenar
//    //    alert("No se ha escaneado ninguna boleta");
//    //}
//}

async function actualizar_pantalla() { //Funcion asincrona que actualiza la interface de la pantalla constante mente
    //const flag = document.getElementById("actualizando_interface");
    const intervalId = setInterval(function () {//Actualizacion de la pantalla en intervalos de 1ms
        try {
            actualizar_interface();//Se intenta actualizar la pantalla
        } catch (e) {//Si ocurrio un error al actualizar la pantalla
            //console.log(e);
            //flag.innerHTML = e
            clearInterval(intervalId); // Detener el intervalo en caso de error
        }
    }, 500);//Asignacion de tiempo de espera en 1ms entre cada actualizacion de pantalla
}


function actualizar_interface() {
    try {
        const link = document.getElementById("html5-qrcode-anchor-scan-type-change"); //Link para alternar entre usar la camara y usar una imagen
        const alerta = document.getElementById("my-qr-reader__header_message"); //Mensaje de alerta del QR
        const qr_container = document.getElementById("my-qr-reader");   //Contenedro QR
        const info = qr_container.getElementsByTagName("div"); //Informacion sobre el escaner y sus creadores
        const more_info = info[0].getElementsByTagName("img"); //Informacion sobre el escaner y sus creadores
        const button_camera = document.getElementById("html5-qrcode-button-camera-permission"); //Boton de usar camara para escanear
        const button_img = document.getElementById("html5-qrcode-button-file-selection"); //Boton de usar imagen almacenada en dispositivo
        const div_1 = document.getElementById("my-qr-reader__dashboard_section"); //Constante auxiliar
        const img_container = div_1.getElementsByTagName("div")[3]; //Constante auxiliar
        const img_label = img_container.getElementsByTagName("div")[0]; //Label que ayuda a saber como usar el analizador de imagenes
        const btn_start_scann = document.getElementById("html5-qrcode-button-camera-start"); //Boton para comenzar a escanear con la camara
        const btn_stop_scann = document.getElementById("html5-qrcode-button-camera-stop"); //Boton para parar de escanear con la camara
        const camera_select = document.getElementById("html5-qrcode-select-camera"); //Selector de camara

        var camera_options //Camaras conectadas al dispositivo que han sido detectadas
        var aux = []; //Variable auxiliar 1
        var aux_1 = ""; //Variable auxiliar 2

        if (camera_select) { //Si se detecto el selecctor de camara
            camera_options = camera_select.getElementsByTagName("option"); //Caputra del listado de todas las camaras detectadas
            try {//Facing back
                for (let x = 0; x < camera_options.length; x++) { //Para todas las camaras detectadas
                    aux = camera_options[x].split(""); //Separar el nombre de la camara actual en caracteres
                    aux_1 = "" //Limpiesa de variable auxiliar
                    for (let y = 0; y < 11; y++) { //Para los primeros 11 caracteres de la opcion actual
                        aux_1 += aux[y] //Agregar caracter a la variable auxiliar
                    }
                    if (aux_1 == "Facing back") { //Si los primeros 11 caracteres forman la palabra "Facing back" (camara tracera)
                        camera_select.value = camera_options[0]; //Activar camara tracera
                    }
                }
                camera_select.hidden(); //Esconder seleccotr de camaras
            } catch (e) {
                //console.log(e)
            }
        }

        if (button_camera) { //Si se detecto el boton de usar camara
            button_camera.innerHTML = "Activar Camara"; //Cambiar el texto del boton por "Activar Camara"
            button_camera.className = "input button"; //Asignacion de formatos-estilos al boton
        }

        if (button_img) {//Si se detecto el boton de usar imagen, se reescribe/traduce el texto del boton a espanol
            if (button_img.innerHTML === "Choose Image - No image choosen") {//Si es la primera ves que aparece el boton
                button_img.innerHTML = "Buscar imagen"; //Se traduce todo como "Buscar imagen"
            } else if (button_img.innerHTML != "Buscar imagen") { //Si no es la primera ves que aparece el boton
                aux = button_img.innerHTML.split(""); //Se captura el texto del boton (este es de interes ya que contiene el nombre de la imagen)
                aux_1 = ""; //Se solicita que se separe el texto en intervalos de caracteres
                for (let x = 0; x < 17; x++) {//Se captura el texto inicial del boton
                    aux_1 = aux_1 + aux[x];
                }
                if (aux_1 === "Choose Another - ") {//Si el texto inicial captorado en el for es igual a "Choose Another - "
                    button_img.innerHTML = "Escoger otra imagen - "; //Se traduce "Choose Another - " como "Escoger otra imagen - "
                    for (let x = 17; x < aux.length; x++) { //Se agrega el resto del texto al boton (el nombre de la imagen)
                        button_img.innerHTML = button_img.innerHTML + aux[x]
                    }
                }
            }
            button_img.className = "input button";//Se formatea el estilo del boton
        }

        if (qr_container) { //Si se encontro el contenedor del QR, se setean sus propiedades
            qr_container.style.border = "0px";
            qr_container.style.width = "300px";
        }

        if (link) {//Si se encontro el link para alternar entre usar una imagen y usar la camara
            link.innerHTML = "usar otra opcion"; //Se traduce el texto como "Usar otra opcion", se opto por un texto generico para simplificar elcodigo
        }

        if (more_info && first) { //Si es la primera ves que se actualiza la pagina y se encontro los iconos de "mas informacion"
            more_info[0].remove(); //Se eliminan los iconos-botones-textos de "mas informacion"
            first = false; //Ya no es la primera ves que se ejecuta este codigo
        } else {
            //console.clear();
            //console.log("el elemento no existe o ya fue eliminado")
        }

        if (alerta) { //Si se encontro el mensaje de alerta del QR, se traduce el texto en cuestion segun sea el caso
            if (alerta.innerHTML === "Requesting camera permissions...") {
                alerta.innerHTML = "Solicitando permisos para usar la camara";
            } else if (alerta.innerHTML === "NotFoundError: Requested device not found" || alerta.innerHTML === "") {
                alerta.innerHTML = "No se encontro ninguna camara";
            } else if (alerta.innerHTML === "D: No MultiFormat Readers were able to detect the code.") {
                alerta.innerHTML = "D: Ningun lector multiformato pudo detectar el codigo.";
            }
        }

        if (btn_start_scann) { //Si se encontro el boton de comenzar a escanear...
            //btn_start_scann.className = "html5-qrcode-element input button";
            btn_start_scann.className = "input button"; //Se setea sus estilos
            btn_start_scann.innerHTML = "Escanear"; //Se traduce lo que dice
        }

        if (btn_stop_scann) { //Si se encontro el boton de parar de escanear...
            //btn_stop_scann.className = "html5-qrcode-element input button";
            btn_stop_scann.className = "input button"; //Se setea sus estilos
            btn_stop_scann.innerHTML = "Parar de escanear"; //Se traduce lo que dice
        }

        if (img_label) { //Si se encontro el label de como usar el analizador de imagenes
            img_label.innerHTML = "O arrastra una imagen"; //Se traduce lo que dice
        }
    } catch (e) {
        console.log(`Error inesperado: \n\n${e}`)
    }
}