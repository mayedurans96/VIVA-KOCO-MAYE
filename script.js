document.addEventListener('DOMContentLoaded', function() {
    const productoSelect = document.getElementById('producto');
    const tamanoSelect = document.getElementById('tamano');
    const masaSelect = document.getElementById('masa');
    const rellenoSelect = document.getElementById('relleno');
    const cremaSelect = document.getElementById('crema');
    const form = document.getElementById('order-form');

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
            tamano: [
                "Personal (máx. 2 personas)",
                "1/4 de libra (8 a 10 porciones)"
            ],
            masa: [
                "Vainilla",
                "Chocolate",
                "Oreo"
            ],
            relleno: [
                "Chispas de chocolate",
                "Dulce de leche"
            ],
            crema: [
                "Sin crema"
            ]
        },
        brownies: {
            tamano: [
                "Personal (máx. 2 personas)",
                "1/4 de libra (8 a 10 porciones)"
            ],
            masa: [
                "Chocolate",
                "Chocolate blanco"
            ],
            relleno: [
                "Chispas de chocolate",
                "Nuez"
            ],
            crema: [
                "Sin crema"
            ]
        }
    };

    function actualizarOpciones() {
        const producto = productoSelect.value;

        console.log('Producto seleccionado:', producto);

        // Actualiza tamaños
        tamanoSelect.innerHTML = '';
        opciones[producto].tamano.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            tamanoSelect.appendChild(optionElement);
        });
        console.log('Opciones de tamaño actualizadas:', Array.from(tamanoSelect.options).map(option => option.textContent));

        // Actualiza masas
        masaSelect.innerHTML = '';
        opciones[producto].masa.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            masaSelect.appendChild(optionElement);
        });
        console.log('Opciones de masa actualizadas:', Array.from(masaSelect.options).map(option => option.textContent));

        // Actualiza rellenos
        rellenoSelect.innerHTML = '';
        opciones[producto].relleno.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            rellenoSelect.appendChild(optionElement);
        });
        console.log('Opciones de relleno actualizadas:', Array.from(rellenoSelect.options).map(option => option.textContent));

        // Actualiza cremas
        cremaSelect.innerHTML = '';
        opciones[producto].crema.forEach(opcion => {
            const optionElement = document.createElement('option');
            optionElement.value = opcion;
            optionElement.textContent = opcion;
            cremaSelect.appendChild(optionElement);
        });
        console.log('Opciones de crema actualizadas:', Array.from(cremaSelect.options).map(option => option.textContent));
    }

    // Inicializa las opciones al cargar la página
    actualizarOpciones();

    // Actualiza las opciones cuando el producto cambia
    productoSelect.addEventListener('change', actualizarOpciones);

    // Maneja el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const producto = productoSelect.value;
        const tamano = tamanoSelect.value;
        const masa = masaSelect.value;
        const relleno = rellenoSelect.value;
        const crema = cremaSelect.value;
        const foto = document.getElementById('foto').files[0];

        // Construye el mensaje para WhatsApp
        const mensaje = `Hola, quisiera hacer un pedido:
Producto: ${producto}
Tamano: ${tamano}
Masa: ${masa}
Relleno: ${relleno}
Crema: ${crema}
Foto del diseño: ${foto ? 'Sí' : 'No'}`;

        // Reemplaza con tu número de WhatsApp Business
        const numeroWhatsApp = '+573115026048';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        // Redirige al usuario a WhatsApp
        window.location.href = url;
    });
});