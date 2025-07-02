import express from 'express';
import {getUsers, sendMesasge, getMessages} from '../controllers/messageController.js'
import { protectRoute } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/getUser', protectRoute, getUsers);
router.post('/sendMessage/:receiverId', protectRoute, sendMesasge);
router.post('/getMessages/:receiverId', protectRoute, getMessages);

export default router;