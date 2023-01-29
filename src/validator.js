/*Se hizo la constante validador que contiene los metodos 
de enmascarar y validar el numero de tarjeta*/
const validator={
  isvalid :function(){
    var back= false;
  const valid  =  document.getElementById('cardnumber').value
  var arr=valid.split('');
  //invierte el array
   var arrInvertido=arr.reverse();
   console.log('este es el reverso: '+arrInvertido);
  //Inicializo las variables que luego utilizaré
   var prod=0;
   var sum=0;
  //Recorro mi arreglo posición a posición para realizar el algoritmo de Luhn
   for(var i=0; i<arr.length; i++){
     //Determino si una posición es par
       if(i%2===1){
         //Asigno a prod el valor del número en la posición i multiplicada por dos
          var prod=arr[i]*2;
          console.log(prod)
         //Si el prod es menor que 10 entra y se asigna ese valor en reemplazo de el elemento que esta en la posicion i del arreglo
           if(prod<10){
               arr[i]=prod;
           }else{
                // si no se cumplió la condición anterior entonces prod>=10 por lo tanto realizo la operación de acuerdo al
               // algoritmo de luhn, que en este caso es sumar las cifras del prod
               var resul=Math.floor(prod/10)+(prod%10);
               // Asigno el valor de mi resul al elemento en la posicion i del array
               arr[i]=resul;
           }
       }
       else{
         //si la posicion es impar solo lo mulplico por 1 para convertirlo a tipo de dato numerico y escribo el mismo numero
         arr[i]=arr[i]*1;
       }
   }
   //muestro mi nuevo arreglo
   console.log(arr);
  //sumo cada elemento del arreglo actual y lo almaceno en sum
   for(i=0; i<arr.length; i++){
     sum=sum+arr[i];
   }
   //muestro mi suma total
   console.log(sum);
   //Pregunta si la suma del arreglo actual es divisible entre 10
   if(sum%10===0){
      //Si es divisible muestra que es un  tarjeta válida.
      back=true;
       }
//Retorna el mensaje que esta almacenado en msg
return back;

  },

  
  maskify :function() {
      var cardnumber=document.getElementById('cardnumber').value
      var numeral = "#"; //se define el simbolo con q se enmascara los digitos de la tarjeta
      var tarjetaEnmascarada = cardnumber.slice(-4) //Se obtine los ultimos 4 digitos de la tarjeta
      if (cardnumber.length > 4 ){ //si el largo de la tarjeta es mayor a 4 se enmascara
          /*Repite el numero de la tarjeta enmascardo exepto los ultimos 4*/
          tarjetaEnmascarada = numeral.repeat(cardnumber.length-4) + cardnumber.slice(-4) 
          console.log(tarjetaEnmascarada );
      }
      return tarjetaEnmascarada;
        
 } 
}



export default validator;
