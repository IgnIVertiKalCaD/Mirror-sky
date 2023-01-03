<template>
  <div class="flex-shrink-0 p-3 sidebar">
    <div
      href="/"
      class="d-flex align-items-center link-dark text-decoration-none "
    >
      <input class="sidebar-input" :value="title" type="text" @input="$emit('update:title', $event.target.value)" placeholder="Search title.." >
    </div>
    <ul class="list-unstyled ps-0">

    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarCatalog",
  components: {},
  data() {
    return {
      
    }
  },
  props: {
    title: String
  },
  emits: ['update:title'],
  method: {
  },
  async mounted() {},
};
</script>

<style lang="scss" scoped>
a,
span,
button {
  color: white !important;
}
.sidebar-input {
  background-color: #160e24;
  color: white;
  border: 2px solid #2d1a4d;
  padding: 12px 75px 12px 30px;
  border-radius: 35px;
  outline: none;
  &:focus-visible {
  }
}
.pb-1 {
    padding-left: 30px !important;
}
input[type="text"]::-moz-focus-inner,
button::-moz-focus-inner { border : 0px; }
</style>
