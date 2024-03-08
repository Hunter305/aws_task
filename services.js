import { MediaLiveClient, StartChannelCommand, StopChannelCommand } from "@aws-sdk/client-medialive";
import { MediaConnect, StartFlowCommand, StopFlowCommand } from "@aws-sdk/client-mediaconnect";

const client = new MediaLiveClient({ region: "ap-south-1" });
const mediaConnClient = new MediaConnect({ region: "ap-south-1" });
const mediaConnArn = process.env.MEDIACONNARN;

//media live

const startChannel = async (req, res) => {
  try {
    const command = new StartChannelCommand({ ChannelId: process.env.CHANNELID });
    const response = await client.send(command);
    res.status(200).json({ message: "Channel started successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const stopChannel = async (req, res) => {
  try {
    const command = new StopChannelCommand({ ChannelId: process.env.CHANNELID });
    const response = await client.send(command);
    res.status(200).json({ message: "Channel stopped successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//media connect

const startMediaConnect = async (req, res) => {
  try {
    const command = new StartFlowCommand({ FlowArn: "arn:aws:mediaconnect:ap-south-1:891377081681:flow:1-Xl5QUQtUVVNWBF0G-935895f8ddb4:testamagi" });
    const response = await mediaConnClient.send(command);
    res.status(200).json({ message: "flow started successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const stopMediaConnect = async (req, res) => {
  try {
    const command = new StopFlowCommand({ FlowArn: "arn:aws:mediaconnect:ap-south-1:891377081681:flow:1-Xl5QUQtUVVNWBF0G-935895f8ddb4:testamagi" });
    const response = await mediaConnClient.send(command);
    res.status(200).json({ message: "flow started successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { startChannel, stopChannel, startMediaConnect, stopMediaConnect };
