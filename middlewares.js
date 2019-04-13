import routes from "./routes";
import app from "./app";

export const localsMiddleware = (req, res, next) => {
  app.locals.siteName = "Wetube";
  app.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};
