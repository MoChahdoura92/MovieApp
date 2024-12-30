import React, { Component } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import FilterStar from "./FilterStar";

export default class Entete extends Component {
  state = {
    show: false,
  };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  render() {
    return (
      <div>
        <Navbar data-bs-theme="dark" expand="lg" id="entete">
          <Container fluid style={{ width: "100%" }}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Navbar.Brand href="#">Netflexi</Navbar.Brand>
              <Button variant="dark" onClick={this.handleShow}>
                <GiHamburgerMenu />
              </Button>

              <Offcanvas
                placement="end"
                bg="dark"
                data-bs-theme="dark"
                show={this.state.show}
                onHide={this.handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Form className="d-flex">
                    <Form.Control
                      value={this.props.inputV}
                      onChange={(e) => this.props.handleSearch(e.target.value)}
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">
                      <FaSearch />
                    </Button>
                  </Form>
                  <Form.Select
                    style={{ margin: "15px 0px" }}
                    aria-label="Default select example"
                    value={this.props.categoryValue}
                    onChange={(e) => this.props.handleCategory(e.target.value)}
                  >
                    <option value={"All"}>Select category</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="For kids">For kids</option>
                    <option value="Comedy">Comedy</option>
                  </Form.Select>
                  <FilterStar
                    handleStars={this.props.handleStars}
                    filterStar={this.props.filterStar}
                  />
                  <h4>Liked Movies</h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {this.props.likedMovies.map((el) => (
                      <Card style={{ width: "8rem", margin: "3px" }}>
                        <Card.Img height="130px" variant="top" src={el.image} />
                        <Card.Body>
                          <Card.Title style={{ fontSize: "9px" }}>
                            {el.name}
                          </Card.Title>

                          <Button
                            style={{ fontSize: "9px", margin: "3px" }}
                            variant="primary"
                          >
                            Watch
                          </Button>
                          <Button
                            onClick={() => this.props.dislike(el.id)}
                            style={{ fontSize: "9px", margin: "3px" }}
                            variant="outline-danger"
                          >
                            <RxCross2 />
                          </Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
