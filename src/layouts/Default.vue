<template lang="pug">
#app
  Header

  transition(name='fade' appear)
    main#content

      slot(name='intro')

      b-container
        slot
        
      Footer
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

main {
  // margin-top: $dimensions-mobile;

  @include media-breakpoint-up(md) {
    margin-top: 0;
    margin-left: $dimensions-large;
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
