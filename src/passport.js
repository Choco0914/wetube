import dotenv from "dotenv";
import passport from "passport";
import GithubStrategy from "passport-github";
import GoogleStrategy from "passport-google-oauth20";
import User from "./models/User";
import {
  githubLoginCallback,
  googleLoginCallback
} from "./controllers/userController";
import routes from "./routes";

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://hidden-beach-16987.herokuapp.com${routes.githubCallback}`
        : `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GG_ID,
      clientSecret: process.env.GG_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://hidden-beach-16987.herokuapp.com${routes.googleCallback}`
        : `http://localhost:4000${routes.googleCallback}`,
      scope: ["profile", "email"]
    },
    googleLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
