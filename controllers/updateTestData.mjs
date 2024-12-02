import Pokemon from '../model/testPostModel.mjs';

export const updateTestDataHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const pokemonExist = await Pokemon.findOne({ _id: id });

    if (!pokemonExist) {
      res.status(404).json({ message: 'Can`t find this pokemon' });
    }

    const updatedPokemon = await Pokemon.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedPokemon);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
