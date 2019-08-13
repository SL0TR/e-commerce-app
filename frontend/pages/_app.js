import App, { Container } from 'next/app';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withData';
import Page from '../components/Page';
import { options } from '../config';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <AlertProvider template={AlertTemplate} {...options}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </AlertProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
