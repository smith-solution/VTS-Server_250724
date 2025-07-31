import torch
from flask import Flask, Response
from flask_cors import CORS
import cv2
from ultralytics import YOLO

print("✅ CUDA 사용 가능:", torch.cuda.is_available())
if torch.cuda.is_available():
    print("→ GPU 이름:", torch.cuda.get_device_name(0))
else:
    print("→ GPU 사용 불가, CPU 사용 중")

app = Flask(__name__)
CORS(app)

stream_urls = {
    1: 'http://192.168.2.18:8080/stream',
    2: 'http://192.168.2.19:8080/stream',
    3: 'http://192.168.2.20:8080/stream',
    4: 'http://192.168.2.24:8080/stream',
}

model = YOLO("best.pt")

def generate_stream(cam_id):
    cap = cv2.VideoCapture(stream_urls[cam_id])
    while True:
        ret, frame = cap.read()
        if not ret:
            print(f"[cam {cam_id}] ❌ 프레임 수신 실패")
            continue

        print(f"[cam {cam_id}] ✅ 프레임 수신됨")
        results = model(frame)
        print(f"[cam {cam_id}] 🔍 감지된 객체 수: {len(results[0].boxes)}")

        annotated = results[0].plot()
        _, buffer = cv2.imencode('.jpg', annotated)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')


@app.route('/video_feed/<int:cam_id>')
def video_feed(cam_id):
    return Response(generate_stream(cam_id), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
