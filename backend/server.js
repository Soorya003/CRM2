const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://guvi:guvi@guvi.qgrirnt.mongodb.net/guvi', {
    
});
console.log("connected to db");
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
