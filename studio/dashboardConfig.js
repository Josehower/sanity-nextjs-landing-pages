export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e70effd498ec2b39d4f4da',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8kygjgdu',
                  apiId: '74c9078c-9c60-4aa1-ad4f-f18a05567860'
                },
                {
                  buildHookId: '60e70f00b37058237828dbc8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4y9tqv3b',
                  apiId: '23bea6ba-aa34-4fad-a2cc-ee202b8b92a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Josehower/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4y9tqv3b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
