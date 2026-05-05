import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

function BookList({ books }) {
  const [selectedAsin, setSelectedAsin] = useState(null)

  const handleBookSelect = (asin) => {
    setSelectedAsin(asin)
  }

  return (
    <Container fluid className="my-4">
      <Row>
        <Col md={8} className="d-flex gap-3 flex-wrap">
          {books.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              onBookSelect={handleBookSelect}
              isSelected={selectedAsin === book.asin}
            />
          ))}
        </Col>

        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
