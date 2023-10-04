<template>
  <div>

    <PanelComp title="Kayıt Ol">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="mb-4">Kayıt Ol</h2>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">E-posta</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Şifre</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Şifre"
                />
              </div>
              <button type="button" class="btn btn-primary" @click="register()">
                Kayıt Ol
              </button>
            </form>
          </div>
        </div>
      </div>
    </PanelComp>
   


  
  

   
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import PanelComp from '@/components/PanelComp.vue';

export default{
    data() {
        return {
            email: '',
            password: '',
            error: '',
            dialog: false,
        };
    },
    methods: {
        async register() {
            try {
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password,
                });
               
                if (response.data) {
                     this.error = 'Kayıt Başarılı';
                     this.$store.dispatch('setToken',response.data.token);
                     this.$store.dispatch('setUser',response.data.user);
                     
                     
                     alert(this.error);
                }
            }
            catch (error) {
                this.error = error.response.data.error;
                alert(this.error);
            }
        },
    },
    components: { PanelComp }
}
</script>

<style>
.error {
  background-color: red;
}
</style>
