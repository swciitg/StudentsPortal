import express from 'express';
import { connect } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import { admin, adminRouter } from './routes/adminRouter.js';
import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3002;

// Load environment variables
config();

// Connect to MongoDB
connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Setup __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static file serving
app.use('/uploads', express.static(join(__dirname, 'uploads')));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the server of POR PORTAL');
});

app.use('/admin', adminRouter);
app.use('/users', userRoutes);
app.use('/request', requestRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
