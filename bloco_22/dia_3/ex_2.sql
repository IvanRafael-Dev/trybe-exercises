-- Crie uma view chamada film_info utilizando as tabelas actor , 
-- film_actor e film do banco de dados sakila . Sua view deve exibir 
-- o actor_id , o nome completo do ator ou da atriz em uma coluna com o
--  ALIAS actor e o título dos filmes. Os resultados devem ser ordenados 
--  pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW film_info AS
    SELECT 
        fa.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS Nome,
        f.title AS Filme,
        f.film_id
    FROM
        film_actor AS fa
            INNER JOIN
        actor AS a ON a.actor_id = fa.actor_id
            INNER JOIN
        film AS f ON f.film_id = fa.film_id
    ORDER BY Nome;
