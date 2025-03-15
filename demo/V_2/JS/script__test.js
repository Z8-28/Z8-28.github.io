{//var data_grid_all = {
    //    Fecha: "01-01-2025",
    //    Orden: "01234-56789",
    //    Placas: "P0 123ABC",
    //    Piloto: "Piloto Test",
    //    Transporte: "Transportes Test",
    //    Consignatario: "Consignatario Test",
    //    Cliente: "Cliente Test",
    //    Poliza: "Pol. 123ASD",
    //    Producto: "Producto Test",
    //    Peso_Bruto: "123kg",
    //    Peso_Tara: "23kg",
    //    Peso_Neto: "100kg",
    //    Peso_Neto: "1tm",
    //    Peso_Solicitado: "1tm",
    //    Peso_Diferencia: "0tm",
    //    Peso_Neto: "10qq",
    //    Peso_Solicitado: "10qq",
    //    Peso_Diferencia: "0qq",
    //    Despacho: "Compra",
    //    Cabaleo: "Saco",
    //    Transaccion: "Inmediata",
    //    Marchamos: "123ASD",
    //    Hora_Ingreso: "ddmmaaaa 20-12-2024 GTM 10:30:00",
    //    Hora_Salida: "ddmmaaaa 01-01-2025 GTM 10:30:00",
    //    Estado: "Entregado",
    //    Bodega: "1",
    //    Observaciones: "Esta es una observacion larga para ver como reacciona la interface y ver si realmente captura textos largos"
    //};
    //// Transformamos los datos para mostrarlos en el formato adecuado
    //var transformedData = Object.keys(data_grid_all).map(function (key) {
    //    return { Field: key, Value: data_grid_all[key] };
    //});

    //var data_grid_1 = {
    //    Fecha: "01-01-2025",
    //    Orden: "01234-56789",
    //    Placas: "P0 123ABC",
    //    Piloto: "Piloto Test",
    //    Transporte: "Transportes Test",
    //    Consignatario: "Consignatario Test",
    //    Cliente: "Cliente Test",
    //    Poliza: "Pol. 123ASD",
    //    Producto: "Producto Test"
    //};

    //var Data_1 = Object.keys(data_grid_1).map(function (key) {
    //    return { Field: key, Value: data_grid_1[key] };
    //});

    //var data_grid_2 = [
    //    { Group: "Planta (kg)", Title: "Peso Bruto", Value: "123" },
    //    { Group: "Planta (kg)", Title: "Peso Tara", Value: "23" },
    //    { Group: "Planta (kg)", Title: "Peso Neto", Value: "100" },
    //    { Group: "Orden (tm)", Title: "Peso Neto", Value: "1" },
    //    { Group: "Orden (tm)", Title: "Peso Solicitado", Value: "1" },
    //    { Group: "Orden (tm)", Title: "Peso Diferencia", Value: "0" },
    //    { Group: "Orden (qq)", Title: "Peso Neto", Value: "10" },
    //    { Group: "Orden (qq)", Title: "Peso Solicitado", Value: "10" },
    //    { Group: "Orden (qq)", Title: "Peso Diferencia", Value: "0" }
    //];

    //var data_grid_3 = {
    //    Despacho: "Compra",
    //    Cabaleo: "Saco",
    //    Transaccion: "Inmediata",
    //    Marchamos: "123ASD",
    //    Hora_Ingreso: "ddmmaaaa 20-12-2024 GTM 10:30:00",
    //    Hora_Salida: "ddmmaaaa 01-01-2025 GTM 10:30:00",
    //    Estado: "Entregado",
    //    Bodega: "1",
    //    Observaciones: "Esta es una observacion larga para ver como reacciona la interface y ver si realmente captura textos largos"
    //};

    //var Data_3 = Object.keys(data_grid_3).map(function (key) {
    //    return { Field: key, Value: data_grid_3[key] };
    //});



    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
}

$(document).ready(function () {

    // Función para inicializar un botón
    function initButton(selector, type) {
        $(selector).each(function () {
            var buttonText = $(this).data("text"); // Obtener el texto desde el atributo 'data-text'
            $(this).dxButton({
                stylingMode: 'contained',
                text: buttonText,
                type: type,
                width: 120,
                margin: 5,
            });
        });
    }
    // Inicializar los botones con sus respectivos textos y tipos
    initButton(".button_green", "success");


    // Función para inicializar un botón
    function initTextBox(selector) {
        $(selector).each(function () {
            var labelText = $(this).data("text"); // Obtener el texto desde el atributo 'data-text', este atributo es el reemplaso de "placeholder" asi como el ID del tag <input> correspondiente
            var read = $(this).data("edit"); // Obtener el estado de solo lectura desde el atributo 'data-edit', si el estado es 0 se puede editar, si el estado es 1 no se puede editar
            $(this).dxTextBox({
                placeholder: "",
                readOnly: (read == "1"),
                inputAttr: { 'id': labelText},
                label: labelText,
                labelMode: 'floating',
            });
        });
    }
    // Inicializar los botones con sus respectivos textos y tipos
    initTextBox(".textBox");
});