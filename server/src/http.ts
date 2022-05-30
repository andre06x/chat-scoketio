import express from "express";
import http from "http";
import path from "path";
import {Server}  from "socket.io"
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname,"..", "public")))

app.get("/teste", (req, res) => {
    res.json({res: "res"})
})

const serverHttp = http.createServer(app);

const io = new Server (serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
});

export { serverHttp, io }