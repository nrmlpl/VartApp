import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { adminLoginValidator, validateHandler } from "../lib/validators.js";
import {
    adminLogin,
    adminLogout,
    allChats,
    allMessages,
    allUsers,
    getAdminData,
    getDashboardStats
} from "../controllers/admin.js";


const app = express.Router();

app.post("/verify", adminLoginValidator(), validateHandler, adminLogin);
app.get("/logout", adminLogout);

// Only Amdin can access these routes.
app.use(adminOnly);
app.get("/", getAdminData);

app.get("/users", allUsers);
app.get("/chats", allChats);
app.get("/messages", allMessages);
app.get("/stats", getDashboardStats);

export default app;