import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User.js";

function initialize(passport) {
  const authenticateUser = async (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate(
      { googleId: profile.id },
      { displayName: profile.displayName },
      (err, user, created) => {
        return cb(err, user);
      }
    );
  };

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.SERVER_URL + "/api/v1/auth/google/callback",
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
}

export default initialize;
