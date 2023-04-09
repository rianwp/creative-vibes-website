import ContentBox from "@/components/Contents/ContentBox"
import SectionTitle from "@/components/SectionTitle"
import dateFormat from "@/utils/dateFormat"

export const metadata = {
  title: "Contents",
  description: "Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience.",
}

const getImages = async () => {
  const images = await fetch("https://creativevibesid.000webhostapp.com/wp-json/wp/v2/media?_fields=id,source_url", { 
    next: { revalidate: 60*10 },
  })
  return images.json()
}

const getPosts = async () => {
  const posts = await fetch("https://creativevibesid.000webhostapp.com/wp-json/wp/v2/posts?_fields=author,id,modified_gmt,excerpt,title,link,featured_media", { 
    next: { revalidate: 60*10 },
  })
  return posts.json()
}

const Contents = async () => {
  const posts = await getPosts()
  const images = await getImages()
  const findImage = (id) => {
    const index = images.findIndex(image => image.id === id)
    return images[index].source_url
  }
  return(
    <div className="w-full">
     <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
        <SectionTitle>Contents</SectionTitle>
        <div className="flex flex-row mt-5 w-full justify-start flex-wrap items-start">
          {posts.map((post) => 
            <ContentBox key={post.id}
              img={findImage(post.featured_media)}
              href={`/contents/${post.id}`}
              judul={post.title.rendered}
              tanggal={dateFormat(post.modified_gmt)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Contents