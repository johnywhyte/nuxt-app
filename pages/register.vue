<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://via.placeholder.com/300">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.firstName"
                    @blur="$v.form.firstName.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="First Name">
                  <div v-if="$v.form.firstName.$error" class="form-error">
                    <span  v-if="!$v.form.firstName.required" class="help is-danger">First Name is required</span>
                    <!-- <span v-if="!$v.form.firstName.minLength" class="help is-danger">Username minimum Length is 6 characters</span> -->
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                  v-model="form.lastName"
                   @blur="$v.form.lastName.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Last Name">
                  <div v-if="$v.form.lastName.$error" class="form-error">
                    <span v-if="!$v.form.lastName.required" class="help is-danger">Last Name is required</span>
                    <!-- <span v-if="!$v.form.lastName.minLength" class="help is-danger">Name minimum Length is 6 characters</span> -->
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                  v-model="form.email"
                   @blur="$v.form.email.$touch()"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email">
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger">Email is required</span>
                    <span v-if="!$v.form.email.email" class="help is-danger">Email address is not valid</span>
                  </div>
                </div>
              </div>
    
              <div class="field">
                <div class="control">
                  <input
                  v-model="form.password"
                   @blur="$v.form.password.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password">
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span v-if="!$v.form.password.required" class="help is-danger">Password is required</span>
                    <span v-if="!$v.form.password.minLength" class="help is-danger">Password minimum length is 6 letters</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                  v-model="form.phone"
                   @blur="$v.form.phone.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Phone Number"
                    autocomplete="off">
                  <div v-if="$v.form.phone.$error" class="form-error">
                    <span v-if="!$v.form.phone.required" class="help is-danger">Phone Number is required</span>
                    <!-- <span v-if="!$v.form.phone.sameAs" class="help is-danger">Password confirmation should be the same as password</span> -->
                  </div>
                </div>
              </div>
              <button 
              :disabled = "$v.form.$invalid"
              @click.prevent="register" 
              type="button" 
              class="button is-block is-info is-large is-fullwidth">
              Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength} from 'vuelidate/lib/validators'
// import {supportedFileType } from '@/helpers/validators'
export default {
  //  middleware: 'guest',
  data() {
    return{
    form: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phone: null,
    }
   }
  },
  validations:{
    form:{
      firstName:{
        required,
  
      },
      lastName:{
        required,
    
      },
  
      email:{
        required,
        email
      },
      password:{
        required,
         minLength: minLength(6)
      },
      phone:{
        required,
       
      }
    }
  },
 
   computed:{
    isFormValid(){
      return !this.$v.form.$invalid
    }
  },
  methods:{
    register(){
      this.$v.form.$touch()
      if(this.isFormValid){

      this.$store.dispatch('auth/register', this.form)
      .then(() => this.$router.push('/login'))
      .catch(error => this.$toasted.error(error, {duration: 3000}) )
    
      console.log(this.form)
    }
    }
  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    height: 128px;
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>
