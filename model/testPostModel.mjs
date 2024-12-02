import mongoose from 'mongoose';

export const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: false,
  },
});

export default mongoose.model('pokemons', pokemonSchema);
