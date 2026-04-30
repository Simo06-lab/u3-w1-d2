import { Card } from "react-bootstrap"
const SingleComment = ({ comment }) => {
  return (
    <Card className="mb-2 bg-secondary text-light">
      <Card.Body className="p-2">
        <p className="m-0">{comment.comment}</p>
        <small>Voto: {comment.rate}</small>
      </Card.Body>
    </Card>
  )
}
export default SingleComment
