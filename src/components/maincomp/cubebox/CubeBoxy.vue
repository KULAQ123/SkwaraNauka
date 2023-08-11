<script setup></script>

<template>
  <div class="column">
    <div class="cube white"></div>
    <div class="cube orange"></div>
  </div>
  <div class="column">
    <div class="cube gray"></div>
    <div class="cube white"></div>
  </div>
  <!--  <div class="cubes">-->
  <!--    <div class="cubes-block">-->
  <!--      <div class="row">-->
  <!--        <div class="cube gray"></div>-->
  <!--        <div class="cube"></div>-->
  <!--      </div>-->
  <!--      <div class="row">-->
  <!--        <div class="cube"></div>-->
  <!--        <div class="cube dark"></div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
}

.cubes-block {
  display: flex;
  flex-direction: column;
  width: calc(2 * var(--box-width));

  .row {
    display: flex;
  }
}

.cube {
  width: var(--box-width);
  height: var(--box-width);
  background: var(--bg-color);

  &.white {
    background: white;
  }

  &.orange {
    background: var(--pallete-4);
  }

  &.dark {
    background: var(--pallete-3);
  }

  &.gray {
    background: var(--pallete-12);
  }

  &.transparent {
    background: transparent;
  }
}

@media (max-width: 1023px) {
  .cube {
    width: 50%;
    height: 50%;
  }

  .column {
    width: 50%;

    .cube {
      width: 100%;
      height: 50%;
    }
  }

  .cubes {
    display: none;
  }
}
</style>