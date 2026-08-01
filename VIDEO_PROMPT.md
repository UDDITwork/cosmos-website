# Video Generation Prompt — Cosmos IP Scroll Experience

## The Prompt

Use this with **Runway Gen-3 Alpha Turbo**, **Kling 1.6**, **Sora**, **Hailuo**, or any long-form AI video generator. For best results, generate at the highest resolution available (ideally 1080p+) and at least 10 seconds. You may need to chain multiple generations end-to-end for a full 20–30 second continuous zoom.

---

**Prompt (copy this):**

> Cinematic continuous forward zoom through layers of innovation and technology.
> The camera begins deep in outer space, surrounded by distant stars and a luminous
> blue-gold nebula. It pushes steadily forward as stars accelerate past the lens.
> The starfield gradually transforms into glowing neural network nodes connected by
> pulsing light pathways — an abstract visualization of artificial intelligence.
> The camera continues through the neural network as nodes multiply and connections
> grow denser, morphing into a vast circuit board landscape seen from above, with
> gold and electric-blue traces carrying pulses of light through silicon pathways.
> The circuit landscape dissolves into translucent technical blueprint overlays —
> patent drawings, engineering cross-sections, and dimensioned schematics floating
> in dark space with ethereal blue-white linework. All elements ultimately converge
> toward a single brilliant golden point of light at the center of frame.
> Continuous unbroken forward camera movement throughout. Never stop or reverse.
> Cinematic lighting, volumetric atmospheric haze, shallow depth of field, subtle
> anamorphic lens flares. Dark background throughout. 8K quality, photorealistic
> rendering with tasteful stylization.

**Negative prompt (if supported):**

> Text, watermark, logo, letterbox bars, static camera, camera shake, abrupt cuts,
> low resolution, cartoon, anime, illustration style.

---

## Recommended Settings

| Parameter      | Value                                   |
|----------------|-----------------------------------------|
| Aspect ratio   | 16:9                                    |
| Resolution     | 1920×1080 or higher                     |
| Duration       | 10–30 seconds (chain clips if needed)   |
| FPS            | 24 or 30                                |
| Motion         | High / aggressive forward zoom          |
| Style          | Cinematic / photorealistic              |

---

## Extracting Frames

After generating the video, extract individual frames for the scroll-triggered player:

```bash
# WebP (recommended — best quality-to-size ratio)
mkdir -p public/frames
ffmpeg -i cosmos-zoom.mp4 -vf "fps=30,scale=1920:-1" -quality 80 public/frames/frame_%04d.webp

# JPEG alternative
ffmpeg -i cosmos-zoom.mp4 -vf "fps=30,scale=1920:-1" -q:v 3 public/frames/frame_%04d.jpg

# Count your frames
ls public/frames | wc -l
```

For a 10-second video at 30fps you'll get ~300 frames. For 20 seconds, ~600 frames.

---

## Wiring Up the Frames

In `app/page.tsx`, swap the procedural canvas for the frame player:

```tsx
// Replace this:
import CosmicScrollExperience from '@/components/CosmicScrollExperience'

// With this:
import FrameSequencePlayer from '@/components/FrameSequencePlayer'

// Then in the JSX, replace <CosmicScrollExperience /> with:
<FrameSequencePlayer
  frameCount={300}       // ← your actual frame count
  framePath="/frames/frame_"
  extension="webp"       // or "jpg"
  scrollHeight="600vh"
/>
```

The player maps scroll position to frame number: scrolling 0→100% through the 600vh container plays frame 1 → N, giving the smooth video-on-scroll effect.

---

## Tips

- **Preloading**: The player eagerly loads all frames on mount. For 300+ frames, add a loading indicator (the procedural canvas has none because it renders instantly).
- **Mobile**: Consider extracting a lower-resolution set (960×540) for mobile to reduce bandwidth.
- **Hybrid**: You can keep `CosmicScrollExperience` as a fallback while frames load, then crossfade to the video player once ready.
- **Optimization**: Convert frames to AVIF for ~40% smaller files if your target browsers support it (`ffmpeg … -c:v libaom-av1 … frame_%04d.avif`).
