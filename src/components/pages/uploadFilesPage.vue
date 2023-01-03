<template>
  <section class="AboutS" style="overflow-y: auto; height: 100%">
    <h1 class="top_header mt-4">Файлообменник</h1>
    <table class="table table div_fileTransition">
      <thead>
        <tr>
          <th scope="col" @click="Forward">Назад</th>
          <th scope="col">Name</th>
          <th scope="col">Extension</th>
          <th scope="col">Size</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) of listFiles"
          :key="index"
          :href="item.link"
          @click="enterOrDownload"
        >
          <th scope="row">{{ index }}</th>
          <td>{{ item.fullName }}</td>
          <td>{{ item.extension }}</td>
          <td v-if="item.size != 4096">{{ item.size }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import path from "path-browserify";
import serverCard from "../cards/SORCCard.vue";
import overlay from "../cards/templateOverlay.vue";
import OfficialLinkPage from "../cards/officialLinkCard.vue";
import transition from "@/assets/helpers/Transition";

export default {
  name: "ServersPage",
  components: {
    serverCard,
    OfficialLinkPage,
    overlay,
  },
  data() {
    return {
      error: [],
      baseUrl: "http://localhost:4500",
      listenerViewerFiles: "/list?path=",
      listenerDownloaderFile: "/download?file=",
      listFiles: [],
      cachedList: null,
      uploader: null,
      promise: null,
      path: null,
    };
  },
  async mounted() {
    this.transition = new transition();
    this.listFiles = await this.transition.getInfoWithAxios(
      this.baseUrl,
      this.listenerViewerFiles,
      ""
    );
    console.log(this.listFiles);
  },
  methods: {
    async enterOrDownload(e) {
      this.path = e.currentTarget.getAttribute("href")
      if (path.extname(this.path)) {
        await this.transition.downloadWithAxios(
          this.baseUrl + this.listenerDownloaderFile + this.path,
          this.path.substring(1)
        );
      } else {
        this.listFiles = await this.transition.getInfoWithAxios(
          this.baseUrl,
          this.listenerViewerFiles,
          this.path
        );
      }
    },
    async Forward() {
      var lastIndex = this.path.split("/").slice(0, -1).join("/")
      this.path = lastIndex
      this.listFiles = await this.transition.getInfoWithAxios(
        this.baseUrl,
        this.listenerViewerFiles,
        this.path
      );
    },
  },
  watch: {
    cachedList(cache) {
      localStorage.cachedList = cache;
    },
  },
};
</script>

<style lang="scss">
// @card-bodyimport "@/assets/scss//SORCCard.scss";

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
.div_fileTransition {
  background-color: #1f1233;
  padding: 15px;
  border-radius: 35px;
  color: white;
}
th,
td {
  border-color: #2d1a4d;
}
</style>
