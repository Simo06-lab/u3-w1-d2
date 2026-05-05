import { Card } from "react-bootstrap"

const SingleBook = ({ book, onBookSelect, isSelected }) => {
  return (
    <Card
      onClick={() => onBookSelect(book.asin)}
      style={{
        minWidth: "140px",
        maxWidth: "140px",
        cursor: "pointer",
        flex: "0 0 auto",
        border: isSelected ? "3px solid red" : "1px solid transparent",
        transition: "border 0.2s ease",
      }}
      className="shadow-sm book-card"
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body className="p-2">
        <Card.Text
          className="mb-1 text-light"
          style={{ fontSize: "0.7rem", fontWeight: "600" }}
        >
          {book.title}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
