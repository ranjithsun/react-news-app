import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {NewsListContainer} from './newslist.style';

function NewsList({topHeadlines}){
    if(topHeadlines.length===0){
        return <div><p>We found no results for your search.</p></div>
    }
    return(
        topHeadlines.length > 0 && topHeadlines.map(
            (topHeadline,index) => {
                return(
                    <NewsListContainer key={index}>
                        <div className="news-title" data-testid="news-title">
                            <a href={topHeadline.url} target="_blank">
                                <p>{topHeadline.title}</p>    
                            </a>
                        </div>
                        <Row data-testid="news-content">
                            <Col md={4}>
                                <div><img src={topHeadline.urlToImage || process.env.PUBLIC_URL + '/unnamed.gif'} /></div>
                            </Col>
                            <Col md={8}>
                                <div className="description">{topHeadline.description || 'No description found.'}</div>
                            </Col>
                        </Row>
                    </NewsListContainer>
                )
            }
        )
    )
}

export default NewsList;