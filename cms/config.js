export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'BriightSpark/aem-community-cms',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
          ],
        },
      ],
    },
  ],
};