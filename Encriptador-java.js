function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function mayusculas(){
    var texto = document.getElementById("frase").value;
    for(var index = 0; index < texto.length; index++)
    {
        var letraActual = texto.charAt(index);
       if(esMayuscula(letraActual))
        {
            alert("Se detecto Mayusculas en tu texto, seran cambiadas a minusculas");
            encriptar();
            break;
        }else{
            encriptar();
        }

    }
}

function encriptar(){

        

        var texto = document.getElementById("frase").value.toLowerCase();

        var textoEncriptador = texto.replace(/e/img, "enter");
        var textoEncriptador = textoEncriptador.replace(/o/img, "ober");
        var textoEncriptador = textoEncriptador.replace(/i/img, "imes");
        var textoEncriptador = textoEncriptador.replace(/a/img, "ai");
        var textoEncriptador = textoEncriptador.replace(/u/img, "ufat");

        document.getElementById("boton-copiar").style.display = "block";
        document.getElementById("visor-desencriptado").innerHTML = textoEncriptador;
        

        

}

function desencriptar(){

    var texto = document.getElementById("frase").value.toLowerCase();

    var textoEncriptador = texto.replace(/enter/img, "e");
    var textoEncriptador = textoEncriptador.replace(/ober/img, "o");
    var textoEncriptador = textoEncriptador.replace(/imes/img, "i");
    var textoEncriptador = textoEncriptador.replace(/ai/img, "a");
    var textoEncriptador = textoEncriptador.replace(/ufat/img, "u");

    document.getElementById("visor-desencriptado").innerHTML = textoEncriptador;
}

function copiar(){
    var contenido = document.getElementById("visor-desencriptado").textContent;
    navigator.clipboard.writeText(contenido);
}