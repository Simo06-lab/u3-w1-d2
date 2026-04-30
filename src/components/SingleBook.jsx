import { Card } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"
class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { book } = this.props
    const { selected } = this.state

    return (
      <>
        <Card
          onClick={this.toggleSelected}
          style={{
            minWidth: "140px",
            maxWidth: "140px",
            cursor: "pointer",
            flex: "0 0 auto",
            border: selected ? "3px solid red" : "1px solid transparent",
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

        {this.state.selected && (
          <div onClick={(e) => e.stopPropagation()}>
            <CommentArea asin={book.asin} />
          </div>
        )}
      </>
    )
  }
}

export default SingleBook
