let nombreProducto = "heladera"
let precioUnitario = 30000
let cantidadDeseada = prompt("Ingrese la cantidad de heladeras que quiere")
let costoFinal = precioUnitario * cantidadDeseada
let descuento = costoFinal * 0.1
let costoDescuento = costoFinal - descuento
if(cantidadDeseada > 5) {
console.log(costoDescuento);
} else{
    console.log(costoFinal);
}