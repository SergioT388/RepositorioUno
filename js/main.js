let Productos = [
    { nombre: "Heladera", precio: 10000, stock: 8 },
    { nombre: "Horno", precio: 8000, stock: 5 },
    { nombre: "Tv LG", precio: 12000, stock: 13 },
]
for (let index = 0; index < Productos.length; index++) {
    console.log(`${Productos[index].nombre} - precio: $${Productos[index].precio} - stock: ${Productos[index].stock}`);    
}
console.log("Actualización del stock...");
Productos.pop();
for (let index = 0; index < Productos.length; index++) {
    console.log(`${Productos[index].nombre} - precio: $${Productos[index].precio} - stock: ${Productos[index].stock}`);
}
