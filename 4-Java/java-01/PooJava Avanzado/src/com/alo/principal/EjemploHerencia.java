package com.alo.principal;

import com.alo.herencia.BasePadre;
import com.alo.herencia.Hija;
import com.alo.herencia.Hijo;

public class EjemploHerencia {

    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();

        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(2578);

        System.out.println("Atributo de Clase BasePadre -> "+h.getA());
    }
}
