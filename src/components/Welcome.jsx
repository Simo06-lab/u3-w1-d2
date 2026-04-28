import { Alert, Container } from "react-bootstrap"

const Welcome = function () {
  return (
    <Container className="my-4">
      <Alert variant="danger">
        <Alert.Heading> Welcome to HorrorBooks!</Alert.Heading>
        <p className="mb-0">
          Dare to read? Browse our terrifying collection of horror books. Free
          shipping on orders over €30!
        </p>
      </Alert>
      <h4 className="text-center text-secondary">
        The darkest stories, delivered to your door.
      </h4>
    </Container>
  )
}

export default Welcome
