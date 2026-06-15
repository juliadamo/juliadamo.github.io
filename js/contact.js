const formulario = document.querySelector('#contato');
const campoNome = document.querySelector('#name');
const campoEmail = document.querySelector('#email');
const campoMensagem = document.querySelector('#message');

formulario.addEventListener('submit', function(event) {
    
    if (campoNome.value.trim() === "") {
        alert("Por favor, preencha o campo Nome Completo.");
        event.preventDefault(); 
        return; 
    }

    if (campoEmail.value.trim() === "" || !campoEmail.value.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault(); 
        return;
    }

    if (campoMensagem.value.trim() === "") {
        alert("Por favor, escreva uma mensagem.");
        event.preventDefault();
        return;
    }

    alert("Página em Construção!");
});