import Router from "express";
const router = Router();

import CreateReminderDto from "../dtos/create-reminder-dtos.js";

router.get("/reminders", (req, res) => {
  res.send("reminder list");
});

router.post("/reminders",(req,res)=>{
  const {title} = req.body as CreateReminderDto;
  res.json(title)
})

export default router;
