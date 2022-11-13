<template>
  <section class="AboutS" style="overflow-y: auto; height: 100%">
    <h1 class="top_header mt-4">Готовые клиенты для Gravit 5.2.9 - 5.2.13</h1>
    <div>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlayCardClient
        v-if="show"
        />
      <b-card no-body v-show="showMainListsServers">
        <b-tabs pills card >
          <b-tab
          v-for="(baseCard, index) of clientsForLauncher529"
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
      <h1 class="top_header mtc-4">Готовые клиенты для Gravit 5.3.0 - 5.3.x</h1>
      <b-overlay :show="show" rounded="sm" class="CS">
        <overlayCardClient
        v-if="show"
        />
      <b-card no-body v-show="showMainListsServers">
        <b-tabs pills card >
          <b-tab
          v-for="(baseCard, index) of clientsForLauncher530"
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
    </div>
  </section>
</template>

<script>
import axios from "axios";
import serverCard from "./ServerCard.vue";
import overlayCardClient from "./overlayCardClient.vue";
import OfficialLinkPage from "./OfficialLinkPage.vue";

export default {
  name: "ClientsPage",
  components: {
    serverCard,
    OfficialLinkPage,
    overlayCardClient,
  },
  async mounted() {

    let BuildClients529 = {
      "Forge": await getInfoClientsFor528(/forge/),
      "Fabric": await getInfoClientsFor528(/fabric/),
      "Vanilla": await getInfoClientsFor528(/vanilla/),
    };

    async function getInfoClientsFor528(validator) {
      const link = `https://mirror-sky.xyz/Gravit5.2.9%2B/clients/`;
      const response = await axios.get(link);

      const parser = new DOMParser();
      const content = parser.parseFromString(response.data, "text/html");

      const links = [
        ...content
          .querySelector("pre")
          .innerHTML.matchAll(
            /<a href="(.+(\.[\w]{2,4}|\/))">(.+)<\/a>\s+([\w-]+\s[\d:]+)\s+([\d]+[K|M]?|-)/g
          ),
      ];
      const testLinks =  links.map((_link) => ({
        title: _link[3],
        link: link + _link[1],
        size: _link[5]
      }))

      return testLinks.filter(workedLink => {
        if (workedLink.title.match(validator)) {
          return true
        }
      })
    }

    let BuildClients530 = {
      "Forge": await getInfoClientsFor530(/forge/),
      "Fabric": await getInfoClientsFor530(/fabric/),
      "Vanilla": await getInfoClientsFor530(/vanilla/),
    };

    async function getInfoClientsFor530(validator) {
      const link = `https://mirror-sky.xyz/5.3.0%2B/clients/`;
      const response = await axios.get(link);

      const parser = new DOMParser();
      const content = parser.parseFromString(response.data, "text/html");

      const links = [
        ...content
          .querySelector("pre")
          .innerHTML.matchAll(
            /<a href="(.+(\.[\w]{2,4}|\/))">(.+)<\/a>\s+([\w-]+\s[\d:]+)\s+([\d]+[K|M]?|-)/g
          ),
      ];
      const testLinks =  links.map((_link) => ({
        title: _link[3],
        link: link + _link[1],
        size: _link[5]
      }))

      return testLinks.filter(workedLink => {
        if (workedLink.title.match(validator)) {
          return true
        }
      })
    }
    
    this.show = false
    this.showMainListsServers = true
    this.clientsForLauncher529 = BuildClients529;
    this.clientsForLauncher530 = BuildClients530;

  },

  data() {
    return {
      clientsForLauncher529: [],
      clientsForLauncher530: [],
      showMainListsServers: false,
      show: true
    };
  },
};
</script>

<style lang="scss">
// @import "../assets/scss/ClientCard.scss";
@import "../assets/scss/ServerCard.scss";
@import "../assets/scss/AboutPage.scss";

</style>
