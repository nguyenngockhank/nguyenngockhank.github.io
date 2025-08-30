# ffmpeg

## Install

```
brew install ffmpeg
```

Use on aws with [ffmpeg-lambda-layer](https://serverlessrepo.aws.amazon.com/applications/us-east-1/145266761615/ffmpeg-lambda-layer)


## Split mp3 to parts

```
ffmpeg -i thiendinh.mp3 -ss 00:00:00 -t 15:04:00 part1.mp3
ffmpeg -i thiendinh.mp3 -ss 15:04:00 -t 15:04:00 part2.mp3
ffmpeg -i thiendinh.mp3 -ss 30:08:00 -t 15:04:00 part3.mp3
ffmpeg -i thiendinh.mp3 -ss 45:12:00 -t 15:04:00 part4.mp3
ffmpeg -i thiendinh.mp3 -ss 60:16:00           part5.mp3
```

## Merge mp3 files

Prepare `file_list.txt`

```
file 'part1.mp3'
file 'part2.mp3'
file 'part3.mp3'
file 'part4.mp3'
file 'part5.mp3'
```

Run Command: 
```
ffmpeg -f concat -safe 0 -i file_list.txt -c copy output.mp3
```

## Convert mp4 into hls

```
ffmpeg -i input.mp4 \
  -codec: copy \
  -start_number 0 \
  -hls_time 10 \
  -hls_list_size 0 \
  -f hls output.m3u8
```
- `-codec: copy`	No re-encoding, faster  
- `-hls_time 10`	Segment length = 10 seconds
- `-f hls`	Output format is HLS
- `output.m3u8`	Master playlist file

**Re-encode for Compatibility (Recommended for Web)**

```
ffmpeg -i input.mp4 \
  -c:v libx264 -c:a aac \
  -preset fast -crf 20 \
  -hls_time 10 \
  -hls_list_size 0 \
  -f hls output.m3u8
```

- Use this if playback fails or audio is missing
- **libx264** + **aac** is widely supported by browsers

## Convert Remote HLS URL to MP4

```
ffmpeg -i "https://example.com/stream/playlist.m3u8" -c copy output.mp4
```


ffmpeg -i https://edge-hls.sacdnssedge.com/hls/151494296/master/151494296_480p.m3u8 -c copy output.mp4

## Extract a Single Frame at Specific Time

```
ffmpeg -ss 00:01:23 -i input.mp4 -frames:v 1 output.jpg
```

- `-ss 00:01:23`	Seek to 1 minute 23 seconds
- `-frames:v 1`	Output only 1 video frame

## Generate Thumbnails

### Generate Thumbnails Every 10 Seconds

```
ffmpeg -i input.mp4 -vf fps=1/10 thumb_%03d.jpg
```

### Generate a Single Preview Tile Image

```
ffmpeg -i input.mp4 -vf "select=not(mod(n\,100)),scale=320:-1,tile=3x3" -frames:v 1 preview.jpg
```


###  Full Example for Filmstrip (Wide format)

ffmpeg -i input.mp4 -vf "fps=1/30,scale=320:-1,tile=5x1" -frames:v 1 filmstrip.jpg

## Adjust Speed

### Double speed

```
ffmpeg -i input.mp3 -filter:a "atempo=2.0" output_fast.mp3
```

- `-filter:a`	Apply filter to audio stream
- `atempo=2.0`	Playback speed = 2x (audio pitch stays normal)

### For Speed > 2× (e.g. 4x)

FFmpeg limits `atempo` to max 2.0 per filter, so you must chain filters:

```
ffmpeg -i input.mp3 -filter:a "atempo=2.0,atempo=2.0" output_4x.mp3
```

### To Slow Down Instead (e.g. 0.5x)
```
ffmpeg -i input.mp3 -filter:a "atempo=0.5" output_slow.mp3
```


