import Contact from '../models/Contact.js';

const contactController = {
  // Create new contact
  createContact: async (req, res) => {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json({
        success: true,
        data: contact
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  // Get all contacts (admin only)
  getContacts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 10;
      const skip = (page - 1) * limit;

      const contacts = await Contact.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const total = await Contact.countDocuments();

      res.status(200).json({
        success: true,
        data: {
          contacts,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit)
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  },

  // Get contact statistics (admin only)
  getContactStats: async (req, res) => {
    try {
      const totalContacts = await Contact.countDocuments();
      const newContacts = await Contact.countDocuments({ status: 'new' });
      const recentContacts = await Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name email createdAt status');

      res.status(200).json({
        success: true,
        data: {
          totalContacts,
          newContacts,
          recentContacts
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
};

export default contactController; 