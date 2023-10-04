<template>
  <div>
    <PanelComp title="Login">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="mb-4">Giriş Yap</h2>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">E-posta</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-posta adresiniz"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Şifre</label>
                <input type="password" class="form-control" placeholder="Şifre" v-model="password"/>
              </div>
              <button type="button" class="btn btn-primary" @click="login()">Giriş Yap</button>
            </form>
          </div>
        </div>
      </div>
    </PanelComp>
   
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import PanelComp from './PanelComp.vue';
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            const response = await AuthenticationService.login({
                email: this.email,
                password: this.password,
            });
            
            if (response.data) {
                this.$store.dispatch('setToken',response.data.token);
                this.$store.dispatch('setUser',response.data.user);
                alert('giriş başarılı');
                this.$router.push({
                  name:'CreateSongs'
                })
            }
            else {
                alert('giriş başarısız');
            }
        }
    },
    components: { PanelComp }
};
</script>

<style>

</style>
