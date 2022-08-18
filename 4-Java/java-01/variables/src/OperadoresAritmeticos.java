import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5, j =4, suma = i + j;
        System.out.println("suma = " + i);

        System.out.println("i + j = " + (i + j));
        System.out.println("i + j = " + i + j);

        int resta = i - j;
        System.out.println("resta = " + resta);
        System.out.println("i - j = " + (i - j));

        int multi = i * j;
        System.out.println("multi = " + multi);
        System.out.println("i * j = " + (i * j));

        int div = i / j;
        System.out.println("div = " + div);
        System.out.println("i / j = " + (i / j));

        float div1 = (float)i / (float)j;
        System.out.println("div1 = " + div1);
        System.out.println("(float)i / (float)j = " + ((float)i / (float)j));


        int resto = i % j;
        System.out.println("resto = " + resto);
        resto = 8 % 5;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in);


        System.out.println("cual es tu edad");
        String dato = scanner.next();
        int edad = Integer.parseInt(dato);
        System.out.println("Tu edad es " + edad);

        System.out.println("cual es tu nombre");
        String nombre = scanner.next();
        System.out.println("Tu nombre es " + nombre);





    }








}
