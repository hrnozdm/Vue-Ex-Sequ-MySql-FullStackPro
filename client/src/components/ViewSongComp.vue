<template>
    <div>
      <PanelComp title="View Song">
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-6">
              <img :src="song.albumImageUrl" alt="Album Cover" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
              <h2>{{ song.title }}</h2>
              <p><strong>Artist:</strong> {{ song.artist }}</p>
              <p><strong>Genre:</strong> {{ song.genre }}</p>
              <p><strong>Album:</strong> {{ song.album }}</p>
              <p><strong>Lyrics:</strong> {{ song.lyrics }}</p>
              <p><strong>Tab:</strong> {{ song.tab }}</p>
            </div>
          </div>
        </div>
      </PanelComp>
    </div>
  </template>
  
  <script>
  import SongsService from '@/services/SongsService';
  import PanelComp from './PanelComp.vue';
  
  export default {
    data() {
      return {
        song: {},
      };
    },
    methods: {
      async getSongById() {
        try {
          const songId = this.$route.params.id;
          const response = await SongsService.getSongById(songId);
          this.song = response.data;
        } catch (error) {
          console.error('API çağrısı sırasında bir hata oluştu:', error);
        }
      },
    },
    mounted() {
      this.getSongById();
    },
    components: { PanelComp },
  };
  </script>
  
  <style scoped>
  /* İhtiyaç duyduğunuz özel stilleri burada ekleyebilirsiniz */
  </style>
  