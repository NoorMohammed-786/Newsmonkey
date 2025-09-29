import React  from "react";

export function NewsItem (props) {
  
    let { title, Description, Imageurl, newsUrl, date, source } = props;
    return (
      <div className="card my-2" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            left: "90%",
            zIndex: "1",
          }}
        >
          <span className=" badge rounded-pill bg-danger">
            <span className="visually">{source}</span>
          </span>
        </div>
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
          <p className="card-text">
            <small
              className="text-danger"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              On {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            See More
          </a>
        </div>
      </div>
    );
  
}

export default NewsItem;
