import multer from "multer";
import routes from "./routes";
import app from "./app";

const multerVideo = multer({ dest: "videos/" });

export const localsMiddleware = (req, res, next) => {
  app.locals.siteName = "Wetube";
  app.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
