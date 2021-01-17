import React, {useEffect ,useState} from 'react';
import { useQuery } from '@apollo/client';

import SearchInput from "../SearchInputComponent/SearchInput";
import NewsList from "../NewsListComponent/NewsList";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {getTopHeadlinesQuery} from '../../queries/queries';

function NewsHeadlines(){

    const [topHeadlines, setTopHeadlines] = useState([]);
    const [keyword, setKeyword] = useState('');

    let contentComponent;

    const { data, loading, error } = useQuery(getTopHeadlinesQuery, {variables: {keyword:keyword}});

    useEffect(() => {
        if(data) setTopHeadlines(data.topHeadlines);
        return( ()=>setTopHeadlines([]));
    }, [data]);

    useEffect(() => {
        console.log(topHeadlines);
    }, [topHeadlines]);

    const onChangeHandler = (e)=>{
        setKeyword(e.target.value);
        console.log(e.target.value);
    }

    if(loading){
        contentComponent = <p>Loading...</p>;
    }
    else if(error){
        contentComponent = <p>Error! {error.message}</p>;
    }
    else{
        contentComponent = <NewsList topHeadlines={topHeadlines} />;
    }
    
    return(
        <div>
            <p><b>Today Headlines:</b></p>
            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
                    <section>
                        {contentComponent}
                    </section>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
                    <aside>
                        <SearchInput keyword={keyword} changeHandler={onChangeHandler}/>
                    </aside>
                </Col>
            </Row>
        </div>
    );
}

export default NewsHeadlines;