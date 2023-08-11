import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {
  let _data = reactive(new Map())

  // const map1 = new Map()
  //
  // map1.set('pl/kontakt', 'daneeeee')
  // map1.set('b', 2)
  // map1.set('c', 3)
  // console.log('map1', map1)
  // console.log("map1.get('/kontakt')", map1.get('/kontakt'))

  const getHomeData = computed(() => {
    return _data.home
  })

  function setHomeData(pageData) {
    _data.home = pageData
  }

  return {
    setHomeData,
    getHomeData
  }
})
