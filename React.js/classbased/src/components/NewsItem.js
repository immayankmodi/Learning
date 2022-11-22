import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsURL, imgALT, author, date, source } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "100%" }}>
          <img src={imgURL} className="card-img-top" alt={imgALT} />
          <div class="card-header">Source: by {source}</div>
          <div className="card-body">
            <h5 className="card-title">{title.length < 50 ? title.trim() : title.trim() + "..." }</h5>
            <p className="card-text">{description.length < 100 ? description.trim() : description.trim() + "..." }</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on { new Date(date).toLocaleString()}</small></p>
            <a href={newsURL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
