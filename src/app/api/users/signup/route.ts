import {connect} from '@/configs/dbconfigs'
import User from '@/models/UserModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';


connect();


export async function POST (req : NextRequest){
    try {
        const reqBody = await req.json();
        const {username, email, password} = reqBody

        console.log(reqBody);
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error : "User already exists"}, {status : 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password : hashedPassword
        })

        const saveUser = await newUser.save();
        console.log(saveUser);

        return NextResponse.json({message : "User Created succesfully",
            success : true,
            saveUser
        },{status : 200})

        
    } catch (error:any) {
        return NextResponse.json({
            error : error.message
        },{status : 500})
    }
}