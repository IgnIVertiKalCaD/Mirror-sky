<template>
  <section class="scene">
    <div class="description-mirror-sky">
      <h2>Основатели</h2>
    </div>
    <div>
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://cdn.discordapp.com/avatars/709479393302675496/b62e01250f65f7db6e3c949801e6d673.webp?size=2048"
            alt="Image"
            class="rounded igni"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="IgnI VertiCalKad">
            <h3>Создатель сайта</h3>
            <h3>Хостер</h3>
            <b-card-text>
              <ul class="description-social">
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCJP4faBWDrAtRRoBS-XTqvA"
                    class="nav-link text-white social"
                    >Youtube
                    <BootstrapIcon
                      class="bi d-block mgl"
                      icon="youtube"
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://discord.com/users/709479393302675496"
                    class="nav-link text-white social"
                    >Discord
                    <BootstrapIcon
                      class="bi d-block mgl"
                      icon="discord"
                      size="2x"
                    />
                  </a>
                  <a
                    href="https://t.me/IgniVer"
                    class="nav-link text-white social"
                    >Telegram
                    <BootstrapIcon
                      class="bi d-block mgl"
                      icon="telegram"
                      size="2x"
                    />
                  </a>
                </li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="6">
          <b-card-img
            src="https://cdn.discordapp.com/avatars/982896293544349746/a51e1bb78e6bfbb85a2d9aa418920eff.webp?size=2048"
            alt="Image"
            class="rounded null"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Null">
            <h3>Сборщик</h3>
            <b-card-text>
              <ul class="description-social">
                <li>
                  <a
                    href="https://discord.com/users/982896293544349746"
                    class="nav-link text-white social"
                    >Discord
                    <BootstrapIcon
                      class="bi d-block mgl"
                      icon="discord"
                      size="2x"
                    />
                  </a>
                </li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </div>
  </section>
  <!-- <section class="scene">
    <div class="description-mirror-sky">
      <h1>Список задач</h1>
      <h2>То, что будет добавлено или уже добавлено</h2>
    </div>
    <b-list-group>
      <b-list-group-item
        >Сделать диномической страницей "Сервера"</b-list-group-item
      >
      <b-list-group-item
        >Сделать отдельную гамму под каждую серверную
        карточку</b-list-group-item
      >
      <b-list-group-item
        >Оптимизировать вёрстку под дисплеи 1200 и меньше</b-list-group-item
      >
      <b-list-group-item
        >Сделать диномической страницей "Клиенты"</b-list-group-item
      >
      <b-list-group-item>Сделать вёрстку под смарфоны</b-list-group-item>
    </b-list-group>
  </section> -->
  <section class="scene">
    <div class="description-mirror-sky">
      <h1>Ссылки на Gravit</h1>
      <h2></h2>
    </div>
    <ul class="description-gravit">
      <li>
        <a
          href="https://discord.gg/CKTAg7qjxX"
          class="nav-link text-white social"
          >Discord
          <BootstrapIcon class="bi d-block mgl" icon="discord" size="2x" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/GravitLauncher/Launcher"
          class="nav-link text-white social"
          >Github
          <BootstrapIcon class="bi d-block mgl" icon="github" size="2x" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios"

export default {
  name: "MainHeader",

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/MainPage.scss";
strong {
  font-size: 18px;
}
</style>
