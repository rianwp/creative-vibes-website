import Comments from "@/components/Contents/Comments"
import MainContent from "@/components/Contents/Content/MainContent"
import SectionTitle from "@/components/SectionTitle"
import dateFormat from "@/utils/dateFormat"
import { convert } from "html-to-text"

export const revalidate = 60*5

const getPost = async (id) => {
  const post = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/posts/${id}?_fields=author,date_gmt,id,content,title,link,featured_media`, { 
    // cache: "no-cache",
  })
  return post.json()
}

const getImage = async (id) => {
  const image = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/media/${id}?_fields=source_url,id`, { 
    // cache: "no-cache",
  })
  return image.json()
}

const getTags = async (id) => {
  const tags = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/tags?post=${id}&fields=id,name,slug`, { 
    // cache: "no-cache",
  })
  return tags.json()
}

export const generateMetadata = async ({params}) => {
  const post = await getPost(params.id)
  return {
    title: post.title.rendered,
    description: `creativevibesid | creativevibesid.com | ${convert(post.content.rendered, {
      wordwrap: null,
    }).substring(0,155)}`
  }
}

const Content = async ({params}) => {
  const post = await getPost(params.id)
  const tags = await getTags(params.id)
  const image = await getImage(post.featured_media)
  return (
    <div className="w-full">
     <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
        <SectionTitle>{post.title.rendered}</SectionTitle>
        <MainContent
          tanggal={dateFormat(post.date_gmt)}
          img={image.source_url}
          alt={post.title.rendered}
          text={post.content.rendered}
          tags={tags}
        />
        <Comments id={params.id}/>
      </div>
    </div>
  )
}

export default Content