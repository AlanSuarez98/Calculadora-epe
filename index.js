function resetear(){
    window.location.reload();
}

function calcular() {
    let zona = document.getElementById("domicilio");
    let zona2 = zona.value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let verificarCantidad = document.getElementById("cantidad");
    let advertencia = document.getElementById("advertencia");
    let calculo;
    const costo = 102;

    var opciones = document.getElementsByName("usuario");
    var seleccionado = false;
    var valorSeleccionado = "";
    //Se recorre los inputs radio y se toma el valor
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            valorSeleccionado = opciones[i].value;
            console.log("Usuario " + valorSeleccionado);
            break;
        }
    }

    //se verifica que hayan seleccionado algun input radio de lo contrario se le informa al usuario
    if (!seleccionado) {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Tipo de usuario";
        advertencia.appendChild(nuevoElemento);
        console.log(seleccionado);
    }
    //si el usuario no selecciona algun distrito se le informa del mismo
    if (zona2 == "null") {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Zona de domicilio";
        advertencia.appendChild(nuevoElemento);
        console.log(zona2);
    }
    //validar que el número de kWs sea válida y no sea negativo ni cero y se le informa al usuario
    let verificarCant = verificarCantidad.value;
    if (verificarCant <= 0 || verificarCant == "") {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Cantidad kWh inválida";
        advertencia.appendChild(nuevoElemento);
        console.log(verificarCant);
    }
    console.log("cantidad ", verificarCantidad.value);
    //Si los datos ingresados estan bien hacemos el calculo solicitado dependiendo la zona
    if (seleccionado && zona2 && verificarCant > 0) {
        advertencia.style.visibility = "hidden";
        if (valorSeleccionado == "residencial") {
            let iva = 0.21;
            switch (zona2) {
                case "centro":
                    calculo = costo + cantidad * 5.8 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "norte":
                    calculo = costo + cantidad * 5.6 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "sur":
                    calculo = costo + cantidad * 5.4 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "oeste":
                    calculo = costo + cantidad * 5.35 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
            }
        } else if (valorSeleccionado == "industrial") {
            let iva = 0.27;
            switch (zona2) {
                case "centro":
                    calculo = costo + cantidad * 5.8 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "norte":
                    calculo = costo + cantidad * 5.6 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "sur":
                    calculo = costo + cantidad * 5.4 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
                case "oeste":
                    calculo = costo + cantidad * 5.35 * (1 + iva);
                    console.log("zona ", zona2);
                    break;
            }
        }

        // Mostrar los resultados en la sección "cajaResult"
        document.getElementById("zona").textContent = zona2;
        document.getElementById("kWs").textContent = cantidad;
        document.getElementById("total").textContent = calculo.toFixed(2);
        document.getElementById("usuario").textContent = valorSeleccionado;

        // Mostrar la sección "cajaResult"
        document.getElementById("cajaResult").style.visibility = "visible";
    }
}
