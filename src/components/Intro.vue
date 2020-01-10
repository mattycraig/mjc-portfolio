<template lang="pug">
  .intro
    b-container.intro-container
      slot
</template>

<style lang="scss">
.intro {
  min-height: 500px;
  background: linear-gradient(to left, $primary, $secondary);
  position: relative;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    min-height: 600px;
  }

  &:after {
    display: block;
    width: 200%;
    height: 400px;
    background: $white;
    content: "";
    transform: rotate(-10deg);
    position: absolute;
    bottom: -200px;
    left: -50%;
    z-index: 1;
  }

  &-container {
    position: relative;
    min-height: 500px;

    @include media-breakpoint-up(md) {
      min-height: 600px;
    }
  }

  &-copy {
    position: absolute;
    bottom: 50px;
    z-index: 2;
  }

  &-line {
    font-size: 40px;
    color: $white;
    display: block;
    position: relative;
    display: flex;

    @include media-breakpoint-up(md) {
      font-size: 80px;
    }

    span {
      padding: 0 $spacer / 2;
      height: 50px;
      vertical-align: middle;
      box-shadow: $box-shadow-lg;
      // border-radius: $border-radius;

      @include media-breakpoint-up(md) {
        padding: 0 $spacer;
        height: 100px;
      }
    }
  }

  &-line--regular {
    span {
      background: $gray-900;
    }
  }

  &-line--callout {
    span {
      background: linear-gradient(to right, $primary, $secondary);
    }
  }
}
</style>
