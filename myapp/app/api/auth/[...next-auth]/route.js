import db from "@/lib/db";
import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { signJwtToken } from "@/lib/jwt";
import bcrypt from 'bcrypt'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: {label: 'Email', type: 'text', placeholder: 'John Doe'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials, req){
                const {email, password} = credentials

                await db.connect()
                                
                const user = await User.findOne({ email })

                if(!user){
                    throw new Error("Invalid input")
                }

                const comparePass = await bcrypt.compare(password, user.password)

                if(!comparePass){
                    throw new Error("Invalid input")
                } else {
                    const { password, ...currentUser } = user._doc

                    const isAdmin = email === "thejayadad@gmail.com";

                    const accessToken = signJwtToken({ ...currentUser, isAdmin }, {expiresIn: '6d'})

                    return {
                        ...currentUser,
                        isAdmin,
                        accessToken
                    }
                }
            }
        })
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async jwt({ token, user }){
            if(user){
                token.accessToken = user.accessToken
                token._id = user._id
                token.isAdmin = user.isAdmin || false; 
            }

            return token
        },
        async session({ session, token }){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
                session.user.isAdmin = token.isAdmin || false; 
            }

            return session
        }
    }
})

export {handler as GET, handler as POST}
