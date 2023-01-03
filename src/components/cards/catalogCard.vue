<template>
  <div class="weather-side" style="background-image: url('f')">
    <div class="weather-gradient"></div>
    <div class="date-container">
      <h2 class="date-dayname">IgnI VertiCalKaD</h2><span class="date-day">date</span><i class="" data-feather=""></i>
    </div>
    <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
      <!-- <h1 class="weather-temp">29°C</h1> -->
      <h3 class="weather-desc">{{ name }}</h3>
    </div>
  </div>
  <div class="info-side">
    <div class="today-info-container">
      <div class="today-info">
        <div class="precipitation"> <span class="title">Рейтинг</span><span class="value">9/10</span>
          <div class="clear"></div>
        </div>
        <div class="humidity"> <span class="title">Лайки</span><span class="value">56</span>
          <div class="clear"></div>
        </div>
        <!-- <div class="wind"> <span class="title">WIND</span><span class="value">0 km/h</span>
          <div class="clear"></div>
        </div> -->
      </div>
    </div>
    <!-- <div class="week-container">
      <ul class="week-list">
        <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span class="day-temp">29°C</span></li>
        <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span class="day-temp">21°C</span></li>
        <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span class="day-temp">08°C</span></li>
        <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span class="day-temp">19°C</span></li>
        <div class="clear"></div>
      </ul>
    </div> -->
    <div class="location-container">
      <a :href="official_link"><button class="location-button"> <i data-feather="map-pin"></i><span>Скачать</span></button></a>
      <a :href="official_link"><button class="location-button"> <i data-feather="map-pin"></i><span>Подробнее</span></button></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CatalogCard",
  props: {
    image: String,
    name: String,
    border: {
      type: String,
      default: "border-standart",
    },
    official_link: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-img, .card-img-top {
  border-radius: 20px !important;
}
.location-button {
  margin-top: 5px;
}
</style>
