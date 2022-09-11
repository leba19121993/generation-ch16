USE tienda;

SELECT * FROM clientes;

/*INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');*/


-- Inner Join
-- Explicita

SELECT * 
FROM clientes
INNER JOIN compra 
ON clientes.cliente_id = compra.cliente_id;


SELECT 
clientes.cliente_id AS 'Numero de cliente',
clientes.nombre AS nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Unión implicita

SELECT *
FROM clientes,compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN 

SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Right Join (muestra lo mismo como una inner join pero no tiene mayor diferencia por los valores)
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- MOstrar las direcciones de cada pais
USE sakila;

/* 
address - city_id/address

city * city_id /city / country_id  --> Tabla intermedia para mostrar el resultado

country - country_id / country
*/

SELECT 
address.address,
city.city,
city.country_id
FROM 
address
INNER JOIN city
ON  address.city_id = city.city_id;



SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id  
INNER JOIN address ON address.city_id = city.city_id;




















