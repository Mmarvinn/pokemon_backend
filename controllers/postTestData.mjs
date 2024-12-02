import Pokemon from '../model/testPostModel.mjs';

export const postTestDataHandler = async (req, res) => {
  try {
    console.log('postTestDataHandler');

    const pokemonData = new Pokemon(req.body);

    const { name } = pokemonData;
    const pokemonExist = await Pokemon.findOne({ name });

    if (pokemonExist) {
      return res.status(400).json({ message: 'this Pokemon already exist.' });
    }

    const savedPokemon = await pokemonData.save();

    res.json(savedPokemon);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
