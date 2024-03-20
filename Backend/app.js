// import { superadmin } from './routes/adminRouter.js';
import express from 'express';
import { connect } from 'mongoose';
import  bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
// import { join } from 'path';
const app = express();
const port = 3002;
import { admin,adminRouter } from './routes/adminRouter.js';
import {config} from 'dotenv';
config();

connect(process.env.MONGODB_URI);

app.use(cors());
app.use(bodyParser.json());

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use('/por_portal', express.static(join(__dirname, 'build')));
// app.use('/por_portal/student', express.static(join(__dirname, 'build')));
app.use('/porportal/uploads', express.static(join(__dirname,'uploads')));


app.use(admin.options.rootPath, adminRouter)
app.use('/porportal/api/users', userRoutes);
// app.use('/uploads', express.static(join(__dirname, 'uploads')));
app.use('/porportal/api/request', requestRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
