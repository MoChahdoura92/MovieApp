import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import StarRating from "./StarRating";
import EditMovie from "./EditMovie";

const MovieCard = ({ el, del, like, edit }) => {
  return (
    <div>
      <Card className="carte" style={{ width: "18rem", margin: "15px" }}>
        <Card.Img
          style={{ width: "18rem", height: "400px" }}
          variant="top"
          src={el.image}
        />
        <Card.Body style={{ height: "350px" }}>
          <Card.Title style={{ height: "60px" }}>{el.name}</Card.Title>
          <p style={{ height: "25px" }}>{el.date}</p>
          <StarRating rating={el.rating} />
          <p style={{ height: "25px" }}>{el.category}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => like(el)}
              style={{ width: "150px", margin: "3px" }}
              variant="dark"
            >
              {" "}
              <AiFillLike />
            </Button>
            <Button
              onClick={() => del(el.id)}
              style={{ width: "150px", margin: "3px" }}
              variant="danger"
            >
              {" "}
              Delete
            </Button>
            <EditMovie edit={edit} el={el} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
