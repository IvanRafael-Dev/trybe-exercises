-- Crie uma view chamada film_with_categories utilizando as tabelas category ,
-- film_category e film do banco de dados sakila . Essa view deve exibir o título do filme,
-- o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

USE sakila;

CREATE VIEW film_with_categories AS
    SELECT 
        f.title AS Title, fc.category_id CategoryID, c.name AS Categoria
    FROM
        film AS f
            INNER JOIN
        film_category AS fc ON f.film_id = fc.film_id
            INNER JOIN
        category AS c ON c.category_id = fc.category_id
    ORDER BY f.title;
    
    SELECT * FROM film_with_categories;