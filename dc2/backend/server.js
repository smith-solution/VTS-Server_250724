const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.get('/api/hello', async (req, res) => {
  try {
    const response = await axios.get('http://ros2api:8000/ros/hello');
    res.json({ fromNode: true, fromRos: response.data });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to reach ROS2 API' });
  }
});

app.listen(PORT, () => {
  console.log(`Node.js server running on port ${PORT}`);
});
