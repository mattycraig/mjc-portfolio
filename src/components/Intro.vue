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
    transform: rotate(-7.5deg);
    position: absolute;
    bottom: -200px;
    left: -50%;
    z-index: 1;
  }

  &-container {
    position: relative;
    min-height: 500px;

    @include media-breakpoint-up(md) {
      min-height: 625px;
    }

    @include media-breakpoint-up(lg) {
      min-height: 750px;
    }
  }

  &-image {
    position: absolute;
    bottom: 175px;
    right: 0;
    max-width: 100%;
    display: block;
    padding: 0 $spacer * 3;
    display: none;

    @include media-breakpoint-up(sm) {
      bottom: 175px;
      display: block;
    }

    @include media-breakpoint-up(lg) {
      bottom: 150px;
    }

    @include media-breakpoint-up(xl) {
      bottom: 100px;
    }
  }

  &-copy {
    position: absolute;
    bottom: 50px;
    z-index: 2;
  }

  &-line {
    font-size: 55px;
    color: $white;
    display: block;
    position: relative;
    display: flex;

    @include media-breakpoint-up(md) {
      font-size: 70px;
    }

    @include media-breakpoint-up(xl) {
      font-size: 90px;
    }

    span {
      padding: 0 $spacer / 1.5;
      height: 70px;
      vertical-align: middle;
      box-shadow: $box-shadow-lg;
      // border-radius: $border-radius;

      @include media-breakpoint-up(md) {
        padding: 0 $spacer;
        height: 90px;
      }

      @include media-breakpoint-up(xl) {
        height: 110px;
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

  &-subline {
    text-transform: uppercase;
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    letter-spacing: 0.01em;
    color: $gray-600;
    margin: $spacer 0 0;
    max-width: 280px;

    @include media-breakpoint-up(sm) {
      max-width: none;
    }
  }

  &-desc {
    position: absolute;
    top: 100%;
    left: 0;

    @include media-breakpoint-up(sm) {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
      max-width: 50%;
      z-index: 2;
    }
  }
}
</style>
