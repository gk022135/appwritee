"use server";

import { connect } from '@/configs/dbconfigs';
import User from '@/models/UserModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

connect();

export async function POST(req: NextRequest) {
  try {
    console.log("hello ....")
    const body = await req.json();
    const { email, password } = body;
    console.log(body)

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User does not exist, please sign up first" }, { status: 400 });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }


    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    console.log("secrete key",process.env.SECRETE_KEY!)
    const token = await jwt.sign(tokenData, "Gaurav", { expiresIn: "1d" });
    
    console.log("token", token)
    const response = NextResponse.json({
      message: "Login successfully",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
