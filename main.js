function encriptar() {
    let textResultado = document.getElementById("textoResultado").value
    let texto = document.getElementById("texto").value
    let imagen = document.getElementById("imagen")
    let mensaje = document.getElementById("mensaje")
    let recomendacion = document.getElementById("txtRecomendacion")
    let mensajeAnterior = document.getElementById("mensajeAnterior")

    let textoCifrado = texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length == 0) {
        document.getElementById("mensaje").textContent = "Ningún mensaje fue encontrado"
        document.getElementById("imagen").src = "./imagenes/Muñeco.png"
        document.getElementById("mensajeAnterior").textContent = "Texto anterior:"

    }
    if (texto.length != 0) {
        document.getElementById("imagen").src = "./imagenes/VectorAdmiracion.png"
        document.getElementById("mensaje").textContent = "Mensaje encriptado"
        document.getElementById("textoResultado").value = textoCifrado;
        document.getElementById("texto").value = ""
        document.getElementById("txtRecomendacion").textContent = ""

    }
}

function copiar() {
    let textCopiado = document.getElementById("textoResultado").value
    document.getElementById("texto").value = textCopiado
    let textoCopiado = document.getElementById("textoResultado")
    textoCopiado.select()
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');    
}

function desencriptar() {
    let texto = document.getElementById("texto").value
    let textoDecifrado = texto
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

    if (texto.length == 0) {
        document.getElementById("mensaje").textContent = "Ningún mensaje fue encontrado"
        document.getElementById("imagen").src = "./imagenes/Muñeco.png"
        document.getElementById("mensajeAnterior").textContent = "Texto anterior:"

    }
    if (texto.length != 0) {
        document.getElementById("imagen").src = "./imagenes/VectorAdmiracion.png"
        document.getElementById("mensaje").textContent = "Mensaje encriptado"
        document.getElementById("textoResultado").value = textoDecifrado;
        document.getElementById("texto").value = ""
        document.getElementById("txtRecomendacion").textContent = ""
    }
}