import Api from '@/services/Api';


export default{    
    index(){
      return Api().get('songs')

    },

    addMusic(musicInfo){
        return Api().post('addMusic',musicInfo);
    },

    getSongById(id){
         return Api().get(`songbyid/${id}`);
    }
}

