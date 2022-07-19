import multer from 'multer';
import moment from 'moment';

const storage = multer.diskStorage({
  // destination: '../../data/images',
  destination: '../client/public/images/',
  filename: (req, file, cb) => {
    const date = moment().format('DDMMYYYY-HHmmss_SSS');
    // cb(null, `./data/images/${date}-${file.originalname}`);
    // cb(null, `${date}-${file.originalname}`);
    cb(null, `${date}-${file.originalname}`);
  }
});

export default multer({ storage: storage });
