import express from "express";
import dotenv from "dotenv";
import { startChannel, startMediaConnect, stopChannel, stopMediaConnect } from "./services.js";
dotenv.config();

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/startchannel", startChannel);
app.get("/stopChannel", stopChannel);

app.get("/startmediaconnection", startMediaConnect);
app.get("/stopmediaconnection", stopMediaConnect);

app.listen(port, () => {
  console.log(`app is running in port ${port}`);
});
