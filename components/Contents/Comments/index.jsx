import dateFormat from "@/utils/dateFormat"
import CommentBox from "./CommentBox"
import CommentInput from "./CommentInput"

const getComments = async (id) => {
  const comments = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/comments?post=${id}&_fields=id,author_name,author_avatar_urls,content,date_gmt,content`, { 
    cache: "no-cache",
  })
  return comments.json()
}

const Comments = async ({id}) => {
  const comments = await getComments(id)

  return (
    <div className="w-full mt-10">
      <div className="text-xl text-black font-semibold mb-2">Post ini memiliki {comments.length} komentar</div>
      <div className="flex flex-col space-y-2">
        {comments.map((comment) => 
          <CommentBox key={comment.id}
            comment={comment.content.rendered}
            img={comment.author_avatar_urls[96]}
            nama={comment.author_name}
            tanggal={dateFormat(comment.date_gmt)}
          />
        )}
      </div>
      <CommentInput/>   
    </div>
  )
}

export default Comments
