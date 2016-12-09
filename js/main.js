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
            var nombre = nombres[i];
            var apellido = apellidos[i];
            var NUF1841=nUF1841[i];
            var NUF1842=nUF1842[i];
            var NUF1843=nUF1843[i];
            var NUF1844=nUF1844[i];
            var NUF1845=nUF1845[i];
            var NUF1846=nUF1846[i];
            var html_text = "<tr>" +
                "<td><input type='checkbox' value=''/> </td>" +
                "<td>" + nombre + "</td>" +
                "<td>" + apellido + "</td>" +
                "<td>" + NUF1841 + "</td>" +
                "<td>" + NUF1842 + "</td>" +
                "<td>" + NUF1843 + "</td>" +
                "<td>" + NUF1844 + "</td>" +
                "<td>" + NUF1845 + "</td>" +
                "<td>" + NUF1846 + "</td>" +
                "<td></td>" +
                "<td class='editar'><a href='#'><i class='fa fa-pencil' aria-hidden='true'></i></a></td>" +
                "</tr>";
            $('#listado-alumnos tbody').append(html_text);
        }
    }

    cargarAlumnos();
});

