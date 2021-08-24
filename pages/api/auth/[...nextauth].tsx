import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Layout from '@/components/Layout'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
