import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import dotenv from 'dotenv';
dotenv.config();
import * as AdminJSMongoose from '@adminjs/mongoose';
import { Request } from '../Models/Request.js';
import { User } from '../Models/User.js';
import { Admins } from '../Models/Admins.js';
import bcrypt from 'bcrypt';
import express from 'express';
import formidableMiddleware from 'express-formidable';
import {config} from 'dotenv';
config();
const PORT = 3002;
const app = express();

app.use(formidableMiddleware());

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const deleteMultipleRequestsHandler = async (request, response, data) => {
  const { recordIds } = request.body;

  try {
    // Validate if recordIds is an array
    if (!Array.isArray(recordIds)) {
      throw new Error('Invalid recordIds format');
    }

    // Use deleteMany to delete multiple records
    const obj = await Request.deleteMany({ _id: { $in: recordIds } });
    console.log(obj);

    // Return an array of deleted record IDs in the expected format
    return { obj };
  } catch (error) {
    return { error: error.message };
  }
};

const adminOptions = {
  resources: [
    {
      resource: Request,
      options: {
        actions: {
          delete: {
            handler: async (request, response, data) => {
              await Request.findByIdAndDelete(request.params.recordId);
              return { record: data.record.toJSON(data.currentAdmin) };
            },
          },
          bulkDelete:{
            isVisible:false
          }
        },
      },
    },
    {
      resource: User,
      options: {
        actions: {
          delete: {
            handler: async (request, response, data) => {
              await User.findByIdAndDelete(request.params.recordId);
              return { record: data.record.toJSON(data.currentAdmin) };
            },
          },
          bulkDelete:{
            isVisible:false
          }
        },
      },
    },
    {
      resource: Admins,
      options: {
        actions: {
          delete: {
            handler: async (request, response, data) => {
              await Admins.findByIdAndDelete(request.params.recordId);
              return { record: data.record.toJSON(data.currentAdmin) };
            },
          },
          bulkDelete:{
            isVisible:false
          }
        },
      },
    },
  ],
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.encryptedPassword)) {
      return user;
    }
    return null;
  },
  rootPath: `${process.env.BASE_API_PATH}/admin`,
  loginPath: `${process.env.BASE_API_PATH}/admin/login`,
  logoutPath: `${process.env.BASE_API_PATH}/admin/logout`
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  cookieName: 'adminjs',
  cookiePassword: process.env.ADMINJS_COOKIE_PASSWORD,
  authenticate: async (email, password, next) => {
    const user = await User.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        return user; // Call next with null and the user to indicate successful authentication
      }
    }
    return false;
  },
});

admin.watch();

export { admin, adminRouter };
