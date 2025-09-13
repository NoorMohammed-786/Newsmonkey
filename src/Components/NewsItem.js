import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, Description, Imageurl, newsUrl } = this.props;
    return (
      <div className="card my-2" style={{ width: "18rem" }}>
        <img
          className="img-fluid rounded"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          src={Imageurl}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {title}....</h5>
          <p className="card-text">{Description}...</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
            See More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
