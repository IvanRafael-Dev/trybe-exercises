-- Crie uma view chamada movies_languages ,
-- usando as tabelas film e language do banco
-- de dados sakila . Sua view deve exibir o títul
--  do filme , o id do idioma e o idioma do filme ,
--  como na imagem a seguir.

SELECT * FROM language;
SELECT * FROM film;

CREATE VIEW movie_languages AS
    SELECT 
        f.title AS Title, f.language_id, l.name AS Idioma
    FROM
        film AS f
            INNER JOIN
        language AS l ON f.language_id = l.language_id
    ORDER BY language_id;