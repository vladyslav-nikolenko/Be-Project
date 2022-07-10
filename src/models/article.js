import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  category: {
    label: String,
    url: String
  },
  title: String,
  content: String,
  image: String,
  type: String,
  thumbnail: String
});

export default mongoose.model('ArticleData', articleSchema);
