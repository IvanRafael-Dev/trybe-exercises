-- Escreva uma query SQL para alterar na tabela localtions
-- o nome da coluna street_address para address , mantendo 
-- o mesmo tipo e tamanho de dados.

USE hr;

SELECT * FROM locations;
DESCRIBE locations;
ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

-- Escreva uma query SQL para alterar o nome da coluna 
-- region_name para region , mantendo o mesmo tipo e tamanho de dados.

SELECT * from regions;
DESCRIBE regions;
ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25) UNIQUE;

-- Escreva uma query SQL para alterar o nome da coluna country_name
--  para country , mantendo o mesmo tipo e tamanho de dados.

SELECT * FROM countries;
DESCRIBE countries;
ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);
