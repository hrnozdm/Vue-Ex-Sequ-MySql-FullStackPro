<template>
    <div>
        <SongsComp/>
    </div>
</template>


<script>
import SongsService from '@/services/SongsService';
import SongsComp from './SongsComp.vue';
export default {
    data() {
        return {};
    },
    methods: {
        async deleteSong() {
            try {
                const songId = this.$route.params.id;
                const response = await SongsService.deleteSong(songId);
                if (response.data) {
                    alert('Music kaydınız silindi');
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.deleteSong();
    },
    components: { SongsComp }
}
</script>




<style>


</style>