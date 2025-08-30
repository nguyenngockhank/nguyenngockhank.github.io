# Serve a big video file

## Use HLS

Use ffmpeg to convert mp4 to hls (introduced by Apple in 2009)

```
ffmpeg -i input.mp4 \
  -codec: copy \
  -start_number 0 \
  -hls_time 10 \
  -hls_list_size 0 \
  -f hls output.m3u8
```

m3u8 stands for **M3U + UTF-8**
- M3U is a file format for multimedia playlists. Originally used for **MP3** playlists.
- M3U8 is the **UTF-8** encoded version of M3U.


## Partial Video Playback via Byte-Range Requests

You don’t need HLS to support partial content. Just:

Serve video using a proper HTTP server (like Express, Nginx)

Handle Range header in your backend


```ts

app.get('/video', (req, res) => {
  const path = 'video.mp4';
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`, // format byte ranges
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});
```