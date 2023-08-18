import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'James Garcia | Posts',
    description: 'A collection of posts by James Garcia',
    site: 'https://mellow-lollipop-4e798a.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}