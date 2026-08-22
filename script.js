function abrirScript(nombre) {
    document.getElementById("tituloScript").textContent = nombre;
    document.getElementById("modal").style.display = "flex";
}

function cerrarScript() {
    document.getElementById("modal").style.display = "none";
}

function copiarCodigo() {
    const codigo = document.getElementById("codigo").value;

    navigator.clipboard.writeText(codigo);

    alert("Código copiado ✅");
}

function buscarScripts() {
    const texto = document
        .getElementById("buscar")
        .value
        .toLowerCase();

    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(function(tarjeta) {
        const nombre = tarjeta
            .getAttribute("data-name")
            .toLowerCase();

        if (nombre.includes(texto)) {
            tarjeta.style.display = "flex";
        } else {
            tarjeta.style.display = "none";
        }
    });
}