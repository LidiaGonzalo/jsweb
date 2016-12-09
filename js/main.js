/*$.noConflict();*/
var nombres = ['Lidia','pikachu'];
var apellidos = ['Gonzalo López','Aguirre Garmendia'];
var nUF1841=[5,6.3];
var nUF1842=[7.1,5];
var nUF1843=[8.2,7.3];
var nUF1844=[7,6];
var nUF1845=[6,6.8];
var nUF1846=[5,5];
$(document).ready(function($) {
    function cargarAlumnos() {
        for (var i = 0; i < nombres.length; i++) {
            var html_text = "<tr>" +
                "<td><input type='checkbox' value=''/> </td>" +
                "<td>" + nombres[i] + "</td>" +
                "<td>" + apellidos[i] + "</td>" +
                "<td>" + nUF1841[i] + "</td>" +
                "<td>" + nUF1842[i] + "</td>" +
                "<td>" + nUF1843[i] + "</td>" +
                "<td>" + nUF1844[i] + "</td>" +
                "<td>" + nUF1845[i] + "</td>" +
                "<td>" + nUF1846[i] + "</td>" +
                "<td></td>" +
                "<td class='editar'><a href='#'><i class='fa fa-pencil' aria-hidden='true'></i></a></td>" +
                "</tr>";
            $('#listado-alumnos tbody').append(html_text);

        }
    }
    cargarAlumnos();
    totalAumnos();

    function totalAumnos(){
        $("#listado-alumnos tr td:eq(0)").text("Total Alumnos: " + nombres.length);
    }

});

