<template>
  <l-map
    :center="center"
    :zoom="zoom"
    :min-zoom="mapHeight"
    :max-bounds="maxBounds"
    :max-bounds-viscosity="1.0"
    class="map"
    ref="map"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @ready = "heightUpdated"
    @resize="heightUpdated"
    >
    <l-tile-layer :url="url"/>
    <L-Marker :lat-lng="markPoint"/>
  </l-map>
</template>
 
 <script>
  import { LMap, LTileLayer,LMarker } from "@vue-leaflet/vue-leaflet";
  import { getDynamicMapHeight } from "../App.vue"

 
  export default 
  {
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data () {
      return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        center: [51.505, -0.04],
        zoom: 13,
        maxBounds: [ [-90, -180], [90, 180] ],
        mapHeight: 0,
        markPoint: [51.505, -0.04],
      }
    },
    methods: {
      zoomUpdated (zoom) {
        this.zoom = zoom;
      },
      centerUpdated (center) {
        this.center = center;
      },
      heightUpdated() {
        this.mapHeight = parseInt(getDynamicMapHeight(this.$root),10); //console.log(typeof(this.mapHeight))

        var tileSize = 256; // tamanho padrão do tile no Leaflet
        var minZoom = 0;
        while ((tileSize * Math.pow(2, minZoom)) < this.mapHeight) 
        {
          //console.log(minZoom)
          minZoom++;
        }
        this.mapHeight = minZoom; //console.log(this.mapHeight)
      }
    },
    created () {
      setTimeout(() => 
      {
        this.mapHeight = parseInt(getDynamicMapHeight(this.$root),10); //console.log(this.mapHeight); 
      }, 10);
    },
  }
 </script> 
 
 <style scoped>
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow :hidden
    
  }
 </style>