 
const validator={
  isValid: function(creditCardNumber) {
    let sum = 0;
    let even = false;
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));
      if (even) {
        if ((digit *= 2) > 9) digit -= 9;
      }
      sum += digit;
      even = !even;
    }
    return sum % 10 === 0;
  },
  getCardBrand:function(creditCardNumber) {
    const firstNumber = creditCardNumber.charAt(0);
  
    let brand;
    switch (firstNumber) {
    case "3":
      brand = "American Express";
      break;
    case "4":
      brand = "Visa";
      break;
    case "5":
      brand = "Mastercard";
      break;
  
    default:
      brand = "";
      break;
    }
    return brand;
  },
  
  //replace all digits with # except the last 4.
  maskify :(creditcardNumber) =>{
    const numeral = "#"; //se define el simbolo con q se enmascara los digitos de la tarjeta
    let tarjeta = creditcardNumber.slice(-4) //Se obtine los ultimos 4 digitos de la tarjeta
    if (creditcardNumber.length > 4 ){ //si el largo de la tarjeta es mayor a 4 se enmascara
      tarjeta= numeral.repeat(creditcardNumber.length-4) + creditcardNumber.slice(-4) 
      
    }
    return tarjeta;
        
  }
 

};



export default validator;
