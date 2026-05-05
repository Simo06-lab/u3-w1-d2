import { useState } from "react"
import { Form, Button } from "react-bootstrap"

function AddComment({ asin, onNewComment }) {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState(1)

  const sendComment = (e) => {
    e.preventDefault()

    const newComment = {
      comment,
      rate,
      elementId: asin,
    }

    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNGIxY2YwNDIwZDAwMTUxNTVhN2YiLCJpYXQiOjE3Nzc1NTIxNTYsImV4cCI6MTc3ODc2MTc1Nn0.rOZ76PCN55Fnnnap2cKU7HFNBHwgAaNDZ9iR6QkPTF8",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        if (res.ok) {
          onNewComment()
          setComment("")
          setRate(1)
        } else {
          throw new Error("Errore nel salvataggio commento")
        }
      })
      .catch((err) => console.log("Errore POST:", err))
  }

  return (
    <Form onSubmit={sendComment}>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Scrivi una recensione..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button
        type="submit"
        variant="danger"
        size="sm"
        onClick={(e) => e.stopPropagation()}
      >
        Invia
      </Button>
    </Form>
  )
}

export default AddComment
