import { useState, useEffect } from "react"
import { Spinner, Alert } from "react-bootstrap"
import CommentsList from "./CommensList"
import AddComment from "./AddComment"

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchComments = async () => {
    if (!asin) return

    setIsLoading(true)

    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNGIxY2YwNDIwZDAwMTUxNTVhN2YiLCJpYXQiOjE3Nzc1NTIxNTYsImV4cCI6MTc3ODc2MTc1Nn0.rOZ76PCN55Fnnnap2cKU7HFNBHwgAaNDZ9iR6QkPTF8",
          },
        },
      )

      const data = await res.json()
      setComments(data)
    } catch (error) {
      console.log("Errore nel fetch", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchComments()
  }, [asin])

  if (!asin) {
    return (
      <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
    )
  }

  return (
    <div className="mt-2 p-2 border rounded bg-dark text-light">
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            <CommentsList comments={comments} />
          </div>

          <AddComment asin={asin} onNewComment={fetchComments} />
        </>
      )}
    </div>
  )
}

export default CommentArea
