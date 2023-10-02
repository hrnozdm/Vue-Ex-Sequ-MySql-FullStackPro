<template>
    <div>
      <h1 class="title">Müzik Listesi</h1>
  
      <!-- Müziklerin listesi -->
      <ul class="music-list">
        <li v-for="music in musicList" :key="music.id" class="music-item">
          {{ music.title }} - {{ music.artist }}
        </li>
      </ul>
  
      <!-- Müzik ekleme formu -->
      <form @submit.prevent="addMusic" class="add-music-form">
        <div class="form-group">
          <label for="title">Şarkı Adı:</label>
          <input type="text" id="title" v-model="newMusic.title" required>
        </div>
        <div class="form-group">
          <label for="artist">Sanatçı:</label>
          <input type="text" id="artist" v-model="newMusic.artist" required>
        </div>
        <div class="form-group">
          <label for="genre">Şarkı Türü:</label>
          <input type="text" id="genre" v-model="newMusic.genre" required>
        </div>
        <div class="form-group">
          <label for="album">Şarkı Albümü:</label>
          <input type="text" id="album" v-model="newMusic.album" required>
        </div>
        <div class="form-group">
          <label for="albumImageUrl">Şarkı Adı:</label>
          <input type="text" id="albumImageUrl" v-model="newMusic.albumImageUrl" required>
        </div>
        <div class="form-group">
          <label for="youtubeId">Şarkı Adı:</label>
          <input type="text" id="youtubeId" v-model="newMusic.youtubeId" required>
        </div>
        <div class="form-group">
          <label for="lyrics">Şarkı Adı:</label>
          <input type="text" id="lyrics" v-model="newMusic.lyrics" required>
        </div>
        <div class="form-group">
          <label for="tab">Şarkı Adı:</label>
          <input type="text" id="tab" v-model="newMusic.tab" required>
        </div>
        <button type="submit" class="add-button">Ekle</button>
      </form>
    </div>
  </template>
  
  <script>
  import SongsService from '@/services/SongsService';
  export default {
    data() {
      return {
        musicList: [
          // Müziklerin başlangıç listesi boş olabilir veya önceden tanımlanmış müzikler içerebilir
        ],
        newMusic: {
          title: '',
          artist: '',
          genre:'',
          album:'',
          albumImageUrl:'',
          youtubeId:'',
          lyrics:'',
          tab:''
        }
      };
    },
    methods: {
      async addMusic() {
        // Yeni müziği listeye ekleyin
        const response = await SongsService.musicList({
          title:this.newMusic.title,
          artist:this.newMusic.artist,
          genre:this.newMusic.genre,
          album:this.newMusic.album,
          albumImageUrl:this.newMusic.albumImageUrl,
          youtubeId:this.newMusic.youtubeId,
          lyrics:this.newMusic.lyrics,
          tab:this.newMusic.tab
        })

        if (response.data) {
          alert('Kayıt Başarılı')
        } else {
          alert('Giriş Başarısız')
        }
      }
     
    }
  };
  </script>
  
  <style scoped>
  /* Müzik listesi bileşeninin özel stil tanımlamaları */
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .music-list {
    list-style: none;
    padding: 0;
  }
  
  .music-item {
    margin: 5px 0;
  }
  
  .add-music-form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .add-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .add-button:hover {
    background-color: #0056b3;
  }
  </style>
  