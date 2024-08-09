document.addEventListener('DOMContentLoaded', function() {
    const productoSelect = document.getElementById('producto');
    const opcionesTortas = document.getElementById('opciones-tortas');
    const opcionesGalletas = document.getElementById('opciones-galletas');

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
            sabor: [
                "Vainilla - Oreo",
                "Vainilla - Bocadillo",
                "Vainilla - Coco",
                "Chocolate - Arequipe",
                "Chocolate - Chocolate",
            ],
            cantidad: [
                "1 galleta",
                "Caja x3 unidades",
                "Bolsa x3 unidades",
            ]
        }
    };
    
    // Evento que se dispara cuando se cambia el producto seleccionado
    productoSelect.addEventListener('change', function() {
        const producto = productoSelect.value;

        // Ocultar ambas secciones primero
        opcionesTortas.style.display = 'none';
        opcionesGalletas.style.display = 'none';

        // Mostrar la sección correspondiente al producto seleccionado
        if (producto === 'tortas') {
            opcionesTortas.style.display = 'block';
            actualizarSelectOptions('tamano-torta', opciones.tortas.tamano);
            actualizarSelectOptions('masa-torta', opciones.tortas.masa);
            actualizarSelectOptions('relleno-torta', opciones.tortas.relleno);
            actualizarSelectOptions('crema-torta', opciones.tortas.crema);
        } else if (producto === 'galletas') {
            opcionesGalletas.style.display = 'block';
            actualizarSelectOptions('sabor-galletas', opciones.galletas.sabor);
            actualizarSelectOptions('cantidad-galletas', opciones.galletas.cantidad);
        }
    });

    function actualizarSelectOptions(id, options) {
        const selectElement = document.getElementById(id);
        selectElement.innerHTML = ''; // Limpiar opciones anteriores
        options.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            selectElement.appendChild(optionElement);
        });
    }

    // Para manejar el envío del formulario y redirigir a WhatsApp
    const form = document.getElementById('order-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const producto = productoSelect.value;
        let mensaje = `Hola, quisiera hacer un pedido:\nProducto: ${producto}\n`;

        if (producto === 'tortas') {
            const tamano = document.getElementById('tamano-torta').value;
            const masa = document.getElementById('masa-torta').value;
            const relleno = document.getElementById('relleno-torta').value;
            const crema = document.getElementById('crema-torta').value;
            const foto = document.getElementById('foto').files[0];

            mensaje += `Tamaño: ${tamano}\nMasa: ${masa}\nRelleno: ${relleno}\nCrema: ${crema}\nFoto del diseño: ${foto ? 'Sí' : 'No'}`;
        } else if (producto === 'galletas') {
            const sabor = document.getElementById('sabor-galletas').value;
            const cantidad = document.getElementById('cantidad-galletas').value;

            mensaje += `Sabor: ${sabor}\nCantidad: ${cantidad}`;
        }

        const numeroWhatsApp = '+573163679382';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.location.href = url;
    });
});
