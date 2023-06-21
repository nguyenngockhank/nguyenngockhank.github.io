# Youtube tricks

## Share a YouTube Video at a Specific Start Time

Add param `t` . E.g: 
```
https://youtu.be/dQw4w9WgXcQ?t=42s
https://youtu.be/dQw4w9WgXcQ?t=1h6m10s
```

## hare YouTube Videos With Start And End Times

Add param `start` and `end` . E.g: 

```
https://www.youtube.com/embed/e5bALLcEygc?start=15&end=25
```

Only works for seconds

## Get video thumbnail

Each YouTube video has four generated images. They are predictably formatted as follows:

```
https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
https://img.youtube.com/vi/<insert-youtube-video-id-here>/1.jpg
https://img.youtube.com/vi/<insert-youtube-video-id-here>/2.jpg
https://img.youtube.com/vi/<insert-youtube-video-id-here>/3.jpg
```

[Detail](https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api)

## Check video can be embedded

```
GET https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&part=status&key={YOUR_API_KEY}
```

The response from the API will include a `status.embeddable` property, which will be set to `true` if the video can be embedded on other websites, and `false` if it cannot.