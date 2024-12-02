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
});

export default mongoose.model('users', userSchema);
