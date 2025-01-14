import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
});

// Check if the model already exists before defining it
const Url = mongoose.models.UrlCollection || mongoose.model('UrlCollection', UrlSchema);

export default Url;
