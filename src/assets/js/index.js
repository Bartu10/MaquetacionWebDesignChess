document.querySelectorAll(".cara").forEach(function(elemento) {
    elemento.addEventListener("click", function() {
      this.classList.toggle("detras");
    });
  });