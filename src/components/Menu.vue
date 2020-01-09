<template lang="pug">
  nav.menu
    ul
      slot

</template>

<script>
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  z-index: $zindex-fixed + 1;
  top: $dimensions-mobile;
  left: 0;
  width: 100%;
  background: rgba($gray-900, 0.9);
  height: calc(100% - #{$dimensions-mobile});

  @include media-breakpoint-up(lg) {
    top: 0;
    left: $dimensions-large;
    height: 100%;
    width: calc(100% - #{$dimensions-large});
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    display: block;
    overflow-y: auto;
    border-left: 1px solid $gray-800;
    border-right: 1px solid $gray-800;

    @include media-breakpoint-up(lg) {
      border-left: 0;
      border-right: 0;
      border-top: 1px solid $gray-800;
      border-bottom: 1px solid $gray-800;
      display: block;
    }
  }

  &-item {
    height: 25%;
    background: $gray-900;
    border-bottom: 1px solid $gray-800;

    @include media-breakpoint-up(lg) {
      float: left;
      height: 100%;
      width: 25%;
      border-right: 1px solid $gray-800;
    }
  }

  &-link {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: $gray-600;

    &:hover,
    &:focus {
      color: $white;
    }
  }
}

.active--exact {
  font-weight: bold;
  color: $secondary;
}
</style>
