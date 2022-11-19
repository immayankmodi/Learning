//rce..
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      firstPage: true,
      lastPage: true
    };
  }

  async callNewsAPI() {        
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=30f568495f804cd19803bb1371e10451&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseJSON = await data.json();
    this.setState({ 
        articles: parseJSON.articles, 
        totalResults: parseJSON.totalResults,
        loading: false,
        firstPage: this.state.page === 1,
        lastPage: this.state.page >= (Math.ceil(this.state.totalResults / this.props.pageSize))
    });
    console.log(url);
    console.log(this.state.totalResults + " ::> " + this.state.page);
  }

  async componentDidMount() {
    this.callNewsAPI();
  }

   handlePrev = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.callNewsAPI();
  }

  handleNext = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.callNewsAPI();
}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Daily News - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                <NewsItem
                  title={e.title ? e.title.slice(0, 50) : ""}
                  description={e.description ? e.description.slice(0, 100) : ""}
                  imgURL={e.urlToImage}
                  newsURL={e.url}
                  imgALT="my alt for img cover"
                />
              </div>
            );
          })}
        </div>
        {!this.state.loading && <div className="container my-5 d-flex justify-content-between">
          <button type="button" className="btn btn-dark" disabled={this.state.firstPage} onClick={this.handlePrev}>
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" disabled={this.state.lastPage} onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>}
      </div>
    );
  }
}

export default News;
