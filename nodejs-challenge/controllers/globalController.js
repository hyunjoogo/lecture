export const home = (req, res) =>
  res.render("home", {
    pagetitle: "Home",
  });
export const login = (req, res) => res.render("login", { pagetitle: "Login" });
export const photos = (req, res) =>
  res.render("photos", { pagetitle: "Photos" });
export const profile = (req, res) =>
  res.render("profile", { pagetitle: "Profile" });
