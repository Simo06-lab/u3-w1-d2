import { Component } from "react"
import { Spinner } from "react-bootstrap"
import CommentsList from "./CommensList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  }
  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNGIxY2YwNDIwZDAwMTUxNTVhN2YiLCJpYXQiOjE3Nzc1NTIxNTYsImV4cCI6MTc3ODc2MTc1Nn0.rOZ76PCN55Fnnnap2cKU7HFNBHwgAaNDZ9iR6QkPTF8",
        },
      },
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore del commento")
        }
      })
      .then((data) => {
        this.setState({ comments: data, isLoading: false })
      })
      .catch((err) => {
        console.log("errore", err)
        this.setState({ isLoading: false })
      })
  }
  componentDidMount() {
    this.fetchComments()
  }
  render() {
    return (
      <div className="mt-2 p-2 border rounded bg-dark text-light">
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        )}

        {!this.state.isLoading && (
          <>
            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
              <CommentsList comments={this.state.comments} />
            </div>

            <AddComment
              asin={this.props.asin}
              onNewComment={this.fetchComments}
            />
          </>
        )}
      </div>
    )
  }
}
export default CommentArea
