import React from "react";
import { Container, FloatingLabel } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
const Comments = () => {
  return (
    <section id="contactus" className="bg-light py-3">
      <div className="text-center py-3 my-2">
        <h2 className=" text-primary">
          Comments <i class="bi bi-chat-left-heart"></i>
        </h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope-open"></i>
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Email address">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-fill"></i>
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Name">
                  <Form.Control type="text" placeholder="Name" />
                </FloatingLabel>
              </InputGroup>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
