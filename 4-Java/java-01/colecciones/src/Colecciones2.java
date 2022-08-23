import java.util.HashSet;
import java.util.Set;

public class Colecciones2 {
    public static void main(String[] args) {

        //SET
        //Hashset
        //no gurdan los valores ordenados que se van agregando

        Set<String> miSet = new HashSet<>();

        miSet.add("JUan");
        miSet.add("Abel");
        miSet.add("Luis");
        miSet.add("Jelipe");
        miSet.add("Jelipe");
        miSet.add("Jelipe");
        miSet.add("Jelipe");

        miSet.remove("Jelipe");

        System.out.println(miSet);
        System.out.println(miSet.size());
        System.out.println(miSet.contains("Juan"));

        for(String nombre : miSet){
            System.out.println(nombre);
        }


    }
}
