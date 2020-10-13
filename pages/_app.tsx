import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql.contentful.com/content/v1/spaces/kk2bw5ojx476?access_token=7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c',
    cache: new InMemoryCache(),
});


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: 'black',
    },
}

export default function App({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </>
    )
}
