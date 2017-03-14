import mongoose, { Schema } from 'mongoose';

const doctorSchema = new Schema({
  doctor_name: String,
  department: {  department_id },
  is_clinic: { type: Boolean, required: true },
  qualifications: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  personal_contact : {type: Number}
});

export const Doctor = mongoose.model('doctor', doctorSchema);
