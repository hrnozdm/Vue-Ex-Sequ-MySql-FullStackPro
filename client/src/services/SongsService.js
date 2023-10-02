import Api from '@/services/Api';


export default{
    // index(){
    //   return Api().get('songs')
    // }

    
    musicList(credentials){

      return Api().post('addMusic',credentials)

    }
}

