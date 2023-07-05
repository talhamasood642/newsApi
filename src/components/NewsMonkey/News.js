import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner/Spinner.js';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 6,
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,

    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: null,
            page: 1
        }

    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogery}&apiKey=7586410e61e547afa4b6279d00751c0a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
        this.setState({ loading: false })
    }

    async componentDidMount() {
        this.updateNews()
    }


    handlePreviousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogery}&apiKey=7586410e61e547afa4b6279d00751c0a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({ articles: parseData.articles })
        this.setState({ loading: false })
        this.setState({
            page: this.state.page - 1,
        })
    }

    handleNextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogery}&apiKey=7586410e61e547afa4b6279d00751c0a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parseData = await data.json()
            this.setState({ articles: parseData.articles })
            this.setState({ loading: false })
            this.setState({
                page: this.state.page + 1,
            })
        }
        
        
    }


    render() {
        console.log("render");
        return (
            <div className='container my-4'>
                <h2 className='d-flex justify-content-center'>Top NewsMonekey {this.props.heading}</h2>
                {this.state.loading && <Spinner />}
                <div className="row my-4">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} date={element.publishedAt} author={element.author} source={element.source.name}
                                newsurl={element.url} />
                        </div>
                    })}


                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousclick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextclick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
