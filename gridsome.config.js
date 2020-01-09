const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        './node_modules/bootstrap/scss/_functions.scss',
        './node_modules/bootstrap/scss/_variables.scss',
        './node_modules/bootstrap/scss/_mixins.scss',
        path.resolve(__dirname, './src/assets/styles/custom.scss')
      ]
    });
}

module.exports = {
  siteName: 'Matthew Jason Craig',
  siteDescription:
    'Montreal based UI Designer & Vue.js Frontend Web Developer who inspires, creates, and implements beauty through pixels.',
  siteUrl: 'https://www.matthewjasoncraig.com',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {},
        pugLoader: {}
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-########-##'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  }
};
