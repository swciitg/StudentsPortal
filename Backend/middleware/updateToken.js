<<<<<<< HEAD
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
=======
import { Admins } from "../Models/Admins.js";
const middleware ={};

 middleware.checkAdminToken = async function(req,res,next){
    const email=req.body.email;
    const Admin = await Admins.findOne({email});
    if(Admin){
        if(Admin.token==req.body.token){
            return next();

        }
        else{
            return await res.status(401).json({
                status:"error",
                data:[],
                msg:"Unauthorised"
            });
        }
    }
    return await res.status(401).json({
        status:"error",
        data:[],
        msg:"Unauthorised"
    });
    
}
>>>>>>> 01c3dd52424a0a1a0af398404e5ef2ba0635df9f

export { middleware };
