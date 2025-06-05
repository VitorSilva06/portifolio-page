document.getElementById("btn-contato").addEventListener("click", function () {
    const form = document.getElementById("form-container");
    const img = document.getElementById("btn-img");

    if (form.style.display === "none" || form.style.display === "") {
        // Mostrar o formulário
        form.style.display = "block";
        img.src = "../portifolio-page/img/botao-seta-cima.png"; // seta para cima
    } else {
        // Esconder o formulário
        form.style.display = "none";
        img.src = "../portifolio-page/img/botao-seta-direita.png"; // seta para baixo
    }
});
