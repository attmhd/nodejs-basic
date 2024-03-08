// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs')

// const data = fs.readFileSync('./file-system/sampel.txt', 'utf-8')

// console.log(data)

const readableStream = fs.createReadStream('./file-system/sampel.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
        console.log(error)
    }
});

readableStream.on('end', () => {
    console.log('Done');
});