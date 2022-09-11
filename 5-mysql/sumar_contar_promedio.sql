USE sakila;

SELECT * FROM payment;
-- SUM(), AVG(),    COUNT()
-- suma   promedia  cuenta
SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una columna

SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id =1;

-- Cantidad de clientes distintos

SELECT COUNT(DISTINCT customer_id) FROM payment;

/*SUM
*/

SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;



-- ORDER BY = ordena segun la columna o fun cion que le indiquemos ASC/DESC
-- GROUP BY = Agrupa solo su se usa con SUM, AVG, y COUNT, pero omite los valores repetidos
-- ¿Cual cliente realizó mas ventas? 148 -3 /318-12
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- Cual cliente gasto mas? 526 - 221.55 / 248 - 50.85

SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total ASC;

-- AVG() - regresa el promedio

SELECT AVG(amount) AS promedio FROM payment;

-- ¿Cual es cliente que gasto mas en promedio / gasto menos? 187 - 5.7 / 252 - 2.9

SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) ASC;
-- Con alias
SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promediocliente DESC;




