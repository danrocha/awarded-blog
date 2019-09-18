// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())


module.exports = {
  siteName: 'Awarded News',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // required
        baseDir: './content/posts/', // where .md files are located.
        route: '/:slug',
        template: './src/templates/Post.vue',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
          },
        },
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        }
      }
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'content/posts/**/*.md',
    //     typeName: 'Post',
    //     route: '/:slug',
    //     refs: {
    //       tags: {
    //         typeName: 'Tag',
    //         route: '/tag/:id',
    //         create: true,
    //       },
    //     },
    //   },
    // },
  ],
  // transformers: {
  //   //Add markdown support to all file-system sources
  //   remark: {
  //     externalLinksTarget: '_blank',
  //     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
  //     anchorClassName: 'icon icon-link',

  //   },
  // },
};
