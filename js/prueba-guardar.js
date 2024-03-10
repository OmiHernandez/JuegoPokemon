function guardar() {
    var nombre = document.getElementById('nombre').value;

    function verificarNombre(nombre) {
        return localStorage.getItem(nombre) !== null;
    }

    function almacenarNombre(nombre) {
        if (!verificarNombre(nombre)) {
            const datos = {
                puntos: 0,
                mejorTiempo: 0
            };
            localStorage.setItem(nombre, JSON.stringify(datos));
            return true;
        }
        return false;
    }

    function obtenerDatos(nombre) {
        return JSON.parse(localStorage.getItem(nombre));
    }

    if (nombre) {
        const almacenado = almacenarNombre(nombre);
        if (almacenado) {
            // alert(`Nombre almacenado correctamente.${nombre}!`);
            window.location.href = 'juego.html';
        } else {
            // alert(`El nombre "${nombre}" ya existe.`);
            const datos = obtenerDatos(nombre);
            Swal.fire({
                imageUrl: '../img/pokebola.png',
                imageWidth: 100,
                imageHeight: 100,
                title: `Bienvenido de nuevo ${nombre}`,
                html: `Tus mayor puntuación es: <strong>${datos.puntos}</strong><br>Tu mejor tiempo es: <strong>${datos.mejorTiempo}</strong>`,
                confirmButtonClass: 'record',
                confirmButtonColor: '#f8ca07',
                confirmButtonText: '¡A romper el record!'
            }).then(() => {
                window.location.href = 'juego.html';
            });
        }
        // const datos = obtenerDatos(nombre);
        // alert(`Tus puntos son: ${datos.puntos} y tu mejor tiempo es: ${datos.mejorTiempo}`);
        // window.location.href = 'juego.html';
    }
}
