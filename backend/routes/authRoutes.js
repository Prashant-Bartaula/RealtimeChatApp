import express from 'express';
import {signup, login, logout, checkAuth, updateProflie} from '../controllers/authController.js'
import { protectRoute } from '../middleware/authMiddleware.js';
import multer from 'multer';

const router=express.Router();

// Multer middleware to handle multipart/form-data
const upload = multer({ dest: 'uploads/' }); // temp storage

router.post('/signup', signup);
router.post('/login', login)
router.post('/logout', protectRoute,  logout);
router.post('/check-auth', protectRoute, checkAuth)
router.put('/update-profile', upload.single("profilePic"),  protectRoute, updateProflie);

export default router;