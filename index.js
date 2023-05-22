function calcular() {
    // Obtener los elemento del DOM correspondientes
    let zona = document.getElementById("domicilio");
    let zona2 = zona.value;

    let cantidad = parseInt(document.getElementById("cantidad").value);
    let verificarCantidad = document.getElementById("cantidad");
    let advertencia = document.getElementById("advertencia");

    // Variable para almacenar el resultado del cálculo
    let calculo;

    // Constante que representa el costo base
    const costo = 102;

    // Obtener los elementos de radio button para el tipo de usuario
    var opciones = document.getElementsByName("usuario");
    var seleccionado = false;
    var valorSeleccionado = "";

    // Recorrer los radio button y verificar si alguno ha sido seleccionado
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            valorSeleccionado = opciones[i].value;
            console.log("Usuario " + valorSeleccionado);
            break;
        }
    }

    // Verificar si se ha seleccionado un tipo de usuario
    if (!seleccionado) {
        // Mostrar advertencia y agregar un elemento de párrafo al DOM
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Tipo de usuario";
        advertencia.appendChild(nuevoElemento);
        console.log(seleccionado);
    }

    // Verificar si se ha seleccionado una zona de domicilio
    if (zona2 == "null") {
        // Mostrar advertencia y agregar un elemento de párrafo al DOM
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Zona de domicilio";
        advertencia.appendChild(nuevoElemento);
        console.log(zona2);
    }

    // Obtener el valor de la cantidad ingresada y verificar si es inválido
    let verificarCant = verificarCantidad.value;
    if (verificarCant <= 0 || verificarCant == "") {
        // Mostrar advertencia y agregar un elemento de párrafo al DOM
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Cantidad kWh inválida";
        advertencia.appendChild(nuevoElemento);
        console.log(verificarCant);
    }

    console.log("cantidad ", verificarCantidad.value);

    // Realizar el cálculo si se han seleccionado el tipo de usuario, la zona y la cantidad son válidos
    if (seleccionado && zona2 && verificarCant > 0) {
        // Ocultar la advertencia
        advertencia.style.visibility = "hidden";

        // Realizar el cálculo según el tipo de usuario y la zona seleccionada
        if (valorSeleccionado == "residencial") {
            let iva = 0.21;
            switch (zona2) {
                case "centro":
                    calculo = costo + (cantidad * 5.8) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "norte":
                    calculo = costo + (cantidad * 5.6) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "sur":
                    calculo = costo + (cantidad * 5.4) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "oeste":
                    calculo = costo + (cantidad * 5.35) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
            }
        } else if (valorSeleccionado == "industrial") {
            let iva = 0.27;
            switch (zona2) {
                case "centro":
                    calculo = costo + (cantidad * 5.8) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "norte":
                    calculo = costo + (cantidad * 5.6) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "sur":
                    calculo = costo + (cantidad * 5.4) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "oeste":
                    calculo = costo + (cantidad * 5.35) * (1 + iva);
                    console.log("zona ", zona2);
                    break;
            }
        }
    }


    // Mostrar los resultados en la sección "cajaResult"
    document.getElementById("zona").textContent = zona2;
    document.getElementById("kWs").textContent = cantidad;
    document.getElementById("total").textContent = calculo.toFixed(2);
    document.getElementById("usuario").textContent = valorSeleccionado;

    // Mostrar la sección "cajaResult"
    document.getElementById("cajaResult").style.visibility = "visible";
    document.getElementById("resetear").style.visibility = "visible";
}



// Función que toma que verifica el tamaño de la pantalla y modifica el estilo del button dentro de cajaResult

const button = document.getElementById("resetear");
function verificarTamañoPantalla() {
    if (window.innerWidth > 1024) {
        button.style.visibility = "hidden !important"; // Ocultar el botón si el ancho de pantalla es menor a 768px
    } else {
        var cajaResult = document.getElementById("cajaResult");
        var estilos = window.getComputedStyle(cajaResult);
        //Valida que cajaResult tenga el estilo "visibility = visible" para colocarle el mismo estilo al button
        if (estilos.getPropertyValue("visibility") == "visible"){
            button.style.visibility = "visible";
        }else {
            button.style.visibility = "hidden";
        }
        
    }
  }
verificarTamañoPantalla();
window.addEventListener('resize', verificarTamañoPantalla);
function resetear(){
    document.getElementById("cajaResult").style.visibility = "hidden";
    document.getElementById("resetear").style.visibility = "hidden";
}
function teclas(event){
    var keyCode = event.keyCode || event.which;

    if(keyCode === 13){
        calcular();
    }
}