//Se declaran variables constantes para hacer conección entre html y jS.
//Las variables constantes son inmutables.
//*variable* = document.getElementById('id o class');
//Se usa document.getElementById para conectar una ID hacia una etiqueta especifica del html.
//En este caso conectamos el input con una variable y un boton hacia una funcion de JS.
//Dicho método .addEventListener('') permite asociar múltiples funciones a un mismo evento.
//El evento DOMContentLoaded es una palabra reservada que nos permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados.
//

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.querySelector(".btn-copiar");
const encriptarButton = document.querySelector(".btn-encriptar");
const desencriptarButton = document.querySelector(".btn-desencriptar");

document.addEventListener('DOMContentLoaded', () => {
    copyButton.addEventListener('click', () => {
        const textoCopiado = mensaje.value;
        navigator.clipboard.writeText(textoCopiado);
        mensaje.value = "";
        mensaje.style.backgroundImage= "url('imagenes/gemas.jpg')";
    });
});

encriptarButton.addEventListener('click', () => {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
});

desencriptarButton.addEventListener('click', () => {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
});

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
