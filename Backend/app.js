const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');
const path = require('path');
// const { adminRouter, admin } = require('./routes/adminRouter'); 

const app = express();
const port = 3002;

mongoose.connect('mongodb+srv://auth-admin:AdHDOvAtNy8He2l3@cluster0.s875rof.mongodb.net/StudentsPortal');

app.use(cors());
app.use(bodyParser.json());

// app.use('/admin', adminRouter);

app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/request', requestRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// admin.watch();