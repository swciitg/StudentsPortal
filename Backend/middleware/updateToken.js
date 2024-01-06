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

export {middleware};