const AuthenticationController = require("./controller/AuthenticationController");
const SongsController = require("./controller/SongsController");
const AuthenticationControllerMiddleware =require("./middleware/AuthenticationControllerMiddleware");

module.exports = (app) => {
  app.post("/register",AuthenticationControllerMiddleware.register ,AuthenticationController.register);
  app.post("/login",AuthenticationController.login);
  app.get("/",AuthenticationController.home);
  app.get('/songs',SongsController.getSongs);
  app.post('/addMusic',SongsController.addMusic);
  app.get('/songbyid/:id',SongsController.getSongById);
  app.put('/updatesongbyid/:id',SongsController.updateSongById);
  app.delete('/deleteSong/:id',SongsController.deleteSongById);
};
