import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import type { AppProps } from 'next/app';

const client = new ApolloClient({
    ssrMode: true,
    uri:
        'https://graphql.contentful.com/content/v1/spaces/kk2bw5ojx476?access_token=7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c',
    cache: new InMemoryCache()
});

interface ITheme {
    color: string;
}

interface IThemeWrapper {
    theme: ITheme;
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
    html, body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
`;

const theme: ITheme = {
    color: 'black'
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </>
    );
}
