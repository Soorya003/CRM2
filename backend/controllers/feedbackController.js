const Feedback = require('../models/Feedback'); // Create a Feedback model similarly

const sendFeedback = async (req, res) => {
  const { email, feedback } = req.body;
  try {
    const newFeedback = new Feedback({ email, feedback });
    await newFeedback.save();
    res.status(201).send('Feedback submitted');
  } catch (error) {
    res.status(400).send('Error submitting feedback');
  }
};

module.exports = { sendFeedback };
