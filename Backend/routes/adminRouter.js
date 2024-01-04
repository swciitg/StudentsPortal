const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const mongooseAdapter = require('@adminjs/mongoose');
const Request = require('../Models/Request');
const User = require('../models/User');

// Register Mongoose adapter with AdminJS
AdminJS.registerAdapter({
    Resource: mongooseAdapter.Resource,
    Database: mongooseAdapter.Database,
});

// Set up AdminJS
const adminOptions = {
    resources: [Request, User],
};

const admin = new AdminJS(adminOptions);

// Build AdminJS router
const adminRouter = AdminJSExpress.buildRouter(admin);

// Export the adminRouter for use in app.js
module.exports = {
    adminRouter,
    admin, // Export AdminJS instance for watching changes
};