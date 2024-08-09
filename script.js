document.addEventListener('DOMContentLoaded', function() {
    const productoSelect = document.getElementById('producto');
    const tamanoSelect = document.getElementById('tamano');
    const masaSelect = document.getElementById('masa');
    const rellenoSelect = document.getElementById('relleno');
    const cremaSelect = document.getElementById('crema');
    const fotoInput = document.getElementById('foto');
    const cantidadInput = document.getElementById('cantidad');
    const saborInput = document.getElementById('sabor');
    const rellenoGalletasBrowniesInput = document.getElementById('relleno-galletas-brownies');
    const tortasOptions = document.getElementById('tortas-options');
    const galletasBrowniesOptions = document.getElementById('galletas-brownies-options');
    const form = document.getElementById('order-form');

    // Define las opciones para cada producto
    const opciones = {
        tortas: {
            tamano: [
                "Personal (máx. 2 personas)",
                "1/4 de libra (8 a 10 porciones)",
                "1/2 libra (15 a 18 porciones)",
                "1 libra (30 a 35 porciones)"
            ],
            masa: [
                "Vainilla",
                "Chocolate",
                "Tres leches",
                "Vainilla - Oreo",
                "Semillas de Amapola",
                "Zanahoria y nueces",
                "Red velvet",
                "Vainilla con arándanos"
            ],
            relleno: [
                "Frutos rojos",
                "Frosting de queso",
                "Arequipe",
                "Chocolate",
                "Bariloche (chocolate+arequipe)",
                "Maracuyá",
                "Queso crema",
                "Frutos amarillos"
            ],
            crema: [
                "Chantilly",
                "Frosting de queso",
                "Sin cubierta"
            ]
        },
        galletas: {
            // No se necesitan opciones adicionales para galletas
        },
        brownies: {
            // No se necesitan opciones adicionales para brownies
        }
    };

    function actualizarOpciones() {
        const producto = productoSelect.value;

        if (producto === 'tortas') {
            // Mostrar opciones para tortas
            tortasOptions.style.display = 'block';
            galletasBrowniesOptions.style.display = 'none';

            // Actualiza las opciones de tamaño, masa, relleno y crema según el producto seleccionado
            actualizarSelect(tamanoSelect, opciones.tortas.tamano);
            actualizarSelect(masaSelect, opciones.tortas.masa);
            actualizarSelect(rellenoSelect, opciones.tortas.relleno);
            actualizarSelect(cremaSelect, opciones.tortas.crema);
        } else if (producto === 'galletas' || producto === 'brownies') {
            // Mostrar opciones para galletas y brownies
            tortasOptions.style.display = 'none';
            galletasBrowniesOptions.style.display = 'block';
        } else {
            // Ocultar todas las opciones si no se selecciona ningún producto
            tortasOptions.style.display = 'none';
            galletasBrowniesOptions.style.display = 'none';
        }
    }

    // Función para actualizar un select con un array de opciones
    function actualizarSelect(selectElement, opcionesArray) {
        selectElement.innerHTML = '<option value="">Selecciona una opción</option>'; // Limpiar y agregar opción por defecto
        opcionesArray.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            selectElement.appendChild(optionElement);
        });
    }

    // Actualiza las opciones cuando el producto cambia
    productoSelect.addEventListener('change', actualizarOpciones);

    // Maneja el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const producto = productoSelect.value;
        let mensaje = `Hola, quisiera hacer un pedido:\nProducto: ${producto}`;

        if (producto === 'tortas') {
            const tamano = tamanoSelect.value;
            const masa = masaSelect.value;
            const relleno = rellenoSelect.value;
            const crema = cremaSelect.value;
            const foto = fotoInput.files[0];

            mensaje += `
Tamano: ${tamano}
Masa: ${masa}
Relleno: ${relleno}
Crema: ${crema}
Foto del diseño: ${foto ? 'Sí' : 'No'}`;
        } else if (producto === 'galletas' || producto === 'brownies') {
            const cantidad = cantidadInput.value;
            const sabor = saborInput.value;
            const relleno = rellenoGalletasBrowniesInput.value;

            mensaje += `
Cantidad: ${cantidad}
Sabor: ${sabor}
Relleno: ${relleno}`;
        }

        // Reemplaza con tu número de WhatsApp Business
        const numeroWhatsApp = '+573115026048';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        // Redirige al usuario a WhatsApp
        window.location.href = url;
    });

    // Inicializa las opciones al cargar la página
    actualizarOpciones();
});