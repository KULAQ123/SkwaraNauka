<template>
  <div class="content">
    <nav class="navigation">
      <ul class="menu">
        <li v-for="headerMenuItem in headerMenuItems" :key="headerMenuItem.id">
          <RouterLink :to="headerMenuItem.url">
            {{ headerMenuItem.label }}
            <span class="arrow" @click.stop.prevent="clickOpenMenu"></span>
          </RouterLink>
          <ul v-if="headerMenuItem.children" v-show="menuOpen" class="menu-content">
            <li v-for="submenuItem in headerMenuItem.children" :key="submenuItem.id">
              <RouterLink :to="submenuItem.url">{{ submenuItem.label }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'MenuItem',
  components: { RouterLink },
  data() {
    return {
      headerMenuItems: [],
      showDropdown: null,
      menuOpen: false
    }
  },
  methods: {
    showChildren(item) {
      return item.children && item.children.length > 0
    },
    clickOpenMenu() {
      this.menuOpen = !this.menuOpen
    },
    addopen() {
      this.headerMenuItems.forEach((item) => {
        item['opened'] = false
      })
    }
  },
  mounted() {
    this.headerMenuItems = [
      { id: 1, label: 'Strona główna', url: '/', children: [] },
      { id: 2, label: 'O firmie', url: '/o-firmie', children: [] },
      {
        id: 3,
        label: 'Oferta',
        url: '/oferta',
        children: [
          {
            id: 1,
            label: 'Rozliczenia podatków',
            url: '/oferta/rozliczenia-podatkow',
            children: []
          },
          { id: 2, label: 'Zasiłek rodzinny', url: '/oferta/zasilek-rodzinny', children: [] },
          {
            id: 3,
            label: 'Ubezpieczenia zdrowotne',
            url: '/oferta/ubezpieczenie-zdrowotne',
            children: []
          }
        ]
      },
      { id: 4, label: 'Aktualności', url: '/aktualnosci', children: [] },
      { id: 5, label: 'Kontakt', url: '/kontakt', children: [] }
    ]
    this.addopen()

    console.log(this.headerMenuItems)
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  flex: 1;
  width: auto;

  .navigation {
    align-items: center;
    width: 100%;

    ul.menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-content: space-between;
      max-width: 100%;
      flex: 1;
      position: relative;

      li {
        margin: 0 10px;

        a {
          display: flex;
          align-items: center;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;

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

          .arrow {
            display: flex;
            width: 10px;
            height: 10px;
            border-bottom: 3px solid black;
            border-right: 3px solid black;
            transform: rotateZ(45deg);
            margin-bottom: 5px;
            margin-left: 10px;
            padding: 5px;
            //display: flex;
            //width: 0;
            //height: 0;
            //border-left: 10px solid transparent;
            //border-right: 10px solid transparent;
            //border-top: 10px solid black;
          }
        }

        .menu-content {
          position: relative;
          display: inline-block;
          margin: 10px;
          padding: 10px;
          background-color: #d9d9d9;

          li {
            padding-bottom: 5px;
          }
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .content {
    justify-content: flex-end;
  }
}
</style>
