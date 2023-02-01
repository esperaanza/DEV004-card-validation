//4083952015263
import validator from './validator.js';
   
document.getElementById("btn").addEventListener("click", validate,false);
function validate() {
       
  const cardNumber = document.getElementById("creditCardNumber").value
  const valid = validator.isValid(cardNumber)
  const cardBrand = validator.getCardBrand(cardNumber);
  const result = document.getElementById("result");
  if (valid) {
        
    result.innerHTML = "Tarjeta " + cardBrand + "\n" + validator.maskify(cardNumber) + "\n Válida";
    result.classList.remove("invalid");
    result.classList.add("valid");
  }
  else {
        
    result.innerHTML = "Tarjeta " + cardBrand + "\n Inválida.";
    result.classList.remove("valid");
    result.classList.add("invalid");
  }
  result.style.display = "block"; }
    