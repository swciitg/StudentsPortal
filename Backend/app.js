const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const dashboardRoutes=require('./routes/dashboardRoutes')

const app = express();
const port = 3002;

mongoose.connect('mongodb+srv://auth-admin:AdHDOvAtNy8He2l3@cluster0.s875rof.mongodb.net/StudentsPortal');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', dashboardRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

