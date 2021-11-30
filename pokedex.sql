create database pokedex;
use pokedex;
CREATE TABLE pokemon (
    id int  AUTO_INCREMENT,
    imagen varchar(500),
  names varchar(255),
  height int,
  category varchar(255),
  weights int,
 abilities varchar(255),
 types varchar(255),
 weaknesses varchar(255),
 PRIMARY KEY (id)
); 

INSERT INTO pokemon (imagen ,names, height, category, weights, abilities,types,weaknesses)
VALUES ('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Charmander', 1000, 'Lizard', 699.99, 'Blaze','Fire', 'Water'),
('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Charmander', 1000, 'Lizard', 699.99, 'Blaze','Fire', 'Water'),
('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Charmander', 1000, 'Lizard', 699.99, 'Blaze','Fire', 'Water'),
('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Charmander', 1000, 'Lizard', 699.99, 'Blaze','Fire', 'Water'),
('https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 'Charmander', 1000, 'Lizard', 699.99, 'Blaze','Fire', 'Water');



