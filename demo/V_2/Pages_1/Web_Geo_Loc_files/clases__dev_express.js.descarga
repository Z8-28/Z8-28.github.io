//Datos del Grid 1
var data_grid_1 = {
    Fecha: "01-01-2025",
    Orden: "01234-56789",
    Placas: "P0 123ABC",
    Piloto: "Piloto Test",
    Transporte: "Transportes Test",
    Consignatario: "Consignatario Test",
    Cliente: "Cliente Test",
    Poliza: "Pol. 123ASD",
    Producto: "Producto Test"
};
//Seteo de los datos del Grid 1 (de esta variable es que el grid 1 toma los datos)
var Data_1 = Object.keys(data_grid_1).map(function (key) {
    return { Field: key, Value: data_grid_1[key] };
});

//Datos del Grid 2 (de esta variable es que el grid 2 toma lso datos)
var data_grid_2 = [
    { Group: "Planta (kg)", Title: "Peso Bruto", Value: "123" },
    { Group: "Planta (kg)", Title: "Peso Tara", Value: "23" },
    { Group: "Planta (kg)", Title: "Peso Neto", Value: "100" },
    { Group: "Orden (tm)", Title: "Peso Neto", Value: "1" },
    { Group: "Orden (tm)", Title: "Peso Solicitado", Value: "1" },
    { Group: "Orden (tm)", Title: "Peso Diferencia", Value: "0" },
    { Group: "Orden (qq)", Title: "Peso Neto", Value: "10" },
    { Group: "Orden (qq)", Title: "Peso Solicitado", Value: "10" },
    { Group: "Orden (qq)", Title: "Peso Diferencia", Value: "0" }
];

//Datos del Grid 3
var data_grid_3 = {
    Despacho: "Compra",
    Cabaleo: "Saco",
    Transaccion: "Inmediata",
    Marchamos: "123ASD",
    Hora_Ingreso: "ddmmaaaa 20-12-2024 GTM 10:30:00",
    Hora_Salida: "ddmmaaaa 01-01-2025 GTM 10:30:00",
    Estado: "Entregado",
    Bodega: "1",
    Observaciones: "Esta es una observacion larga para ver como reacciona la interface y ver si realmente captura textos largos"
};
//Seteo de los datos del Grid 3 (de esta variable es que el grid 3 toma los datos)
var Data_3 = Object.keys(data_grid_3).map(function (key) {
    return { Field: key, Value: data_grid_3[key] };
});




///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




$(document).ready(function () {
    // Función para inicializar los botones
    function initButton(selector, type) {//Selecciona la clase y el tipo
        $(selector).each(function () {
            var buttonText = $(this).data("text"); // Obtener el texto desde el atributo 'data-text'
            $(this).dxButton({
                stylingMode: 'contained',
                text: buttonText,//Texto del boton
                type: type,// Tipo-Tema del boton
                width: 120,
                margin: 5,
            });
        });
    }
    // Inicializa los botones en cuestion, el texto que trael el boton no es nesesario llamarlo aqui
    initButton(".button_green", "success");
    //initButton(".button_blue", "default");



    //*****************************************************************************************************************************************
    //*****************************************************************************************************************************************
    //*****************************************************************************************************************************************



    // Función para inicializar los textbox
    function initTextBox(selector) {
        $(selector).each(function () {
            var labelText = $(this).data("text"); // Obtener el texto desde el atributo 'data-text'
            var read = $(this).data("edit"); // Obtener el estado de solo lectura desde el atributo 'data-edit'
            //console.log(`La consola muestra: ${(read=="1")}`)
            $(this).dxTextBox({
                placeholder: "",
                readOnly: (read == "1"),
                inputAttr: { 'id': labelText },
                label: labelText,
                labelMode: 'floating',
            });

            //// Verificar si ya hay un valor en el input y forzar que el label flote
            //var textBoxInstance = $(this).dxTextBox('instance');
            //var inputValue = textBoxInstance.option("value");
            //// Si el valor no está vacío, forzar el movimiento del label
            //if (inputValue && inputValue !== "") {
            //    textBoxInstance._setLabelMode("floating");
            //}

        });
    }
    // Inicializar los textbox con sus respectivos textos y tipos
    initTextBox(".textBox");



    //*****************************************************************************************************************************************
    //*****************************************************************************************************************************************
    //*****************************************************************************************************************************************



    //Seteo de los dataGrids
    $(".mc_grid_1").dxDataGrid({
        dataSource: Data_1, //Fuente de datos
        columns: [//Seteo de columnas
            { dataField: "Field", caption: "Campo" }, // Primera columna: nombre del campo
            { dataField: "Value", caption: "Valor" }  // Segunda columna: valor del campo
        ],
        showBorders: true,
        columnWidth: "50%",
        paging: { enabled: false }, // No necesitamos paginación, ya que solo hay un registro
        pager: { visible: false },  // Ocultamos el paginador
        scrolling: { mode: "virtual" }, // Deshabilitamos el scroll ya que solo hay un registro
        filterRow: { visible: false }, // Desactivamos el filtro de filas ya que no es necesario
        sorting: { mode: "none" } // Desactivamos el ordenamiento
    });
    $(".mc_grid_2").dxDataGrid({
        dataSource: data_grid_2,
        columns: [
            { dataField: "Group", caption: "Peso", groupIndex: "0" },
            { dataField: "Title", caption: "Titulo" },
            { dataField: "Value", caption: "Valor" }
        ],
        showBorders: true,
        sorting: { mode: "none" }, // Desactivamos el ordenamiento
        groupPanel: { visible: false },  // Ocultar el panel de grupos (no dejar agrupar por otras categorías)
        groupFooterTemplate: function (e) {
            return e.value + " (" + e.count + ")";
        }
    });
    $(".mc_grid_3").dxDataGrid({
        dataSource: Data_3,
        columns: [
            { dataField: "Field", caption: "Campo" }, // Primera columna: nombre del campo
            { dataField: "Value", caption: "Valor" }  // Segunda columna: valor del campo
        ],
        showBorders: true,
        columnWidth: "50%",
        paging: { enabled: false }, // No necesitamos paginación, ya que solo hay un registro
        pager: { visible: false },  // Ocultamos el paginador
        scrolling: { mode: "virtual" }, // Deshabilitamos el scroll ya que solo hay un registro
        filterRow: { visible: false }, // Desactivamos el filtro de filas ya que no es necesario
        sorting: { mode: "none" } // Desactivamos el ordenamiento
    });
});