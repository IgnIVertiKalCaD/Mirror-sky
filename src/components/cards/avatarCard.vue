<template>
  <b-card-img
    :src="url_picture"
    alt="Image"
    :class="'rounded ' + name"
  ></b-card-img>
  <div class="corrector">
    <h3>{{ name }}</h3>
    <h3>{{ about }}</h3>
    <b-card-text>
      <ul class="description-social">
        <li style="display: flex; justify-content: center">
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
  </div>
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
h3 {
  text-align: center;
  margin-top: 15px;
}
.card-img {
  border-radius: 35px !important;
}
</style>
