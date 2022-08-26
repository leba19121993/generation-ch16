package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;  //Declarar el objeto
        objSaludo = new Saludo();  //Crear el objeto con new
        objSaludo.saludar(); //llamado al metodo

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto: -> "+objSaludo0.saludar0());
         objSaludo.textoS = "Hola";

        System.out.println("objSaludo = " + objSaludo);

        objSaludo0.a = 4;
        System.out.println("objSaludo0 = " + objSaludo0);

    }
}


//Declaracio
//Contruccion
//Llamada











