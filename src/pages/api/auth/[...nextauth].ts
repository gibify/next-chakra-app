import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"


const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
    secret: process.env.SECRET,
    callbacks: {
      async jwt(token, user, account, profile, isNewUser) {
        if (account?.accessToken) {
          token.accessToken = account.accessToken;
        }
        return token;
      },
    }
}

export default NextAuth(authOptions);