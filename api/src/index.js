import app from "./server.js";
import dotenv from "dotenv"
//pathing up to grab .env config
dotenv.config({ path: "./../.env" }); 

const PORT = process.env.API_PORT || 3000;


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
