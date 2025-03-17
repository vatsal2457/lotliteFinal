import express from 'express';
import adminController from '../controllers/adminController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/login', adminController.login);

// Protected routes
router.get('/dashboard/stats', protect, adminController.getDashboardStats);

export default router; 