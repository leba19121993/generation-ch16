package LlamadaSys;

import EjemplosResumenJava.Animal;
import MenuPrincipal.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EnlaceSys {

    public void enlazar(){

            Scanner sc = new Scanner(System.in);
            MenuOp menuOp = new MenuOp();
            menuOp.menu();
            System.out.print("Eliga una opción -> ");

            int op;

            do{
                op = sc.nextInt();
                switch (op) {
                    case 1:
                        Saludo s = new Saludo();
                        s.saludar();
                        System.out.println(s.saludar0());
                        break;
                    case 2:
                        Persona p = new Persona();
                        p.setNombre("Dora");
                        p.setEdad(28);
                        p.setNss(54090);
                        System.out.println("El valor de la variable de instancia p-nombre es -> " + p.getNombre());
                        System.out.println("El valor de la variable de instancia p-edad es -> " + p.getEdad());
                        System.out.println("El valor de la variable de instancia p-nss es -> " + p.getNss());
                        break;

                    case 3:
                        Fecha objF = new Fecha();
                        objF.setDia(25);
                        objF.setMes(8);
                        objF.setAño(2022);
                        System.out.println(objF.formaF());


                    case 4:
                        Animal miAnimal = new Animal("Willie", 2, "pug");

                        miAnimal.setEdad(3);

                        System.out.println("El nombre de miAnimal es " + miAnimal.getNombre() + " tiene "+miAnimal.getEdad()+" años y es de raza "+ miAnimal.getRaza());

                    default:
                        System.out.println(" <- Salir ->");
                }






            }while (op <= 4);
        }


    }

