public class Arreglos {
    public static void main(String[] args) {

        //Arreglos
        //No se pueden mezclar tipos de datos

        int[] numeroAleatorios = {1,2,3,4,5,6};
        String[] valores = {"Hola","Adios","etc"};

        //byte otrosNUmeros[] = {1,2,3};

        //Los arreglos tienen un tamanio definido
        char[] caracteres = new char[4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';


        valores[2] = "valor cambiado";

        System.out.println(valores[0]);
        System.out.println(numeroAleatorios.length);
        System.out.println(caracteres);
        System.out.println(valores[2]);

        //for Each

        for(String elemento : valores){
            System.out.println(elemento);

        }
        for(int numero : numeroAleatorios){
            System.out.println(numero);
        }

    }
}
