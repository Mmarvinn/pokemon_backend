import Pokemon from '../model/testPostModel.mjs';

export const getTestDataHandler = async (req, res) => {
  try {
    console.log('getTestData handler started');

    const pokemons = await Pokemon.find();
    if (!pokemons) {
      return res.status(404).json({ message: 'Pokemons not found' });
    }

    res.json(pokemons);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
