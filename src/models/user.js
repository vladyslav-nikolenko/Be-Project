import mongoose from '../configs/connection.js'; // import Schema & model
const { Schema, model } = mongoose;

// User Schema
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: ['guest', 'admin'],
    default: 'guest'
  }
});

// User model
const User = model('User', UserSchema);

export default User;
