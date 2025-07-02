import express from 'express';
import {getUsers} from '../controllers/messageController.js'
import { protectRoute } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/getUser', protectRoute, getUsers);

export default router;