const Customer = require('../models/Customer');

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(400).send('Error fetching customers');
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (error) {
    res.status(400).send('Error fetching customer');
  }
};

module.exports = { getAllCustomers, getCustomerById };
