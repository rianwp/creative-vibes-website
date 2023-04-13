import Comments from "@/components/Contents/Comments"
import MainContent from "@/components/Contents/Content/MainContent"
import SectionTitle from "@/components/SectionTitle"
import dateFormat from "@/utils/dateFormat"

export const revalidate = 60*5

const getPost = async (id) => {
  const post = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/posts/${id}?_fields=author,id,date_gmt,content,title,link,featured_media`, { 
    // cache: "no-cache",
  })
  return post.json()
}

const getImage = async (id) => {
  const image = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/media/${id}?_fields=id,source_url`, { 
    // cache: "no-cache",
  })
  return image.json()
}

export const generateMetadata = async ({params}) => {
  const post = await getPost(params.id)
  return {
    title: post.title.rendered,
    description: "Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience."
  }
}

const Content = async ({params}) => {
  const post = await getPost(params.id)
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
        />
        <Comments id={params.id}/>
      </div>
    </div>
  )
}

export default Content