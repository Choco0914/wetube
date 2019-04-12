import routes from "./routes";
import app from "./app";

export const localsMiddleware = (req, res, next) => {
  app.locals.siteName = "Wetube";
  app.locals.routes = routes;
  next();
};
