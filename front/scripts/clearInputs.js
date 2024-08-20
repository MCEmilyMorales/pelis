const clearInputs = () => {
  const buttonLimpiar = document.getElementById("buttonLimpiar");
  function clear(event) {
    const inputs = document.querySelectorAll("input[name]");
    inputs.forEach((input) => (input.value = ""));
  }
  buttonLimpiar.addEventListener("click", clear);
};
module.exports = clearInputs ;
