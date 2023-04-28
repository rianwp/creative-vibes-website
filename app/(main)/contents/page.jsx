import ContentBox from "@/components/Contents/ContentBox"
import SectionTitle from "@/components/SectionTitle"
import dateFormat from "@/utils/dateFormat"
import fetchGraphQL from "@/utils/fetchGraphQL"

export const metadata = {
  title: "Contents",
  description: "creativevibesid | creativevibesid.com | Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience.",
}

const getPosts = async () => {
  const res = await fetchGraphQL(`
    query GetPosts {
      posts {
        nodes {
          title
          dateGmt
          slug
          tags {
            nodes {
              name
              id
            }
          }
          featuredImage {
            node {
              id
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
          postId
        }
      }
    }`,
    {
      variables: {}
    },
    "default",
  )
  if(res.posts){
    return res.posts.nodes
  }
  return res
}

const Contents = async () => {
  const posts = await getPosts()
  return(
    <div className="w-full">
     <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
        <SectionTitle>Contents</SectionTitle>
        <div className="flex flex-row mt-5 w-full justify-start flex-wrap items-start">
          {posts.map((post) => 
            <ContentBox key={post.postId}
              img={post.featuredImage.node.sourceUrl}
              href={`/contents/${post.slug}`}
              judul={post.title}
              tanggal={dateFormat(post.dateGmt)}
              tags={post.tags.nodes}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Contents