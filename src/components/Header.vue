<template lang="pug">
  div
    header.header

      g-link.logo(to='/')
        g-image.logo-image(alt='logo' src='~/assets/images/logo.png' immediate='true' quality='100')

      nav.navigation
        ul.nav.nav-main
          li
            button.btn.btn-link.nav-item(:class="{'nav-active': showMenu}" v-on:click="showMenu = !showMenu; showWorks = false")
              .nav-icon.nav-icon-menu
                span
                span
                span
                span
                
          li
            button.btn.btn-link.nav-item(:class="{'nav-active': showWorks}" v-on:click="showWorks = !showWorks; showMenu = false")
              .nav-icon.nav-icon-works
                span
                span
                span
                span
                span
                span
                span
                span
          li
            button.btn.btn-link.nav-item
              span.text-white 3
            
        ul.nav.nav-social.d-none.d-lg-flex
          li
            g-link.nav-item(to='/#')
              font-awesome(:icon="['fab', 'twitter']")
          li
            g-link.nav-item(to='/#')
              font-awesome(:icon="['fab', 'github']")
          li
            g-link.nav-item(to='/#')
              font-awesome(:icon="['fab', 'dribbble']")
          li
            g-link.nav-item(to='/#')
              font-awesome(:icon="['fab', 'linkedin-in']")

    transition(name="menu")
      Menu(v-if="showMenu")
        li.menu-item
          g-link.menu-link(to='/about') About
        li.menu-item
          g-link.menu-link(to='/blog') Blog
        li.menu-item
          g-link.menu-link(to='/#') Works
        li.menu-item
          g-link.menu-link(to='/contact') Contact

      Menu(v-if="showWorks")
        li.menu-item
          g-link.menu-link(to='/#') Works1
        li.menu-item
          g-link.menu-link(to='/#') Works2
        li.menu-item
          g-link.menu-link(to='/#') Works3
        li.menu-item
          g-link.menu-link(to='/#') Works4

</template>

<script>
import Menu from "~/components/Menu";

export default {
  components: {
    Menu
  },
  data() {
    return {
      showMenu: false,
      showWorks: false
    };
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: $zindex-fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: $gray-900;
  box-shadow: inset 0 0 0 1px $gray-800;
  display: flex;
  height: $dimensions-mobile;

  @include media-breakpoint-up(lg) {
    height: 100%;
    width: $dimensions-large;
    flex-direction: column;
    box-shadow: inset 0 0 0 1px $gray-800;
  }
}

.logo {
  width: $dimensions-mobile;
  height: $dimensions-mobile;
  border-right: 1px solid $gray-800;
  display: flex;
  align-items: center;
  justify-content: center;

  @include media-breakpoint-up(lg) {
    width: $dimensions-large;
    height: $dimensions-large;
    border-right: 0;
    border-bottom: 1px solid $gray-800;
  }

  &-image {
    width: 30px;

    @include media-breakpoint-up(lg) {
      width: 40px;
    }
  }
}

.navigation {
  margin-left: auto;

  @include media-breakpoint-up(lg) {
    margin: 0;
  }
}

.nav {
  border-left: 1px solid $gray-800;

  @include media-breakpoint-up(lg) {
    border: 0;
  }

  &-main {
    li {
      border-right: 1px solid $gray-800;

      &:last-child {
        border-right: 0;
      }

      @include media-breakpoint-up(lg) {
        border-right: 0;
        border-bottom: 1px solid $gray-800;
      }
    }

    .nav-item {
      display: block;
      width: $dimensions-mobile;
      height: $dimensions-mobile;
      text-align: center;
      position: relative;

      @include media-breakpoint-up(lg) {
        width: $dimensions-large;
        height: $dimensions-large;
      }
    }
  }

  &-active {
    &:before {
      position: absolute;
      top: -1px;
      left: -2px;
      width: calc(100% + 4px);
      height: 3px;
      content: "";
      background: linear-gradient(to right, $primary, $secondary);

      @include media-breakpoint-up(lg) {
        top: -2px;
        left: -1px;
        width: 3px;
        height: calc(100% + 4px);
        content: "";
        background: linear-gradient($primary, $secondary);
      }
    }

    &:after {
      position: absolute;
      top: 100%;
      left: -1px;
      width: $dimensions-mobile;
      height: 1px;
      content: "";
      display: block;
      background: $gray-900;

      @include media-breakpoint-up(lg) {
        top: -1px;
        left: auto;
        right: -1px;
        width: 1px;
        height: $dimensions-large;
      }
    }
  }

  &-icon {
    width: 30px;
    display: inline-block;
    vertical-align: middle;

    &-menu {
      span {
        display: block;
        height: 3px;
        background: $gray-600;
        margin: 0 0 3px;
        border-radius: 2px;

        &:last-of-type {
          margin: 0;
          width: 50%;
        }
      }
    }

    &-works {
      width: 34px;
      span {
        display: block;
        float: left;
        height: 8px;
        width: 8px;
        background: $gray-600;
        margin: 0 2px 3px;
        border-radius: 2px;

        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
  }

  &-social {
    @include media-breakpoint-up(lg) {
      position: absolute;
      bottom: $spacer;
      left: 0;
      width: 100%;
      flex-direction: column;
    }

    li {
      @include media-breakpoint-up(lg) {
        width: $dimensions-large;
        margin-bottom: $spacer;
        text-align: center;
      }
    }

    .nav-item {
      @include media-breakpoint-up(lg) {
        color: $gray-700;

        &:hover,
        &:focus {
          color: $light;
        }
      }
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: height $speed;

  @include media-breakpoint-up(lg) {
    transition: width $speed;
  }
}

.menu-enter,
.menu-leave-to {
  height: 0;

  @include media-breakpoint-up(lg) {
    height: 100%;
    width: 0;
  }
}
</style>
