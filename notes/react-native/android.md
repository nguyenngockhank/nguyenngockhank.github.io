# Android issues 

## Video rendering

Hardware acceleration differences: 
- Some Android devices use `SurfaceView` by default, others need `TextureView` for overlay support.
- ✅ Fix: Try toggling `useTextureView={true} or false` depending on your case.
    - `SurfaceView` = better performance, but can’t overlap UI (z-index issues).
    - `TextureView` = can overlay UI (captions, overlays), but higher GPU usage.

### TEXTURE
- Backed by a `TextureView`.
- Video frames are rendered into a SurfaceTexture, which is then displayed as part of the normal Android view hierarchy.
- Pros:
    - Can be transformed (rotated, scaled, animated) like a normal view.
    - Works inside scrollable layouts.
- Cons:
    - Slightly higher overhead compared to SurfaceView (extra GPU texture copy).
    - More memory usage.

### 2. SURFACE
- Backed by a `SurfaceView`.
- Video is rendered directly onto a separate surface managed by the system compositor.
- Pros:
    - Better performance and lower latency (no extra copy).
    - Uses less memory.
- Cons:
    - Z-order issues: SurfaceView is not part of the normal view hierarchy, so it always sits on top of other UI elements (unless using SurfaceView.setZOrder...()).
    - Harder to animate or apply transforms (can’t rotate/scale easily).
### 3. SURFACE_SECURE
- Backed by a secure `SurfaceView`.
- Similar to `SURFACE`, but marked as secure so that:
    - The content cannot be captured via screenshots or screen recording.
    - Often required by DRM-protected content providers (e.g., Widevine L1).
- **Use case**: Streaming services like Netflix, Disney+, or any player that needs HD/4K playback with DRM protection.

## Crash app cuz of long list

### windowSize

How many screenfuls worth of items should be kept rendered around the visible area.

- Default: 21 (which means 10 screens before + 1 current + 10 after).
=> `totalItemsInWindow = visibleLength * windowSize`

✅ So lowering `windowSize` helps on Android where memory/JS thread is tighter.

### maxToRenderPerBatch

The maximum number of items rendered in one render batch.
- Default: 10

Why it matters:
- FlatList renders items in chunks (batches) to avoid blocking the JS thread.
- If you set this too high, scrolling stutters while React mounts too many views.
- If too low, scrolling may feel "blank" before more items render.

### removeClippedSubviews

When `true`, React Native will unmount (remove from the native view hierarchy) any child views that are outside of the visible viewport + a small buffer.

On Android, keeping too many views alive offscreen hurts memory & GPU performance.

- Inside `windowSize`: JS component is still mounted.
- Offscreen with `removeClippedSubviews={true}`: the native view is unmounted, but the JS object still exists.
- This saves memory, but can cause subtle issues if you rely on refs to native views.

## Audio focus problems
- Android may not auto-pause your video when another app starts audio.
- ✅ Fix: Configure `ignoreSilentSwitch` and `playInBackground` props properly.

## Autoplay not working smoothly
- Android ExoPlayer often buffers longer (esp. with HLS).
- ✅ Fix:
    - Encode HLS with short first segment (2s).
    - Use `prepareOnly` in your video wrapper (mount player, but don’t play until visible).
    - Preload visible items (onViewableItemsChanged).

```tsx
<Video
  source={{ 
    uri: videoUrl,
    bufferConfig={{
      minBufferMs: 15000,
      maxBufferMs: 50000,
      bufferForPlaybackMs: 2500,
      bufferForPlaybackAfterRebufferMs: 5000
    }}
  }}
 
/>
```