import express from 'express';
import {getUsers, sendMesasge} from '../controllers/messageController.js'
import { protectRoute } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/getUser', protectRoute, getUsers);
router.post('/sendMessage/:receiverId', protectRoute, sendMesasge);

export default router;