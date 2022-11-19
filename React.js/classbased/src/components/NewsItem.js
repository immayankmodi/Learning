import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL, imgALT } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "100%" }}>
          <img src={imgURL} className="card-img-top" alt={imgALT} />
          <div className="card-body">
            <h5 className="card-title">{title.length < 50 ? title.trim() : title.trim() + "..." }</h5>
            <p className="card-text">{description.length < 100 ? description.trim() : description.trim() + "..." }</p>
            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
