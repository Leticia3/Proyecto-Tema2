
//Reemplazar. Esto es para eliminar los comentarios 
   function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
  }
  alert(stripComments("public class pila { int n; /* TAMAÑO DE LA PILA O NUMERO DE ELEMETOS */ int tope; boolean estadao; /* TRUE = PILA ESTA VACIA */ int [] datos;  public pila(int tam) /* PEDIMOS EL TAMAÑO DE LA PILA  PARA CREARLA */ {this.n=tam; datos = new int [tam]; tope=-1; /* APUNTA A LA PRIMERA POSICION */ } public void apilar (int valor) /* SE PIDE AL VALOR PARA APILAR */ { tope++; datos[tope]= valor; }  public int Desapilar(){int valor = datos[tope]; datos[tope]=0; tope--; return valor; } "));
  
//Buscar. Encontrar expresiones booleanas sencillas del tipo: variable op valor Ejemplo: x >= 10
  var codigo = require('fs');

  codigo.readFile('programa.js', 'utf8', function(err, data){
    if(err) {
          return console.log("Error");
    }

    let newcodigo = data.match(/[a-z]+[<|>|=]+[1-9]/g);
    alert(newcodigo);

//Buscar. Encontrar expresiones matemáticas sencillas del tipo: variable = valor op valor Ejemplo: suma = 2 + c 
let newcodigo2 = data.match(/[suma,resta,multiplicacion,division]+[=]+[-,+,/,*]+[1-9]+[a-z] /g);
alert(newcodigo2);

//Encriptar. Las cadenas de texto
let encriptado = data.replace(/[a-z]{5,15}/g, "*");
alert(encriptado);

})