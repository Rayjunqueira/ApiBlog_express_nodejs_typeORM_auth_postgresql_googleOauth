import { 
    Strategy as GoogleStrategy, 
    Profile,
    VerifyCallback, 
} from 'passport-google-oauth20';
import { AppDataSource } from '../database/config';
import { User } from '../entities/User';
import passport from 'passport';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
    try {
      
      const defaultUser = {
        username: profile.name?.givenName,
        email: profile.emails,
        googleId: profile.id,
      }

      const userAlreadyExists = await AppDataSource.manager.findOneBy(User, {
        googleId: profile.id,
      });

      if (!userAlreadyExists) {
        await AppDataSource.manager.save(defaultUser);
      }

      done(null, defaultUser);

    } catch (err) {
      console.log(err);
    }
  }
));