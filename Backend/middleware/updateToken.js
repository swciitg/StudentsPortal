import { Admins } from "../Models/Admins.js";
import { User } from "../Models/User.js";
const middleware ={};

 middleware.checkAdminToken = async function(req,res,next){
    const email=req.body['Request sent to'];
    const trimmedEmail = email.replace(/@iitg\.ac\.in$/, '');
    const user_token=req.body.token
    const Admin = await Admins.findOne({ email: trimmedEmail });

    if(Admin){
        if(Admin.token==user_token){
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
    else{
        return await res.status(401).json({
            status:"error",
            data:[],
            msg:"Unauthorised"
        });
    }
    
    
}

export { middleware };
