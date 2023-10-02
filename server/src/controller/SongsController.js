const {Song} = require("../models/index")

module.exports={
    async addMusic(req,res){
      try {
        const song = await Song.create({
          title:req.body.title,
          artist:req.body.artist,
          genre:req.body.genre,
          album:req.body.album,
          albumImageUrl:req.body.albumImageUrl,
          youtubeId:req.body.youtubeId,
          lyrics:req.body.lyrics,
          tab:req.body.tab
        });
        res.json(song)
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
    
}