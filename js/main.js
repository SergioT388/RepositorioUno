const Productos =[
    {
     "nombre": "Heladera",
     "precio": "$30000",
     "stock": 16,
     "categoría": "Electrodomésticos",
    },
    {
    "nombre": "Sofá",
    "precio": "$18000",
    "stock": 24,
    "categoría": "Muebles",
    },
    {"nombre": "Maceta",
    "precio": "$7000",
    "stock": 8,
    "categoría": "Jardín",
    },
]
Productos.forEach(i => {
    console.log(i); 
    const nombreProductos = document.createElement('div');
    nombreProductos.innerHTML =
    `<h2>${i.nombre}</h2>`;
    contenedorProductos.appendChild(nombreProductos)
})