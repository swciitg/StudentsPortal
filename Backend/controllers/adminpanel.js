import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'
import express from 'express'

import { Request } from './request.js'
import { Profile } from './profile.js'

const PORT = 3000

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})

const start = async () => {

  const mongoosedb = await mongoose.connect('mongodb://localhost/')
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

start()


