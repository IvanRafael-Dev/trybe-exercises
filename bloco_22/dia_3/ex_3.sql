-- Crie uma view chamada address_info que faça uso
-- das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id , o address , o district
-- , o city_id e a city . Os resultados devem ser ordenados
-- pelo nomes das cidades. Use a imagem abaixo como referência.

SELECT * FROM address;
SELECT * FROM city;
CREATE VIEW address_info AS
    SELECT 
        a.address_id, a.address, a.district, a.city_id, c.city
    FROM
        address AS a
            INNER JOIN
        city AS c ON c.city_id = a.city_id
    ORDER BY city;