// 

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { Request } from '../Models/Request.js';
import { User } from '../Models/User.js';
import { Admins } from '../Models/Admins.js';
import bcrypt from 'bcrypt';
import express from 'express';
import formidableMiddleware from 'express-formidable';

const PORT = 3002;
const app = express();

app.use(formidableMiddleware());

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const adminOptions = {
  resources: [Request, User,Admins],
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.encryptedPassword)) {
      return user;
    }
    return null;
  },
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  cookieName: 'adminjs',
  cookiePassword: 'complicatedsecurepassword',
  authenticate: async (email, password, next) => {
    const user = await User.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        return user;// Call next with null and the user to indicate successful authentication
      } 
    }
    return false;
  },
});

admin.watch();

export { admin, adminRouter };
