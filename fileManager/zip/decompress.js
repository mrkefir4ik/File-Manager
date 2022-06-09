import fs from 'fs';
import zlib from 'zlib';

export const decompressFile = (original, dest) => {
    const handleError = (error) => console.log('Operation failed: ', error);
    const readStream = fs.createReadStream(original);
    const writeStream = fs.createWriteStream(dest);
    const brotliDecompress = zlib.createBrotliDecompress();
    readStream.on('error', handleError).pipe(brotliDecompress).on('error', handleError).pipe(writeStream).on('error', handleError);
}