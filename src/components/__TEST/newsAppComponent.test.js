import React from 'react';
import { getByText, findByText, render, fireEvent, cleanup, screen, waitFor, findByTestId, findByDisplayValue} from '@testing-library/react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/react-testing';

import NewsHeadlines from '../NewsHeadlinesComponents/NewsHeadlines';
import {getTopHeadlinesQuery} from '../../queries/queries';

//Setup Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
  });

const mockHeadlinesQuery = [
{
    request: {
        query: getTopHeadlinesQuery,
    },
    result: {
      "topHeadlines": [
        {
          "author": null,
          "title": "Les retards de Pfizer jugés “incompréhensibles et inacceptables”: “Nous avons été très surpris” - 7sur7",
          "description": null,
          "url": "https://myprivacy.dpgmedia.be/consent/?siteKey=atXMVFeyFP1Ki09i&callbackUrl=https:%2f%2fwww.7sur7.be%2fprivacy-gate%2faccept-tcf2%3fredirectUri%3d%252fsante%252fles-retards-de-pfizer-juges-incomprehensibles-et-inacceptables-nous-avons-ete-tres-surpris%257ea401d1af%252f",
          "urlToImage": null,
          "content": null
        },
        {
          "author": null,
          "title": "Cyril Hanouna accuse TF1 et son ancien chroniqueur Camille Combal de plagiat - 7sur7",
          "description": null,
          "url": "https://myprivacy.dpgmedia.be/consent/?siteKey=atXMVFeyFP1Ki09i&callbackUrl=https:%2f%2fwww.7sur7.be%2fprivacy-gate%2faccept-tcf2%3fredirectUri%3d%252ftele%252fcyril-hanouna-accuse-tf1-et-son-ancien-chroniqueur-camille-combal-de-plagiat%257ea3b2b1ac%252f",
          "urlToImage": null,
          "content": null
        }
      ]
    }
}
];

describe('Test News Headlines App', () => {

    afterEach(cleanup);

    it('Test whether the component loads correctly', () => {
        const { getByText, getByTestId } = render(<ApolloProvider client={client}><NewsHeadlines /></ApolloProvider>);

        /** Test whether the select element load with tthe proper label*/
        expect(getByText(/Today/i).textContent).toBe("Today Headlines:");
        expect(getByTestId('search')).toBeTruthy();
    });

    it('should render Headlines after graphql guery', async () => {
        const { container } = render(
        <MockedProvider mocks={mockHeadlinesQuery}>
            <NewsHeadlines  />
        </MockedProvider>
        )

        const headlinesTitleElement = await getByTestId(container, 'news-title')

        expect(headlinesTitleElement).toBeTruthy();
    });

});