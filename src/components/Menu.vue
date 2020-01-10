<template lang="pug">
  nav.menu
    button.btn.btn-link.menu-close(v-on:click='close()')
      font-awesome(:icon="['fas', 'times']")
    ul
      slot

</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.menu {
  position: fixed;
  z-index: $zindex-fixed - 1;
  top: $dimensions-mobile;
  left: 0;
  width: 100%;
  background: rgba($gray-900, 0.9);
  height: calc(100% - #{$dimensions-mobile});

  @include media-breakpoint-up(md) {
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

    @include media-breakpoint-up(md) {
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

    @include media-breakpoint-up(md) {
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

    &:hover {
      color: $white;
    }
  }

  &-close {
    position: absolute;
    bottom: $spacer / 2;
    right: $spacer / 2;
    color: $gray-700 !important;

    &:hover {
      color: $white !important;
    }

    @include media-breakpoint-up(md) {
      bottom: auto;
      top: $spacer / 2;
    }
  }
}

.active--exact {
  font-weight: bold;
  color: $secondary;
}
</style>
