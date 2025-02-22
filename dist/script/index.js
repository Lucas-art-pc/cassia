document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const btnSaibaMais = document.getElementById("saibaMais");
  const btnFechar = document.getElementById("fecharModal");

  btnSaibaMais.addEventListener("click", function () {
      modal.classList.remove("hidden");
  });

  btnFechar.addEventListener("click", function () {
      modal.classList.add("hidden");
  });

  // Fecha apenas se clicar fora do conteúdo do modal
  modal.addEventListener("click", function (event) {
      if (!modalContent.contains(event.target)) {
          modal.classList.add("hidden");
      }
  });
});
