# Forex Socket Server (Node.js + Socket.IO)

This is a real-time signal server that:

- Fetches forex signals from PHP endpoint
- Detects new signals using ID comparison
- Broadcasts signals to Android app via Socket.IO

## Flow

PHP Signal Page  
→ Node.js Worker (Render)  
→ Socket.IO Server  
→ Android App  

## Install locally

```bash
npm install
node server.js
