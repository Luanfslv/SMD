// src/routes/exampleRoutes.js
const express = require("express");
const {
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");

const router = express.Router();

router.get("/ticket", getTicket);
router.post("/createTicket", createTicket);
router.update("/updateTicket", updateTicket);
router.delete("/deleteTicket", deleteTicket);

module.exports = router;
