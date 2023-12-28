import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'
import express from 'express'

import { Request } from '../Models/request.js'
import { Profile } from '../Models/profile.js'

const PORT = 3000

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})

const start = async () => {

  const mongoosedb = await mongoose.connect('mongodb+srv://auth-admin:AdHDOvAtNy8He2l3@cluster0.s875rof.mongodb.net/StudentsPortal')
  const app = express()

  const adminOptions = {
    resources: [Request,Profile]
  }

  const admin = new AdminJS(adminOptions)

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })

  admin.watch()
}

const export adminpanel = start()


