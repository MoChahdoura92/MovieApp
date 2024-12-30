import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default class AddMovie extends Component {
  state = {
    show: false,
    newName: "",
    newImage: "",
    newDate: "",
    newRate: 1,
    newCategory: "",
  };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });

  handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name: this.state.newName,
      image: this.state.newImage,
      rating: this.state.newRate,
      category: this.state.newCategory,
      date: this.state.newDate,
    };
    if (
      this.state.newName &&
      this.state.newImage &&
      this.state.newRate > 0 &&
      this.state.newCategory &&
      this.state.newDate
    ) {
      this.props.handleAdd(newMovie);
      this.handleClose();
    } else {
      alert("please fill all the informations needed");
    }
  };

  render() {
    return (
      <div>
        <Button variant="outline-secondary" onClick={this.handleShow}>
          Add Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD MOVIE INFO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                value={this.state.newName}
                placeholder="Movie name"
                type="text"
                onChange={(e) => this.setState({ newName: e.target.value })}
              />
              <Form.Control
                value={this.state.newImage}
                placeholder="Movie cover"
                type="url"
                onChange={(e) => this.setState({ newImage: e.target.value })}
              />
              <Form.Control
                value={this.state.newRate}
                placeholder="Movie rating"
                type="number"
                onChange={(e) => this.setState({ newRate: e.target.value })}
              />
              <Form.Control
                value={this.state.newDate}
                placeholder="Movie release date"
                onChange={(e) => this.setState({ newDate: e.target.value })}
              />
              <Form.Select
                style={{ margin: "15px 0px" }}
                aria-label="Default select example"
                onChange={(e) => this.setState({ newCategory: e.target.value })}
              >
                <option>Select category</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="For kids">For kids</option>
                <option value="Comedy">Comedy</option>
              </Form.Select>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
