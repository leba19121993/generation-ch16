package MiEjemploJava;

import MiEjemploJava.Persona;

public class EjemploPersona {
    public static void main(String[] args) {

        Persona p = new Persona();
        p.setNombre("Dora");
        p.setEdad(28);
        p.setNss(54090);
        System.out.println("El valor de la variable de instancia p-nombre es -> " + p.getNombre());
        System.out.println("El valor de la variable de instancia p-edad es -> " + p.getEdad());
        System.out.println("El valor de la variable de instancia p-nss es -> " + p.getNss());

    }
}
