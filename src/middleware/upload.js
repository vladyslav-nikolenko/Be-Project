import Minio from 'minio';
import multer from 'multer';
import moment from 'moment';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const accessKey = 'news-mastery';
const secretKey = '6#m08g2EqALc';

const client = new Minio.Client({
  endPoint: 'minio.tools.godeltech.com',
  port: 80,
  useSSL: false,
  accessKey,
  secretKey
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const fileStat = fileNames => {
  const metaData = {
    'Content-Type': 'image/x-png'
  };

  fileNames.map(fileName => {
    client.fPutObject(
      'news-images',
      fileName,
      resolve(__dirname, `../../images/${fileName}`),
      metaData,
      function (err, etag) {
        if (err) {
          throw err;
        }
        console.log(etag);
      }
    );
  });
};

const storage = multer.diskStorage({
  destination: './images/',
  filename: (req, file, cb) => {
    const date = moment().format('DDMMYYYY-HHmmss_SSS');

    cb(null, `${date}-${file.originalname}`);
  }
});

export const uploadMulter = multer({ storage: storage });
