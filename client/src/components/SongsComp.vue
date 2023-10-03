<template>
  <div>
    <PanelComp title="Songs">
      <div class="songs" v-for="song in songs" :key="song.id">
         {{ song.title }}-{{ song.artist }}-{{ song.genre }}-{{ song.album }}
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
        const response=await SongsService.index();
        this.songs=response.data;
      }

     
   },

   mounted() {
     this.getAllSongs();
   },
};
</script>

<style></style>
