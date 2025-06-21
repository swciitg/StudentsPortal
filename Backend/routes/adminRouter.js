import AdminJS, { ComponentLoader } from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import dotenv from 'dotenv';
dotenv.config();
import * as AdminJSMongoose from '@adminjs/mongoose';
import { Request } from '../Models/Request.js';
import { User } from '../Models/User.js';
import { Admins } from '../Models/Admins.js';
import bcrypt from 'bcrypt';
import express from 'express';
import importExportFeature from '@adminjs/import-export';
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
const componentLoader = new ComponentLoader();

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};
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
const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return DEFAULT_ADMIN;
  }
  return null;
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
            isVisible:true
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
      features: [importExportFeature({ componentLoader })],
    },
  ],
  rootPath: `/por_portal/api/admin`,
  loginPath: `/por_portal/api/admin/login`,
  logoutPath: `/por_portal/api/admin/logout`
};

const admin = new AdminJS({
  ...adminOptions,
  componentLoader,
});

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate,
  cookieName: 'adminjs',
  cookiePassword: process.env.ADMINJS_COOKIE_PASSWORD
});

admin.watch();

export { admin, adminRouter };
