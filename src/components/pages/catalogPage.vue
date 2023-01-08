<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
    <sidebarCatalog v-model:title="search"/>
    <div class="col py-3">
        <div
          v-if="mode == 'card'"
          class="row"
          :class="{ 'flex-wrap justify-content-around': mode == 'list', 'card-mode-flex': mode == 'card' }"
        >
          <div
            class="col-sm-2 sub-container-catalog-card"
            v-for="(card, index) of filteredList"
            :key="index"
          >
            <catalogCard
              :name="card.name"
              :official_link="card.official_link"
            />
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import catalogCard from "../cards/catalogCard.vue";
import sidebarCatalog from "../catalog/sidebarCatalog.vue";

import overlay from "../cards/templateOverlay.vue";
import OfficialLinkPage from "../cards/officialLinkCard.vue";

export default {
  name: "ServersPage",
  components: {
    catalogCard,
    sidebarCatalog,
  },
  data() {
    return {
      mode: "card",
      catalogList: [
        {
          name: "Crucible",
          official_link: "https://github.com/CrucibleMC/Crucible",
        },
        {
          name: "Mohist",
          official_link: "https://mohistmc.com/",
        },
        {
          name: "Magma",
          official_link: "https://magmafoundation.org/",
        },
        // {
        //   name: "Thermos",
        //   official_link: "https://cyberdynecc.github.io/Thermos/install",
        // },
        // {
        //   name: "Vanilla",
        //   official_link: "https://www.minecraft.net/en-us/download/server",
        // },
        // {
        //   name: "CatServer",
        //   official_link: "https://catmc.org/",
        // },
        // {
        //   name: "Airplane",
        //   official_link: "https://github.com/TECHNOVE/Airplane",
        // },
        // {
        //   name: "Akarin",
        //   official_link: "https://github.com/Akarin-project/Akarin",
        // },
        // {
        //   name: "Fabric",
        //   official_link: "https://fabricmc.net/use/server/",
        // },
        // {
        //   name: "Forge",
        //   official_link:
        //     "https://files.minecraftforge.net/net/minecraftforge/forge/",
        // },
        // {
        //   name: "Paper",
        //   official_link: "https://papermc.io/",
        // },
        // {
        //   name: "Tuinity",
        //   official_link: "https://github.com/Tuinity/Tuinity",
        // },
        // {
        //   name: "Pufferfish",
        //   official_link: "https://github.com/pufferfish-gg/Pufferfish",
        // },
      ],
      show: true,
      search: "",
    };
  },
  async mounted() {},
  methods: {},
  computed: {
    filteredList() {
      return this.catalogList.filter((card) => {
        return card.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/pages/catalogPage.scss";

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
<style lang="scss" scoped>
// @media (min-width: 1001px) {
//   .card-img {
//     width: 100% !important;
//   }
// }
// .card-img {
//   min-width: 140%;
//   min-height: 100%;
// }

.col-sm-2 {
  width: fit-content;
  margin: 15px 5px;
}
.card {
  border-radius: 20px;
}
.mt-3 {
  margin-top: 3rem !important;
}
</style>
