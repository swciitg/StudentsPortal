import { Admins } from "../Models/Admins.js";
<<<<<<< HEAD
const middleware = {};

middleware.checkAdminToken = async function (req, res, next) {
  const email = req.body.email;
  const Admin = await Admins.findOne({ email });
  if (Admin) {
    if (Admin.token == req.body.token) {
      return next();
    } else {
      return await res.status(401).json({
        status: "error",
        data: [],
        msg: "Unauthorised",
      });
    }
  }
  return await res.status(401).json({
    status: "error",
    data: [],
    msg: "Unauthorised",
  });
};
=======
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
>>>>>>> f7ef11524d1a90bdff2b3763418feb267f4d4112

export { middleware };
