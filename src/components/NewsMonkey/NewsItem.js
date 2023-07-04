import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgurl, newsurl, date, author, source } = this.props
        return (
            <>
                <div>
                    <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                        <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger z-index-1' style={{left:"90%" ,  zIndex: "1"}}>{source}
                        </span>
                        <img src={imgurl === null ? "https://img.etimg.com/thumb/msid-100953539,width-1070,height-580,imgsize-53880,overlay-etmarkets/photo.jpg" : imgurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}
                            </h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='class-muted'>By {!author ? "unkown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default NewsItem
