import mongoose from 'mongoose';

const { Schema } = mongoose;

// The database user schema
const userSchema = new Schema({
  nonce: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  username: {
    type: String
  }
}, { timestamps: true });

export const User = mongoose.model('users', userSchema);
