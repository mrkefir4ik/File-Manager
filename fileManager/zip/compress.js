import fs from 'fs';
import zlib from 'zlib';

export const compressFile = (original, dest) => {
    const handleError = (error) => console.log('Operation failed: ', error);
    const readStream = fs.createReadStream(original);
    const writeStream = fs.createWriteStream(dest);
    const brotliCompress = zlib.createBrotliCompress();
    readStream.on('error', handleError).pipe(brotliCompress).on('error', handleError).pipe(writeStream).on('error', handleError);
}