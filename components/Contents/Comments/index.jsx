import dateFormat from "@/utils/dateFormat"
import CommentBox from "./CommentBox"
import CommentInput from "./CommentInput"

const getComments = async (id) => {
  const comments = await fetch(`https://creativevibesid.000webhostapp.com/wp-json/wp/v2/comments?post=${id}&_fields=id,author_name,author_avatar_urls,parent,content,date_gmt,content`, { 
    cache: "no-cache",
  })
  return comments.json()
}

const Comments = async ({id}) => {
  const comments = await getComments(id)
  const parent = []
  const children = []
  comments.map((comment) => {
    if(comment.parent == 0){
      parent.push(comment)
    } else{
      children.push(comment)
    }
  })
  
  return (
    <div className="w-full mt-20">
      <div className="text-xl text-black font-semibold mb-5">Post ini memiliki {comments.length} komentar</div>
      <div className="flex flex-col space-y-4">
        {parent.map((parentComment) => 
          <CommentBox key={parentComment.id}
            withReplies={true}
            id={parentComment.id}
            comment={parentComment.content.rendered}
            img={parentComment.author_avatar_urls[96]}
            nama={parentComment.author_name}
            tanggal={dateFormat(parentComment.date_gmt)}
          >
            {children.map((childrenComment) => {
              if(childrenComment.parent == parentComment.id){
                return (
                  <div className="my-2" key={childrenComment.id}>
                    <CommentBox
                      withReplies={false}
                      id={childrenComment.id}
                      comment={childrenComment.content.rendered}
                      img={childrenComment.author_avatar_urls[96]}
                      nama={childrenComment.author_name}
                      tanggal={dateFormat(childrenComment.date_gmt)}
                    />
                  </div>
                )
              }
            })}
          </CommentBox>
        )}
      </div>
      <div className="mt-16">
        <div className="text-black font-semibold mb-5 text-xl">Tulis Komentar Anda</div>
        <CommentInput parent={0}/>   
      </div>
    </div>
  )
}

export default Comments
