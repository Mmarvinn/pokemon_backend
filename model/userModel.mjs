import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  fightLogs: {
    type: [
      {
        date: { type: Date, required: true },
        yourPokemon: { type: String, required: true },
        opponentPokemon: { type: String, required: true },
        logs: { type: [String], required: true },
      },
    ],
    required: false,
    default: [],
  },
});

export default mongoose.model('users', userSchema);
