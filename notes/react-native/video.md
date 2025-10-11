# Playing video on app

## Formats and Codecs
### Container / Delivery format
- HLS (`.m3u8` + `.ts`/`.mp4`)
    - Best for adaptive streaming.
    - Widely supported on Android & iOS.
    - Use **fMP4** (`.m4s`) segments instead of TS when possible → faster parsing, smaller overhead.
- DASH (.mpd)
    - ExoPlayer native support, very efficient.
    - But iOS doesn’t support DASH (so HLS is safer for cross-platform RN apps).
- Progressive MP4 (.mp4)
    - Good for short clips, offline downloads.
    - No adaptive streaming, but simplest and fastest startup.

### Video Codecs
- H.264/AVC (`avc1`)
    - Universal support on all Android devices.
    - Balanced performance and file size.
    - Safe default.
- H.265/HEVC (`hev1`/`hvc1`)
    - ~30–50% smaller files than H.264 at same quality.
    - Supported on Android 5.0+ (but not all devices have hardware decoding → may drain battery).
- VP9 (Google’s codec)
    - Efficient, widely supported on Android.
    - Not supported on iOS’s AVPlayer.
- AV1
    - Very efficient next-gen codec.
    - Support is still limited on Android hardware (2020+ devices mostly).

## Audio codecs
- AAC (Advanced Audio Coding) → best balance of compatibility & quality.
- Opus → great for low bitrate, but AAC is safer for HLS.


## Fast playback start 

### Adaptive Bitrate (ABR) Streaming with Short Segments
- **Small Initial Segment**: HLS Video (m3u8), use first chunk 2s, the following chunk 5s 
- **Starting at Low Quality**: The player typically requests the segment for the lowest-bitrate (lowest quality) stream first.
- **Dynamic Switching**: Once playback begins, the player's ABR algorithm immediately measures the user's connection speed. 

### Efficient Video Encoding
- Multiple Formats and Codecs
- Content-Aware Encoding

### Global Content Delivery Network (CDN)
- Google Global Cache (GGC)
- Minimizing Latency

### Player Optimization
- **Client-Side Prediction**: In cases where a video is likely to be played (e.g., when a thumbnail scrolls into view), the player might pre-fetch the manifest file and even the initial few hundred kilobytes of the lowest-quality video data in the background. If you click on the video, this data is already loaded, resulting in an instant start.
- **Optimized Buffer Management**: The player constantly monitors the buffer size and download speed. Its ABR algorithm is fine-tuned to aggressively seek the highest quality but is also quick to drop to a lower quality to prevent any buffering interruption once playback has started.
