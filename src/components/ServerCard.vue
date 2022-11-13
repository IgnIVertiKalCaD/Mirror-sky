<template>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ text_link }}</h4>
            <h6 class="card-title">Размер: {{ text_size }}</h6>
            <!-- <p class="card-text">{{card.description}}</p> -->
            <div class="card-buttons">
              <!-- <a :href="official_link" class="btn btn-primary button"
                >Оф сайт
                <BootstrapIcon icon="download" size="1x" />
              </a> -->
              <a :href="mirror_link" class="btn btn-primary button"
                >С облака
                <BootstrapIcon icon="download" size="1x" />
              </a>
            </div>
          </div>
        </div>

</template>
<script>
export default {
  name: "ServerCard",
  props: {
    text_size: String,
    mirror_link: String,
    text_link: String,
    data_modification: String
  },
};
</script>
