-- SHOW databases; comentario de una linea

/* BLOQUE DE COMENTARIOS

*/

CREATE DATABASE Tienda;

USE tienda;

DROP DATABASE tienda; 

CREATE TABLE clientes (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);


INSERT INTO clientes(nombre, apellido, telefono, direccion)
VALUES ('Abel','Lopez','5583317593','Cipres'),
('Juan','Hernandez','5566487593','Cipres'),
('Santos','Benitez','5968517593','Cipres'),
('Guillermo','Del Toro','5987457593','Cipres')
;

SELECT * FROM clientes;

DROP TABLE clientes;

DROP TABLE compra;
















