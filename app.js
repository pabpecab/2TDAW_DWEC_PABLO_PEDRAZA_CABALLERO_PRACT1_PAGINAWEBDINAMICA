'use strict'
let propietario = prompt("Introduzca su nombre y apellidos") || "Nombre no introducido";
let marca = prompt("¿Cual es la marca?") || "Desconocida";
let modelo = prompt("¿Cuál es el modelo?") || "Desconocido";
let imagen = prompt("Ponga una imagen") || "https://previews.123rf.com/images/azvector/azvector1803/azvector180300284/97179315-icono-de-coche-con-signo-de-interrogaci%C3%B3n-icono-de-coche-y-ayuda-c%C3%B3mo-informaci%C3%B3n-s%C3%ADmbolo-de-consult.jpg";
let descripcion = prompt("Describa el producto") || "Desconocido";
let precio = parseFloat(prompt("¿Cuál es su precio?"));
let puertas = parseInt(prompt("¿Cuántas puertas tiene?"));
let categoria = prompt("¿A qué categoría pertenece?") || "Desconocido";
let enlace = prompt("¿En que página vió el coche?") || "Desconocido";
let fecha_lanzamiento = prompt("¿Cuando salió a la venta?") || "Desconocido";
let electrico = confirm("¿Es eléctrico?");
let nombre = propietario.split(" ");

document.write(`<div>
                <p>Propietario: ${nombre[0]} ${nombre[1]} ${nombre[2]}</p>
                <h1>${marca}</h1>
                <h2>Modelo: ${modelo}</h2>
                <img src="${imagen}"></img>
                <p>Descripción del coche: ${descripcion}</p>
                <table border>
                    <tr>
                        <th colspan=6>Tabla de datos</th>
                    </tr>

                    <tr>
                        <td>Precio</td>
                        <td>Puertas</td>
                        <td>Categoría</td>
                        <td>Fuente</td>
                        <td>Fecha de lanzamiento</td>
                        <td>Eléctrico</td>
                    </tr>
                    
                    <tr>
                        <td>${precio}</td>
                        <td>${puertas}</td>
                        <td>${categoria}</td>
                        <td><a href="${enlace}">Enlace</a></td>
                        <td>${fecha_lanzamiento}</td>
                        <td>${electrico}</td>
                    </tr>
                </table>
                
                
                </div>`);