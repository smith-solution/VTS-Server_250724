import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="camera-grid">
        <div className="camera-view">
          <img
            src="http://host.docker.internal:8080/video_feed/1"
            alt="Camera1 YOLO"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="camera-view">
          <img
            src="http://host.docker.internal:8080/video_feed/2"
            alt="Camera2 YOLO"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="camera-view">
          <img
            src="http://host.docker.internal:8080/video_feed/3"
            alt="Camera3 YOLO"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="camera-view">
          <img
            src="http://host.docker.internal:8080/video_feed/4"
            alt="Camera4 YOLO"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="sidebar">
        <h3>Detected Car</h3>
        <div className="car-box">Car1</div>
        <div className="car-box">Car2</div>
      </div>
    </div>
  );
}

export default App;
