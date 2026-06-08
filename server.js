const express = require("express");
const http = require("http");
const axios = require("axios");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

let lastId = 0;

async function checkSignal() {

    try {

        const response = await axios.get(
            "https://bestforextradingsetups.dpdns.org/mazikinosz/index.php"
        );

        const signal = response.data;

        if(signal.id != lastId){

            lastId = signal.id;

            io.emit(
                "signal",
                signal
            );

            console.log(
                "New Signal:",
                signal.id
            );
        }

    } catch(err){

        console.log(err.message);

    }

}

setInterval(checkSignal, 5000);

app.get("/", (req,res)=>{
    res.send("Socket Server Running");
});

server.listen(
    process.env.PORT || 3000,
    ()=>{
        console.log("Running");
    }
);
