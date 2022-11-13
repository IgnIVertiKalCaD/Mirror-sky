<template>
    <b-card no-body>
            <b-tabs pills card>
              <b-tab
              title="Fabric"
              >
              <b-card-text>
                <div class="row">
                    <div
                      class="col-sm-6"
                      
                    >
                    <div class="card">
              <div class="card-body">
                <h4 class="card-title">Loading...</h4>
                <h6 class="card-title">Размер: Loading...</h6>
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
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
    </template>
    <script>
    export default {
      name: "overlay",
    };
    </script>
    