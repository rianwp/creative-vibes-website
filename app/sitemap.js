const { default: fetchGraphQL } = require("@/utils/fetchGraphQL");

const sitemap = async () => {
  const res = await fetchGraphQL(`
    query GetPosts {
      posts {
        nodes {
          title
          dateGmt
          slug
          postId
        }
      }
    }`,
    {
      variables: {}
    },
    "default",
  )
  const allPosts = await res.posts.nodes

  const posts = allPosts.map((post) => ({
    url: `https://www.creativevibesid.com/contents/${post.slug}`,
    lastModified: post.dateGmt,
  }));

  const routes = ["", "/", "/contents"].map((route) => ({
    url: `https://www.creativevibesid.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts]
}

export default sitemap