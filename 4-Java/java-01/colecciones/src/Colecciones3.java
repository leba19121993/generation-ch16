import java.util.*;

public class Colecciones3 {
    public static <Objetc> void main(String[] args) {

        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String >();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2, "Esquite");

        System.out.println(comidas);

        //Otra forma de inicializar una lista
        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1,2,3,5,6,9,10,56,78,2656));
        System.out.println(numeros);

        System.out.println("---------------------------");
        System.out.println("Hashset");

        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MOnterrey");

        System.out.println(ciudades);

        //Otra forma de crear un HashSet

        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false, false, true));
        System.out.println(verdad);


        System.out.println("-------------------------------------------------");
        System.out.println("HashMap");

        //Nos permiten guardar pares de valores
        //llave : valor
        //HashMap<Llave, Valor>

        Map<Integer, String> alumnos = new HashMap<Integer, String>();
        alumnos.put(1, "Abel Lopez");
        alumnos.put(2, "Sofia Hernandez");
        alumnos.put(3, "Nelly Furtado");
        alumnos.put(4, "Roger Waters");
        alumnos.put(5, "Roger Waters");

        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());
        System.out.println(alumnos.keySet());
        System.out.println(alumnos.get(3));
        System.out.println("----------------------------");
        //System.out.println(alumnos.remove(1));
        //System.out.println(alumnos);

        System.out.println("------------------------------------");


        for(int i=0; i<alumnos.size(); i++){
            Object llaves = alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));
        }

        System.out.println("-----------------------");

        for (Integer llave : alumnos.keySet()){
            System.out.println(llave + " - " + alumnos.get(llave));
        }



















    }
}
