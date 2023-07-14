import express from "express";
import { getContacts, createContact } from "../controllers/logihub.js";

const router = express.Router();

router.get("/contacts", getContacts);
router.post("/create", createContact);

export default router;
