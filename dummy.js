const mqtt = require('mqtt');

// MQTT broker URL
const brokerUrl = 'mqtt://3.96.64.144:1883';

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// Log when the client is connected
client.on('connect', () => {
    console.log('Client connected');
});

// Log when the client is disconnected
client.on('close', () => {
    console.log('Client disconnected');
});

// Publish dummy data every 10 seconds
setInterval(() => {
    const data = {
        heartsensor: 100, // Generate a random value for heartsensor
        bp:115, // Generate a random value for bp
    };

    client.publish('heartsensor', data.heartsensor.toString());
    client.publish('bp', data.bp.toString());

    console.log('Dummy data published:', data);
}, 10000); // Repeat every 10 seconds

module.exports = client;
