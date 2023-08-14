import app from "./server.js";
import dotenv from "dotenv"
//pathing up to grab .env config
dotenv.config(); 

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
