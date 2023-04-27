import Comments from "@/components/Contents/Comments"
import CommentInput from "@/components/Contents/Comments/CommentInput"
import LoadingComment from "@/components/Contents/Comments/LoadingComment"
import MainContent from "@/components/Contents/Content"
import NotFound from "@/components/Contents/Content/NotFound"
import SectionTitle from "@/components/SectionTitle"
import dateFormat from "@/utils/dateFormat"
import fetchGraphQL from "@/utils/fetchGraphQL"
import { convert } from "html-to-text"
import { Suspense } from "react"


const getPost = async (id) => {
  const res = await fetchGraphQL(`
    query GetPost {
      post(id: "${id}", idType: DATABASE_ID) {
        dateGmt
        title
        content(format: RENDERED)
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        postId
      }
    }`,
    {
      variables: {}
    },
    "default",
  )
  if(res.post != null && !res.error){
    return res.post
  } else{
    return {
      error: true
    }
  }
}

export const generateMetadata = async ({params}) => {
  const post = await getPost(params.id)
  if(post.error){
    return {
      title: "Creative Vibes",
      description: "creativevibesid | creativevibesid.com | Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience."
    }
  } else{
    return {
      title: post.title,
      description: `creativevibesid | creativevibesid.com | ${convert(post.content, {
        wordwrap: null,
      }).substring(0,155)}`
    }
  }
}

const Content = async ({params}) => {
  const post = await getPost(params.id)
  if(post.error){
    return <NotFound/>
  } else{
    return (
      <div className="w-full">
        <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
          <SectionTitle>{post.title}</SectionTitle>
          <MainContent
            tanggal={dateFormat(post.dateGmt)}
            img={post.featuredImage.node.sourceUrl}
            alt={post.title}
            text={post.content}
            tags={post.tags.edges}
          />
          <div className="w-full mt-20">
            <Suspense fallback={<LoadingComment/>}>
              <Comments id={params.id}/>
            </Suspense>
            <div className="mt-16">
              <div className="text-black font-semibold mb-5 text-xl">Tulis Komentar Anda</div>
              <CommentInput parent={0}/>   
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content