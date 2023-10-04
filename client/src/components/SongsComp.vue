<template>
  <div>
    <PanelComp title="Songs">
      <div slot="action">
        <router-link to="/createSong" class="text-white" style="text-decoration: none;">
          <button class="btn rounded-circle btn-success">+</button>
        </router-link>
      </div>
      <div class="d-flex justify-content-around" v-for="song in songs" :key="song.id">
        <div class="d-flex justify-content-start align-items-center flex-wrap">
          <div class="m-2 ml-4">
            <img :src="song.albumImageUrl" alt="" class="albumImage">
          </div>
          <div class="m-2 ml-4">
            <h5>{{ song.title }}</h5>
            <p class="mb-1"><strong>Artist:</strong> {{ song.artist }}</p>
            <p class="mb-1"><strong>Genre:</strong> {{ song.genre }}</p>
            <p class="mb-1"><strong>Album:</strong> {{ song.album }}</p>
          </div>
          
          <div class="m-2 ml-4">
            <button class="btn  btn-circle btn-success"> <router-link :to="'/viewSong/' + song.id" class="btn btn-circle btn-success">View</router-link></button>
          </div>
        </div>
      </div>
    </PanelComp>
  </div>
</template>

<script>
import PanelComp from "./PanelComp.vue";
import SongsService from "../services/SongsService.js"
export default {
  components: {
    PanelComp,
  },
  data() {
    return {
      songs: null,
    };
  },

  methods: {
    async getAllSongs(){
      const response = await SongsService.index();
      this.songs = response.data;
    }
  },

  mounted() {
    this.getAllSongs();
  },
};
</script>

<style>
.albumImage {
  max-width: 100px;
  height: auto;
}  
</style>
