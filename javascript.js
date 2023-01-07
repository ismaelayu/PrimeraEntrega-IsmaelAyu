function opcionPrincipal() {

let total = 0
    do {
        opcion = prompt("1-Servicios\n2-Accesorios\n3-Cuenta\n4-Salir")
        opcion = parseInt(opcion)
        switch (opcion) {
            case 1: total= total + comprarServicio()
                break
            case 2: total= total + comprarAccesorio()
                break
            case 3: alert("La cuenta es "+ total)
            total=0
                break
            case 4: alert("Saliendo...")
                break
            default:
                alert("Opcion invalida!")
        }
    } while (opcion != 4)
}



function comprarServicio() {

let acumulador=0

    alert("Seleccione el tipo de servicio")
    alert("1-Reparacion de placa \n 2-Cambio de Hardware\n 3-Soporte Tecnico")
    Servicios = prompt("Ingrese la opcion deseada")
    Servicios = parseInt(Servicios)
    switch (Servicios) {
        case 1: acumulador = 25000
            break
        case 2: acumulador = 18000
            break
        case 3: acumulador = 10000
            break
        default: alert("Opcion invalida")

   
    }
return acumulador
}




function comprarAccesorio() {


    alert("Elija un accesorio")
    alert("1-Cargador\n2-Funda\n3-Auriculares")
    Accesorios = prompt("Ingrese la opcion deseada")
    Accesorios = parseInt(Accesorios)
    switch (Accesorios) {
        case 1: acumulador = 7000
            break
        case 2: acumulador = 2000
            break
        case 3: acumulador = 5000
            break
        default: alert("Opcion invalida")

    
    }
return acumulador
}


opcionPrincipal()








