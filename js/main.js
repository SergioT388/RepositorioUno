function sumarProductos(precioUnitario, cantidadDeseada) {
let totalGastado = precioUnitario * cantidadDeseada
return totalGastado    
}
let precioUnitario = 10000
let cantidadDeseada = 5
let totalCompra = sumarProductos(precioUnitario, cantidadDeseada)
console.log("El precio total del producto es: $" + totalCompra);