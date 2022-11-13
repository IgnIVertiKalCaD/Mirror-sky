<template>
  <div class="root">
    <transition name="fade" style=" position: fixed; " >
      <div v-if="show" class="preloader" >
        <div class="logo"></div>
        <div class="circles">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </transition>

    <div class="background" >
      <Header />
      <router-view />

      <b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b>

    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (this.show) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/main.scss";


.mb-vk {
  fill: rgb(255, 255, 255);
}
.mb-vk:hover {
  fill: rgb(0, 0, 0);
}

</style>
