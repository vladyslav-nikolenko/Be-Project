import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  approved: { type: Boolean, default: true },
  user: { type: String, required: true }
});

export default mongoose.model('articles', articleSchema);
