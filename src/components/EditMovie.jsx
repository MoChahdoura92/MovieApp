import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default class EditMovie extends Component {
  el = this.props.el;

  state = {
    show: false,
    editName: this.el.name,
    editImage: this.el.image,
    editRate: this.el.rating,
    editDate: this.el.date,
    editCategory: this.el.category,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const editedMovie = {
      id: this.el.id,
      name: this.state.editName,
      image: this.state.editImage,
      rating: this.state.editRate,
      date: this.state.editDate,
      category: this.state.editCategory,
    };
    if (
      this.state.editName &&
      this.state.editImage &&
      this.state.editRate > 0 &&
      this.state.editDate &&
      this.state.editCategory
    ) {
      this.props.edit(editedMovie);
      this.handleClose();
    } else alert("please fill the required informations");
  };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  render() {
    return (
      <div>
        <Button
          onClick={this.handleShow}
          style={{ width: "150px", margin: "3px" }}
          variant="outline-dark"
        >
          {" "}
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                value={this.state.editName}
                onChange={(e) => this.setState({ editName: e.target.value })}
                size="lg"
                type="text"
                placeholder="Name"
              />
              <Form.Control
                size="lg"
                type="url"
                placeholder="Image"
                value={this.state.editImage}
                onChange={(e) => this.setState({ editImage: e.target.value })}
              />
              <Form.Control
                size="lg"
                type="number"
                placeholder="Rating"
                value={this.state.editRate}
                onChange={(e) => this.setState({ editRate: e.target.value })}
              />
              <Form.Control
                size="lg"
                type="text"
                placeholder="Release date"
                value={this.state.editDate}
                onChange={(e) => this.setState({ editDate: e.target.value })}
              />
              <Form.Select
                style={{ margin: "15px 0px" }}
                aria-label="Default select example"
                value={this.state.editCategory}
                onChange={(e) =>
                  this.setState({ editCategory: e.target.value })
                }
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
