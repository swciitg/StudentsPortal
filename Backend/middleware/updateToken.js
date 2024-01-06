import { Admins } from "../Models/Admins";
middleware = {};

middleware.checkAdminToken = function (req, res, next) {
  const email = req.body.email;
  const Admin = Admins.findOne({ email });
  console.log(Admin);
  if (Admin) {
    if (Admin.token == req.body.token) {
      return next();
    } else {
      return res.status(401).json({
        status: "error",
        data: [],
        msg: "Unauthorised",
      });
    }
  }
  return res.status(401).json({
    status: "error",
    data: [],
    msg: "Unauthorised",
  });
};

export { middleware };
