function abrirModal(titulo, descripcion, imagenSrc, precio) {
    document.getElementById("modal-titulo").textContent = titulo;
    document.getElementById("modal-descripcion").textContent = descripcion;
    document.getElementById("modal-img").src = imagenSrc;
    document.getElementById("modal-precio").textContent = precio;
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function agregarAlCarrito() {
    
    alert('Producto añadido al carrito'); 
    cerrarModal();
}