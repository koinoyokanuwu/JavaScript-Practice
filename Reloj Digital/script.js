//Función para crear el reloj
function calcularTiempo(){
    //Variables para capturar fecha actual, horas, minutos y segundos
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    //Establecer formato de hora de tal manera que se vea de dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10  ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Concatenación de pantalla de reloj
    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let relojDigital = document.querySelector(".reloj");

    //Establece la sintaxis HTML desde las funciones 
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo, 1000);