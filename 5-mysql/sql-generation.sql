-- Crear base de datos llamada Generation

CREATE DATABASE generation;


USE generation;

-- Crear la  tabla de la imagen usando SQL
CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;

-- Agregar 5 filas con valores inventados (La llave primaria debe ser autogenerada)
INSERT INTO cohorte_16(nombre, apellido, companieros, direccion,proyecto)
VALUES ('Abel','Lopez',7,'Cipres','Ecomerce'),
('Juan','Hernandez',8,'Av. Cedros','Java'),
('Santos','Benitez',8,'Col. Del Valle', 'Red Social'),
('Guillermo','Del Toro',9,'Cenizos','Red Social'),
('Santiago','Armendariz',6,'Doctores','Ecomerce'
);
SELECT * FROM cohorte_16;
-- Eliminar la fila con el id #3 

DELETE FROM cohorte_16
WHERE alumno_id = 3;

-- Cambiar el nombre de el alumno con el id 5
UPDATE cohorte_16
SET nombre = 'Hernan',
apellido = 'Solis'
WHERE alumno_id = 5;

-- Seleccionar y mostrar sólo los valores de las columnas: nombre y apellido
-- Ordenarlas por apellido en orden ascendente
SELECT nombre, apellido,companieros FROM cohorte_16 
ORDER BY apellido DESC; /*  ASC- DESC*/ 


DROP DATABASE generation;
