const express = require('express');
const fs = require('fs');

const app = express();

// const port = process.env.PORT;
const port = process.env.PORT || 3000;

if(!port) {
    throw new Error('The port number for the HTTP server is not specified under the environment variable PORT.')
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/video', (req, res) => {
    const videoPath = './videos/SampleVideo_1280x720_1mb.mp4';

    fs.stat(videoPath, (err, stats) => {

        if(err) {
            console.log('An error occurred');
            res.sendStatus(500);

            return;
        }

        res.writeHead(200, {
            'Content-Length': stats.size,
            'Content-Type': 'video/mp4'
        });

        fs.createReadStream(videoPath).pipe(res);
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})