import app from "./server.js";

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
