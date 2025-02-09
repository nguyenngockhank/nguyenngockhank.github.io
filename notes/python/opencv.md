# Opencv


```
pip3 install opencv-contrib-python 
```

EXTENSTIONS: opencv-intellisense 

Ref: https://github.com/jasmcaus/opencv-course/tree/master
## Open an image file

```py
import cv2 as cv

img = cv.imread('/Users/nguyenkhanh/Pictures/IMG_6323.JPG')

cv.imshow('both', img)

cv.waitKey(0)
```

## Open an video 

```py
import cv2 as cv

capture = cv.VideoCapture('/Users/nguyenkhanh/Downloads/funny/CCTV IDIOTS.mp4')

while True:
    isTrue, frame = capture.read()
    if isTrue:  
        # if cv.waitKey(20) & 0xFF==ord('d'):
        # This is the preferred way - if `isTrue` is false (the frame could 
        # not be read, or we're at the end of the video), we immediately
        # break from the loop. 
        cv.imshow('Video', frame)
        if cv.waitKey(20) & 0xFF == ord('d'):
            break
    else:
        break

capture.release()
cv.destroyAllWindows()
```

### Rescale 

```py
def rescaleFrame(frame, scale = 0.75):
    w = int(frame.shape[1] * scale)
    h = int(frame.shape[0] * scale)
    dimensions = (w, h)
    return cv.resize(frame, dimensions, interpolation = cv.INTER_AREA)

while True:
    isTrue, frame = capture.read()

    frame_resized = rescaleFrame(frame, 0.2)

    if isTrue:  
        cv.imshow('Video', frame)
        cv.imshow('Reszuie Video', frame_resized)
        if cv.waitKey(20) & 0xFF == ord('d'):
            break
    else:
        break
```