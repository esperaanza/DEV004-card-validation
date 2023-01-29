import validator from './validator.js';
 
document.getElementById("btn").addEventListener('click',()=>{
    // hay que buscar el valor del in´put 
function enmascarar(cardNumber) {
 
 validator.maskify(cardNumber);
}
const value =  document.getElementById('cardnumber').value
const creditcardNumber =document.getElementById('cardnumber').value
//document.getElementById("cardnumber").value= enmascarar(value);

    validator.isvalid()
  
//document.getElementById("submit").addEventListener('click',validar,true);

})