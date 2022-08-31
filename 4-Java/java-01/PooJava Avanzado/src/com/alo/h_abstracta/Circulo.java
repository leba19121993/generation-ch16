package com.alo.h_abstracta;

import com.alo.h_abstracta.FigurasGeometricas;

public class Circulo extends FigurasGeometricas {

    private float radio;
    



    @Override
    public float area(){
        return (float) (Math.PI*Math.pow(radio, 2));
    }



    public Circulo(float radio) {
        super("Circulo");
        this.radio = radio;
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }
}
