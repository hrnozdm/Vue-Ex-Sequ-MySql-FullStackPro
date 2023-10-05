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

    async getSongs(req,res){
      try {
        const getAllSongs=await Song.findAll();
        res.json(getAllSongs);
      } catch (error) {
        res.status(400).json({error:error.message});
      }

     
    },

    async getSongById(req,res){
      try {
        const song=await Song.findOne({
          where:{
            id:req.params.id,
          }
        })
        res.json(song)
      } catch (error) {
        res.json(error)
      }
       
    },

    async updateSongById(req, res) {
      try {
        const songId = req.params.id;
        const updatedSongData = req.body; // Güncellenecek verileri alın
  
        const song = await Song.findOne({
          where: {
            id: songId,
          },
        });
  
        if (!song) {
          return res.status(404).json({ error: 'Şarkı bulunamadı' });
        }
  
       
        song.title = updatedSongData.title;
        song.artist = updatedSongData.artist;
        song.genre = updatedSongData.genre;
        song.album = updatedSongData.album;
        song.albumImageUrl = updatedSongData.albumImageUrl;
        song.tab = updatedSongData.tab;
        song.lyrics = updatedSongData.lyrics;
        song.youtube_id = updatedSongData.youtube_id;
  
       
        await song.save();
  
        res.json(song);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
    
    async deleteSongById(req,res){
      try {
        const songId=req.params.id;
        const songDelete = await Song.destroy({
          where: {
            id: songId,
          },
        });
         res.json(songDelete);


      } catch (error) {
        console.log(error);
      }
    }
    
    
}