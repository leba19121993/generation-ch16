import java.util.HashMap;
import java.util.Scanner;
import java.util.Set;


public class Diccionario {


    public static void main(String[] args) {

        HashMap<String, String> diccionario = new HashMap<String,String>();
        Scanner sc = new Scanner (System.in);

        diccionario.put("enero", "january");
        diccionario.put("coche", "car");
        diccionario.put("Marzo", "march");
        diccionario.put("primavera" ,"spring");
        diccionario.put("verano" ,"summer");
        diccionario.put("otoño" ,"autumn");
        diccionario.put("novio" ,"boyfriend");
        diccionario.put("novia" ,"girfriend");
        diccionario.put("familia", "family");
        diccionario.put("tía" ,"aunt");
        diccionario.put("hija", "daughter");
        diccionario.put("esposa", "wife");
        diccionario.put("padre" , "father");
        diccionario.put("agradable","nice");
        diccionario.put("nuevo","new");
        diccionario.put("oscuro","dark");
        diccionario.put("corto","short");
        diccionario.put("gordo","fat");
        diccionario.put("pobre","poor");
        diccionario.put("viejo","old");

        System.out.println("Escoje de esta lista, una palabra para traducir:");
        for(int i=5; i<10; i++){
            Object llaves = diccionario.keySet().toArray()[i];
            System.out.println(diccionario.get(llaves));
        }

        String palabras = sc.next();




        if (diccionario.containsKey(palabras)) {

            System.out.print("La palabra " + palabras + " en español es: ");
            System.out.println(diccionario.get(palabras)+".");

        } else {
            System.out.print("Esta palabra no existe en el diccionario.");
        }
    }

}