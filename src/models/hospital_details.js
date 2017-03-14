import mongoose, { Schema } from 'mongoose';

const hospital_detailsSchema = new Schema({
  hospital_name: String,
  district: { type: String, required: true },
  taluk: { type: String, required: true },
  pincode:{type: Number },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  land_phone: {type: Number },
  departments : [depts]
});

export const H_det = mongoose.model('hospital_details', hospital_detailsSchema);
