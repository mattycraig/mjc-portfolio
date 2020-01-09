<template lang="pug">
  Layout
  
    template(slot='intro')
      Intro
        .intro-copy
          h1
            .intro-line.intro-line--regular
              span About

    p Lorem ipsum dolor sit amet consectetur adipiscing elit, platea elementum mus lectus molestie et. Conubia taciti nunc proin vehicula et nascetur lacinia commodo non, penatibus vel dui pharetra inceptos himenaeos orci viverra ad, quis ullamcorper sit scelerisque nibh praesent imperdiet vulputate.
    p Eros morbi himenaeos eget sagittis parturient, netus sapien pharetra semper iaculis orci, elementum ullamcorper eleifend aenean. Orci ligula euismod taciti conubia facilisis mattis laoreet, cras aliquam ultrices purus augue morbi, a litora feugiat dapibus per lacinia.
    p Conubia non mi vulputate natoque nullam sem nascetur fames felis, hendrerit imperdiet pretium urna a augue nec quis lorem, orci sed vehicula pulvinar viverra nam lacus porttitor. Praesent id elementum aliquet dolor himenaeos primis urna vestibulum, molestie sagittis cursus facilisi tellus phasellus lacinia, viverra porttitor tincidunt tortor habitasse class luctus.
</template>

<script>
import Intro from '~/components/Intro';

export default {
  metaInfo: {
    title: 'About'
  },
  components: {
    Intro
  }
};
</script>

<style lang="scss" scoped></style>
