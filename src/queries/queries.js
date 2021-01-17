import { gql } from '@apollo/client';

const getTopHeadlinesQuery = gql`
    query topHeadlines($keyword: String!){
        topHeadlines(keyword:$keyword){
            author
            title
            description
            url
            urlToImage
            content
        }
    }
`;

export { getTopHeadlinesQuery};