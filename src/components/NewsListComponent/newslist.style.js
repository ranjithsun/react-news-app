import styled from 'styled-components';

export const NewsListContainer = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid #92867D;
    @media (max-width: 768px){
        margin-top: 20px;
    }

    .news-title{
        font-size: 16px;
        font-weight: 500;
        a{
            text-decoration: none;
            color: #000;
        }
    }
    .description{
        margin-bottom: 20px;
        font-size: 14px;
    }
    img{
        width: 100%;
        margin-bottom: 10px;
    }
`;