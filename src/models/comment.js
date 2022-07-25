import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
  approved: { type: Boolean, default: false },
  text: { type: String, required: true },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'articles',
    required: true
  },
});

export default mongoose.model('CommentData', commentSchema);
