-- Crear base de datos llamada Generation

CREATE DATABASE generation;


USE generation;

-- Crear la  tabla de la imagen usando SQL
CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
compañeros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;

-- Agregar 5 filas con valores inventados (La llave primaria debe ser autogenerada)
INSERT INTO cohorte_16(nombre, apellido, compañeros, direccion,proyecto)
VALUES ('Abel','Lopez','25','Cipres','Ecomerce'),
('Juan','Hernandez','30','Av. Cedros','Ecomerce'),
('Santos','Benitez','18','Col. Del Valle', 'Red Social'),
('Guillermo','Del Toro','10','Cenizos','Red Social'),
('Santiago','Armendariz','23','Doctores','Ecomerce')
;

-- Eliminar la fila con el id #3 

DELETE FROM cohorte_16
WHERE alumno_id = 3;

-- Cambiar el nombre de el alumno con el id 5
UPDATE cohorte_16
SET nombre = 'Hernan'
WHERE alumno_id = 5;

-- Seleccionar y mostrar sólo los valores de las columnas: nombre y apellido
-- Ordenarlas por apellido en orden ascendente
SELECT nombre, apellido FROM cohorte_16
ORDER BY apellido ASC;


DROP DATABASE generation;
