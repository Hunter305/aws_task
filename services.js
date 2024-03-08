import { MediaLiveClient, StartChannelCommand } from "@aws-sdk/client-medialive";

const client = new MediaLiveClient({ region: "ap-south-1" });

const startChannel = async (req, res) => {
  try {
    const command = new StartChannelCommand({ ChannelId: process.env.CHANNELID });
    const response = await client.send(command);
    res.status(200).json({ message: "Channel started successfully", response });
  } catch (error) {
    res.status(500).json({ message: "Error starting channel", error: error.message });
  }
};

export { startChannel };
