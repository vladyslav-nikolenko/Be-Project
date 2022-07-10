import 'dotenv/config'; // load .env variables
import mongoose from 'mongoose'; //import fresh mongoose object

//DESTRUCTURE ENV VARIABLES
const { DATABASE_URL } = process.env;

// CONNECT TO MONGO
mongoose.connect = mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// CONNECTION EVENTS
mongoose.connection
  .on('open', () => console.log('DATABASE STATE', 'Connection Open'))
  .on('close', () => console.log('DATABASE STATE', 'Connection Close'))
  .on('error', error => console.log('DATABASE STATE', error));

// EXPORT CONNECTION
export default mongoose;
