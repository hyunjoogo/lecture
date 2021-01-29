export const localsMiddleware = (req, res, next) => {
  res.locals.home = "Home";
  res.locals.filter = "filter";
  res.locals.movieDetail = "movieDetail";
  next();
};
