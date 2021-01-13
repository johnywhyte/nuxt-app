<template>
     <section
      class="hero is-black is-medium">
      <div class="hero-body">
        <div
          class="hero-img"
          :style="{ background : `url(https://images.unsplash.com/photo-1593087130576-389402bc050a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80`}">
        </div>
        <div class="container">
          <h1 class="title">
          Your one stop multi vendor e-commerce
           
          </h1>
          <h2 class="subtitle">
             we have everything you need 
          </h2>
          <a target="_" :href="'#'" class="button is-danger">shop now</a>
        </div>
      </div>
    </section>
</template>

<style scoped lang="scss">


  // hero
  .hero-body {
    position: relative;
  }
  .hero-img {
    opacity: 0.8;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .user-avatar {
    display: inline-block;
  }
  .is-black {
    background-color: black;
  }
  .title {
    font-weight: bold;
    font-size: 45px;
  }
  .subtitle {
    /*font-weight: bold;*/
    font-size: 25px;
  }
  .author-name {
    font-size: 20px;
    font-weight: bold;
  }
  // hero
</style>