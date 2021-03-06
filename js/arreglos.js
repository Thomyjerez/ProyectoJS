// crear un arreglo
let listaSupermercado = [];

// crear um arreglo con datos

let series = [`peaky blinders`, 7, "stranger things", 3, "the boys", 3, "loky" ];

// mostrar un arreglo

document.write(series)

// mostrar un elemento del arreglo

document.write("<br>" + series[0])

// mostrar un arreglo dentro de una lista
// series-length devuelve la cantidad de elementos en el arreglo
document.write(`<ul>`)

for( let indice = 0; indice < series.length; indice++){
    
    document.write(`<li>${series[indice]} </li>`)

}
document.write(` </ul>`)

// agregar un elemento nuevo al arreglo al final

series.push("Rick and morty")

document.write("<h3>Agregamos un nuevo elemento al final del arreglo</h3>")
// Volvemos a copiar el bucle 
document.write(`<ul>`)

for( let indice = 0; indice < series.length; indice++){
    
    document.write(`<li>${series[indice]} </li>`)

}
document.write(` </ul>`)

// agregar un elemento en una posicion particular del arreglo

series.splice(2, 0, "The witcher"); // (posicion del elemento, cantidad de elementos a borrar, item que vamos a agregar)

document.write("<h3>Agregamos un nuevo elemento en una posicion particular</h3>")

document.write(`<ul>`)

for( let indice = 0; indice < series.length; indice++){
    
    document.write(`<li>${series[indice]} </li>`)

}
document.write(` </ul>`)

// eliminar elementos

series.splice(4, 1,);

document.write("<h3>Eliminar un nuevo elemento de una posicion en particular del arreglo</h3>")

document.write(`<ul>`)

for( let indice = 0; indice < series.length; indice++){
    
    document.write(`<li>${series[indice]} </li>`)

}
document.write(` </ul>`)

// eliminar varios elementos

// series.splice(5); borrar todos los elementos desde la posicion 2

// modificar elementos en un arreglo

series[1] = "Suits"; // series.splice (1)

document.write("<h3>Modificar un nuevo elemento de una posicion en particular del arreglo</h3>")

document.write(`<ul>`)

for( let indice = 0; indice < series.length; indice++){
    
    document.write(`<li>${series[indice]} </li>`)

}
document.write(` </ul>`)




