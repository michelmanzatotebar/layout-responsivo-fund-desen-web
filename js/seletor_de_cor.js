document.addEventListener("DOMContentLoaded", () => {
  const colorInput = document.getElementById("input-cor");
  const colorForm = document.getElementById("form-seletor-cor");
  const colorScreen = document.getElementById("tela-seletor-cor");

  if (!colorInput || !colorForm || !colorScreen) {
    return;
  }

  colorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let selectedColor = colorInput.value.trim();

    if (/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(selectedColor)) {
      selectedColor = `#${selectedColor}`;
    }

    if (!selectedColor || !CSS.supports("color", selectedColor)) {
      alert("Informe uma cor valida.");
      return;
    }

    colorScreen.style.setProperty("background-color", selectedColor, "important");
  });
});
