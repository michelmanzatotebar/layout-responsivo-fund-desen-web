document.addEventListener("DOMContentLoaded", () => {
  const incrementButton = document.getElementById("botao-incrementar");
  const decrementButton = document.getElementById("botao-decrementar");
  const counterValue = document.getElementById("valor-contador");

  if (!incrementButton || !decrementButton || !counterValue) {
    return;
  }

  let count = 0;

  const updateCounter = () => {
    counterValue.textContent = count.toString();
  };

  incrementButton.addEventListener("click", () => {
    count += 1;
    updateCounter();
  });

  decrementButton.addEventListener("click", () => {
    count -= 1;
    updateCounter();
  });
});
