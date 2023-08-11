<template>
  <div class="content">
    <nav class="navigation">
      <ul ref="pierwszyUL" class="menu">
        <li
          v-for="headerMenuItem in headerMenuItems"
          :key="headerMenuItem.id"
          class="item-menu"
          :class="{ opened: headerMenuItem.opened }"
        >
          <RouterLink :to="headerMenuItem.url">
            {{ headerMenuItem.label }}
          </RouterLink>
          <span
            v-if="headerMenuItem.children.length > 0"
            class="arrow"
            @click.stop.prevent="clickOpenMenu(headerMenuItem)"
          ></span>
          <DropDownMenu
            v-if="headerMenuItem.children.length > 0"
            :headerItemChildren="headerMenuItem.children"
            :openMenu="headerMenuItem.opened"
          >
          </DropDownMenu>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import DropDownMenu from "@/components/DropDownMenu.vue";

export default {
  name: "MenuItem",
  components: { DropDownMenu, RouterLink },
  data() {
    return {
      openedItem: null,
      headerMenuItems: [],
      showDropdown: null
    };
  },
  methods: {
    clickOpenMenu(item) {
      if (this.openedItem && item.id !== this.openedItem.id) {
        this.openedItem.opened = false;
      }

      item.opened = !item.opened;

      this.openedItem = item.opened ? item : null;
    },
    addOpen() {
      this.headerMenuItems.forEach((item) => {
        item["opened"] = false;
      });

      console.log("headerMenuItems", this.headerMenuItems);
    },
    closeAll() {
      this.headerMenuItems.forEach((item) => {
        item.opened = false;
      });
    }
  },
  mounted() {
    this.headerMenuItems = [
      { id: 1, label: "Strona główna", url: "/", children: [] },
      { id: 2, label: "O firmie", url: "/o-firmie", children: [] },
      {
        id: 3,
        label: "Oferta",
        url: "/oferta",
        children: [
          {
            id: 1,
            label: "Rozliczenia podatków",
            url: "/oferta/rozliczenia-podatkow",
            children: []
          },
          { id: 2, label: "Zasiłek rodzinny", url: "/oferta/zasilek-rodzinny", children: [] },
          {
            id: 3,
            label: "Ubezpieczenia zdrowotne",
            url: "/oferta/ubezpieczenie-zdrowotne",
            children: []
          }
        ]
      },
      { id: 4, label: "Aktualności", url: "/aktualnosci", children: [] },
      {
        id: 5,
        label: "Kontakt",
        url: "/kontakt",
        children: [
          {
            id: 1,
            label: "Rozliczenia ccc",
            url: "/oferta/rozliczenia-podatkow",
            children: []
          },
          { id: 2, label: "Zasiłek rodzinny", url: "/oferta/zasilek-rodzinny", children: [] },
          {
            id: 3,
            label: "Ubezpieczenia zdrowotne",
            url: "/oferta/ubezpieczenie-zdrowotne",
            children: []
          },
          {
            id: 4,
            label: "Ubezpieczenia zdrowotne",
            url: "/oferta/ubezpieczenie-zdrowotne",
            children: []
          },
          {
            id: 5,
            label: "Ubezpieczenia zdrowotne",
            url: "/oferta/ubezpieczenie-zdrowotne",
            children: []
          }
        ]
      }
    ];
    this.addOpen();
  }
};
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  flex: 1;
  width: auto;

  .navigation {
    align-items: center;
    width: 100%;

    .menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-content: space-between;
      max-width: 100%;
      flex: 1;
      position: relative;

      .item-menu {
        margin: 0 10px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        padding-bottom: 5px;

        a {
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
              transition: all 6s;
            }
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
          cursor: pointer;
          transition: all 0.6s;
        }

        &.opened {
          .arrow {
            transform: rotate(225deg);
            transition: all 0.6s;
          }
          .menu-content {
            transition: all 0.3s;
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