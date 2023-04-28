const { default: fetchGraphQL } = require("@/utils/fetchGraphQL");

const sitemap = async () => {
  const res = await fetchGraphQL(`
    query GetPosts {
      posts {
        edges {
          node {
            title
            dateGmt
            slug
            postId
          }
        }
      }
    }`,
    {
      variables: {}
    },
    "default",
  )
  const allPosts = await res.posts.edges

  const posts = allPosts.map((post) => ({
    url: `https://www.creativevibesid.com/contents/${post.node.slug}`,
    lastModified: post.node.dateGmt,
  }));

  const routes = ["", "/", "/contents"].map((route) => ({
    url: `https://www.creativevibesid.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts]
}

export default sitemap