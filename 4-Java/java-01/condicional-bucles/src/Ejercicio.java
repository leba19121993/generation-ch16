/*
            Problema 1
            La salida tiene que ser la siguiente:
            *
            **
            ***
            ****
            *****

            Problema 2
            *****
            ****
            ***
            **
            *

            Problema 3
            Pedirle al usuario la cantidad de estrellitas y la direccion
        */




public class Ejercicio {
    public static void main(String[] args) {




        String valor1 = "";
        for (int i=0; i<5; i++){
            valor1 += "*";
            System.out.println(valor1);

        }

        for(int espacios = 0, asteriscos = 5; asteriscos>0; espacios++, asteriscos -= 1){

            for(int i=0; i < espacios; i++){
                System.out.print("");
            }

            for(int j=asteriscos; j > 0; j--){
                System.out.print("*");
            }
            System.out.println("");
        }






    }
}
