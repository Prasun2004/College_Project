import User from "../models/usermodels.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcryptjs";

export const register =async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success:false,
                message:"please enter all details"
            })
        }
            const user=await User.findOne({email});
            if (user) {
                return res.status(400).json({
                    success:false,
                    message:"user exist already"
                })
            }
            const hashpassword=await bcrypt.hash(password,5);
            await User.create({
                name,
                email,
                password:hashpassword
            });
            return res.status(201).json({
                success:true,
                message:"registration successfully completed"
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed  to registration"
        })
    }
}

export const login =async(req,res)=>{
    try {
        const {email,password}=req.body;
        if ( !email || !password) {
            return res.status(400).json({
                success:false,
                message:"please enter all details"
            })
        }
            const user=await User.findOne({email});
            if (!user) {
                return res.status(400).json({
                    success:false,
                    message:"user doesnot exist"
                })
            }
             const isPassword=await bcrypt.compare(password,user.password);
             if (!isPassword) {
                return res.status(400).json({
                    success:false,
                    message:"incorrect password"
                })
            }
            generateToken(res,user,`welcome back ${user.name}`);  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed  to login"
        })
    }
}

export const logout =async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:"logout successful"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed  to logout"
        })
    }
}

export const getuserProfile=async(req,res)=>{
     try {
        const userId=req.id;
        const user =await User.findOne({userId});
     } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"failed  to get user profile"
        })
     }
}