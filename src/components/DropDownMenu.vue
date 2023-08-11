<template>
  <div class="menu-content" :style="openMenu ? `height: ${ulHeight}` : ''">
    <ul ref="itemsRef">
      <li v-for="submenuItem in headerItemChildren" :key="submenuItem.id">
        <RouterLink :to="submenuItem.url">
          {{ submenuItem.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropDownMenu",
  data() {
    return {
      ulHeight: ""
    };
  },
  props: {
    headerItemChildren: Array,
    openMenu: Boolean
  },
  computed: {},
  methods: {
    setHeightList() {
      console.log("this.$refs.itemsRef", this.$refs.itemsRef);

      if (this.$refs.itemsRef) {
        this.ulHeight = `${this.$refs.itemsRef.offsetHeight}px`;
      }
    }
  },
  mounted() {
    this.setHeightList();
  }
});
</script>

<style lang="scss">
.menu-content {
  position: absolute;
  display: inline-block;
  margin: 10px;
  padding: 0;
  background-color: #d9d9d9;
  top: 20px;
  left: -10px;
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
  height: 0;
  transition: all 0.3s;

  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 5px 10px;
    }
  }
}
</style>