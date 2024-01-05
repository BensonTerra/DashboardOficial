import { defineStore } from 'pinia';



export const useMapStore = defineStore('mapConfig', {
  state: () => ({
    url:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    center: [51.505, -0.04],
    zoom: 13,
    maxBounds: [ [-90, -180], [90, 180] ],

    markPoint: [51.505, -0.04],
    mapa: null
  }),
  getters: {
    getUrl: (state) => state.url,
    getCenter: (state) => state.center,
    getZoom: (state) => state.zoom,
    getMaxBounds: (state) => state.maxBounds,

    getMarkPoint: (state) => state.markPoint,
    getMapa: (state) => state.mapa
  },
  
  actions: {
    async fetchMapa()
    {
      try {
        const map = await this.get(this.url); console.log(map)
        this.mapa = map
      } 
      catch (error) {
        throw error
      }
    },
    updateMarker(cord) {
      try {
        this.markPoint = cord
      } 
      catch (error) {
        
      }
    }
  },


  persist:true,
})
