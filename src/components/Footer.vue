<template lang="pug">
  footer.footer
      .footer-copyright
        
        span &copy; 2020 Matthew Jason Craig
        span.ml-3 
          | Made With
          font-awesome.ml-1.text-danger(:icon="['fas', 'heart']")
</template>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: $spacer * 4 $spacer * 2 $spacer;

  &-copyright {
    text-align: right;
    font-size: $font-size-sm / 1.35;
    text-transform: uppercase;
    color: $gray-500;
    // font-weight: $font-weight-bold;
  }
}
</style>
