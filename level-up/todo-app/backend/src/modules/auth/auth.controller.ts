import { Request,Response } from "express";

import { AuthService } from "./auth.service.js";
import { SignupDto } from "./dto/signup.dto.js";

export class AuthController{
    private authService = new AuthService();

    // instead of {} => Record<string,never>
    signup = async (req:Request<Record<string,never>, Record<string,never>, SignupDto>, res:Response)=>{
        const {email,password} = req.body;
        const user = await this.authService.signup(email,password);
        return  res.json(user);
    }
}