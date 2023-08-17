import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', (key, value) => {
  // let _data = reactive(new Map())
  let _data = reactive({})

   const setData = new Map()

  // map1.set('pl/kontakt', 'daneeeee')
  // map1.set('b', 2)
  // map1.set('c', 3)
  // console.log('map1', map1)
  // console.log("map1.get('/kontakt')", map1.get('/kontakt'))

  const getHomeData = computed(() => {
    return setData.get(value)
    // return _data
  })

  function setHomeData(pageData) {
    clearData();

    _data = pageData
  }

  function saveData(data) {
    setData.set(data, value)

  }

  function clearData() {

  }

  return {
    setHomeData,
    getHomeData,
    saveData
  }
})
