import mongoose, { Schema } from 'mongoose';

const department_detailsSchema = new Schema({
  department_name: String,
  doctors_count: { type: Number, required: true },
 // doctors:{type : Object }, //array of doctors
  //reserved: { type: String, required: true },
  opening_at: { type: Date, default: Date.now },
  closing_at: { type: Date, default: Date.now },
  land_phone: {type: Number },
  tokens_per_day : {type: Number}
});

export const Departments = mongoose.model('department_details', department_detailsSchema);
