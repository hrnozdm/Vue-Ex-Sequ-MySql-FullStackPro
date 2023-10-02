<template>
    <div class="song">
        <PanelComp/>
    </div>
</template>
  
<script>
import SongsService from '../services/SongsService';
import PanelComp from './PanelComp';
export default {
    components:{
        PanelComp
    },
    data (){
        return{
            songs:null
        }
    },
    async mounted (){
        this.songs = await SongsService.index() 
    }
}

</script>
  
<style>
.error {
    background-color: red;
}
</style>
  