import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
  static async getIntialProps({Component, ctx}) {
    let pageProps = {};
    if(Component.getIntialProps) {
      pageProps = await Component.getIntialProps(ctx);
    }

    //  this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };

  }
  render () {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps}/>
          </Page>
        </ApolloProvider>
      </Container>
    )

  }
}

export default withData(MyApp);