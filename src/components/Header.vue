<template lang="pug">
  div
    header.header

      .logo(v-on:click='closeMenu()')
        g-link(to='/')
          g-image.logo-image(alt='logo' src='~/assets/images/logo.png' immediate='true' quality='100')

      nav.navigation
        ul.nav.nav-main
          li(:class="{'is-active': showMenu}")
            button.btn.btn-link.nav-item(:class="{'nav-active': showMenu}" v-on:click="showMenu = !showMenu; showWorks = false; showBlog = false;")
              .nav-icon.nav-icon-menu
                span
                span
                span
                span
          li(:class="{'is-active': showWorks}")
            button.btn.btn-link.nav-item(:class="{'nav-active': showWorks}" v-on:click="showWorks = !showWorks; showMenu = false; showBlog = false;")
              .nav-icon.nav-icon-works
                span
                span
                span
                span
                span
                span
                span
                span
          li(:class="{'is-active': showBlog}")
            button.btn.btn-link.nav-item(:class="{'nav-active': showBlog}" v-on:click="showBlog = !showBlog; showMenu = false; showWorks = false;")
              .nav-icon.nav-icon-blog
                font-awesome(:icon="['fas', 'pencil-alt']")
            
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
      Menu(v-if='showMenu' @close='closeMenu()')
        li.menu-item
          g-link.menu-link(to='/about') About
        li.menu-item
          g-link.menu-link(to='/blog') Works
        li.menu-item
          g-link.menu-link(to='/#') Blog
        li.menu-item
          g-link.menu-link(to='/contact') Contact

      Menu(v-if='showWorks' @close='closeMenu()')
        li.menu-item
          g-link.menu-link(to='/#') Works1
        li.menu-item
          g-link.menu-link(to='/#') Works2
        li.menu-item
          g-link.menu-link(to='/#') Works3
        li.menu-item
          g-link.menu-link(to='/#') Works4

      Menu.menu-blog(v-if='showBlog' @close='closeMenu()')
        li.menu-item(v-for="item in $static.posts.edges" :key="item.node.id" v-on:click='closeMenu()')
          g-link.menu-link(:to="item.node.path")
            | {{item.node.title}}

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
      showWorks: false,
      showBlog: false
    };
  },
  methods: {
    closeMenu() {
      this.showMenu = false;
      this.showWorks = false;
      this.showBlog = false;
    }
  }
};
</script>

<static-query>
query Blog {
	posts: allBlogPost(sortBy: "date", limit: 4) {
    edges {
      node {
        id
        path
        title
        excerpt
        image
      }
    }
  }
}
</static-query>

<style lang="scss">
.header {
  position: fixed;
  z-index: $zindex-fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: $gray-900;
  display: flex;
  height: $dimensions-mobile;
  box-shadow: inset 0 0 0 1px $gray-800;

  @include media-breakpoint-up(md) {
    height: 100%;
    width: $dimensions-large;
    flex-direction: column;
  }
}

.logo {
  width: $dimensions-mobile;
  height: $dimensions-mobile;
  display: flex;
  align-items: center;
  justify-content: center;

  @include media-breakpoint-up(md) {
    width: $dimensions-large;
    height: $dimensions-large;
    border-bottom: 1px solid $gray-800;
  }

  &-image {
    width: 30px;

    @include media-breakpoint-up(md) {
      width: 40px;
    }
  }
}

.navigation {
  margin-left: auto;

  @include media-breakpoint-up(md) {
    margin: 0;
  }
}

.nav {
  border-left: 1px solid $gray-800;

  @include media-breakpoint-up(md) {
    border: 0;
  }

  &-main {
    li {
      position: relative;
      border-right: 1px solid $gray-800;

      &:last-child {
        border-right: 0;
      }

      @include media-breakpoint-up(md) {
        border-right: 0;
        border-bottom: 1px solid $gray-800;

        &:before {
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          display: block;
          background: $gray-300;
          padding: $spacer / 2;
          text-transform: uppercase;
          font-size: $font-size-sm;
          letter-spacing: 0.01em;
          color: $body-color;
          box-shadow: $box-shadow-lg;
          visibility: hidden;
        }

        &:after {
          width: 0;
          height: 0;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 6px solid $gray-300;
          content: "";
          display: block;
          visibility: hidden;
        }

        &:first-child:before {
          content: "Menu";
        }

        &:nth-child(2):before {
          content: "Works";
        }

        &:nth-child(3):before {
          content: "Blog";
        }

        &:hover {
          &:before,
          &:after {
            opacity: 1;
            visibility: visible;
          }
        }

        &.is-active {
          &:before,
          &:after {
            display: none;
          }
        }
      }
    }

    .nav-item {
      display: block;
      width: $dimensions-mobile;
      height: $dimensions-mobile;
      text-align: center;
      position: relative;

      &:hover {
        .nav-icon span {
          background: $white;
        }
      }

      @include media-breakpoint-up(md) {
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

      @include media-breakpoint-up(md) {
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

      @include media-breakpoint-up(md) {
        top: -1px;
        left: auto;
        right: -1px;
        width: 1px;
        height: $dimensions-large;
      }
    }

    .nav-icon {
      span {
        background: $white;
      }
    }
  }

  &-icon {
    width: 30px;
    display: inline-block;
    vertical-align: middle;

    span {
      transition: $transition-base;
    }

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

    &-blog {
      color: $gray-600;
      font-size: $h3-font-size;
    }
  }

  &-social {
    @include media-breakpoint-up(md) {
      position: absolute;
      bottom: $spacer;
      left: 0;
      width: 100%;
      flex-direction: column;
    }

    li {
      @include media-breakpoint-up(md) {
        width: $dimensions-large;
        margin-bottom: $spacer;
        text-align: center;
      }
    }

    .nav-item {
      @include media-breakpoint-up(md) {
        color: $gray-700;

        &:hover {
          color: $light;
        }
      }
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: height $speed;

  @include media-breakpoint-up(md) {
    transition: width $speed;
  }
}

.menu-enter,
.menu-leave-to {
  height: 0;

  @include media-breakpoint-up(md) {
    height: 100%;
    width: 0;
  }
}
</style>
