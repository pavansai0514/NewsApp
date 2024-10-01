import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, NewsUrl, author, date, source } =
      this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://s.hdnux.com/photos/01/35/34/64/24497466/5/rawImage.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span
                class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
                style={{ left: "90%", zIndex: "1" }}
              >
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on {date} 3 mins ago
              </small>
            </p>
            <a href={NewsUrl} target="_blank" className="btn btn-primary">
              Read me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
