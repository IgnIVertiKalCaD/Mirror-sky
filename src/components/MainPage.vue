<template>
  <section class="scene">
    <div class="description-mirror-sky">
      <h2>Основатели</h2>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col" v-for="(avatar, index) of Users" :key="index">
            <templateAvatar
            :name="avatar.name"
            :about="avatar.about"
            :url_picture="avatar.url_picture"
            :url_telegram="avatar.telegram"
            :url_discord="avatar.discord"
            :url_youtube="avatar.youtube"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="scene">
    <div class="description-gravit-launhcer">
      <h1>Ссылки на Gravit</h1>
      <h2></h2>
    </div>
    <ul class="description-gravit">
      <li>
        <a
          href="https://discord.gg/CKTAg7qjxX"
          class="nav-link text-white social"
        >
          <BootstrapIcon class="bi d-block" icon="discord" size="2x" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/GravitLauncher/Launcher"
          class="nav-link text-white social"
        >
          <BootstrapIcon class="bi d-block" icon="github" size="2x" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import templateAvatar from "./templateAvatar.vue"
export default {
  name: "MainHeader",
  components: {
    templateAvatar
  },
  data() {
    return {
      Users: [
        {
          name: "IgnI",
          about: "Разработчик",
          url_picture: "https://cdn.discordapp.com/avatars/709479393302675496/b62e01250f65f7db6e3c949801e6d673.webp?size=1024",
          discord: "https://discord.com/users/709479393302675496",
          telegram: "https://t.me/IgniVer",
          youtube: "https://www.youtube.com/channel/UCJP4faBWDrAtRRoBS-XTqvA"
        },
        {
          name: "Null",
          about: "Сборщик",
          url_picture: "https://cdn.discordapp.com/avatars/982896293544349746/a51e1bb78e6bfbb85a2d9aa418920eff.webp?size=1024",
          discord: "https://discord.com/users/982896293544349746",
        },
        {
          name: "Krylovvv",
          about: "Хостер",
          url_picture: "https://cdn.discordapp.com/avatars/690117145501106217/9cf7043d0cdf3236995109af04748a97.webp?size=1024",
          discord: "https://discord.com/users/690117145501106217",
        }
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/MainPage.scss";
strong {
  font-size: 18px;
}
</style>
