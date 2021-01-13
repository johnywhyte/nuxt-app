<template>

  <nav class="navbar is-active" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <h1 class="brand-title">ecommerce</h1>
      </nuxt-link>
      <!-- Adds click to open -->
      <!-- Adds active class -->
      <a @click="() => {}"
         role="button"
         class="navbar-burger burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Adds active class -->
    <div id="navbarBasicExample"
         class="navbar-menu">
      <!-- <div class="navbar-start">
       
      </div> -->

      <div class="navbar-end">
            <!-- If Authenticated -->
            <template v-if="isAuth">
              <nuxt-link to="/" class="navbar-item">
                  <fa icon="user" class="m-r-xs"/>
                   Hi, {{user.data.firstName}}
              </nuxt-link>
              <nuxt-link to="#" class="navbar-item">
                <fa icon="shopping-cart" class="m-r-xs"/>
                Cart
              </nuxt-link>
               <nuxt-link to="#" class="navbar-item">
                <fa icon="question" class="m-r-xs"/>
                Help
              </nuxt-link>

            <div class="navbar-item">
               <div class="buttons">
              <a class="button is-primary" >
                Logout
              </a>
              </div>
              </div>
            </template>
              
            <template v-else>
              <div class="navbar-item">
                <div class="buttons">
              <nuxt-link to="/register" class="button is-primary">
                Sign up
              </nuxt-link>
              <nuxt-link to="/login" class="button is-light">
                Log in
              </nuxt-link>
              </div>
              </div>
            </template>
         
        
      </div>
    </div>
  </nav>

</template>

<script>
import {mapGetters} from 'vuex'
export default {

  computed:{
    ...mapGetters({
      'user': 'auth/authUser',
      'isAuth': 'auth/isAuthenticated',
    })
  
  },
}
</script>

<style lang="scss" scoped>
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }
  .navbar-brand {
    padding-right: 30px;
  }
  .avatar {
    margin-right: 5px;
  }
</style>
