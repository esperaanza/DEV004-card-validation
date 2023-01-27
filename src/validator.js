/*Se hizo la constante validador que contiene los metodos 
de enmascarar y validar el numero de tarjeta*/
const validator={
  isvalid :function(){
  console.log("yo soy el Metodo")
  

  },
  maskify :function() {
      var cardnumber=document.getElementById('cardnumber').value
      var numeral = "#"; //se define el simbolo con q se enmascara los digitos de la tarjeta
      var tarjetaEnmascarada = cardnumber.slice(-4) //Se obtine los ultimos 4 digitos de la tarjeta
      if (cardnumber.length > 4 ){ //si el largo de la tarjeta es mayor a 4 se enmascara
          /*Repite el numero de la tarjeta enmascardo exepto los ultimos 4*/
          tarjetaEnmascarada = numeral.repeat(cardnumber.length-4) + cardnumber.slice(-4) 
      }
      return tarjetaEnmascarada;
  
    
 } 
}


export default validator;
