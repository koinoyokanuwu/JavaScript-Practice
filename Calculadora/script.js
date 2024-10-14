//Capturan lo que el usuario haga con los botones, en este caso, las operaciones
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

//Escucha los eventos que realice el usuario mediante los botones
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;
        //Acción de limpiar la pantalla
        if (boton.id === "limpiar"){
            pantalla.textContent = "0";
            return
        }
        //Acción de borrar items de la pantalla
        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1){
            pantalla.textContent = "0";
            } else
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            return;
        }
        //Acción del botón "igual"

            if (boton.id === "igual") {
                try {
                    // Verifica si se está intentando dividir por cero
                    if (pantalla.textContent.includes("/0")) {
                        pantalla.textContent = "¡Error!";
                    } else {
                        pantalla.textContent = eval(pantalla.textContent);
                    }
                } catch {
                    pantalla.textContent = "¡Error!";
                }
                return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOn
        } else{
        pantalla.textContent += botonOn;
        }
        
    })

})
