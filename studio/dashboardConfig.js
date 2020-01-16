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
                  buildHookId: '5e2029c8e50a3159f1204a73',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ro7ax32a',
                  apiId: '93675698-4393-4f55-8e2d-ed3c581d4bfc'
                },
                {
                  buildHookId: '5e2029c8bdf59b2d9de5dba5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mmaghg9e',
                  apiId: '93658774-9b94-490e-b3d0-55fbb2ddac34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cyberdeepak/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mmaghg9e.netlify.com', category: 'apps'}
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
