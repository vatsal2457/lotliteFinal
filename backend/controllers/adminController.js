import jwt from 'jsonwebtoken';
import Contact from '../models/Contact.js';

// Hardcoded admin credentials (in production, these should be stored securely in a database)
const ADMIN_EMAIL = 'admin@lotlite.com';
const ADMIN_PASSWORD = 'admin123';

const adminController = {
  // Login admin
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check credentials
      if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { email: ADMIN_EMAIL },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(200).json({
        success: true,
        token,
        message: 'Login successful'
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'Error during login'
      });
    }
  },

  // Get dashboard statistics
  getDashboardStats: async (req, res) => {
    try {
      // Get contact statistics
      const totalContacts = await Contact.countDocuments();
      const newContacts = await Contact.countDocuments({ status: 'new' });
      const recentContacts = await Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name email phone message createdAt status');

      res.status(200).json({
        success: true,
        data: {
          totalContacts,
          totalApplications: 0,
          pendingApplications: 0,
          recentContacts
        }
      });
    } catch (error) {
      console.error('Dashboard stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching dashboard statistics'
      });
    }
  }
};

export default adminController; 