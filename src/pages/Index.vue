<template lang="pug">
  Layout
    
    template(slot='intro')
      Intro
        .intro-copy
          h1
            .intro-line.intro-line--regular
              span Dream
            .intro-line.intro-line--callout
              span Discover
            .intro-line.intro-line--regular
              span Construct

    h2.mb-4 Gridsome starter bootstrap
    p.
      This is a starter project for Gridsome that comes with many features out of the box. It utilizes Bootstrap that is well known for powerful styling and layout. Ready to be deployed, automagically imports data to CMS and sets up your /admin page for easy access to edit your content.
      
    p.
      It is designed to use Netlify, Forestry and Github which all have very fair free tier to their services, so you wont need to pay for monthly subscriptions and costly hosting fees.
    
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
