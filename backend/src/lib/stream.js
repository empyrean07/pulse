import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY;
const apiSecreat = process.env.STEAM_API_SECRET;

if(!apiKey || !apiSecreat){
    console.error("Stream API key or Secreat key is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecreat);


export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUsers([userData]); 
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user:", error);

    }
};

export const  generatrStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error("Error generating Stream token:", error);
    }
};