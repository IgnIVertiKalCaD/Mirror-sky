<template>
  <section class="AboutS" style="overflow-y: auto; height: 100%">
    <h1 class="top_header mt-4">Готовые сервера для Gravit 5.2.9 - 5.2.13</h1>
    <div>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlayCardServer v-if="show" />
        <b-card no-body v-show="showMainListsServers">
          <b-tabs pills card>
            <b-tab
              v-for="(baseCard, index) of versionServersForLauncher529"
              :key="index"
              :title="index"
              active
            >
              <b-card-text>
                <div class="row">
                  <div
                    class="col-sm-6"
                    v-for="(card, index) in baseCard"
                    :key="index"
                  >
                    <serverCard
                      :text_link="card.title"
                      :text_size="card.size"
                      :mirror_link="card.link"
                    />
                  </div>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-overlay>
      <h1 class="top_header mtc-4">Готовые сервера для Gravit 5.3.0 - 5.3.x</h1>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlayCardServer v-if="show" />
        <b-card no-body v-show="showMainListsServers">
          <b-tabs pills card>
            <b-tab
              v-for="(baseCard, index) of versionServersForLauncher530"
              :key="index"
              :title="index"
              active
            >
              <b-card-text>
                <div class="row">
                  <div
                    class="col-sm-6"
                    v-for="(card, index) in baseCard"
                    :key="index"
                  >
                    <serverCard
                      :text_link="card.title"
                      :text_size="card.size"
                      :mirror_link="card.link"
                    />
                  </div>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-overlay>
      <h1 class="top_header mtc-4">
        Официальные ссылки на разработчиков Minecraft серверов (ядер)
      </h1>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Официальные ссылки">
            <b-card-text>
              <div class="row">
                <div
                  class="col-sm-6" style="width: 13.5%;"
                  v-for="(card, index) in official_links"
                  :key="index"
                >
                  <OfficialLinkPage
                    :text_link="card.title"
                    :official_link="card.official_link"
                  />
                </div>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </section>
</template>

<script>
import serverCard from "./ServerCard.vue";
import overlayCardServer from "./overlayCardServer.vue";
import OfficialLinkPage from "./OfficialLinkPage.vue";
import getInfoServersForGravit from "@/assets/helpers/getInfoServersSORC"

export default {
  name: "ServersPage",
  components: {
    serverCard,
    OfficialLinkPage,
    overlayCardServer,
  },
  async mounted() {
    let versionsServer529 = {
      "1.7.10": await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.7.10'),
      "1.8.9":  await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.8.9'),
      "1.12.2": await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.12.2'),
      "1.16.5": await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.16.5'),
      "1.17.1": await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.17.1'),
      "1.18.2": await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.18.2'),
      "1.19":   await getInfoServersForGravit('Gravit5.2.9%2B/','server/','1.19'),
    };
    let versionsServer530 = {
      "1.12.2": await getInfoServersForGravit('5.3.0%2B/','server/','1.12.2'),
      "1.16.5": await getInfoServersForGravit('5.3.0%2B/','server/','1.16.5'),
      "1.19.2": await getInfoServersForGravit('5.3.0%2B/','server/','1.19.2'),
    };
    this.versionServersForLauncher530 = versionsServer530
    this.versionServersForLauncher529 = versionsServer529
    this.show = false;
    this.showMainListsServers = true;

  },
  data() {
    return {
      versionServersForLauncher529: [],
      versionServersForLauncher530: [],
      official_links: [
        {
          title: "Crucible",
          official_link: "https://github.com/CrucibleMC/Crucible",
        },
        {
          title: "Mohist",
          official_link: "https://mohistmc.com/",
        },
        {
          title: "Magma",
          official_link: "https://magmafoundation.org/",
        },
        {
          title: "Thermos",
          official_link: "https://cyberdynecc.github.io/Thermos/install",
        },
        {
          title: "Vanilla",
          official_link: "https://www.minecraft.net/en-us/download/server",
        },
        {
          title: "CatServer",
          official_link: "https://catmc.org/",
        },
        {
          title: "Airplane",
          official_link: "https://github.com/TECHNOVE/Airplane",
        },
        {
          title: "Akarin",
          official_link: "https://github.com/Akarin-project/Akarin",
        },
        {
          title: "Fabric",
          official_link: "https://fabricmc.net/use/server/",
        },
        {
          title: "Forge",
          official_link:
            "https://files.minecraftforge.net/net/minecraftforge/forge/",
        },
        {
          title: "Paper",
          official_link: "https://papermc.io/",
        },
        {
          title: "Tuinity",
          official_link: "https://github.com/Tuinity/Tuinity",
        },
        {
          title: "Pufferfish",
          official_link: "https://github.com/pufferfish-gg/Pufferfish",
        },
      ],
      VGL: null,
      showMainListsServers: false,
      show: true,
      cachedListServers: null,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/ServerCard.scss";
@import "../assets/scss/AboutPage.scss";

.position-absolute.bg-light.rounded-sm {
  opacity: 0.75;
  box-shadow: 0px 0px 20px 0px #1e083e;
  border-radius: 30px;
  background: #1f1233 !important;
}
.spinner-border {
  width: 10rem;
  height: 10rem;
  border: 1.25em solid #5724ad;
  border-right-color: #04040400;
  animation: 0.5s linear infinite spinner-border;
}
</style>
