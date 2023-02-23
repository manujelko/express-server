exports.get404 = (req, res, next) => {
  req.status(404).render("404", { pageTitle: "Page Not Found" });
};
