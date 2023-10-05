<template>
    <div>
        <PanelComp title="Edit Song">
            <div class="container mt-5">
              <div class="row">
                <div class="col-md-6 offset-md-3">
                  <form>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <div class="mb-3">
                          <label class="form-label">Title</label>
                          <input style="width: 300px;"
                            type="text"
                            class="form-control"
                            v-model="song.title"
                            placeholder="Şarkı Başlığını Giriniz"
                            required
                            
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Artist</label>
                          <input style="width: 300px;"
                            type="text"
                            class="form-control"
                            v-model="song.artist"
                            placeholder="Şarkıcının Adını Giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Genre</label>
                          <input style="width: 300px;"
                            type="text"
                            class="form-control"
                            v-model="song.genre"
                            placeholder="Şarkının Türünü Giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Albüm</label>
                          <input style="width: 300px;"
                            type="text"
                            class="form-control"
                            v-model="song.album"
                            placeholder="Albümü Giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Albüm Linki</label>
                          <input style="width: 300px;"
                            type="text"
                            class="form-control"
                            v-model="song.albumImageUrl"
                            placeholder="Albümü Linkini Giriniz"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Youtube Id</label>
                          <input style="width: 300px;"
                            type="text"
                            class="form-control"
                            v-model="song.youtube_id"
                            placeholder="Youtube id giriniz"
                            required
                          />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div class="mb-3 ml-4">
                          <label class="form-label">Tab</label>
                          <textarea style="width:200px;height:200px"
                            class="form-control"
                            v-model="song.tab"
                            placeholder="TAB"
                            required
                          ></textarea>
                        </div>
                        <div class="mb-3 ml-4">
                          <label class="form-label">Lyrics</label>
                          <textarea style="width:200px;height:200px"
                            class="form-control"
                            v-model="song.lyrics"
                            placeholder="Lyrics"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
               
              <div class="text-center">
                <button class="btn btn-primary" @click="saveSong()">Şarkıyı Kaydet</button>
              </div>
           
            </div>
        </PanelComp>
    </div>
</template>



<script>
import PanelComp from './PanelComp.vue';
import SongsService from '@/services/SongsService';
export default{
    data() {
        return {
        song: {
        title: "",
        artist: "",
        genre: "",
        album: "",
        albumImageUrl: "",
      },
        }
    },

    components:{
        PanelComp,
    },
    methods: {
    async editSong() {
      try {
        const songId = this.$route.params.id;
        const response = await SongsService.getSongById(songId);        
        this.song = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    
    async saveSong() {
      try {
        const updatedSongData = {
          title: this.song.title,
          artist: this.song.artist,
          genre: this.song.genre,
          album: this.song.album,
          albumImageUrl: this.song.albumImageUrl,
          tab: this.song.tab,
          lyrics: this.song.lyrics,
          youtube_id: this.song.youtube_id,
        };
        
        const songId = this.$route.params.id;
        
       const response= await SongsService.updateSongById(songId, updatedSongData);

       if (response.data){
         alert('Güncelleme işleminiz başarılı')
       }
        
       
        this.$router.push('/songs');
      } catch (error) {
        console.error(error);
       
      }
    },
  },
  mounted() {
    this.editSong(); 
  },
}

</script>



<style>


</style>