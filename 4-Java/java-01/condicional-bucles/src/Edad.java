import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("Esta es la clase edad");

        //Determinar si una persona es mayor de edad
        //tener la edad - pedir al usuario
        //condicional para saber si es menor de 18

        //Javascript(let nombre = prompt("escribe tu nombre"
        System.out.println();
        Scanner escanner = new Scanner(System.in); //instanciar
        System.out.println("Escribe tu edad");
        int edad = escanner.nextInt();

        escanner.close();//Cuando ya no se necesiten leer mas datos
        //if else
        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }


        //Operador ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);




    }



}
