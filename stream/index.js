    /**
     * TODO:
     * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
     * menggunakan teknik readable stream dan writable stream.
     */

    const fs = require('fs');
    const path = require('path');

    const input = path.resolve(__dirname, 'input.txt')

    const readableStream = fs.createReadStream(input, {
        highWaterMark: 15
    });

    const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))


    readableStream.on('readable', () => {
        try {
            writeableStream.write(`[${readableStream.read()}]`)
        } catch (error) {
            // catch the error when the chunk cannot be read.
            console.log("error")
        }
    });

    readableStream.on('end', () => {
        writeableStream.end()
    });