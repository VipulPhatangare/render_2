const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Function to send GET request to activate endpoint
const sendActivateRequest = async () => {
  try {
    const response = await axios.get('https://render-1-0bgp.onrender.com/api/activate');
    console.log(`[${new Date().toLocaleTimeString()}] Activate request sent - Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Error sending activate request:`, error.message);
  }
};

// Send request immediately on startup
sendActivateRequest();

// Set up interval to send request every 5 minutes (300000 milliseconds)
setInterval(sendActivateRequest, 5 * 60 * 1000);
console.log('Automatic activation requests scheduled every 5 minutes');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/activate', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
