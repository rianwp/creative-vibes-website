import dateFormat from "@/utils/dateFormat"
import CommentBox from "./CommentBox"
import fetchGraphQL from "@/utils/fetchGraphQL"

const getComments = async (id) => {
  const res = await fetchGraphQL(`
    query GetComments {
      post(id: "1", idType: DATABASE_ID) {
        comments {
          edges {
            node {
              replies {
                edges {
                  node {
                    content(format: RENDERED)
                    author {
                      node {
                        name
                        avatar {
                          url
                        }
                      }
                    }
                    dateGmt
                    commentId
                  }
                }
              }
              content(format: RENDERED)
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              dateGmt
              commentId
              parentId
            }
          }
        }
      }
    }`,
    {
      variables: {}
    },
    "no-cache",
  )
  return res.post.comments.edges
}

const Comments = async ({id}) => {
  const comments = await getComments(id)
  return (
    <>
      <div className="text-xl text-black font-semibold mb-5">Post ini memiliki {comments.length} komentar</div>
      <div className="flex flex-col space-y-4">
        {comments.map((parentComment) => {
          if(parentComment.node.parentId == null){
            return(
              <CommentBox key={parentComment.node.commentId}
                withReplies={true}
                id={parentComment.node.commentId}
                comment={parentComment.node.content}
                img={parentComment.node.author.node.avatar.url}
                nama={parentComment.node.author.node.name}
                tanggal={dateFormat(parentComment.node.dateGmt)}
              >
                {parentComment.node.replies.edges.map((childrenComment) => 
                  <div className="ml-2 sm:ml-0 mt-2" key={childrenComment.node.commentId}>
                    <CommentBox
                      withReplies={false}
                      id={childrenComment.node.commentId}
                      comment={childrenComment.node.content}
                      img={childrenComment.node.author.node.avatar.url}
                      nama={childrenComment.node.author.node.name}
                      tanggal={dateFormat(childrenComment.node.dateGmt)}
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
