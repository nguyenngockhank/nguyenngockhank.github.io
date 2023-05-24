# Streaming Protocols

- RTMP: Real-Time Messaging Protocol
- RTSP: Real Time Streaming Protocol
- HLS: HTTP Live Streaming
- RTP: Real-time Transport Protocol
- CMAF: Common Media Application Format

## Traditional Video Streaming Protocols

Traditional streaming protocols, such as RTSP and RTMP, support low-latency streaming. But they aren’t natively supported on most endpoints (e.g., browsers, mobile devices, computers, and televisions). Today, these streaming formats work best for transporting video between and IP camera or encoder and a dedicated media server.

![streamming latency](https://www.wowza.com/wp-content/uploads/latency-continuum-2021-with-protocols-700x300-1.webp)

As shown above, RTMP delivers video at roughly the same pace as a cable broadcast — in just over five seconds. RTSP/RTP is even quicker at around two seconds. Both formats achieve such speed by transmitting the data using a firehose approach rather than requiring local download or caching. But because very few players support RTMP and RTSP, they aren’t optimized for great viewing experiences at scale. Many broadcasters choose to transport live streams to the media server using a stateful protocol like RTMP. From there, they can transcode it into an HTTP-based technology for multi-device delivery.

## Adobe RTMP

Adobe designed the RTMP specification at the dawn of streaming. The protocol could transport audio and video data between a dedicated streaming server and the Adobe Flash Player. Reliable and efficient, this worked great for live streaming. But open standards and adaptive bitrate streaming eventually edged RTMP out. The writing on the wall came when Adobe announced the death of Flash — which officially ended in 2020.

While Flash’s end-of-life date was overdue, the same cannot be said for using RTMP for video contribution. RTMP encoders are still a go-to for many content producers, even though the proprietary protocol has fallen out of favor for last-mile delivery.

In fact, in our 2021 Video Streaming Latency Report, more than 76% of content distributors indicated they use RTMP for ingest.

**Which streaming formats are you currently using for ingest?**
![img](https://www.wowza.com/wp-content/uploads/Low-Latency-Graphs_Q8-700x461.png)

- **Video Codecs**: H.264, VP8, VP6, Sorenson Spark®, Screen Video v1 & v2
- **Audio Codecs**: AAC, AAC-LC, HE-AAC+ v1 & v2, MP3, Speex, Opus, Vorbis
- **Playback Compatibility**: Not widely supported (Flash Player, Adobe AIR, RTMP-compatible players)
- **Benefits**: Low-latency and requires no buffering
- **Drawbacks**: Not optimized for quality of experience or scalability
- **Latency**: 5 seconds
- **Variant Formats**: RTMPT (tunneled through HTTP), RTMPE (encrypted), RTMPTE (tunneled and encrypted), RTMPS (encrypted over SSL), RTMFP (travels over UDP instead of TCP)

### RTSP/RTP

Like RTMP, RTSP/RTP describes an old-school technology used for video contribution. RTSP and RTP are often used interchangeably. But to be clear: RTSP is a presentation-layer protocol that lets end users command media servers via pause and play capabilities, whereas RTP is the transport protocol used to move said data.

Android and iOS devices don’t have RTSP-compatible players out of the box, making this another protocol that’s rarely used for playback. That said, RTSP remains standard in many surveillance and closed-circuit television (CCTV) architectures. Why? The reason is simple. RTSP support is still ubiquitous in IP cameras.

- **Video Codecs**: H.265 (preview), H.264, VP9, VP8
- **Audio Codecs**: AAC, AAC-LC, HE-AAC+ v1 & v2, MP3, Speex, Opus, Vorbis
- **Playback Compatibility**: Not widely supported (Quicktime Player and other RTSP/RTP-compliant players, VideoLAN VLC media player, 3Gpp-compatible mobile devices)
- **Benefits**: Low-latency and supported by most IP cameras
- **Drawbacks**: No longer used for video delivery to end users
- **Latency**: 2 seconds
- **Variant Formats**: The entire stack of RTP, RTCP (Real-Time Control Protocol), and RTSP is often referred to as RTSP

## Adaptive HTTP-Based Streaming Protocols

Streams deployed over HTTP are not technically “streams.” Rather, they’re progressive downloads sent via regular web servers. Using adaptive bitrate streaming, HTTP-based protocols deliver the best video quality and viewer experience possible — no matter the connection, software, or device. Some of the most common HTTP-based protocols include MPEG-DASH and Apple’s HLS.

### Apple HLS

Since Apple is a major player in the world of internet-connected devices, it follows that Apple’s HLS protocol rules the digital video landscape. For one, the protocol supports adaptive bitrate streaming, which is key to viewer experience. More importantly, a stream delivered via HLS will play back on the majority of devices — thereby ensuring accessibility to a large audience.

HLS support was initially limited to iOS devices such as iPhones and iPads, but native support has since been added to a wide range of platforms. All Google Chrome browsers, as well as Android, Linux, Microsoft, and MacOS devices, can play streams delivered using HLS.

- **Video Codecs**: H.265, H.264
- **Audio Codecs**: AAC-LC, HE-AAC+ v1 & v2, xHE-AAC, Apple Lossless, FLAC
- **Playback Compatibility**: Great (All Google Chrome browsers; Android, Linux, Microsoft, and MacOS devices; several set-top boxes, smart TVs, and other players)
- **Benefits**: Adaptive bitrate and widely supported
- **Drawbacks**: Quality of experience is prioritized over low latency
- **Latency**: 6-30 seconds (lower latency only possible when tuned)
- **Variant** Formats: Low-Latency HLS (see below), PHLS (Protected HTTP Live Streaming)

### Low-Latency HLS

Low-Latency HLS (LL-HLS) is the latest and greatest technology when it comes to low-latency streaming. The proprietary protocol promises to deliver sub-three-second streams globally. It also offers backward compatibility to existing clients.

In other words, it’s designed to deliver the same simplicity, scalability, and quality as HLS — while significantly shrinking the latency. At Wowza, we call this combination the streaming trifecta.

Even so, successful deployments of Low-Latency HLS require integration from vendors across the video delivery ecosystem. Support is still lacking, and large-scale deployments of Low-Latency HLS are few and far between.

- **Playback Compatibility**: Any players that aren’t optimized for Low-Latency HLS can fall back to standard (higher-latency) HLS behavior
    - HLS-compatible devices include MacOS, Microsoft, Android, and Linux devices; all Google Chrome browsers; several set-top boxes, smart TVs, and other players
- **Benefits**: Low latency, scalability, and high quality… Oh, and did we mention backward compatibility?
- **Drawbacks**: As an emerging spec, vendors are still implementing support
- **Latency**: 2 seconds or less

### MPEG-DASH

MPEG-DASH is a vendor-independent alternative to HLS. Basically, with DASH you get a non-proprietary option that ensures the same scalability and quality. But because Apple tends to prioritize its own tech stack, support for DASH plays second fiddle in the slew of Apple devices out there.

- **Video Codecs**: Codec-agnostic
- **Audio Codecs**: Codec-agnostic
- **Playback Compatibility**: Good (All Android devices; most post-2012 Samsung, Philips, Panasonic, and Sony TVs; Chrome, Safari, and Firefox browsers)
- **Benefits**: Vendor-independent, international standard for adaptive bitrate
- **Drawbacks**: Not supported by iOS or Apple TV
- **Latency**: 6-30 seconds (lower latency only possible when tuned)
- **Variant Formats**: MPEG-DASH CENC (Common Encryption)

### Low-Latency CMAF for DASH

Low-latency CMAF for DASH is another emerging technology for speeding up HTTP-based video delivery. Although it’s still in its infancy, the technology shows promise in delivering superfast video at scale by using shorter data segments. That said, many vendors have prioritized support for Low-Latency HLS over that of low-latency CMAF for DASH.

- **Playback Compatibility**: Any players that aren’t optimized for low-latency CMAF for DASH can fall back to standard (higher-latency) DASH behavior
- **Benefits**: Low latency meets HTTP-based streaming
- **Drawbacks**: As an emerging spec, vendors are still implementing support
- **Latency**: 3 seconds or less

### Microsoft Smooth Streaming

Microsoft developed Microsoft Smooth Streaming in 2008 for use with Silverlight player applications. It enables adaptive delivery to all Microsoft devices. The protocol can’t compete with other HTTP-based formats and is falling out of use. In fact, in our 2021 Video Streaming Latency Report, only 5 percent of respondents were using Smooth Streaming.

**Which streaming formats are you currently using?**
![IMG](https://www.wowza.com/wp-content/uploads/Low-Latency-Graphs_Q9-1.png)

- Video Codecs: H.264, VC-1
- Audio Codecs: AAC, MP3, WMA
- Playback Compatibility: Good (Microsoft and iOS devices, Xbox, many smart TVs, Silverlight player-enabled browsers)
- Benefits: Adaptive bitrate and supported by iOS
- Drawbacks: Proprietary technology, doesn’t compete with HLS and DASH
- Latency: 6-30 seconds (lower latency only possible when tuned)

### Adobe HDS

HDS was developed for use with Flash Player as the first adaptive bitrate protocol. Because Flash is no more, it’s also slowly dying. Don’t believe us? Just take a look at the graph above.

- **Video Codecs**: H.264, VP6
- **Audio Codecs**: AAC, MP3
- **Playback Compatibility**: Not widely supported (Flash Player, Adobe AIR)
- **Benefits**: Adaptive bitrate technology for Flash
- **Drawbacks**: Proprietary technology with lacking support
- **Latency**: 6-30 seconds (lower latency only possible when tuned)
 
## New Technologies
Last but not least, new technologies like WebRTC and SRT promise to change the landscape. Similar to low-latency CMAF for DASH and Apple Low-Latency HLS, these protocols were designed with latency in mind.


### SRT
This open-source protocol is recognized as a proven alternative to proprietary transport technologies — helping to deliver reliable streams, regardless of network quality. It competes directly with RTMP and RTSP as a first-mile solution, but it’s still being adopted as encoders, decoders, and players add support.

From recovering lost packets to preserving timing behavior, SRT was designed to solve the challenges of video contribution and distribution across the public internet. And it’s quickly taking the industry by storm. One interactive use case for which SRT proved instrumental was the 2020 virtual NFL draft.  The NFL used this game-changing technology to connect 600 live feeds for the first entirely virtual event.

- Video Codecs: Codec-agnostic
- Audio Codecs: Codec-agnostic
- Playback Compatibility: Limited (VLC Media Player, FFPlay, Haivision Play Pro, Haivision Play, Larix Player, Brightcove)
- Benefits: High-quality, low-latency video over suboptimal networks
- Drawbacks: Not widely supported for video playback
- Latency: 3 seconds or less, tunable based on how much latency you want to trade for packet loss

### WebRTC

As the speediest technology available, WebRTC delivers near-instantaneous voice and video streaming to and from any major browser. It can also be used end-to-end and thus competes with ingest and delivery protocols. The framework was designed for pure chat-based applications, but it’s now finding its way into more diverse use cases.

Scalability remains a challenge with WebRTC, though, so you’ll need to use a solution like Wowza’s Real-Time Streaming at Scale feature to overcome this. The solution deploys WebRTC across a custom CDN to provide near-limitless scale. This allows broadcasters to reach a million viewers with sub-500 ms delivery — a once impossible feat.

**Workflow: Real-Time Streaming at Scale for Wowza Video**
![img](https://www.wowza.com/wp-content/uploads/Real-Time-Streaming-Wowza-Video-Workflow-1920x605-1-1-700x221.png)

- Video Codecs: H.264, VP8, VP9
- Audio Codecs: Opus, iSAC, iLBC
- Playback Compatibility: Chrome, Firefox, and Safari support WebRTC without any plugin
- Benefits: Super fast and browser-based
- Drawbacks: Designed for video conferencing and not scale
- Latency: Sub-500-millisecond delivery

### Considerations When Choosing a Streaming Protocol

Selecting the right media streaming protocol starts with defining what you’re trying to achieve. Latency, playback compatibility, and viewing experience can all be impacted. What’s more, content distributors don’t always stick with the same protocol from capture to playback. Many broadcasters use RTMP to get from the encoder to server and then transcode the stream into an adaptive HTTP-based format.

![img](https://www.wowza.com/wp-content/uploads/Basic-RTMP-to-HLS-Workflow-700x371.png)

Media streaming protocols differ in the following areas:

First-mile contribution vs. last-mile delivery
- Playback support
- Encoder support
- Scalability
- Latency
- Quality of experience (adaptive bitrate enabled, etc.)
- Security
By prioritizing the above considerations, it’s easy to narrow down what’s best for you.

## Contribution vs. Delivery
RTMP and SRT are great bets for first-mile contribution, while both DASH and HLS lead the way when it comes to playback. On the flip side, RTMP has fallen entirely out of favor for delivery, and HLS isn’t an ideal ingest format. That’s why most content distributors rely on a media server or cloud-based video platform to transcode their content from one protocol to another.

 
### Playback Support
What’s the point of distributing a stream if viewers can’t access it? Lacking playback support is the reason RTMP no longer plays a role in delivery to end users. And ubiquitous playback support is the reason why HLS is the most popular protocol today.

 
### Encoder Support
The inverse of playback support is encoder support. RTMP maintains a stronghold despite its many flaws due to the prevalence of RTMP encoders already out there. Similarly, RTSP has stayed relevant in the surveillance industry because it’s the protocol of choice for IP cameras.

WebRTC is unique in that it can be used for browser-based publishing and playback without any additional technologies, enabling simple streaming for use cases that don’t require production-quality encoders and cameras.

 
### Scalability
HLS is synonymous with scalability. The widely-supported HTTP-based protocol leverages web servers to reach any device worth reaching today. But what it delivers in scalability, it lacks in terms of latency. That’s because latency and scalability have traditionally been at odds with one another. New technologies like Real-Time Streaming at Scale, however, resolve this polarity.

 
### Latency
Low-Latency HLS, low-latency CMAF for DASH, and WebRTC were all designed with speedy delivery in mind. Anyone deploying interactive video environments should limit themselves to one of these three delivery protocols.
