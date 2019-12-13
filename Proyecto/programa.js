public class pila {
    int n;// TAMAÑO DE LA PILA O NUMERO DE ELEMETOS \
    int tope; 
    int a,c,b;
    
    if (x>=5) {
        boolean estado;//TRUE = PILA ESTA VACIA \
        int [] datos;
        resta=8-c;
    }
    
    public pila(int tam) { //PEDIMOS EL TAMAÑO DE LA PILA  PARA CREARLA\
        this.n=tam;
        suma=6+a;
        datos = new int [tam];
        tope=-1;//APUNTA A LA PRIMERA POSICION\
    }
    
    public void apilar (int valor) { //SE PIDE AL VALOR PARA APILAR\
        tope++;
        datos[tope]= valor;
    }
        
    public int desapilar() {
        int valor = datos[tope];
        datos[tope]=0;
        tope--;
        return valor;
    }
}