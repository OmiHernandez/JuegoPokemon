function obtenerDatos(nombre) {
    var datos = localStorage.getItem(nombre);
    if (datos) {
        return JSON.parse(datos);
    } else {
        console.log("No se encontraron datos para el jugador " + nombre);
        return null;
    }
}

function updateTable() {
    var table = document.getElementById('scoreTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    var scores = JSON.parse(localStorage.getItem('scores') || '[]');
    scores.sort(function (a, b) { return a.time - b.time; });
    scores = scores.slice(0, 10);

    for (var i = 0; i < scores.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = scores[i].name;
        cell3.innerHTML = scores[i].time;
        cell4.innerHTML = scores[i].score;

        // Obtener los datos del jugador
        var datos = obtenerDatos(scores[i].name);
        if (datos) {
            cell5.innerHTML = datos.puntos + ", " + datos.mejorTiempo;
        } else {
            cell5.innerHTML = "No se encontraron datos";
        }
    }
}

window.addEventListener('storage', updateTable);
updateTable();
