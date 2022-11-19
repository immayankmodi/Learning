import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL, imgALT } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgURL} className="card-img-top" alt={imgALT} />
          <div className="card-body">
            <h5 className="card-title">{title.length < 45 ? title.trim() : title.trim() + "..." }</h5>
            <p className="card-text">{description.length < 88 ? description.trim() : description.trim() + "..." }</p>
            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
