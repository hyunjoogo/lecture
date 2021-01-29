export const localsMiddleware = (req, res, next) => {
  res.locals.home = "Home <- locals";
  res.locals.login = "Login <- locals";
  res.locals.photos = "Photos <- locals";
  res.locals.profile = "Profile <- locals";
  next();
};
