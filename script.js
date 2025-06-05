let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';

  let total = 0;

  carrito.forEach((producto, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      ${producto.nombre} - $${producto.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    lista.appendChild(item);
    total += producto.precio;
  });

  document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  carrito = [];
  actualizarCarrito();
  alert("¡Gracias por tu compra! 💜");
}

