<template>
  <section class="AboutS" style="overflow-y: auto; height: 100%">
    <h1 class="top_header mt-4">Готовые сервера для Gravit 5.2.9 - 5.2.13</h1>
    <div>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlay v-if="show" />
        <b-card no-body v-show="showMainListsServers">
          <b-tabs pills card>
            <b-tab
              v-for="(baseCard, index) of versionServersForLauncher529"
              :key="index"
              :title="index"
              class="corrector_card"
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
        <overlay v-if="show" />
        <b-card no-body v-show="showMainListsServers">
          <b-tabs pills card>
            <b-tab
              v-for="(baseCard, index) of versionServersForLauncher530"
              :key="index"
              :title="index"
              class="corrector_card"
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
          <b-tab title="Официальные ссылки" class="corrector_card">
            <b-card-text>
              <div class="row">
                <div
                  class="col-sm-6"
                  style="width: 21.5%"
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
import serverCard from "../cards/SORCCard.vue";
import overlay from "../cards/templateOverlay.vue";
import OfficialLinkPage from "../cards/officialLinkCard.vue";
import getInfoServersForGravit from "@/assets/helpers/getInfoSORC";

export default {
  name: "ServersPage",
  components: {
    serverCard,
    OfficialLinkPage,
    overlay,
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
  async mounted() {
    if (!localStorage.versionServersForLauncher529 && !localStorage.versionServersForLauncher530) {
      let versionsServer529 = {
        "1.7.10": await getInfoServersForGravit(
          "Gravit5.2.9%2B/",
          "server/",
          "1.7.10"
        ),
        "1.8.9": await getInfoServersForGravit(
          "Gravit5.2.9%2B/",
          "server/",
          "1.8.9"
        ),
        "1.12.2": await getInfoServersForGravit(
          "Gravit5.2.9%2B/",
          "server/",
          "1.12.2"
        ),
        "1.16.5": await getInfoServersForGravit(
          "Gravit5.2.9%2B/",
          "server/",
          "1.16.5"
        ),
        "1.17.1": await getInfoServersForGravit(
          "Gravit5.2.9%2B/",
          "server/",
          "1.17.1"
        ),
        "1.18.2": await getInfoServersForGravit(
          "Gravit5.2.9%2B/",
          "server/",
          "1.18.2"
        ),
        1.19: await getInfoServersForGravit("Gravit5.2.9%2B/", "server/", "1.19"),
      };
      let versionsServer530 = {
        "1.12.2": await getInfoServersForGravit("5.3.0%2B/", "server/", "1.12.2"),
        "1.16.5": await getInfoServersForGravit("5.3.0%2B/", "server/", "1.16.5"),
        "1.19.2": await getInfoServersForGravit("5.3.0%2B/", "server/", "1.19.2"),
      };
      this.versionServersForLauncher530 = versionsServer530;
      this.versionServersForLauncher529 = versionsServer529;
    } else {
      this.versionServersForLauncher529 = JSON.parse(localStorage.versionServersForLauncher529)
      this.versionServersForLauncher530 = JSON.parse(localStorage.versionServersForLauncher530)

    }
    this.show = false;
    this.showMainListsServers = true;
  },
  watch: {
    versionServersForLauncher529(cacheVersionServersForLauncher529) {
      localStorage.versionServersForLauncher529 = JSON.stringify(cacheVersionServersForLauncher529)
    },
    versionServersForLauncher530(cacheVersionServersForLauncher530) {
      localStorage.versionServersForLauncher530 = JSON.stringify(cacheVersionServersForLauncher530)
    }
  }

};
</script>

<style lang="scss" scoped>
.card {
  color: rgb(255, 255, 255);
  border-radius: 35px;
  border: none;
  margin-top: 15px;
  background-color: #2d1750;
}
</style>
<style lang="scss">
@import "@/assets/scss/pages/SORCPage.scss";
</style>
