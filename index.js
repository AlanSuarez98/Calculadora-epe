/*function calcular(){
    let zona = document.getElementById("domicilio");
    let zona2 = zona.value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let verificarCantidad = document.getElementById("cantidad");
    let advertencia = document.getElementById("advertencia");
    let calculo;
    const costo = 102;
    let verificarCant = verificarCantidad.value;

    var opciones = document.getElementsByName("usuario");
    var seleccionado = false;

    for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        seleccionado = true;
        var valorSeleccionado = opciones[i].value;
        break;
      }
    }

    if ((seleccionado == "") || (seleccionado == null)) {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = "-Tipo de usuario";
        advertencia.appendChild(nuevoElemento);
    }else if(zona2 == "null"){
            advertencia.style.visibility = "visible";
            var nuevoElemento = document.createElement('p');
            nuevoElemento.textContent = "-Zona de domicilio";
            advertencia.appendChild(nuevoElemento);
    }else if((verificarCant <= 0) || (verificarCant == null)){
            advertencia.style.visibility = "visible";
            var nuevoElemento = document.createElement('p');
            nuevoElemento.textContent = "-Cantidad kWh inválida";
            advertencia.appendChild(nuevoElemento);
     }else{
        if(valorSeleccionado == "residencial"){
            let iva = 0.21;
            switch(zona2){
                case "centro":
                    calculo = costo + (cantidad * 5.80) * (1 + iva);
                    break;
                case "norte":
                    calculo = costo + (cantidad * 5.60) * (1 + iva);
                    break;
                case "sur":
                    calculo = costo + (cantidad * 5.40) * (1 + iva);
                    break;
                case "oeste":
                    calculo = costo + (cantidad * 5.35) * (1 + iva);
            }
            return calculo;
        }
        else if(valorSeleccionado == "industrial"){
            let iva = 0.27;
            switch(zona2){
                case "centro":
                    calculo = costo + (cantidad * 5.80) * (1 + iva);
                    break;
                case "norte":
                    calculo = costo + (cantidad * 5.60) * (1 + iva);
                    break;
                case "sur":
                    calculo = costo + (cantidad * 5.40) * (1 + iva);
                    break;
                case "oeste":
                    calculo = costo + (cantidad * 5.35) * (1 + iva);
            }
            return calculo;
                
        }

     }
    
    let zonaElemento = document.getElementById("zona");
    let usuarioElemento = document.getElementById("usuario");
    let kWsElemento = document.getElementById("kWs");
    let totalElemento = document.getElementById("total");
    

    zonaElemento.textContent = zona2;
    usuarioElemento.textContent = valorSeleccionado;
    kWsElemento.textContent = cantidad;
    totalElemento.textContent = calculo;
    document.getElementById("cajaResult").style.visibility = "visible";



}*/

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

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            valorSeleccionado = opciones[i].value;
            break;
        }
    }


    if (!seleccionado) {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Tipo de usuario";
        advertencia.appendChild(nuevoElemento);
    }
    if (zona2 == "null") {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Zona de domicilio";
        advertencia.appendChild(nuevoElemento);
    }
    let verificarCant = verificarCantidad.value;
    if (verificarCant <= 0 || verificarCant == "") {
        advertencia.style.visibility = "visible";
        var nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "-Cantidad kWh inválida";
        advertencia.appendChild(nuevoElemento);
    }
    else{
        advertencia.style.visibility = "hidden";
    }

    if (seleccionado && zona2 && verificarCant > 0) {
        if (valorSeleccionado == "residencial") {
            let iva = 0.21;
            switch (zona2) {
                case "centro":
                    calculo = costo + cantidad * 5.8 * (1 + iva);
                    break;
                case "norte":
                    calculo = costo + cantidad * 5.6 * (1 + iva);
                    break;
                case "sur":
                    calculo = costo + cantidad * 5.4 * (1 + iva);
                    break;
                case "oeste":
                    calculo = costo + cantidad * 5.35 * (1 + iva);
                    break;
            }
        } else if (valorSeleccionado == "industrial") {
            let iva = 0.27;
            switch (zona2) {
                case "centro":
                    calculo = costo + cantidad * 5.8 * (1 + iva);
                    break;
                case "norte":
                    calculo = costo + cantidad * 5.6 * (1 + iva);
                    break;
                case "sur":
                    calculo = costo + cantidad * 5.4 * (1 + iva);
                    break;
                case "oeste":
                    calculo = costo + cantidad * 5.35 * (1 + iva);
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
