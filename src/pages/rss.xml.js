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
    items: await Promise.all(
      Object.entries(import.meta.glob('./blog/p/*.{md,mdx}')).map(async ([path, resolver]) => {
        const post = await resolver()
        return {
          title: post.frontmatter.title,
          pubDate: new Date(post.frontmatter.date),
          description: '',
          category: post.frontmatter.category,
          tags: post.frontmatter.tags,
          link: path.replace('./blog/p', '/blog/p').replace(/\.mdx?$/, ''),
        }
      }),
    ),
  })
}
