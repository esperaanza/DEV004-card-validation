import validator from './validator.js';
 
document.getElementById("btn").addEventListener('click',()=>{
    // hay que buscar el valor del in´put 

const value =  document.getElementById('cardnumber').value
const creditcardNumber =document.getElementById('cardnumber').value
document.getElementById("cardnumber").value= enmascarar(value);
function enmascarar(creditcardNumber) {
 
 return validator.maskify(creditcardNumber);
}
    validator.isvalid(value)
    })
//document.getElementById("submit").addEventListener('click',validar,true);

