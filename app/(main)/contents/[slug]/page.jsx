import Comments from "@/components/Contents/Comments"
import CommentInput from "@/components/Contents/Comments/CommentInput"
import LoadingComment from "@/components/Contents/Comments/LoadingComment"
import MainContent from "@/components/Contents/Content"
import NotFound from "@/components/Contents/Content/NotFound"
import SectionTitle from "@/components/SectionTitle"
import dateFormat from "@/utils/dateFormat"
import fetchGraphQL from "@/utils/fetchGraphQL"
import getMetaDesc from "@/utils/getMetaDesc"
import { Suspense } from "react"


const getPost = async (slug) => {
  const res = await fetchGraphQL(`
    query GetPost {
      postBy(slug: "${slug}") {
        dateGmt
        title
        content(format: RENDERED)
        excerpt
        tags {
          nodes {
            name
            id
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
  if(res.postBy != null && !res.error){
    return res.postBy
  } else{
    return {
      error: true
    }
  }
}

export const generateMetadata = async ({params}) => {
  const post = await getPost(params.slug)
  if(post.error){
    return {
      title: "Creative Vibes",
      description: "creativevibesid | creativevibesid.com | Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience."
    }
  } else{
    return {
      title: post.title,
      // description: `creativevibesid | creativevibesid.com | ${convert(post.content, {
      //   wordwrap: null,
      // }).substring(0,155)}`
      description: getMetaDesc(post.excerpt)
    }
  }
}

const Content = async ({params}) => {
  const post = await getPost(params.slug)
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
            tags={post.tags.nodes}
          />
          <div className="w-full mt-20">
            <Suspense fallback={<LoadingComment/>}>
              <Comments postId={post.postId}/>
            </Suspense>
            <div className="mt-16">
              <div className="text-black font-semibold mb-5 text-xl">Tulis Komentar Anda</div>
              <CommentInput parent={0} postId={post.postId}/>   
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content

// const Loading = () => {
//   return (
//     <div className="w-full animate-pulse">
//     <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
//       <div className="w-full flex justify-center items-center">
//         <div className="h-6 w-1/2 bg-gray-400 rounded-lg"></div>
//       </div>
//       <div className="mt-5 w-full">
//         <div className="flex flex-row items-center mb-2 flex-wrap">
//           <div className="flex flex-row items-center space-x-2 text-gray-400 mr-2 mb-2">
//             <div className="bg-gray-400 h-5 w-32 rounded-lg"/>
//           </div>
//         </div>
//         <div className="w-full aspect-video rounded-lg overflow-hidden mb-5 bg-gray-400"/>
//         <div className="w-full">
//           {[...Array(20)].map((x, i) => 
//             <div key={i} class="h-4 bg-gray-400 rounded-lg w-full mb-2"/>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Loading