import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props)=> {
    const Capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const [articles, setArticles] = useState([]);
    const [loading,setLoading ] = useState(true);
    const [page,setPage ] = useState(1);
    const [totalResults,setTotalResults ] = useState(0);
    document.title="NewsMonkey - " + Capitalize(props.category);
    const updatenews = async()=>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pagesize=${props.pageSize}&category=${props.category}&page=${page}`;
        setLoading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let parseddata = await data.json();
        props.setProgress(70);
        setArticles(parseddata.articles);
        setTotalResults(parseddata.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    const fetchMoreData = async ()=>{
        console.log("fmd");
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pagesize=${props.pageSize}&category=${props.category}&page=${page+1}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseddata = await data.json();
        setArticles(articles.concat(parseddata.articles));
        setLoading(false);
    }
    useEffect(() => {
      updatenews();
      //eslint-disable-next-line
    },[])
    
    return (
      <>
      <h2 className='text-center' style={{margin:"27px" ,marginTop:"80px"}}>{`NewsMonkey -Top ${Capitalize(props.category)} Headlines`}</h2>
      {loading&&<Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
          endMessage=
            {articles.length&&<p style={{ textAlign: "center" }}>
              That's all for today!!!
            </p>
            }
        >
      <div className="container">
      <div className="row">
       {articles.map((element) => {
           return <div className="col-md-4"  key={element.url} >
           <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
           </div>;
       })
    }
      </div>  
      </div>
    </InfiniteScroll>
    </>
    )
  }

News.propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number
}
News.defaultProps={
    country : "in",
    pageSize:5
}

export default News;