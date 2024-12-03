import fs from 'fs/promises';
import path from 'path';

export const getPokemonsHandler = async (req, res) => {
  try {
    const filePath = path.resolve('db', 'pokedex.json');
    const pokemonsData = await fs.readFile(filePath, 'utf-8');
    const pokemons = await JSON.parse(pokemonsData);

    res.json(pokemons.slice(0, 100));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
