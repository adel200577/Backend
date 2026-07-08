import router from "./routers/reminder.js";

import express from "express";
const app = express();

app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Previatska TypeScript");
});
app.listen(3000, () => console.log("Connected"));
