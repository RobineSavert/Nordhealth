<template>
  <section style="background-repeat: no-repeat; background-position: bottom right; height: 80vh; position: relative;">
    <section class="n-grid-center n-margin-bs-xl">
      <img :src="logo" alt="Logo" style="width: 75%" />
    </section>
    <section class="n-container-m n-margin-i-auto n-padding-bs-xxl justify-center text-center n-items-center n-margin-b-auto">
      <h2 v-if="user.receiveUpdates" class="n-typescale-xxl">
        You have successfully signed up to receive information about our awesome new health care product at your mailbox {{ user.email }} and we will be e-mailing you about occasional product updates and announcements. Thanks!
      </h2>

      <h2 v-else class="n-typescale-xxl">
        You have successfully signed up to receive information about our awesome new health care product at your mailbox {{ user.email }}, but unfortunately you did not check the checkbox to receive any more updates on our product, so we won't be e-mailing you in the future. Thanks!
      </h2>

      <section class="n-grid-center n-margin-bs-xl">
        <NuxtLink to="/" class="n-margin-be-l">
          <provet-button>Go back to the sign up form</provet-button>
        </NuxtLink>
      </section>
    </section>

    <img class="n-justify-start n-align-end n-illustration" :src="bg2" alt="background" style="position: absolute; bottom: 40px; left: 40px;" />
  </section>
</template>

<script setup lang="ts">
import logo from "~/assets/img/logo.svg";
import bg2 from "~/assets/img/bg2.svg";
import { useUserStore } from '~/stores/user'

const userStore = useUserStore();
const user = userStore.user;
</script>

<style lang="scss">
.n-logo {
  width: 50%;
  display: block;
  margin: auto;
}

@keyframes fadeIn3 {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.n-illustration {
  transition-timing-function: ease-out;
  animation-delay: .3s;
  animation-duration: .8s;
  animation-fill-mode: both;
  animation-name: fadeIn3;
  opacity: 0;
}
</style>