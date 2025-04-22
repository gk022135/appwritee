"server"

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

async function GET (req :NextApiRequest) {
    try {
        const response = NextResponse.json({
            message :
        })
    } catch (error : any) {
        return NextResponse.json({error : error.message},
            {status : 500}
        )
    }
}