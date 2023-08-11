<template>
  <div class="content">
    <nav class="navigation">
      <ul class="menu">
        <li><RouterLink to="/">Strona główna</RouterLink></li>
        <li><RouterLink to="/o-firmie">O firmie</RouterLink></li>
        <li><RouterLink to="/oferta">Oferta</RouterLink></li>
        <li><RouterLink to="/aktualnosci">Aktualności</RouterLink></li>
        <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "MenuItem",
  components: { RouterLink }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex: 1;
  width: auto;

  .navigation {
    align-items: center;
    width: 100%;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-content: space-between;
      max-width: 100%;

      .menu {
        align-items: flex-end;
        flex: 1;
      }

      li {
        margin: 0 10px;
      }
      a {
        text-transform: uppercase;

        &.active {
          color: var(--colortext);
          &:after {
            background: var(--colortext);
            bottom: -5px;
            content: '';
            height: 2px;
            left: 0;
            position: absolute;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>