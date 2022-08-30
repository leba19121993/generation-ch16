package com.alo.principal;

import com.alo.herencia.BasePadre;
import com.alo.herencia.Hija;
import com.alo.herencia.Hijo;

import java.util.ArrayList;

public class EjemploHerencia {

    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.setA(14458);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2578);
        Object miObj = new BasePadre();



        System.out.println("Atributo de Clase BasePadre -> "+objB.getA());
        System.out.println("Atributo de Clase Hijo -> " + ho.getA());
    }
}
