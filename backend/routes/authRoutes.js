import express from 'express';
import {signup, login, logout, checkAuth} from '../controllers/authController.js'
import { protectRoute } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/signup', signup);
router.post('/login', login)
router.post('/logout', protectRoute,  logout);
router.post('/check-auth', protectRoute, checkAuth)

export default router;