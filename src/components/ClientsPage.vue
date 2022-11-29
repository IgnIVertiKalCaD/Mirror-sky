<template>
  <section class="AboutS" style="overflow-y: auto; height: 100%">
    <h1 class="top_header mt-4">Готовые клиенты для Gravit 5.2.9 - 5.2.13</h1>
    <div>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlay v-if="show" />
        <b-card no-body v-show="showMainListsServers">
          <b-tabs pills card>
            <b-tab
              v-for="(baseCard, index) of clientsForLauncher529"
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
                    <clientCard
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
      <h1 class="top_header mtc-4">Готовые клиенты для Gravit 5.3.0 - 5.3.x</h1>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlay v-if="show"/>
        <b-card no-body v-show="showMainListsServers">
          <b-tabs pills card>
            <b-tab
              v-for="(baseCard, index) of clientsForLauncher530"
              :key="index"
              class="corrector_card"
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
                    <clientCard
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
    </div>
  </section>
</template>

<script>
import clientCard from "./ServerCard.vue";
import overlay from "./templateOverlay.vue";
import OfficialLinkPage from "./OfficialLinkPage.vue";
import getInfoClientsForGravit from "@/assets/helpers/getInfoSORC";

export default {
  name: "ClientsPage",
  components: {
    clientCard,
    OfficialLinkPage,
    overlay,
  },
  async mounted() {
    let BuildClients529 = {
      Forge: await getInfoClientsForGravit(
        "Gravit5.2.9%2B/",
        "clients/",
        "",
        /forge/
      ),
      Fabric: await getInfoClientsForGravit(
        "Gravit5.2.9%2B/",
        "clients/",
        "",
        /fabric/
      ),
      Vanilla: await getInfoClientsForGravit(
        "Gravit5.2.9%2B/",
        "clients/",
        "",
        /vanilla/
      ),
    };

    let BuildClients530 = {
      Forge: await getInfoClientsForGravit(
        "5.3.0%2B/",
        "clients/",
        "",
        /forge/
      ),
      Fabric: await getInfoClientsForGravit(
        "5.3.0%2B/",
        "clients/",
        "",
        /fabric/
      ),
      Vanilla: await getInfoClientsForGravit(
        "5.3.0%2B/",
        "clients/",
        "",
        /vanilla/
      ),
    };

    this.show = false;
    this.showMainListsServers = true;
    this.clientsForLauncher529 = BuildClients529;
    this.clientsForLauncher530 = BuildClients530;
  },

  data() {
    return {
      clientsForLauncher529: [],
      clientsForLauncher530: [],
      showMainListsServers: false,
      show: true,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/ServerCard.scss";
@import "../assets/scss/AboutPage.scss";
</style>
