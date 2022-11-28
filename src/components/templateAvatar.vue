<template>
  <b-card-img :src="url_picture" alt="Image" class="rounded igni"></b-card-img>
  <h3>{{ name }}</h3>
  <h3>{{ about }}</h3>
  <b-card-text>
    <ul class="description-social">
      <li style="display: flex">
        <a
          v-if="url_youtube"
          :href="url_youtube"
          class="nav-link text-white social"
        >
          <BootstrapIcon class="bi d-block" icon="youtube" size="2x" />
        </a>
        <a
          v-if="url_discord"
          :href="url_discord"
          class="nav-link text-white social"
        >
          <BootstrapIcon class="bi d-block" icon="discord" size="2x" />
        </a>
        <a
          v-if="url_telegram"
          :href="url_telegram"
          class="nav-link text-white social"
        >
          <BootstrapIcon class="bi d-block" icon="telegram" size="2x" />
        </a>
      </li>
    </ul>
  </b-card-text>
</template>

<script>
export default {
  name: "templateAvatar",
  data() {
    return {};
  },
  props: {
    name: String,
    about: String,
    url_picture: String,
    url_telegram: String,
    url_discord: String,
    url_youtube: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/MainPage.scss";
h3 {
  text-align: center;
  margin-top: 15px;
}
</style>
