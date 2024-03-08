import { MediaLiveClient, StartChannelCommand, StopChannelCommand } from "@aws-sdk/client-medialive";

const client = new MediaLiveClient({ region: "ap-south-1" });

const startChannel = async (req, res) => {
  try {
    const command = new StartChannelCommand({ ChannelId: process.env.CHANNELID });
    const response = await client.send(command);
    res.status(200).json({ message: "Channel started successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error starting channel", error: error.message });
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

export { startChannel, stopChannel };
