import { Container } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = ({ books }) => {
  return (
    <Container fluid className="d-flex gap-3 flex-wrap my-4">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </Container>
  )
}

export default BookList
