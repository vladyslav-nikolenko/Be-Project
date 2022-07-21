import Minio from 'minio';
import moment from 'moment';
import fs from 'fs';
import path, { resolve } from 'path';

// const Minio = require('minio')
// const { resolve } = require('path')

const accessKey = process.env.ACCESS_KEY;
const secretKey = process.env.SECRET_KEY;

let client = new Minio.Client({
  endPoint: 'minio.tools.godeltech.com',
  port: 80,
  useSSL: false,
  accessKey,
  secretKey
})
// var fileStream = fs.createReadStream(file)

const metaData = {
  'Content-Type': 'image/x-png',
}
const filename = (req, file, cb) => {
  const date = moment().format('DDMMYYYY-HHmmss_SSS');
  cb(null, `${date}-${file.originalname}`);
}
// client.fPutObject('news-images', filename, resolve(__dirname, `assets/${filename}`), metaData, function (err, etag) {
//   if (err) {
//     throw err;
//   }
//   console.log(etag)
// });

var fileStat = fs.stat(file, function (err, stats) {
  if (err) { return console.log(err) } client.putObject('news-images', 'news1.png', fileStream, stats.size, function (err, etag) {
    if (err) {
      throw err;
    }
    console.log(etag)
  });
})

export default client;

// import multer from 'multer';
// import moment from 'moment';

// const storage = multer.diskStorage({
//   // destination: '../../data/images',
//   destination: '../images/',
//   filename: (req, file, cb) => {
//     const date = moment().format('DDMMYYYY-HHmmss_SSS');
//     // cb(null, `./data/images/${date}-${file.originalname}`);
//     // cb(null, `${date}-${file.originalname}`);
//     cb(null, `${date}-${file.originalname}`);
//   }
// });

// export default multer({ storage: storage });
