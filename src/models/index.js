import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
 //  account: { type: String, required: true, unique: true },
  password: { type: String, required: true },
 // image: String,
 is_admin : { type: Boolean ,default:false},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const User = mongoose.model('user', userSchema);
