CREATE FULLTEXT INDEX category_name_fulltext ON category(name); 
DROP INDEX category_name_fulltext ON category;
DESCRIBE category;


SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action'); -- 0.35 cost

SELECT *
FROM sakila.category
WHERE name LIKE '%action%'; -- 1.85 cost