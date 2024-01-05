import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import express from 'express'
import { Request } from '../Models/Request.js'
import { User } from '../Models/User.js'

const PORT = 3002

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})


  // await mongoose.connect('mongodb+srv://auth-admin:AdHDOvAtNy8He2l3@cluster0.s875rof.mongodb.net/StudentsPortal')

  const adminOptions = {
    resources: [Request,User]
  }

  const admin = new AdminJS(adminOptions)

  const adminRouter = AdminJSExpress.buildRouter(admin)

  admin.watch()

  export {admin,adminRouter}

