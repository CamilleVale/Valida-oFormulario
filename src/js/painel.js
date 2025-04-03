document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".form"); // Seleciona o formulário
    const inputs = document.querySelectorAll("input, textarea");
    const botaoEnviar = document.getElementById("btn-enviar");

    botaoEnviar.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o envio do formulário até validação

        let formularioValido = true; // Assume que o formulário está válido

        inputs.forEach((campo) => {
            const erroMensagem = document.getElementById(campo.id + "Erro"); // Obtém a mensagem de erro associada
            if (campo.value.trim() === "") {
                erroMensagem.style.display = "block"; // Exibe a mensagem de erro
                campo.style.border = "2px solid #F52E2E"; // Borda vermelha para erro
                formularioValido = false; // Marca o formulário como inválido
            } else {
                erroMensagem.style.display = "none"; // Oculta a mensagem de erro
                campo.style.border = "2px solid #00C22B"; // Borda verde para sucesso
            }
        });

        // Se todos os campos estiverem preenchidos, envia o formulário
        if (formularioValido) {
            formulario.submit();
        }
    });
});