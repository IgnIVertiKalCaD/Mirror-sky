<template>
  <div class="card-buttons" style="margin: 5px 0">
    <a :href="official_link" class="btn btn-primary button"
      >{{ text_link }}
      <BootstrapIcon icon="arrow-right" size="1x" />
    </a>
  </div>
</template>
<script>
export default {
  name: "OfficialLinkPage",
  props: {
    official_link: String,
    text_link: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/cards/SORCCard.scss";

</style>
