<template lang="pug">
  Layout
    
    template(slot='intro')
      Intro
        g-image.intro-image(alt='Works' src='~/assets/images/mjc-work-template.png' immediate='true' quality='100')
        .intro-copy
          h1
            .intro-line.intro-line--regular
              span Dream
            .intro-line.intro-line--callout
              span Discover
            .intro-line.intro-line--regular
              span Construct
          .intro-subline
            | UI Designer / Frontend Developer / 
            span.text-dark Matthew Jason Craig
        .intro-desc
          p.
            I build sustainable, performant, and meaningful frontend experiences. I have a definitive eye for high-quality user experience and good user interface design. I specialize in writing and designing scalable CSS architectures, maintainable, sharable code and performance optimization.

    //- h2.mb-4 Gridsome starter bootstrap
    //- p.
    //-   I build sustainable, performant, and meaningful frontend experiences. I have a definitive eye for high-quality user experience and good user interface design. I specialize in writing and designing scalable CSS architectures, maintainable, sharable code and performance optimization.
    
</template>

<script>
import Intro from "~/components/Intro";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Intro
  }
};
</script>

<style lang="scss" scoped></style>
