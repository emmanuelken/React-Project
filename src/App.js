import "./App.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductImage from "./components/image";
import Name from "./components/name";
import Price from "./components/price";
import Description from "./components/description";
import myImage from "./myimg.jpeg";

const firstName = "Kay";

function App() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <ProductImage />
              <Card.Body className="bg-warning">
                <Card.Title>
                  <Name />
                </Card.Title>
                <Card.Title>
                  <Price />
                </Card.Title>
                <Card.Text>
                  <Description />
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="mt-4">
              {firstName ? (
                <div>
                  <p className="fw-bold text-primary">Hello {firstName}</p>
                  <img src={myImage} alt="myself" />
                </div>
              ) : (
                <p className="fw-bold text-primary">Hello there!</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
