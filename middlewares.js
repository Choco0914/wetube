import multer from "multer";
import routes from "./routes";
import app from "./app";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  app.locals.siteName = "Wetube";
  app.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
