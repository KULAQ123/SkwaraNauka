<template>
  <main>
    <DoubleImages v-if="homeData && homeData.content" :data="homeData.content"> </DoubleImages>
  </main>
</template>

<script>
import { useDataStore } from '@/stores/data'
import DoubleImages from '@/components/maincomp/DoubleImage.vue'

export default {
  name: 'HomeView',
  components: {
    DoubleImages
  },
  data() {
    return {
      dataStore: null
    }
  },
  computed: {
    homeData() {
      return this.dataStore.getHomeData
    }
  },
  methods: {},
  created() {
    this.dataStore = useDataStore()
  }
}
</script>
