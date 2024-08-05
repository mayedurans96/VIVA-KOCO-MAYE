document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const producto = document.getElementById('producto').value;
    const masa = document.getElementById('masa').value;
    const crema = document.getElementById('crema').value;
    const foto = document.getElementById('foto').files[0];

    // Construye el mensaje para WhatsApp
    const mensaje = `Hola, quisiera hacer un pedido:
    Producto: ${producto}
    Masa y Relleno: ${masa}
    Crema: ${crema}
    Foto del diseño: ${foto ? 'Sí' : 'No'}
    `;

    // Reemplaza con tu número de WhatsApp Business
    const numeroWhatsApp = '1234567890';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Redirige al usuario a WhatsApp
    window.location.href = url;
});
