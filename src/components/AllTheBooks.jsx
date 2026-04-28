import { Container, Card } from "react-bootstrap"
import books from "../data/horror.json"

const AllTheBooks = function () {
  const firstRow = books.slice(0, 75)
  const secondRow = books.slice(75, 150)

  return (
    <Container fluid className="my-4">
      <h5 className="mb-3 px-3"> Top Picks</h5>

      <div className="position-relative">
        <button className="arrow-btn left" onClick={() => scrollLeft("row1")}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>

        <div id="row1" className="d-flex gap-3 pb-3 px-3 mb-4 scroll-row">
          {firstRow.map((book) => (
            <Card
              key={book.asin}
              style={{
                minWidth: "140px",
                maxWidth: "140px",
                cursor: "pointer",
                flex: "0 0 auto",
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
                  {book.title.length > 40
                    ? book.title.slice(0, 40) + "…"
                    : book.title}
                </Card.Text>
                <span className="badge bg-danger">€{book.price}</span>
              </Card.Body>
            </Card>
          ))}
        </div>

        <button className="arrow-btn right" onClick={() => scrollRight("row1")}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </div>

      <h5 className="mb-3 px-3">More Horrors</h5>

      <div className="position-relative">
        <button className="arrow-btn left" onClick={() => scrollLeft("row2")}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>

        <div id="row2" className="d-flex gap-3 pb-3 px-3 scroll-row">
          {secondRow.map((book) => (
            <Card
              key={book.asin}
              style={{
                minWidth: "140px",
                maxWidth: "140px",
                cursor: "pointer",
                flex: "0 0 auto",
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
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    lineHeight: "1.2",
                  }}
                >
                  {book.title.length > 40
                    ? book.title.slice(0, 40) + "…"
                    : book.title}
                </Card.Text>
                <span className="badge bg-danger">€{book.price}</span>
              </Card.Body>
            </Card>
          ))}
        </div>
        <button className="arrow-btn right" onClick={() => scrollRight("row2")}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </div>
    </Container>
  )
}
const scrollRight = (id) => {
  const row = document.getElementById(id)
  row.scrollBy({ left: 150, behavior: "smooth" })
}

const scrollLeft = (id) => {
  const row = document.getElementById(id)
  row.scrollBy({ left: -150, behavior: "smooth" })
}

export default AllTheBooks
