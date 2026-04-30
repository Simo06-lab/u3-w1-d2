import SingleComment from "./SingleComment"

const CommentsList = ({ comments }) => {
  return (
    <div className="mb-3">
      {comments.map((i) => (
        <SingleComment key={i._id} comment={i} />
      ))}
    </div>
  )
}
export default CommentsList
