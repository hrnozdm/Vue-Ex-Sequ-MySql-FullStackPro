const AuthenticationController = require("./controller/AuthenticationController");
const AuthenticationControllerMiddleware =require("./middleware/AuthenticationControllerMiddleware");

module.exports = (app) => {
  app.post("/register",AuthenticationControllerMiddleware.register ,AuthenticationController.register);

  app.post("/login",AuthenticationController.login);


  app.get("/",AuthenticationController.home);
};
