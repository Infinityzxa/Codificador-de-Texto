function validarTexto(texto) {
    var regex = /^[a-z ]+$/;
    return regex.test(texto);
}

function criptografar(entradaUsuario) {
    var textoCriptografado = entradaUsuario
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('textoSaida').innerText = textoCriptografado;
    document.getElementById('imagemSaida').style.display = 'none'; 
    document.getElementById('copiar').style.display = 'block';
}

function descriptografar(entradaUsuario) {
    var textoDescriptografado = entradaUsuario
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('textoSaida').innerText = textoDescriptografado;
    document.getElementById('imagemSaida').style.display = 'none'; 
    document.getElementById('copiar').style.display = 'block';
}

function validarECriptografar() {
    var entradaUsuario = document.getElementById('entradaUsuario').value;
    if (validarTexto(entradaUsuario)) {
        criptografar(entradaUsuario);
    } else {
        alert('O texto deve conter apenas letras minúsculas e espaços.');
    }
}

function validarEDescriptografar() {
    var entradaUsuario = document.getElementById('entradaUsuario').value;
    if (validarTexto(entradaUsuario)) {
        descriptografar(entradaUsuario);
    } else {
        alert('O texto deve conter apenas letras minúsculas e espaços.');
    }
}

function copiarTexto() {
    var textoSaida = document.getElementById('textoSaida').innerText;
    navigator.clipboard.writeText(textoSaida).then(function() {
        alert('Texto copiado!');
    }, function() {
        alert('Falha ao copiar');
    });
}
