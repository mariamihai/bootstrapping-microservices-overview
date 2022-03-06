# Flix-Tube

## Run locally
```
npm install
node index.js
````

Test the service works correctly by checking in browser http://localhost:3000 or by using cURL with `curl http://localhost:3000`

## Production
```
npm install --only=production
npm start
```


# Endpoints
`/` - will return `Hello World!`

`/video` - will return a video read from the local filesystem and streamed to the browser.
Current implementation is verified with Chrome while other browsers might not work correctly at this time.