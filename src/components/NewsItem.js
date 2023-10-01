import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date,source } = this.props;
    return (
      <div><div className="card my-2" >
        <span style={{zIndex:"1",left:"90%"}} className="position-absolute top-0d translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
        <img src={(imageUrl) ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2023/08/stocks5-5-770x433.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toUTCString()}</small></p>
          <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">read more</a>
        </div>
      </div></div>
    )
  }
}
