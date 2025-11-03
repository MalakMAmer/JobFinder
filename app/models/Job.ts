import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  source: String,
  source_id: String,
  title: String,
  company: String,
  location: String,
  date_posted: Date,
  apply_url: String,
  description_text: String,
  description_html: String,
  fingerprint: String,
  fetched_at: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
