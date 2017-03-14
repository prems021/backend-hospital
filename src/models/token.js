import mongoose, { Schema } from 'mongoose';

const tokenSchema = new Schema({
    //token object id
  token_number: String, // like token number 70/20/04/2017
  created_at: { type: Date, default: Date.now },
  expires_at: { type: Date, default: Date.now },
  hospital : { type: Object}, //hospital_id
  department : {type: Object}, //department_id
  



});

export const Token = mongoose.model('token', tokenSchema);
