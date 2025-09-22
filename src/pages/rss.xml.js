import rss, { pagesGlobToRssItems } from '@astrojs/rss'

/**
 * Creates an RSS feed for the blog posts.
 * https://docs.astro.build/ja/recipes/rss/
 */
export async function GET(context) {
  return rss({
    title: 'Soratabi Blog',
    description: 'The perfect product for your aviation blog.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/p/*.{md,mdx}'), (post) => ({
      description: '',
      pubDate: post.frontmatter.date,
      categories: post.frontmatter.category,
    })),
  })
}
