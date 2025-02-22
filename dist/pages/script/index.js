    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const btnSaibaMais = document.getElementById("saibaMais");
    const btnFechar = document.getElementById("fecharModal");
  
    btnSaibaMais.addEventListener("click", function () {
      modal.classList.remove("hidden"); // Exibe o modal
      modal.classList.add("flex"); // Garante que ele fique visível corretamente
    });
  
    btnFechar.addEventListener("click", function () {
      fecharModal();
    });
  
    modal.addEventListener("click", function (event) {
      if (!modalContent.contains(event.target)) {
        fecharModal();
      }
    });
  
    function fecharModal() {
      modal.classList.add("hidden"); // Esconde o modal
      modal.classList.remove("flex"); // Remove a classe flex para evitar conflitos
    }

  
