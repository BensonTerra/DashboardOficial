<template>
  <l-map
    ref="mapa"
    class="map"

    :center="cCenter"
    :zoom="cZoom"
    :max-bounds="cMaxBounds"
    :min-zoom="mapHeight"
    :max-bounds-viscosity="1.0"

    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"

    @ready= "heightUpdated"
    @resize="heightUpdated"
  >
    <l-tile-layer :url="cURL" :attribution="attribution"/>
    <div ref="markers">
<<<<<<< HEAD
      <L-Marker 
      ref="marker" 
      :lat-lng="markPoint"
      
=======
      <L-Marker ref="marker" :lat-lng="cMarkPoint" 
>>>>>>> f779acbabcd78b47fcdd6639f35cd65751437fe7
      />
    </div>
  </l-map>
</template>
 
 <script>
  import { LMap, LTileLayer,LMarker } from "@vue-leaflet/vue-leaflet";
  import { useMapStore } from "@/stores/mapConfig"
  import { getDynamicMapHeight } from "../App.vue"

 
  export default 
  {
    components: {
    LMap,
    LTileLayer,
    LMarker,
},
    data () {
      return {
        mapStore: useMapStore(),
        mapHeight: 0,
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
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
      },
      mapInfo() {
        if(this.mapa == null)
        {
          return this.$refs.mapa.leafletObject
        }
        else
        {
          return this.mapa
        }

      },
<<<<<<< HEAD
      updateLocation() {
        console.log("updateLocation")
=======
      updateLocation(array) {
        console.log("updateLocation" + array[0] + " " + array[1])
      },
      updatex()
      {
        console.log("updatex")
>>>>>>> f779acbabcd78b47fcdd6639f35cd65751437fe7
      }
    },
    created () {
      setTimeout(() => {
        this.mapHeight = parseInt(getDynamicMapHeight(this.$root),10); //console.log(this.mapHeight); 
      }, 100);
      //console.log(this.mapStore)
    },
    mounted () {
      setTimeout(() => {
        this.mapa = this.mapInfo(); console.log(this.mapa);
      }, 2000);
    },
    computed: {
      cURL() {
        return this.mapStore.getUrl;
      },
      cCenter() {
        return this.mapStore.getCenter;
      },
      cZoom() {
        return this.mapStore.getZoom;
      },
      cMaxBounds() {
        return this.mapStore.getMaxBounds
      },
      cMapHeight() {
        return this.mapStore.getMapHeight;
      },
      cMarkPoint() {
        return this.mapStore.getMarkPoint
      }
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