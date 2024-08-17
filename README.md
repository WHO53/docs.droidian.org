The repository cans sourcecode for [Droidian Documentation page](https://docs.droidian.org/)

The site has been built using Next.js.

# Running locally for development

The website can be started locally using the command:

    $ npm run dev

## Adding new doc page

A new doc page can be added by creating page-name.md file in pages/ dir.

For adding the same page in sidebar, make changed to _meta.json

For adding a category of docs , create the category-name dir in pages/ dir and populate it with .md
If you want to have an index page for category too then add category.md in pages/ dir.

For more information you can checkout theme [docs](https://nextra.site/docs/docs-theme)
