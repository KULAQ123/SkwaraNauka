<template>
  <section class="home-main-block with-dark-bg">
    <div class="content-container">
      <div class="text-container">
        <div class="wrapper">
          <div class="top-text">
            <img src="src/assets/icona.svg" alt="icon" />
            <span>Gwarancja jakości usług</span>
          </div>
          <h1 v-html="data.title"></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ducimus et
            exercitationem facere laborum maiores mollitia odio quia quibusdam vero! Eaque eligendi
            ex iusto officia saepe soluta velit veniam voluptatibus?
          </p>
        </div>
        <a class="button" href="/">Kontakt</a>
      </div>
      <div class="images-container">
        <div class="image-box">
          <img height="360" width="360" src="src/assets/obraz.webp" alt="Logo" />
        </div>
        <div class="image-box">
          <CubeBox />
        </div>
        <div class="image-box wrap">
          <CubeBox />
        </div>
        <div class="image-box cube-left-top">
          <img height="360" width="360" src="src/assets/obraz.webp" alt="Logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CubeBox from './cubebox/CubeBoxy.vue'

export default {
  name: 'DoubleImage',
  components: {
    CubeBox
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.home-main-block {
  background: linear-gradient(90deg, var(--pallete-14) 50%, var(--bg-color) 50%);

  &.with-dark-bg {
    .content-container {
      background: var(--pallete-3);

      .text-container {
        .wrapper {
          p {
            font-size: 1.8rem;
            max-width: 50rem;
            color: white;
          }
        }
      }
    }
  }

  .content-container {
    display: flex;
    background: var(--pallete-14);

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8rem 1.5rem 8rem var(--box-width);
      flex-grow: 1;

      .wrapper {
        .top-text {
          display: flex;
          align-items: center;
          min-height: 4rem;
          margin-bottom: 3rem;

          &.hidden {
            opacity: 0;
            position: unset;
          }

          img {
            height: 4rem;
            margin-right: 2rem;
          }

          span {
            text-transform: uppercase;
            font-weight: bold;
            padding-top: 3px;
          }
        }

        h1 {
          margin: 3rem 0;
          font-weight: 300;
          line-height: 1.2;
          white-space: pre-line;
          color: white;
        }

        p {
          font-size: 1.8rem;
          max-width: 50rem;
        }
      }
    }

    .images-container {
      display: flex;
      flex-wrap: wrap;
      max-width: calc(4 * var(--box-width));
      max-height: calc(4 * var(--box-width));

      .image-box {
        display: flex;
        width: calc(2 * var(--box-width));
        height: calc(2 * var(--box-width));

        &.cube-left-top {
          position: relative;
        }

        &.wrap {
          flex-wrap: wrap;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 1500px) {
  .home-main-block {
    .content-container {
      overflow-x: hidden;
      padding: 0;

      .text-container {
        .wrapper {
          margin-bottom: 2rem;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .home-main-block {
    .content-container {
      flex-direction: column;

      .text-container {
        padding: 8rem 1.5rem;
      }

      .images-container {
        max-width: 100%;

        .image-box {
          width: 25%;
          height: auto;

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
      }
    }
  }
}

@media (max-width: 600px) {
  .home-main-block {
    .content-container {
      .images-container {
        max-height: unset;
      }

      .text-container {
        align-items: center;

        .wrapper {
          .top-text {
            width: 100%;
            justify-content: center;

            img {
              height: 3rem;
            }

            span {
              font-size: 14px;
            }
          }

          h1 {
            font-size: 3rem;
            text-align: center;

            br {
              display: none;
            }
          }

          p {
            text-align: center;
            margin: 2rem auto;
            max-width: unset;
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}

@media (max-width: 450px) {
  .home-main-block {
    .content-container {
      .text-container {
        .wrapper {
          h1 {
            font-size: 24px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
