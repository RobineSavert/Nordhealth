<template>
  <div class="bg-design" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <section class="n-grid-center n-margin-bs-xl n-margin-be-l">
      <img :src="logo" alt="Logo" style="width: 75%" />
    </section>
    <section class="n-container-m n-margin-i-auto n-gap-none equal-height-columns">
      <div
          class="min-height-image"
          :style="{ backgroundImage: 'url(' + product + ')' }"
      >
      </div>
      <div class="n-display-flex n-align-items-center n-height-100p">
        <SignUpForm />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import product from '~/assets/img/product.jpg'
import bg from '~/assets/img/bg.svg'
import logo from "~/assets/img/logo.svg";
import SignUpForm from "~/pages/signupform.vue"
</script>

<style lang="scss">
.bg-design {
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 100vh;
}

.equal-height-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
}

.min-height-image {
  min-height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
}

.n-logo {
  width: 50%;
  display: block;
  margin: auto;
}

video {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>