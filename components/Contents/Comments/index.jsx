import dateFormat from "@/utils/dateFormat"
import CommentBox from "./CommentBox"
import fetchGraphQL from "@/utils/fetchGraphQL"

const getComments = async (postId) => {
  const res = await fetchGraphQL(`
  query GetComments {
    post(id: "${postId}", idType: DATABASE_ID) {
      comments {
        nodes {
          dateGmt
          parentId
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          commentId
          replies {
            nodes {
              commentId
              parentId
              dateGmt
              author {
                node {
                  avatar {
                    url
                  }
                  name
                }
              }
              content(format: RENDERED)
            }
          }
          content(format: RENDERED)
        }
      }
    }
  }`,
    {
      variables: {}
    },
    "no-cache",
  )
  return res.post.comments.nodes
}

const Comments = async ({postId}) => {
  const comments = await getComments(postId)
  return (
    <>
      <div className="text-xl text-black font-semibold mb-5">Post ini memiliki {comments.length} komentar</div>
      <div className="flex flex-col space-y-4">
        {comments.map((parentComment) => {
          if(parentComment.parentId == null){
            return(
              <CommentBox key={parentComment.commentId}
                withReplies={true}
                id={parentComment.commentId}
                comment={parentComment.content}
                img={parentComment.author.node.avatar.url}
                nama={parentComment.author.node.name}
                tanggal={dateFormat(parentComment.dateGmt)}
                postId={postId}
              >
                {parentComment.replies.nodes.map((childrenComment) => 
                  <div className="ml-2 sm:ml-0 mt-2" key={childrenComment.commentId}>
                    <CommentBox
                      withReplies={false}
                      id={childrenComment.commentId}
                      comment={childrenComment.content}
                      img={childrenComment.author.node.avatar.url}
                      nama={childrenComment.author.node.name}
                      tanggal={dateFormat(childrenComment.dateGmt)}
                      postId={postId}
                    />
                  </div>
                )}
              </CommentBox>
            )
          }
        })}
      </div>
    </>
  )
}

export default Comments
