<template lang="pug">
  .intro
    b-container.intro-container
      slot
</template>

<style lang="scss">
.intro {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(to left, $primary, $secondary);
  background-size: 150% 250%;
  animation: BkgGradient 5s ease infinite;

  @keyframes BkgGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &-container {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &-image {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    filter: drop-shadow($box-shadow-lg);

    @include media-breakpoint-up(md) {
      padding: 0 $spacer * 2;
    }

    @include media-breakpoint-up(lg) {
      padding: 0 $spacer * 3;
    }
  }

  &-copy {
    @include media-breakpoint-up(md) {
      position: absolute;
      bottom: -50px;
      z-index: 2;
    }
  }

  &-line {
    font-size: 45px;
    color: $white;
    position: relative;
    display: flex;

    @include media-breakpoint-up(sm) {
      font-size: 55px;
    }

    @include media-breakpoint-up(md) {
      font-size: 65px;
    }

    @include media-breakpoint-up(lg) {
      font-size: 80px;
    }

    @include media-breakpoint-up(xl) {
      font-size: 90px;
    }

    span {
      padding: 0 $spacer / 1.5;
      height: 57.5px;
      vertical-align: middle;
      box-shadow: $box-shadow-lg;

      @include media-breakpoint-up(sm) {
        height: 70px;
      }

      @include media-breakpoint-up(md) {
        padding: 0 $spacer;
        height: 85px;
      }

      @include media-breakpoint-up(lg) {
        height: 100px;
      }

      @include media-breakpoint-up(xl) {
        height: 110px;
      }
    }
  }

  &-line--regular {
    span {
      // background: $white;
      background: $gray-900;
    }
  }

  &-line--callout {
    // color: $white;

    span {
      background: linear-gradient(to left, $primary, $secondary);
    }
  }

  &-subline {
    text-transform: uppercase;
    font-size: $font-size-sm;
    letter-spacing: 0.03em;
    color: $gray-500;
    margin: $spacer 0 0;
    max-width: 280px;

    span {
      font-weight: $font-weight-bold;
    }

    @include media-breakpoint-up(sm) {
      max-width: none;
    }
  }

  &.intro-alt {
    overflow: hidden;
    min-height: 50vh;

    &:after {
      display: block;
      width: 200%;
      height: 250px;
      background: $white;
      content: "";
      transform: rotate(-7.5deg);
      position: absolute;
      bottom: -100px;
      left: -50%;
      z-index: 1;
    }

    .intro-container {
      top: auto;
      bottom: 100px;
    }
  }
}
</style>
