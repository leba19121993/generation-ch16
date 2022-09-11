USE sakila;

-- Seleccionar las direcciones de una ciudad
SELECT * FROM address;

SELECT address, district IN ('California') ORDER BY address;

SELECT   *
FROM     address
INNER JOIN city ON city ORDER BY city ASC;

-- SELECT * FROM country;

-- SELECT * FROM address;

SELECT * FROM city;

-- Las direcciones de cada pais

SELECT address, district FROM address ORDER BY district ASC;



-- El titulo de las peliculas con el idioma que tienen
SELECT title, name FROM film, language; 

-- El monto 
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;


-- cuantas peliculas estan hechas en un mismo idioma? 1000 peliculas
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;
