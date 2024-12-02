import Pokemon from '../model/testPostModel.mjs';

export const deleteTestDataHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const pokemonExist = await Pokemon.findOne({ _id: id });

    if (!pokemonExist) {
      res.status(404).json({ message: 'Can`t find this pokemon' });
    }

    const deletedPokemon = await Pokemon.findByIdAndDelete(id);

    res
      .status(201)
      .json({
        message: 'this pokemon was successfully deleted',
        pokemon: deletedPokemon,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
