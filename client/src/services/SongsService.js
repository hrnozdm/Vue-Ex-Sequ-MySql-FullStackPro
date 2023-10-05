import Api from '@/services/Api';


export default{    
    index(){
      return Api().get('songs');

    },

    addMusic(musicInfo){
        return Api().post('addMusic',musicInfo);
    },

    getSongById(id){
         return Api().get(`songbyid/${id}`);
    },

    updateSongById(id,updateSong){
        return Api().put(`updatesongbyid/${id}`,updateSong);
    },

    deleteSong(id){
        return Api().delete(`deleteSong/${id}`);
    }
}

