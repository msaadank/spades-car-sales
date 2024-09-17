import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id:"credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any): Promise<any>{
                await dbConnect()
                try {
                    const user = await UserModel.findOne({
                        email: credentials.identifier
                    })
                    if(!user){
                        throw new Error("No admin found with this email")
                    }
                    if(user.role !== "admin"){
                        throw new Error("Unauthorized Action")
                    }
                    const isPasswordCorrect=await bcrypt.compare(credentials.password, user.password)

                    if(isPasswordCorrect){
                        return user
                    } else {
                        throw new Error("Incorrect password")
                    }
                } catch (error: any) {
                    throw new Error(error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {

            if(user){
                token._id = user._id
                token.role = user.role
            }

            return token
        },
        async session({ session, token }) {
            if(token){
                session.user._id = token._id
                session.user.role = token.role
            }
            return session
        },
    },
    pages: {
        signIn: '/admin/spades-car-sales/login',
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}