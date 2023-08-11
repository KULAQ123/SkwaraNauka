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
  methods: {
    getData() {
      this.$ApiController.getHomeData().then((response) => {
        this.dataStore.setHomeData(response.data)
      })
    }
  },
  created() {
    this.dataStore = useDataStore()
  },
  beforeMount() {
    if (!this.homeData?.content) {
      this.getData()
    }
  }
}
</script>
