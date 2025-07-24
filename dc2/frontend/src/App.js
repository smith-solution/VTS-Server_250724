import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="camera-grid">
        <div className="camera-view">
          <img
            src="http://192.168.140.209:8080/stream"
            alt="Camera1 Stream"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="camera-view">Camera2</div>
        <div className="camera-view">Camera3</div>
        <div className="camera-view">Camera4</div>
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
