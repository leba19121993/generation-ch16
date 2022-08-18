public class EjemploVariables {
    public static void main(String[] args) {

        //Declaración de variables String y caracter:
        String nombre = "Hugo";
        String saludo = "Hola esto es un ejemplo de variables";
        char espacio = '\u0040';
        char caracter ='a';

        System.out.println("espacio =" + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("Char corresponde en bits: " +Character.SIZE);
        System.out.println("Char valor maximo: " +Character.MAX_VALUE);
        System.out.println("Char valor minimo: " +Character.MIN_VALUE);

        //Declaración de variables numericas:
        int numeroEntero = 2;

        System.out.println("numeroEntero =" + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " +Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        //Declaración de variables float

        float numeroFloat = 1.5e-10f;
        System.out.println("numeroFloat =" + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        //Declaración de variables double
        double numeroDouble = 3.444567E39;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE);
        System.out.println("double valor minimo: " + Double.MIN_VALUE);

        //Declaración de variables boleano


        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean);

        //Declaración de variables short

        short valorShort = 0;
        System.out.println("short corresponde en byte: " + Short.BYTES);
        System.out.println("short corresponde en bits: " + Short.SIZE);
        System.out.println("short valor maximo: " + Short.MAX_VALUE);
        System.out.println("short valor minimo: " + Short.MIN_VALUE);

        //Declaración de variables byte

        byte valorByte = 2;
        System.out.println("byte corresponde en byte: " + Byte.BYTES);
        System.out.println("byte corresponde en bits: " + Byte.SIZE);
        System.out.println("byte valor maximo: " + Byte.MAX_VALUE);
        System.out.println("byte valor minimo: " + Byte.MIN_VALUE);

        //Declaración de variables long

        long valorLong = 8;
        System.out.println("long corresponde en byte: " + Long.BYTES);
        System.out.println("long corresponde en bits: " + Long.SIZE);
        System.out.println("long valor maximo: " + Long.MAX_VALUE);
        System.out.println("long valor minimo: " + Long.MIN_VALUE);





    }
}