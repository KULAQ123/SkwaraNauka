<script setup>
import LogoSkwara from "./icons/LogoSkwara.vue";
import Menu from "./Menu.vue";
import Button from "./ButtonItem.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="body body-header">
    <div class="logo">
      <RouterLink to="/"><LogoSkwara /></RouterLink>
    </div>
    <Menu />
    <Button />
  </header>
</template>

<script>
export default {
  //name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 3.5rem 0;
  margin: 0 200px;

  &.body {
    overflow-x: unset;
  }

  .logo {
    display: flex;
    position: relative;
    right: 3rem;
    width: 18rem;
    height: 51px;

    a {
      display: flex;
      height: 100%;

      img {
        width: 169px;
        height: 51px;
      }
    }
  }
}
@media (max-width: 1680px) {
  header {
    //margin: 0 1.5rem !important;
    .logo {
      right: unset;
      margin-right: 3rem;
    }
  }
}
@media (max-width: 1023px) {
  header {
    position: relative;

    .logo {
      margin-right: 1.5rem;
    }
  }
}
</style>