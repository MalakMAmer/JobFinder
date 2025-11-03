// models/Job.ts
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  source: String,
  source_id: String,
  title: { type: String, index: true },
  company: { type: String, index: true },
  location: { type: String, index: true },
  description_text: String,
  apply_url: String,
  date_posted: Date,
  fetched_at: { type: Date, default: Date.now },
  fingerprint: { type: String, unique: true, index: true },
  raw: mongoose.Schema.Types.Mixed // raw source object for debugging
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
