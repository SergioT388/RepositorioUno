const Producto = {
    Nombre: "Camiseta",
    Precio: 25000,
    Stock: 30,
}
let nombreInicial = Producto.Nombre
let nombreFinal = Producto.Nombre = 'Zapatillas'
Producto.Categoría = 'Calzado'
console.log(Producto);
delete Producto.Stock
console.log(Producto);
