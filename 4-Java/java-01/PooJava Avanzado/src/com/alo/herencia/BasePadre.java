package com.alo.herencia;

public class BasePadre {

    private int a;
    private double b;
    private String c;

    public BasePadre(){


    }
    public void visualizarA(){
        System.out.println(" object h -> Soy un metodo de la clase BasePadre");

    }

    public void  visualizarABC(){
        System.out.println("objetc ho -> Soy un metodo de la visualizacion ABC");

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }














}
