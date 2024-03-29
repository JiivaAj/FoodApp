import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import Order from "./Order";
const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="me-2 position-relative"
      >
        <i class="bi bi-cart4"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3<span class="visually-hidden">Cart</span>
        </span>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order />
          <div className="text-end my-3">
            <Button variant="primary">Check out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
