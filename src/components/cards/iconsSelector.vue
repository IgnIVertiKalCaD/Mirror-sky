<template>
      <li class="icons-selector">
        <BootstrapIcon
          class="bi d-block mx-auto"
          :icon="icon"
          size="2x"
        />
      </li>
</template>

<script>
export default {
  name: "icons-selector",
  props: {
    icon: String,
    mode: String,
  },
};
</script>
<style scoped>
svg {color: white;}
</style>