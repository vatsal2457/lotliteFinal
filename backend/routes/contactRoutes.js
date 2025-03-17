import express from 'express';
import contactController from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/', contactController.createContact);

// Protected routes (admin only)
router.get('/', protect, contactController.getContacts);
router.get('/stats', protect, contactController.getContactStats);

export default router; 