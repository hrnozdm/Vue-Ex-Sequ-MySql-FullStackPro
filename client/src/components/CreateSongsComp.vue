<template>
    <div>
      <PanelComp title="Create Song">
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
                        v-model="title"
                        placeholder="Şarkı Başlığını Giriniz"
                        required
                        
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Artist</label>
                      <input style="width: 300px;"
                        type="text"
                        class="form-control"
                        v-model="artist"
                        placeholder="Şarkıcının Adını Giriniz"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Genre</label>
                      <input style="width: 300px;"
                        type="text"
                        class="form-control"
                        v-model="genre"
                        placeholder="Şarkının Türünü Giriniz"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Albüm</label>
                      <input style="width: 300px;"
                        type="text"
                        class="form-control"
                        v-model="album"
                        placeholder="Albümü Giriniz"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Albüm Linki</label>
                      <input style="width: 300px;"
                        type="text"
                        class="form-control"
                        v-model="albumImageUrl"
                        placeholder="Albümü Linkini Giriniz"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Youtube Id</label>
                      <input style="width: 300px;"
                        type="text"
                        class="form-control"
                        v-model="youtube_id"
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
                        v-model="tab"
                        placeholder="TAB"
                        required
                      ></textarea>
                    </div>
                    <div class="mb-3 ml-4">
                      <label class="form-label">Lyrics</label>
                      <textarea style="width:200px;height:200px"
                        class="form-control"
                        v-model="lyrics"
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
            <button class="btn btn-primary" @click="addMusic">Şarkıyı Kaydet</button>
          </div>
       
        </div>
      </PanelComp>
    </div>
  </template>
  
  <script>
  import PanelComp from './PanelComp.vue';
  import SongsService from '@/services/SongsService';
  export default {
    components: { PanelComp },
    data() {
      return {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtube_id: '',
        tab: '',
        lyrics: '',
      };
    },

    methods: {
         async addMusic(){
             const song=await SongsService.addMusic({
                title:this.title,
                artist:this.artist,
                genre:this.genre,
                album:this.album,
                albumImageUrl:this.albumImageUrl,
                youtube_id:this.youtube_id,
                tab:this.tab,
                lyrics:this.lyrics
             });
             if (song.data){
                 alert('Music Kaydınız Başarılı')
             }
        }
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  